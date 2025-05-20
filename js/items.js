let products = [
    // SMARTPHONES
    {
        badge: "Best Seller",
        description: "Experience flagship performance with the latest iPhone 15 Pro Max featuring A17 Pro chip, titanium design, and advanced camera system with 5x telephoto zoom.",
        feature: [
            "A17 Pro chip with 6-core GPU",
            "48MP Main camera with 5x Telephoto",
            "Titanium design with Action Button",
            "USB-C connectivity",
            "Up to 29 hours video playback"
        ],
        id: 1,
        imageUrl: "iphone-15.webp",
        originalPrice: "₱78,950",
        price: "₱73,450",
        rating: 4.8,
        ratingCount: "2,847",
        title: "iPhone 15 Pro Max 256GB",
        category: "smartphones"
    },
    {
        badge: "New",
        description: "Power through your day with the Samsung Galaxy S24 Ultra featuring the advanced S Pen, AI-enhanced camera, and ultra-bright display.",
        feature: [
            "Snapdragon 8 Gen 3 processor",
            "200MP quad camera system",
            "Built-in S Pen with AI features",
            "6.8-inch Dynamic AMOLED 2X",
            "5000mAh battery with 45W charging"
        ],
        id: 2,
        imageUrl: "samsung-s24.jpg",
        originalPrice: "₱73,450",
        price: "₱67,850",
        rating: 4.7,
        ratingCount: "1,923",
        title: "Samsung Galaxy S24 Ultra 512GB",
        category: "smartphones"
    },
    {
        badge: "Limited",
        description: "Flagship experience with Google Pixel 8 Pro featuring the latest AI camera technology, stunning display, and 7 years of OS updates.",
        feature: [
            "Infinif 50+ Pro",
            "50MP triple camera with AI",
            "7 years of OS updates",
            "6.7-inch LTPO OLED display",
            "Magic Eraser and Best Take"
        ],
        id: 3,
        imageUrl: "infinix.webp",
        originalPrice: "₱15,450",
        price: "₱13,850",
        rating: 4.6,
        ratingCount: "1,456",
        title: "Infinix 50+ Pro 512GB",
        category: "smartphones"
    },
    {
        badge: "Hot Deal",
        description: "Flagship killer with Snapdragon 8 Gen 2, ultra-fast charging, and premium design at an unbeatable price point.",
        feature: [
            "Snapdragon 8 Gen 2 processor",
            "50MP Hasselblad camera system",
            "100W SuperVOOC charging",
            "6.74-inch 120Hz AMOLED",
            "OxygenOS 14 based on Android 14"
        ],
        id: 4,
        imageUrl: "poco-x7.webp",
        originalPrice: "₱16,850",
        price: "₱15,850",
        rating: 4.5,
        ratingCount: "987",
        title: "POCO X7 Pro 5G 8+256GB",
        category: "smartphones"
    },

    // LAPTOPS
    {
        badge: "Premium",
        description: "Revolutionary performance with Apple M3 chip, stunning Liquid Retina XDR display, and all-day battery life for professional workflows.",
        feature: [
            "Apple M3 chip with 8-core CPU",
            "14.2-inch Liquid Retina XDR display",
            "Up to 22 hours battery life",
            "16GB unified memory",
            "Three Thunderbolt 4 ports"
        ],
        id: 5,
        imageUrl: "apple-m3.jpg",
        originalPrice: "₱124,450",
        price: "₱113,150",
        rating: 4.9,
        ratingCount: "756",
        title: "MacBook Pro 14-inch M3",
        category: "laptops"
    },
    {
        badge: "Gaming",
        description: "Ultimate gaming performance with RTX 4070, 13th Gen Intel processor, and advanced cooling for marathon gaming sessions.",
        feature: [
            "Intel Core i7-13700HX processor",
            "NVIDIA RTX 4070 8GB GDDR6",
            "16-inch 165Hz QHD display",
            "32GB DDR5 RAM",
            "Advanced thermal management"
        ],
        id: 6,
        imageUrl: "ASUS-ROG.webp",
        originalPrice: "₱130,050",
        price: "₱118,750",
        rating: 4.7,
        ratingCount: "543",
        title: "ASUS ROG Strix G16 Gaming Laptop",
        category: "laptops"
    },
    {
        badge: "Business",
        description: "Professional-grade laptop with enterprise security, exceptional keyboard, and legendary durability for business users.",
        feature: [
            "Intel Core i7-1365U processor",
            "14-inch WUXGA IPS display",
            "Fingerprint reader & IR camera",
            "Military-grade durability",
            "Up to 15 hours battery life"
        ],
        id: 7,
        imageUrl: "lenovo.webp",
        originalPrice: "₱90,450",
        price: "₱79,150",
        rating: 4.6,
        ratingCount: "892",
        title: "Lenovo ThinkPad X1 Carbon Gen 11",
        category: "laptops"
    },
    {
        badge: "Student",
        description: "Versatile 2-in-1 laptop perfect for students and creatives with touch display, Surface Pen support, and portable design.",
        feature: [
            "Intel Core i5-1235U processor",
            "13-inch PixelSense touchscreen",
            "Surface Pen compatible",
            "Up to 19 hours battery life",
            "Detachable keyboard included"
        ],
        id: 8,
        imageUrl: "zenbook.png",
        originalPrice: "₱73,450",
        price: "₱62,150",
        rating: 4.4,
        ratingCount: "654",
        title: "Zenbook Pro 14 OLED (UX6404)",
        category: "laptops"
    },

    // HEADPHONES
    {
        badge: "Premium",
        description: "Industry-leading noise cancellation meets premium sound quality with spatial audio and adaptive transparency for the ultimate listening experience.",
        feature: [
            "Active Noise Cancellation",
            "Spatial Audio with head tracking",
            "H2 chip for enhanced audio",
            "Up to 30 hours battery life",
            "Adaptive Transparency mode"
        ],
        id: 9,
        imageUrl: "airpods-max.webp",
        originalPrice: "₱32,750",
        price: "₱29,950",
        rating: 4.8,
        ratingCount: "3,245",
        title: "AirPods Max",
        category: "headphones"
    },
    {
        badge: "Best Seller",
        description: "World-class noise cancellation with exceptional comfort and premium materials for audiophiles and frequent travelers.",
        feature: [
            "11 levels of noise cancellation",
            "20-hour battery life",
            "Touch controls on ear cup",
            "Voice assistant access",
            "Premium acoustic design"
        ],
        id: 10,
        imageUrl: "bose.jpg",
        originalPrice: "₱22,550",
        price: "₱19,750",
        rating: 4.7,
        ratingCount: "2,876",
        title: "Bose QuietComfort 45",
        category: "headphones"
    },
    {
        badge: "Gaming",
        description: "Professional gaming headset with studio-grade audio, crystal-clear microphone, and comfortable design for extended gaming sessions.",
        feature: [
            "50mm neodymium drivers",
            "Detachable ClearCast microphone",
            "DTS Headphone:X 2.0 surround",
            "SteelSeries Engine software",
            "Lightweight aluminum construction"
        ],
        id: 11,
        imageUrl: "steel-series.webp",
        originalPrice: "₱18,650",
        price: "₱15,790",
        rating: 4.6,
        ratingCount: "1,567",
        title: "SteelSeries Arctis 7P Gaming Headset",
        category: "headphones"
    },
    {
        badge: "Wireless",
        description: "True wireless earbuds with adaptive noise cancellation, premium sound quality, and seamless device switching.",
        feature: [
            "Adaptive Active Noise Cancellation",
            "6mm dynamic drivers",
            "IPX4 water resistance",
            "Up to 24 hours with case",
            "Multipoint Bluetooth connection"
        ],
        id: 12,
        imageUrl: "sony-wf.jpg",
        originalPrice: "₱15,790",
        price: "₱12,950",
        rating: 4.5,
        ratingCount: "2,103",
        title: "Sony WF-1000XM4 Earbuds",
        category: "headphones"
    },

    // SMARTWATCH/APPLEWATCH
    {
        badge: "Latest",
        description: "Most advanced Apple Watch with larger display, S9 chip, and new health features including temperature sensing and ECG.",
        feature: [
            "S9 SiP with 64-bit dual-core processor",
            "Always-On Retina display",
            "Blood oxygen & ECG monitoring",
            "Temperature sensing",
            "Up to 18 hours battery life"
        ],
        id: 13,
        imageUrl: "apple-watch-s9.jpg",
        originalPrice: "₱24,290",
        price: "₱22,550",
        rating: 4.8,
        ratingCount: "1,876",
        title: "Apple Watch Series 9 45mm GPS",
        category: "smartwatch"
    },
    {
        badge: "Rugged",
        description: "Ultra-rugged smartwatch built for extreme adventures with military-grade durability and extended battery life.",
        feature: [
            "Military-grade durability (MIL-STD-810)",
            "Up to 14 days battery life",
            "Built-in GPS and GLONASS",
            "100+ workout modes",
            "5ATM water resistance"
        ],
        id: 14,
        imageUrl: "garmin-solar.webp",
        originalPrice: "₱22,550",
        price: "₱19,750",
        rating: 4.7,
        ratingCount: "1,234",
        title: "Garmin Instinct 2 Solar",
        category: "smartwatch"
    },
    {
        badge: "Fitness",
        description: "Comprehensive fitness tracking with built-in GPS, heart rate monitoring, and sleep analysis for health enthusiasts.",
        feature: [
            "Built-in GPS tracking",
            "24/7 heart rate monitoring",
            "Sleep score & stress tracking",
            "6+ day battery life",
            "Fitbit Premium included"
        ],
        id: 15,
        imageUrl: "fitbit-smartwatch.webp",
        originalPrice: "₱18,650",
        price: "₱15,790",
        rating: 4.5,
        ratingCount: "2,567",
        title: "Fitbit Sense 2 Health Smartwatch",
        category: "smartwatch"
    },
    {
        badge: "Android",
        description: "Premium Android smartwatch with Wear OS, comprehensive health tracking, and seamless Google integration.",
        feature: [
            "Wear OS by Google",
            "Snapdragon Wear 4100+ platform",
            "Heart rate & SpO2 monitoring",
            "GPS and NFC payments",
            "Up to 24 hours battery life"
        ],
        id: 16,
        imageUrl: "samsung-watch-6.webp",
        originalPrice: "₱21,450",
        price: "₱18,650",
        rating: 4.4,
        ratingCount: "987",
        title: "Samsung Galaxy Watch 6 Classic",
        category: "smartwatch"
    },

    // GAMING CONSOLES
    {
        badge: "Next-Gen",
        description: "Experience lightning-fast loading with custom SSD, ray tracing, and 4K gaming at up to 120fps on this next-generation console.",
        feature: [
            "Custom AMD Zen 2 8-core CPU",
            "Custom RDNA 2 GPU",
            "825GB ultra-high speed SSD",
            "Ray tracing support",
            "3D audio technology"
        ],
        id: 17,
        imageUrl: "ps5-console.webp",
        originalPrice: "₱28,250",
        price: "₱27,090",
        rating: 4.8,
        ratingCount: "4,567",
        title: "PlayStation 5 Console",
        category: "console"
    },
    {
        badge: "Premium",
        description: "Most powerful Xbox ever with 12 teraflops of processing power, Smart Delivery, and backward compatibility.",
        feature: [
            "Custom AMD Zen 2 8-core CPU",
            "12 teraflops GPU performance",
            "1TB custom NVMe SSD",
            "Smart Delivery technology",
            "Quick Resume feature"
        ],
        id: 18,
        imageUrl: "xbox-series-x-2.jpg",
        originalPrice: "₱28,250",
        price: "₱25,990",
        rating: 4.7,
        ratingCount: "3,421",
        title: "Xbox Series X Console",
        category: "console"
    },
    {
        badge: "Portable",
        description: "Revolutionary portable gaming with console-quality games on the go, featuring OLED screen and extensive game library.",
        feature: [
            "Custom NVIDIA Tegra processor",
            "7-inch OLED touchscreen",
            "Detachable Joy-Con controllers",
            "TV and handheld modes",
            "Up to 9 hours battery life"
        ],
        id: 19,
        imageUrl: "nintendo-oled.png",
        originalPrice: "₱19,750",
        price: "₱18,050",
        rating: 4.6,
        ratingCount: "5,678",
        title: "Nintendo Switch OLED Model",
        category: "console"
    },
    {
        badge: "Compact",
        description: "Digital-only next-gen gaming in a sleek, compact design with the same performance as Xbox Series X.",
        feature: [
            "Custom AMD Zen 2 8-core CPU",
            "4 teraflops GPU performance",
            "512GB custom NVMe SSD",
            "All-digital gaming",
            "60% smaller than Series X"
        ],
        id: 20,
        imageUrl: "xbox-s-series.png",
        originalPrice: "₱16,950",
        price: "₱15,790",
        rating: 4.5,
        ratingCount: "2,156",
        title: "Xbox Series S Console",
        category: "console"
    }
];