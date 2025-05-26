let products = [
    // SMARTPHONES
    {
        badge: "Best Seller",
        brand: "Apple",
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
        category: "smartphones",
        reviews: [
            {
                name: "Maria Santos",
                comment: "Absolutely love this phone! The camera quality is incredible, especially the 5x zoom. The titanium build feels premium and the battery lasts all day. Worth every peso!",
                date: "2024-12-15"
                , stars: 4

            },
            {
                name: "John Rodriguez",
                comment: "Upgraded from iPhone 13 Pro and the difference is night and day. The A17 Pro chip handles everything I throw at it. Gaming performance is exceptional.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "Sarah Chen",
                comment: "The Action Button is such a game changer! I use it for quick camera access. Build quality is top-notch, though it's quite expensive.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "Miguel Torres",
                comment: "Best iPhone I've owned. The USB-C finally makes sense, and the ProRAW photos are stunning. Battery life easily gets me through a full day of heavy use.",
                date: "2024-12-05"
                , stars: 4

            },
            {
                name: "Lisa Wang",
                comment: "Professional photographer here - this camera system is phenomenal. The computational photography and video recording capabilities are industry-leading.",
                date: "2024-12-01"
                , stars: 5
            }
        ]
    },
    {
        badge: "New",
        brand: "Samsung",
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
        category: "smartphones",
        reviews: [
            {
                name: "David Kim",
                comment: "The S Pen integration with AI features is revolutionary. Taking notes and editing photos has never been easier. Display is gorgeous even in bright sunlight.",
                date: "2024-12-18"
                , stars: 4

            },
            {
                name: "Jennifer Lopez",
                comment: "Coming from iPhone, I'm impressed with Samsung's ecosystem. The camera versatility is unmatched - 200MP main sensor captures incredible detail.",
                date: "2024-12-14"
                , stars: 4

            },
            {
                name: "Robert Tan",
                comment: "Productivity beast! The large screen and S Pen make mobile work actually enjoyable. Battery easily lasts 1.5 days with moderate usage.",
                date: "2024-12-12"
                , stars: 4

            },
            {
                name: "Amanda Cruz",
                comment: "AI features are genuinely useful, not gimmicky. Photo editing suggestions are spot-on, and the translation features work great for travel.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Carlos Rivera",
                comment: "Build quality is excellent, cameras are versatile, but OneUI can feel overwhelming at first. Once you customize it, it's fantastic.",
                date: "2024-12-06"
                , stars: 5
            }
        ]
    },
    {
        badge: "Limited",
        brand: "Infinix",
        description: "Flagship experience with Infinix 50+ Pro featuring the latest AI camera technology, stunning display, and excellent value for money.",
        feature: [
            "Infinix 50+ Pro",
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
        category: "smartphones",
        reviews: [
            {
                name: "Grace Morales",
                comment: "Incredible value for money! The camera AI features rival phones 3x the price. Magic Eraser works surprisingly well for removing unwanted objects.",
                date: "2024-12-16"
                , stars: 4

            },
            {
                name: "Kevin Martinez",
                comment: "Budget flagship done right. Performance is smooth, display is vibrant, and the promise of 7-year updates gives great peace of mind.",
                date: "2024-12-13"
                , stars: 4

            },
            {
                name: "Patricia Reyes",
                comment: "Best camera phone in this price range. Night mode is impressive, and the AI enhancements make every photo look professional.",
                date: "2024-12-11"
                , stars: 4

            },
            {
                name: "Thomas Lee",
                comment: "Great build quality and features for the price. Some minor software bugs, but regular updates are addressing them quickly.",
                date: "2024-12-07"
                , stars: 4

            },
            {
                name: "Isabella Garcia",
                comment: "Love the LTPO display - smooth scrolling and great battery efficiency. Camera software continues to improve with each update.",
                date: "2024-12-04"
                , stars: 5
            }
        ]
    },
    {
        badge: "Hot Deal",
        brand: "POCO",
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
        category: "smartphones",
        reviews: [
            {
                name: "Ryan Johnson",
                comment: "True flagship killer! Gaming performance is exceptional, and the 100W charging is incredibly fast. Charges from 0-100% in about 25 minutes.",
                date: "2024-12-17"
                , stars: 4

            },
            {
                name: "Monica Silva",
                comment: "Hasselblad partnership really shows in photo quality. Color accuracy is excellent, and portrait mode is very natural-looking.",
                date: "2024-12-14"
                , stars: 4

            },
            {
                name: "Antonio Valdez",
                comment: "Great performance for gaming and daily tasks. The 120Hz display is smooth, though battery life could be better with heavy usage.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "Carmen Flores",
                comment: "OxygenOS is clean and fast. Much better than MIUI in my opinion. Build quality feels premium despite the affordable price.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "Daniel Park",
                comment: "Excellent value proposition. Camera quality impresses for the price point, and performance handles everything smoothly.",
                date: "2024-12-03"
                , stars: 5
            }
        ]
    },

    // LAPTOPS
    {
        badge: "Premium",
        brand: "Apple",
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
        category: "laptops",
        reviews: [
            {
                name: "Alexandra Thompson",
                comment: "As a video editor, this M3 MacBook Pro is a beast! 4K editing is buttery smooth, and the battery life is phenomenal. Best laptop I've ever owned.",
                date: "2024-12-19"
                , stars: 4

            },
            {
                name: "Michael Chang",
                comment: "The display quality is absolutely stunning. HDR content looks incredible, and the 120Hz ProMotion makes everything feel responsive.",
                date: "2024-12-15"
                , stars: 4

            },
            {
                name: "Rachel Green",
                comment: "Development work is so much faster with the M3 chip. Compiling large projects that used to take 10 minutes now take 3. Worth every penny!",
                date: "2024-12-12"
                , stars: 4

            },
            {
                name: "James Wilson",
                comment: "Silent performance is amazing - no fan noise even under heavy workloads. Build quality is exceptional as always with Apple products.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Sophie Martin",
                comment: "Battery life easily gets me through a full workday and then some. The MagSafe charging is convenient, and the keyboard feels great to type on.",
                date: "2024-12-05"
                , stars: 5
            }
        ]
    },
    {
        badge: "Gaming",
        brand: "ASUS",
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
        category: "laptops",
        reviews: [
            {
                name: "Tyler Brooks",
                comment: "Gaming performance is incredible! RTX 4070 handles everything at high settings. The 165Hz display makes competitive gaming so smooth.",
                date: "2024-12-18"
                , stars: 4

            },
            {
                name: "Jessica Rodriguez",
                comment: "Thermal management is impressive - stays cool even during long gaming sessions. RGB lighting is customizable and looks fantastic.",
                date: "2024-12-14"
                , stars: 4

            },
            {
                name: "Brandon Lee",
                comment: "Great build quality and performance. The keyboard is perfect for gaming, and the audio system is surprisingly good for a laptop.",
                date: "2024-12-11"
                , stars: 4

            },
            {
                name: "Ashley Kim",
                comment: "Perfect for content creation too! Video rendering is fast, and the display is color-accurate. Heavy but worth it for the performance.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "Connor Davis",
                comment: "ROG software suite is feature-rich without being bloated. Performance modes work well, and the cooling system is very effective.",
                date: "2024-12-04"
                , stars: 5
            }
        ]
    },
    {
        badge: "Business",
        brand: "Lenovo",
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
        category: "laptops",
        reviews: [
            {
                name: "Catherine Moore",
                comment: "The keyboard is absolutely the best I've used on any laptop. Perfect for long typing sessions. Build quality feels like it could last decades.",
                date: "2024-12-17"
                , stars: 4

            },
            {
                name: "Steven Taylor",
                comment: "Business laptop perfection. Security features are comprehensive, and the durability gives me confidence for frequent travel.",
                date: "2024-12-13"
                , stars: 4

            },
            {
                name: "Linda Anderson",
                comment: "Lightweight yet sturdy. Battery life easily gets me through a full workday, and the display is crisp and easy on the eyes.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "Richard Brown",
                comment: "ThinkPad reliability at its finest. No issues after 8 months of heavy daily use. The trackpad and TrackPoint both work flawlessly.",
                date: "2024-12-07"
                , stars: 4

            },
            {
                name: "Helen Garcia",
                comment: "Professional design and performance. The IR camera for Windows Hello is fast and reliable. Perfect for corporate environments.",
                date: "2024-12-02"
                , stars: 5
            }
        ]
    },
    {
        badge: "Student",
        brand: "ASUS",
        description: "Versatile laptop perfect for students and creatives with OLED display, powerful performance, and portable design.",
        feature: [
            "Intel Core i5-1235U processor",
            "13-inch OLED touchscreen",
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
        category: "laptops",
        reviews: [
            {
                name: "Emma Watson",
                comment: "Perfect for my design studies! The OLED display colors are vibrant and accurate. Touch functionality works great with creative apps.",
                date: "2024-12-16"
                , stars: 4

            },
            {
                name: "Noah Johnson",
                comment: "Great student laptop. Lightweight, good performance for coding projects, and the battery lasts through full days of classes.",
                date: "2024-12-12"
                , stars: 4

            },
            {
                name: "Olivia Chen",
                comment: "The OLED screen is gorgeous for media consumption. Note-taking with the pen feels natural, and build quality is solid for the price.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Lucas Miller",
                comment: "Versatile 2-in-1 design is perfect for different study situations. Performance handles everything I need for computer science coursework.",
                date: "2024-12-06"
                , stars: 4

            },
            {
                name: "Sophia Martinez",
                comment: "Love the portable design. Easy to carry between classes, and the detachable keyboard makes tablet mode comfortable for reading.",
                date: "2024-12-03"
                , stars: 5
            }
        ]
    },

    // HEADPHONES
    {
        badge: "Premium",
        brand: "Apple",
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
        category: "headphones",
        reviews: [
            {
                name: "Marcus Johnson",
                comment: "Sound quality is exceptional! The spatial audio with head tracking is mind-blowing for movies. Noise cancellation rivals any competitor.",
                date: "2024-12-19"
                , stars: 4

            },
            {
                name: "Victoria Lee",
                comment: "Premium build quality and comfort for long listening sessions. The digital crown is intuitive, and call quality is crystal clear.",
                date: "2024-12-15"
                , stars: 4

            },
            {
                name: "Andrew Kim",
                comment: "Worth the premium price for audiophile-level sound. The computational audio features genuinely enhance the listening experience.",
                date: "2024-12-11"
                , stars: 4

            },
            {
                name: "Rachel Thompson",
                comment: "Perfect for frequent travelers. Noise cancellation makes flights peaceful, and the battery life easily lasts long-haul flights.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "Jonathan Davis",
                comment: "Seamless integration with Apple devices. Auto-switching between iPhone, iPad, and Mac works flawlessly. Expensive but worth it.",
                date: "2024-12-04"
                , stars: 5
            }
        ]
    },
    {
        badge: "Best Seller",
        brand: "Bose",
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
        category: "headphones",
        reviews: [
            {
                name: "Diana Rodriguez",
                comment: "Noise cancellation is phenomenal! Can't hear anything on flights or in busy cafes. Comfort is excellent for all-day wear.",
                date: "2024-12-18"
                , stars: 4

            },
            {
                name: "Peter Wilson",
                comment: "Best headphones I've owned. Sound quality is balanced and natural, not overly bass-heavy like some competitors.",
                date: "2024-12-14"
                , stars: 4

            },
            {
                name: "Jennifer Martinez",
                comment: "Touch controls are responsive and intuitive. Battery life easily lasts multiple long flights. Build quality feels premium.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "Christopher Lee",
                comment: "Perfect for work-from-home. Blocks out household noise completely, and the microphone quality is great for video calls.",
                date: "2024-12-07"
                , stars: 4

            },
            {
                name: "Samantha Brown",
                comment: "Comfortable enough to wear for hours. The adjustable noise cancellation levels are perfect for different environments.",
                date: "2024-12-05"
                , stars: 5
            }
        ]
    },
    {
        badge: "Gaming",
        brand: "SteelSeries",
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
        category: "headphones",
        reviews: [
            {
                name: "Kevin Turner",
                comment: "Perfect gaming headset! Audio positioning is incredibly accurate for competitive FPS games. Microphone quality is broadcast-level.",
                date: "2024-12-17"
                , stars: 4

            },
            {
                name: "Michelle Garcia",
                comment: "Comfortable for marathon gaming sessions. The ear cups don't get hot, and the headband doesn't create pressure points.",
                date: "2024-12-13"
                , stars: 4

            },
            {
                name: "Robert Chen",
                comment: "SteelSeries Engine software is feature-rich. EQ customization options are extensive, and the surround sound works great.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Ashley Rodriguez",
                comment: "Great build quality for the price. The retractable microphone is convenient, and audio quality rivals much more expensive headsets.",
                date: "2024-12-06"
                , stars: 4

            },
            {
                name: "Jason Park",
                comment: "Wireless connectivity is stable with no noticeable latency. Battery life lasts through long gaming sessions without issues.",
                date: "2024-12-02"
                , stars: 5
            }
        ]
    },
    {
        badge: "Wireless",
        brand: "Sony",
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
        category: "headphones",
        reviews: [
            {
                name: "Sarah Johnson",
                comment: "Sound quality rivals over-ear headphones! Noise cancellation is impressive for such small earbuds. Perfect for commuting.",
                date: "2024-12-16"
                , stars: 4

            },
            {
                name: "Matthew Davis",
                comment: "Comfortable fit that stays secure during workouts. The app has great customization options for EQ and noise cancellation levels.",
                date: "2024-12-12"
                , stars: 4

            },
            {
                name: "Lisa Wang",
                comment: "Battery life is excellent - rarely need to worry about charging. The case is compact and charges quickly via USB-C.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "David Martinez",
                comment: "Multipoint connection works seamlessly between phone and laptop. Call quality is clear, and people can hear me well.",
                date: "2024-12-05"
                , stars: 4

            },
            {
                name: "Amanda Thompson",
                comment: "Perfect for daily use. IPX4 rating gives confidence for workouts, and the adaptive sound control features are genuinely useful.",
                date: "2024-12-01"
                , stars: 5
            }
        ]
    },

    // SMARTWATCH/APPLEWATCH
    {
        badge: "Latest",
        brand: "Apple",
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
        category: "smartwatch",
        reviews: [
            {
                name: "Elizabeth Clark",
                comment: "Health tracking features are incredible! The ECG and blood oxygen monitoring give me peace of mind. Display brightness is perfect outdoors.",
                date: "2024-12-19"
                , stars: 4

            },
            {
                name: "William Rodriguez",
                comment: "Seamless integration with iPhone ecosystem. Siri works great, and the double-tap gesture is surprisingly useful once you get used to it.",
                date: "2024-12-15"
                , stars: 4

            },
            {
                name: "Maria Gonzalez",
                comment: "Perfect fitness companion. Workout tracking is accurate, and the coaching features keep me motivated. Battery easily lasts a full day.",
                date: "2024-12-11"
                , stars: 4

            },
            {
                name: "Thomas Anderson",
                comment: "Build quality is excellent as expected from Apple. The Always-On display is bright enough to read in any lighting condition.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "Jennifer Lee",
                comment: "Love the new watch faces and complications. App performance is smooth, and notifications management is perfect for staying focused.",
                date: "2024-12-04"
                , stars: 5
            }
        ]
    },
    {
        badge: "Rugged",
        brand: "Garmin",
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
        category: "smartwatch",
        reviews: [
            {
                name: "Jake Morrison",
                comment: "Indestructible watch for outdoor adventures! GPS accuracy is spot-on, and the battery life with solar charging is incredible. Perfect for hiking.",
                date: "2024-12-18"
                , stars: 4

            },
            {
                name: "Rebecca Torres",
                comment: "Military-grade durability is no joke. Survived multiple drops and impacts without a scratch. Battery lasts weeks with solar charging.",
                date: "2024-12-14"
                , stars: 4

            },
            {
                name: "Carlos Silva",
                comment: "Perfect for serious athletes. Workout tracking is comprehensive and accurate. The training insights help improve my performance.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "Nicole Brown",
                comment: "Love the rugged design and functionality. Interface is straightforward, and the watch handles extreme weather conditions flawlessly.",
                date: "2024-12-07"
                , stars: 4

            },
            {
                name: "Adrian Kim",
                comment: "Best outdoor watch I've owned. Navigation features are professional-grade, and the sunrise/sunset data is always accurate.",
                date: "2024-12-03"
                , stars: 5
            }
        ]
    },
    {
        badge: "Fitness",
        brand: "Fitbit",
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
        category: "smartwatch",
        reviews: [
            {
                name: "Patricia Wilson",
                comment: "Excellent health tracking capabilities! Sleep analysis is detailed and helpful. The stress management features genuinely help with daily wellness.",
                date: "2024-12-17"
                , stars: 4

            },
            {
                name: "Michael Torres",
                comment: "Great value with Fitbit Premium included. The guided workouts and mindfulness sessions are well-produced and effective.",
                date: "2024-12-13"
                , stars: 4

            },
            {
                name: "Lauren Davis",
                comment: "Heart rate monitoring is accurate and consistent. Love the menstrual health tracking features - very comprehensive and private.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Brian Martinez",
                comment: "Battery life is impressive - easily lasts a week with all features enabled. The app interface is intuitive and motivating.",
                date: "2024-12-06"
                , stars: 4

            },
            {
                name: "Kelly Johnson",
                comment: "Perfect for fitness enthusiasts. Activity tracking is accurate, and the community features help keep me motivated and accountable.",
                date: "2024-12-02"
                , stars: 5
            }
        ]
    },
    {
        badge: "Android",
        brand: "Samsung",
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
        category: "smartwatch",
        reviews: [
            {
                name: "Emily Nguyen",
                comment: "Best Android smartwatch I've used! Wear OS integration is smooth, and the health tracking features are comprehensive and accurate.",
                date: "2024-12-16"
                , stars: 4

            },
            {
                name: "Daniel Smith",
                comment: "Love the rotating bezel for navigation. Makes using apps and notifications so much easier. Battery life is decent for daily use.",
                date: "2024-12-12"
                , stars: 4

            },
            {
                name: "Sophia Brown",
                comment: "Great for fitness tracking. The heart rate monitor is reliable, and the SpO2 sensor is a nice addition for health monitoring.",
                date: "2024-12-08"
                , stars: 4

            },
            {
                name: "James Johnson",
                comment: "Perfect for Google ecosystem users. Google Assistant works flawlessly, and the app selection is extensive compared to other platforms.",
                date: "2024-12-05"
                , stars: 4

            },
            {
                name: "Olivia Garcia",
                comment: "Stylish design that fits any occasion. The AMOLED display is vibrant, and the watch feels premium on the wrist.",
                date: "2024-12-01"
                , stars: 5
            }
        ]
    },

    // GAMING CONSOLES
    {
        badge: "Next-Gen",
        brand: "Sony",
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
        category: "console",
        reviews: [
            {
                name: "John Doe",
                comment: "The PS5 is a game-changer! The graphics are stunning, and the load times are almost non-existent. Best console I've ever owned.",
                date: "2024-12-20"
                , stars: 4

            },
            {
                name: "Jane Smith",
                comment: "DualSense controller is amazing! Haptic feedback and adaptive triggers make every game feel immersive. Can't go back to old controllers now.",
                date: "2024-12-18"
                , stars: 4

            },
            {
                name: "Mike Johnson",
                comment: "Exclusive games like Demon's Souls and Ratchet & Clank look incredible in 4K. The console runs quietly even during intense gaming sessions.",
                date: "2024-12-15"
                , stars: 4

            },
            {
                name: "Emily Davis",
                comment: "Perfect for family gaming nights. The user interface is intuitive, and the PlayStation Plus collection offers great value with tons of games.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "Chris Lee",
                comment: "Backward compatibility is a huge plus. Playing PS4 games with enhanced performance is fantastic. Highly recommend for any gamer.",
                date: "2024-12-07"
                , stars: 5
            }
        ]
    },
    {
        badge: "Premium",
        brand: "Microsoft",
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
        category: "console",
        reviews: [
            {
                name: "David Brown",
                comment: "The Xbox Series X is a powerhouse! Games run at 4K 60fps with stunning graphics. Quick Resume feature is a game-changer for multitasking.",
                date: "2024-12-19"
                , stars: 4

            },
            {
                name: "Sarah Wilson",
                comment: "Smart Delivery makes upgrading games seamless. Love that I can play Xbox One games with enhanced performance on this console.",
                date: "2024-12-16"
                , stars: 4

            },
            {
                name: "James Garcia",
                comment: "The controller feels great in hand, and the new D-pad is perfect for fighting games. Backward compatibility is fantastic for older titles.",
                date: "2024-12-13"
                , stars: 4

            },
            {
                name: "Laura Martinez",
                comment: "Perfect for family gaming. The Game Pass subscription offers incredible value with hundreds of games available to play instantly.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Michael Lee",
                comment: "Design is sleek and modern. Runs quietly even during long gaming sessions, and the build quality feels premium.",
                date: "2024-12-05"
                , stars: 5
            }
        ]
    },
    {
        badge: "Portable",
        brand: "Nintendo",
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
        category: "console",
        reviews: [
            {
                name: "Emily Johnson",
                comment: "The OLED screen is a game-changer! Colors are vibrant, and the handheld mode is perfect for gaming on the go. Love the versatility of this console.",
                date: "2024-12-18"
                , stars: 4

            },
            {
                name: "Michael Smith",
                comment: "Perfect for family gaming nights. The Joy-Con controllers are fun to use, and the game library is extensive with something for everyone.",
                date: "2024-12-14"
                , stars: 4

            },
            {
                name: "Sarah Lee",
                comment: "Great for both casual and hardcore gamers. The ability to switch between handheld and TV mode is seamless, and performance is solid.",
                date: "2024-12-10"
                , stars: 4

            },
            {
                name: "David Brown",
                comment: "Battery life is impressive for a portable console. Easily lasts through long commutes or travel days without needing a charge.",
                date: "2024-12-07"
                , stars: 4

            },
            {
                name: "Jessica Garcia",
                comment: "Nintendo's exclusive games like Zelda and Mario look amazing on this screen. Highly recommend for any gamer looking for portability.",
                date: "2024-12-03"
                , stars: 5
            }
        ]
    },
    {
        badge: "Compact",
        brand: "Microsoft",
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
        category: "console",
        reviews: [
            {
                name: "Kevin Johnson",
                comment: "Perfect for digital gamers! Compact design fits anywhere, and performance is solid for the price. Great entry point for next-gen gaming.",
                date: "2024-12-17"
                , stars: 4

            },
            {
                name: "Laura Smith",
                comment: "Game Pass subscription makes this console a steal. Tons of games available digitally, and the performance is impressive for a small form factor.",
                date: "2024-12-13"
                , stars: 4

            },
            {
                name: "Brian Lee",
                comment: "Great for casual gaming. The 1440p resolution looks good on my monitor, and the load times are fast thanks to the SSD.",
                date: "2024-12-09"
                , stars: 4

            },
            {
                name: "Jessica Brown",
                comment: "Perfect for kids or family gaming. The digital-only format is convenient, and the console runs quietly without overheating.",
                date: "2024-12-06"
                , stars: 4

            },
            {
                name: "Michael Garcia",
                comment: "Love the sleek design. Fits perfectly in my entertainment center, and the performance is comparable to larger consoles at a lower price.",
                date: "2024-12-02"
                , stars: 5
            }
        ]
    }
];