<?php
declare(strict_types=1);

use Dotenv\Dotenv;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/../vendor/autoload.php';

// Cargar variables de entorno desde la raíz del proyecto
$rootPath = dirname(__DIR__);

if (!file_exists($rootPath . '/.env')) {
    http_response_code(500);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode([
        'success' => false,
        'message' => 'Falta el archivo .env del servidor.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$dotenv = Dotenv::createImmutable($rootPath);
$dotenv->load();

mb_internal_encoding('UTF-8');
header('Content-Type: application/json; charset=UTF-8');

function json_response(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);

    echo json_encode([
        'success' => $success,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

function post_string(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

function env_string(string $key, string $default = ''): string
{
    $value = $_ENV[$key] ?? $_SERVER[$key] ?? $default;
    return trim((string)$value);
}

function env_int(string $key, int $default = 0): int
{
    $value = $_ENV[$key] ?? $_SERVER[$key] ?? $default;
    return (int)$value;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Método no permitido.', 405);
}

$requiredEnvKeys = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USERNAME',
    'SMTP_PASSWORD',
    'SMTP_ENCRYPTION',
    'SMTP_FROM_EMAIL',
    'SMTP_FROM_NAME',
    'SMTP_TO_EMAIL',
    'SMTP_TO_NAME',
];

foreach ($requiredEnvKeys as $key) {
    if (!isset($_ENV[$key]) || trim((string)$_ENV[$key]) === '') {
        json_response(false, 'La configuración SMTP está incompleta en el archivo .env.', 500);
    }
}

$nombre  = post_string('nombre');
$email   = post_string('email');
$asunto  = post_string('asunto');
$mensaje = post_string('mensaje');
$website = post_string('website'); // honeypot anti-spam

if ($website !== '') {
    json_response(false, 'No se pudo procesar el envío.', 400);
}

if ($nombre === '' || $email === '' || $asunto === '' || $mensaje === '') {
    json_response(false, 'Todos los campos son obligatorios.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Ingresa un correo electrónico válido.', 422);
}

if (mb_strlen($nombre) > 120) {
    json_response(false, 'El nombre es demasiado largo.', 422);
}

if (mb_strlen($email) > 150) {
    json_response(false, 'El correo es demasiado largo.', 422);
}

if (mb_strlen($asunto) > 180) {
    json_response(false, 'El asunto es demasiado largo.', 422);
}

if (mb_strlen($mensaje) > 3000) {
    json_response(false, 'El mensaje es demasiado largo.', 422);
}

$invalidHeaderPattern = "/[\r\n]/";

if (
    preg_match($invalidHeaderPattern, $nombre) ||
    preg_match($invalidHeaderPattern, $email) ||
    preg_match($invalidHeaderPattern, $asunto)
) {
    json_response(false, 'Se detectó contenido no válido.', 422);
}

$toEmail        = env_string('SMTP_TO_EMAIL');
$toName         = env_string('SMTP_TO_NAME');
$fromEmail      = env_string('SMTP_FROM_EMAIL');
$fromName       = env_string('SMTP_FROM_NAME');
$smtpHost       = env_string('SMTP_HOST');
$smtpUsername   = env_string('SMTP_USERNAME');
$smtpPassword   = env_string('SMTP_PASSWORD');
$smtpEncryption = strtolower(env_string('SMTP_ENCRYPTION'));
$smtpPort       = env_int('SMTP_PORT');
$smtpDebug      = env_int('SMTP_DEBUG', 0);

if (
    $smtpHost === '' ||
    $smtpUsername === '' ||
    $smtpPassword === '' ||
    $fromEmail === '' ||
    $toEmail === '' ||
    $smtpPort <= 0
) {
    json_response(false, 'La configuración SMTP no es válida.', 500);
}

$ip        = $_SERVER['REMOTE_ADDR'] ?? 'No disponible';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'No disponible';
$fecha     = date('Y-m-d H:i:s');

$emailSubject = $asunto;

$emailBody = <<<TEXT
Form. Web - CHOLO STUDIO

Nombre: {$nombre}
Email: {$email}
Asunto: {$asunto}

Mensaje:
{$mensaje}

IP: {$ip}
Fecha: {$fecha}
User-Agent: {$userAgent}
TEXT;

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host        = $smtpHost;
    $mail->SMTPAuth    = true;
    $mail->Username    = $smtpUsername;
    $mail->Password    = $smtpPassword;
    $mail->Port        = $smtpPort;
    $mail->CharSet     = 'UTF-8';
    $mail->Timeout     = 20;
    $mail->SMTPAutoTLS = true;

    if ($smtpDebug > 0) {
        $mail->SMTPDebug = $smtpDebug;
        $mail->Debugoutput = static function (string $str, int $level): void {
            error_log("SMTP DEBUG [{$level}]: {$str}");
        };
    }

    if ($smtpEncryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($smtpEncryption === 'tls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPSecure = false;
    }

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail, $toName);
    $mail->addReplyTo($email, $nombre);

    $mail->isHTML(false);
    $mail->Subject = $emailSubject;
    $mail->Body    = $emailBody;

    $mail->send();

    json_response(true, 'Mensaje enviado correctamente. Te responderemos pronto.');
} catch (Exception $e) {
    error_log('Error enviando formulario de contacto: ' . $e->getMessage());
    json_response(false, 'No se pudo enviar el mensaje. Verifica la configuración SMTP.', 500);
}