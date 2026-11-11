<?php
// Permitir peticiones desde tu mismo dominio
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Recibir datos JSON del fetch de Vue
$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($data)) {
    
    // Sanitizar datos
    $name = strip_tags(trim($data->name));
    $email = filter_var(trim($data->email), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($data->subject));
    $message = strip_tags(trim($data->message));

    // Validación básica
    if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Por favor, completa todos los campos correctamente.']);
        exit;
    }

    /* =========================================
       OPCIÓN A: Usando la función mail() nativa (Básico)
       ========================================= */
    /*
    $to = "tu-correo@tudominio.com"; // Cambia esto
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $email_body = "Has recibido un mensaje de tu portafolio.\n\n".
                  "Nombre: $name\n".
                  "Email: $email\n".
                  "Asunto: $subject\n\n".
                  "Mensaje:\n$message\n";
                  
    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Correo enviado.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error al enviar el correo.']);
    }
    */

    /* =========================================
       OPCIÓN B: Usando PHPMailer (RECOMENDADO PARA PRODUCCIÓN)
       Evita que caiga en Spam y permite SMTP con Gmail/Zoho
       ========================================= */
    /*
    require 'vendor/autoload.php'; // Si usaste Composer
    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.tudominio.com'; // Ej: smtp.gmail.com
        $mail->SMTPAuth   = true;
        $mail->Username   = 'tu-correo@tudominio.com';
        $mail->Password   = 'tu-contraseña-o-app-password'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('tu-correo@tudominio.com', 'CHOLO STUDIO WEB');
        $mail->addAddress('tu-correo@tudominio.com', 'Cholo Studio');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "Nuevo contacto: $subject";
        $mail->Body    = "<h3>Nuevo mensaje desde la web</h3>
                          <p><strong>Nombre:</strong> $name</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Mensaje:</strong><br>$message</p>";

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Mensaje enviado correctamente.']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Error: {$mail->ErrorInfo}"]);
    }
    */
    
    // RESPUESTA SIMULADA PARA PRUEBAS (Borra esto cuando configures el mail real)
    echo json_encode(['status' => 'success', 'message' => '¡Simulación exitosa! Configura el PHP para envíos reales.']);

} else {
    echo json_encode(['status' => 'error', 'message' => 'Método no permitido.']);
}
?>