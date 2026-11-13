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
                { id: 1, title: '', category: 'fotografia', type: 'image', img: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/853912782_1416901477323271_7368083834929393956_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpn8788Qx57C5CRntNGr3eXXeR4sRPaMBdd5HixE9owCiiDINOuaAuFZkMZ7-BLD4&_nc_ohc=UJkm-3eXpnEQ7kNvwEgXyDX&_nc_oc=AdqMiSpZvXoE3Qv0MmahNOjdviLeD8-ryuOz_zLHJn_3Q_PRf5DhjYv9oQ9ZhbiAyPM&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=OSIQLZux5PPu7qdbbdpSqw&_nc_ss=7b2a8&oh=00_AQR5EXMKkrbg4qqOUKxDNQqK_XUCH5Nr-Kg-QDlWOWGTNg&oe=6AFA0AF0', fullImage: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/853912782_1416901477323271_7368083834929393956_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpn8788Qx57C5CRntNGr3eXXeR4sRPaMBdd5HixE9owCiiDINOuaAuFZkMZ7-BLD4&_nc_ohc=UJkm-3eXpnEQ7kNvwEgXyDX&_nc_oc=AdqMiSpZvXoE3Qv0MmahNOjdviLeD8-ryuOz_zLHJn_3Q_PRf5DhjYv9oQ9ZhbiAyPM&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=OSIQLZux5PPu7qdbbdpSqw&_nc_ss=7b2a8&oh=00_AQR5EXMKkrbg4qqOUKxDNQqK_XUCH5Nr-Kg-QDlWOWGTNg&oe=6AFA0AF0' },
                { id: 2, title: '', category: 'video', type: 'video', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop&fm=jpg', fullImage: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
                { id: 3, title: 'Vuelo Inmobiliario', category: 'dron', type: 'image', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600&auto=format&fit=crop&fm=jpg', fullImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop&fm=jpg' },
                { id: 4, title: '', category: 'fotogrametria', type: 'image', img: 'images/galeria/drone/1.webp', fullImage: 'images/galeria/drone/1.webp' },
                { id: 5, title: '', category: 'fotografia', type: 'image', img: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/854816829_1416900367323382_3459865561601966339_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEB3D6NP-l3UenrMx8MEEPDNuvfzLl8dAM269_MuXx0NlO8XHDyQ4OKdaQETUKZk4&_nc_ohc=NVosyox-IqoQ7kNvwEwlwHa&_nc_oc=Adq2pxuQoRua9ZwITW4MKoqhIN0-jOztZxPCvxdK6IcY1TnRryeWIeJXWyCPHzAN97E&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=DMF2oaey_dtiA0n4OVHg3w&_nc_ss=7b2a8&oh=00_AQTivMyqQeSadgQwcV0bGVVRq3TkDdvH4Jy04-MqO1QQAA&oe=6AF9E920', fullImage: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/854816829_1416900367323382_3459865561601966339_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEB3D6NP-l3UenrMx8MEEPDNuvfzLl8dAM269_MuXx0NlO8XHDyQ4OKdaQETUKZk4&_nc_ohc=NVosyox-IqoQ7kNvwEwlwHa&_nc_oc=Adq2pxuQoRua9ZwITW4MKoqhIN0-jOztZxPCvxdK6IcY1TnRryeWIeJXWyCPHzAN97E&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=DMF2oaey_dtiA0n4OVHg3w&_nc_ss=7b2a8&oh=00_AQTivMyqQeSadgQwcV0bGVVRq3TkDdvH4Jy04-MqO1QQAA&oe=6AF9E920' },
                { id: 6, title: '', category: 'dron', type: 'image', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop&fm=jpg', fullImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop&fm=jpg' },
                { id: 7, title: '', category: 'fotografia', type: 'image', img: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/770919139_1358174286529324_6840842941110329977_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGzqEGvdeGZIf53akXnNZ5GNKvakKJeWWo0q9qQol5ZalqQtghq53DsdaCAguclx_s&_nc_ohc=LuoptQY5ywoQ7kNvwEMHSOP&_nc_oc=AdqBjn-XcNbqMMVAmwLuoTmtVWZGCfL1pL-HRgqa-Lff2XCBI_xkAUdy8_0r39-TEGk&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=CKOpKUekO4BqrPrkUZSrQA&_nc_ss=7b2a8&oh=00_AQQcIR0CBxqpdbXHdXqKKNVQwLxoBG6_okSMgkczFvYM-g&oe=6AFA1C1A', fullImage: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/770919139_1358174286529324_6840842941110329977_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGzqEGvdeGZIf53akXnNZ5GNKvakKJeWWo0q9qQol5ZalqQtghq53DsdaCAguclx_s&_nc_ohc=LuoptQY5ywoQ7kNvwEMHSOP&_nc_oc=AdqBjn-XcNbqMMVAmwLuoTmtVWZGCfL1pL-HRgqa-Lff2XCBI_xkAUdy8_0r39-TEGk&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=CKOpKUekO4BqrPrkUZSrQA&_nc_ss=7b2a8&oh=00_AQQcIR0CBxqpdbXHdXqKKNVQwLxoBG6_okSMgkczFvYM-g&oe=6AFA1C1A' },
                { id: 8, title: '', category: 'fotografia', type: 'image', img: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/784919152_1369699078710178_5367818642205335098_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHIFAVfR6SvFet0rvCgwCEYXkz0eXewo5JeTPR5d7Cjkkr7nS4q4qGj1o0FpCsAHow&_nc_ohc=jXCmvT7QoToQ7kNvwEsiqHn&_nc_oc=AdrUpegcrdS17VxXG5MRHF16Ad5baiX1DNeudIA5uX-Gfi_VO8EuQ2mxADFNLT3OrNU&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=z3oo84-hcYFavWJRGRsw9A&_nc_ss=7b2a8&oh=00_AQTtKw-SwAwn6isXGHoaeTx_ii5qthdOjKrXQkUO5L-7Ig&oe=6AFA1E65', fullImage: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/784919152_1369699078710178_5367818642205335098_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHIFAVfR6SvFet0rvCgwCEYXkz0eXewo5JeTPR5d7Cjkkr7nS4q4qGj1o0FpCsAHow&_nc_ohc=jXCmvT7QoToQ7kNvwEsiqHn&_nc_oc=AdrUpegcrdS17VxXG5MRHF16Ad5baiX1DNeudIA5uX-Gfi_VO8EuQ2mxADFNLT3OrNU&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=z3oo84-hcYFavWJRGRsw9A&_nc_ss=7b2a8&oh=00_AQTtKw-SwAwn6isXGHoaeTx_ii5qthdOjKrXQkUO5L-7Ig&oe=6AFA1E65' },
                { id: 9, title: '', category: 'fotografia', type: 'image', img: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/857961851_1420559023624183_2923686187895204877_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHN8Vr-xLwFakOV-BXQTQOoTnx2vqTW7OxOfHa-pNbs7OHp-RWG_94bsMnYYOQ8YrQ&_nc_ohc=zEFxQGguCbEQ7kNvwE4It8X&_nc_oc=AdpULGjbvRWR7ix1-ZtIBwjKYynGqvAmjkliwZGGUW3lYtgQuoMjUoqKBzeBlLZTuYY&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=1U6Lv_gayzALYjX8MiNy4A&_nc_ss=7b2a8&oh=00_AQSnHXzB4U4nBtsrlPCy8IdVmvbgJC4h4kUob7xrHjrQpA&oe=6AF9F4C8', fullImage: 'https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/857961851_1420559023624183_2923686187895204877_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHN8Vr-xLwFakOV-BXQTQOoTnx2vqTW7OxOfHa-pNbs7OHp-RWG_94bsMnYYOQ8YrQ&_nc_ohc=zEFxQGguCbEQ7kNvwE4It8X&_nc_oc=AdpULGjbvRWR7ix1-ZtIBwjKYynGqvAmjkliwZGGUW3lYtgQuoMjUoqKBzeBlLZTuYY&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=1U6Lv_gayzALYjX8MiNy4A&_nc_ss=7b2a8&oh=00_AQSnHXzB4U4nBtsrlPCy8IdVmvbgJC4h4kUob7xrHjrQpA&oe=6AF9F4C8' },
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