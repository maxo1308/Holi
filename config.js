// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Sofi",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "¿Quieres pasar 14 de febrero conmigo? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💙', '💛', '💗'],  // Heart emojis
        bears: ['🫂', '💕']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Me quieres?",                                    // First interaction
            yesBtn: "Sí :D",                                             // Text for "Yes" button
            noBtn: "No.",                                               // Text for "No" button
            secretAnswer: "No te quiero, TE AMO!! ❤️"           // Secret hover message
        },
        second: {
            text: "¿Y cuanto me amas?",                          // For the love meter
            startText: "ASI DE MUCHO",                                   // Text before the percentage
            nextBtn: "Siguiente :)"                                         // Text for the next button
        },
        third: {
            text: "¿Quieres pasar 14 de febrero conmigo? 🌹", // The big question!
            yesBtn: "¡Siiiiii!",                                             // Text for "Yes" button
            noBtn: "No."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AAAAAA TE AMOOO 🥰💝",  // Shows when they go past 5000%
        high: "Así me gusta mucho :D",              // Shows when they go past 1000%
        normal: "¿Tan poquito? 😢"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "TE AMO UN MONTÓN!!!! Muchas gracias 🫂🎉🫂💖🫂💓",
        message: "Hagamos de nuestro 14 de febrero un día ¡HERMOSO!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#BDE8F5",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#4988C4",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#4988C4",     // Button color (should stand out against the background)
        buttonHover: "#1C4D8D",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#1C4D8D"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/drn2wzgsu/video/upload/v1770163113/012._Home_UNDERTALE_Soundtrack_-_Toby_Fox_r5aesf.mp3", // Music streaming URL
        startText: "🎵 Una canción que siempre me recuerda a ti...",        // Button text to start music
        stopText: "🔇 Parar música",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 