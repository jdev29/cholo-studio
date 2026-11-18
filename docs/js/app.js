const { createApp } = Vue;

createApp({
    data() {
        return {
            currentFilter: 'all',
            activeSection: 'hero',
            isMenuOpen: false,
            lightbox: null,

            heroVideos: [
                { 
                    video: 'https://cdn.create.vista.com/api/media/medium/138582354/stock-video-classic-retro-camera?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ', 
                    poster: 'https://cdn.create.vista.com/api/media/small/138582354/stock-video-classic-retro-camera?videoStaticPreview=true&token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ' 
                },
                { 
                    video: 'https://cdn.create.vista.com/api/media/medium/300304478/stock-video-close-up-of-vintage-film-camera?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ', 
                    poster: 'https://cdn.create.vista.com/api/media/medium/300304478/stock-video-close-up-of-vintage-film-camera?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ' 
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/23179518/stock-video-wedding-couple-laughing-dancing-on-the-beach?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/23179518/stock-video-wedding-couple-laughing-dancing-on-the-beach?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ"
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/456704168/stock-video-newlywed-wedding-couple-walking-in-the-park-two-young-people-in-love-meet-each-others?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/456704168/stock-video-newlywed-wedding-couple-walking-in-the-park-two-young-people-in-love-meet-each-others?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/440699000/stock-video-the-bride-with-a-wedding-bouquet-walks-along-the-pier-holding-her-skirt-with-her?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/440699000/stock-video-the-bride-with-a-wedding-bouquet-walks-along-the-pier-holding-her-skirt-with-her?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/336311848/stock-video-dance-of-brides-at-the-wedding-heavy-smoke-that-is-highlighted-with-white-light-the?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/336311848/stock-video-dance-of-brides-at-the-wedding-heavy-smoke-that-is-highlighted-with-white-light-the?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/172920448/stock-video-happy-friends-birthday-party-with-candle-celebration-cakes?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/172920448/stock-video-happy-friends-birthday-party-with-candle-celebration-cakes?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/256831028/stock-video-wedding-couple-lovely-groom-and-bride-happy-family-man-and-woman-in-love?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/256831028/stock-video-wedding-couple-lovely-groom-and-bride-happy-family-man-and-woman-in-love?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/809870468/stock-video-close-view-three-wedding-rings-surrounded-beautiful-rose-petals-creating?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/809870468/stock-video-close-view-three-wedding-rings-surrounded-beautiful-rose-petals-creating?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
                {
                    video: "https://cdn.create.vista.com/api/media/medium/324336348/stock-video-timelapse-of-a-part-of-a-glacier-and-mountain-valley-with-rocky-mountains-clouds-are?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                    poster: "https://cdn.create.vista.com/api/media/medium/324336348/stock-video-timelapse-of-a-part-of-a-glacier-and-mountain-valley-with-rocky-mountains-clouds-are?token=v1.nolwQLBKtrkIKbv1TL0Q5nKInqs3EzHBHQKcCf0NcCXXd9NPZaDdAj_n6yYlpwLty-c3VVe9oMjjMBdrnAeAN0KGtbmWnEUrzWKPhN27JHFwN3cHUiWBxx1JAVFRQliqPY50i-bpFQjzYU3puV_7hNvlcopN04iBYsNbVFXhlO6ipzDQflPvjBsUNYoDmeegFbf9EOH-J3JbFUn3yYO7tQ",
                },
            ],
            // Variable que guardará el video seleccionado al azar
            currentHeroVideo: { video: '', poster: '' },

            portfolioItems: [
                { id: 1, title: '', category: 'fotografia', type: 'image', img: '/images/galeria/fotos/858121184_1420558976957521_4783171058294308604_n.jpg', fullImage: '/images/galeria/fotos/858121184_1420558976957521_4783171058294308604_n.jpg' },
                { id: 2, title: '', category: 'video', type: 'video', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop&fm=jpg', fullImage: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
                { id: 3, title: 'Vuelo Inmobiliario', category: 'dron', type: 'image', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600&auto=format&fit=crop&fm=jpg', fullImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop&fm=jpg' },
                { id: 4, title: '', category: 'fotogrametria', type: 'image', img: 'images/galeria/drone/1.webp', fullImage: 'images/galeria/drone/1.webp' },
                { id: 5, title: '', category: 'fotografia', type: 'image', img: '/images/galeria/fotos/784919152_1369699078710178_5367818642205335098_n.jpg', fullImage: '/images/galeria/fotos/784919152_1369699078710178_5367818642205335098_n.jpg' },
                { id: 6, title: '', category: 'dron', type: 'image', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop&fm=jpg', fullImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop&fm=jpg' },
                { id: 7, title: '', category: 'fotografia', type: 'image', img: '/images/galeria/fotos/794394784_1381279984218754_1563245969981576941_n.jpg', fullImage: '/images/galeria/fotos/794394784_1381279984218754_1563245969981576941_n.jpg' },
                { id: 8, title: '', category: 'fotografia', type: 'image', img: '/images/galeria/fotos/854816829_1416900367323382_3459865561601966339_n.jpg', fullImage: '/images/galeria/fotos/854816829_1416900367323382_3459865561601966339_n.jpg' },
                { id: 9, title: '', category: 'fotografia', type: 'image', img: '/images/galeria/fotos/855986697_1416899330656819_4813666687834994994_n.jpg', fullImage: '/images/galeria/fotos/855986697_1416899330656819_4813666687834994994_n.jpg' },
            ],
            form: { nombre: '', email: '', asunto: '', mensaje: '', website: '' },
            loading: false,
            responseMessage: '',
            isSuccess: false
        }
    },
    computed: {
        filteredItems() {
            if (this.currentFilter === 'all') {
                return this.portfolioItems;
            }
            return this.portfolioItems.filter(item => item.category === this.currentFilter);
        }
    },
    watch: {
        currentFilter() {
            this.initLightbox();
        }
    },
    methods: {
        // --- NUEVO MÉTODO: SELECCIÓN ALEATORIA ---
        selectRandomHeroVideo() {
            if (this.heroVideos.length > 0) {
                // Generamos un índice aleatorio entre 0 y la cantidad de videos
                const randomIndex = Math.floor(Math.random() * this.heroVideos.length);
                this.currentHeroVideo = this.heroVideos[randomIndex];
            }
        },

        // --- MÉTODOS NUEVOS PARA EL MENÚ ---
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            // Bloquea o desbloquea el scroll del body
            if (this.isMenuOpen) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        },
        closeMenuAndScroll(sectionId) {
            this.isMenuOpen = false;
            document.body.classList.remove('menu-open'); // Quita el bloqueo del scroll
            this.activeSection = sectionId;
            // El navegador hará el scroll suave automáticamente gracias al href="#..."
        },
        initLightbox() {
            this.$nextTick(() => {
                if (this.lightbox) {
                    this.lightbox.destroy();
                }
                setTimeout(() => {
                    this.lightbox = GLightbox({
                        selector: '.glightbox',
                        touchNavigation: true,
                        loop: true,
                        autoplayVideos: true
                    });
                }, 100);
            });
        },
        async sendEmail() {
            this.loading = true;
            this.responseMessage = '';
            
            // Usamos FormData porque el PHP espera variables $_POST
            const formData = new FormData();
            formData.append('nombre', this.form.nombre);
            formData.append('email', this.form.email);
            formData.append('asunto', this.form.asunto);
            formData.append('mensaje', this.form.mensaje);
            formData.append('website', this.form.website); // Honeypot

            try {
                // Apuntamos al archivo contacto.php en la misma carpeta
                const response = await fetch('contacto.php', {
                    method: 'POST',
                    body: formData // Enviamos FormData, NO JSON
                });
                
                // Parseamos la respuesta del PHP
                const result = await response.json();
                
                // El PHP devuelve result.success (true o false)
                if (result.success) {
                    this.isSuccess = true;
                    this.responseMessage = result.message;
                    // Limpiamos el formulario
                    this.form = { nombre: '', email: '', asunto: '', mensaje: '', website: '' };
                } else {
                    this.isSuccess = false;
                    this.responseMessage = result.message || 'Hubo un error al enviar.';
                }
            } catch (error) {
                console.error("Error en fetch:", error);
                this.isSuccess = false;
                this.responseMessage = 'Error de conexión. Intenta de nuevo.';
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        this.selectRandomHeroVideo();

        // 1. Navbar scroll effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#mainNav').addClass('scrolled');
            } else {
                $('#mainNav').removeClass('scrolled');
            }
        });

        // 2. Inicializar Lightbox
        this.initLightbox();

        // 3. Animaciones Reveal (Scroll)
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.reveal').forEach(section => revealObserver.observe(section));

        // 4. SCROLL SPY (El menú se ilumina según la sección visible)
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si la sección está en pantalla (al menos un 50% visible)
                if (entry.isIntersecting) {
                    // entry.target.id nos da el id de la sección actual
                    this.activeSection = entry.target.id; 
                }
            });
        }, { 
            threshold: 0.5, // Se activa cuando el 50% de la sección es visible
            rootMargin: "-80px 0px 0px 0px" // Compensa la altura del navbar fijo
        });

        // Le decimos al observador que vigile todas las secciones
        document.querySelectorAll('section').forEach(section => {
            sectionObserver.observe(section);
        });
        
    }
}).mount('#app');