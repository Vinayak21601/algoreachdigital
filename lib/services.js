import { Megaphone, TrendingUp, Share2, Smartphone, Monitor, BarChart, Users, Target, Zap, Globe, Code, Layers, Search, PenTool, Layout, LineChart, Rocket, ShieldCheck, HeartHandshake, Award, Clock, Cog, Mail, MessageCircle, Lightbulb, Palette, Database, Settings } from "lucide-react";

export const servicesData = {
    "digital-marketing": {
        slug: "digital-marketing",
        title: "Digital Marketing",
        subtitle: "Connect. Engage. Convert.",
        description: "We craft comprehensive digital marketing ecosystems that amplify your brand's voice and drive meaningful connections. From SEO to content strategy, we ensure you dominate the digital landscape.",
        longDescription: "In today's hyper-connected world, a strong digital presence is non-negotiable. Our digital marketing services are designed to cut through the noise and place your brand directly in front of your ideal customers. We combine creativity with data science to build campaigns that not only capture attention but also drive tangible business results. Whether you're looking to increase brand awareness, generate qualified leads, or boost online sales, our team of strategists, content creators, and analysts work in unison to achieve your goals.",
        icon: Megaphone,
        gradient: "from-[var(--orange-500)] to-[var(--coral-500)]",
        stats: [
            { value: "250%", label: "Avg. Increase in Organic Traffic" },
            { value: "3.5x", label: "Avg. ROI on Campaigns" },
            { value: "40+", label: "Successful Brand Launches" },
        ],
        features: [
            { title: "SEO Optimization", description: "Rank higher on search engines with our advanced on-page and off-page optimization strategies.", icon: Search },
            { title: "Content Strategy", description: "Compelling, high-quality content that resonates with your audience and establishes thought leadership.", icon: PenTool },
            { title: "Email Marketing", description: "Automated email flows that nurture leads, re-engage customers, and drive conversions.", icon: Mail },
            { title: "Analytics & Reporting", description: "Transparent, data-driven insights with custom dashboards to track your ROI and performance.", icon: BarChart }
        ],
        benefits: [
            { title: "Increased Brand Visibility", description: "Get your brand seen by the right people at the right time across multiple channels.", icon: Globe },
            { title: "Higher Quality Leads", description: "Attract prospects who are genuinely interested in your products or services.", icon: Target },
            { title: "Data-Driven Decisions", description: "Make informed choices based on real-time performance data, not guesswork.", icon: LineChart },
            { title: "Sustainable Growth", description: "Build a long-term digital asset that continues to generate value over time.", icon: Rocket },
        ],
        process: [
            { step: "01", title: "Audit & Discovery", description: "We deep dive into your current digital presence, competitors, and market opportunities." },
            { step: "02", title: "Strategy Development", description: "Building a tailored, multi-channel roadmap aligned with your specific business goals." },
            { step: "03", title: "Campaign Execution", description: "Launching and managing campaigns with precision, creativity, and continuous optimization." },
            { step: "04", title: "Analysis & Scaling", description: "Continuous performance analysis to refine strategies and scale what works." }
        ],
        faqs: [
            { question: "How long does it take to see results from digital marketing?", answer: "It depends on the channel. PPC can show results within days, while SEO typically takes 3-6 months to show significant organic growth. We set clear expectations and provide regular progress reports." },
            { question: "What platforms do you specialize in?", answer: "We are experts across Google Ads, Meta (Facebook & Instagram), LinkedIn, TikTok, and programmatic advertising networks. We'll recommend the best mix for your target audience." },
            { question: "Do you offer content creation services?", answer: "Absolutely. Our in-house team of writers, designers, and videographers create all the content needed for your campaigns, from blog posts to video ads." },
        ]
    },
    "performance-marketing": {
        slug: "performance-marketing",
        title: "Performance Marketing",
        subtitle: "ROI-Driven Campaigns",
        description: "Stop guessing and start growing. Our performance marketing strategies are built on data, rigorously tested, and optimized for maximum return on ad spend (ROAS).",
        longDescription: "Performance marketing is about accountability. Every rupee you spend should be tracked, measured, and optimized for results. We specialize in building high-converting ad campaigns across paid search, social media, and display networks. Our approach is scientific: we form hypotheses, test rigorously, analyze outcomes, and double down on winners. The result is a lean, mean marketing machine that delivers predictable, scalable growth for your business.",
        icon: TrendingUp,
        gradient: "from-[var(--coral-500)] to-[var(--magenta-500)]",
        stats: [
            { value: "4.2x", label: "Avg. ROAS Achieved" },
            { value: "-35%", label: "Avg. Reduction in CPA" },
            { value: "₹50Cr+", label: "Ad Spend Managed Annually" },
        ],
        features: [
            { title: "PPC Advertising", description: "Precision-targeted campaigns on Google, Bing, and YouTube to capture high-intent searchers.", icon: Target },
            { title: "Social Ads (Meta, LinkedIn, TikTok)", description: "Scroll-stopping creatives and audience targeting to drive engagement and conversions.", icon: Share2 },
            { title: "Conversion Rate Optimization (CRO)", description: "A/B testing and funnel optimization to maximize conversions from your existing traffic.", icon: Zap },
            { title: "Retargeting & Remarketing", description: "Stay top-of-mind and bring back visitors who didn't convert the first time.", icon: Users }
        ],
        benefits: [
            { title: "Pay for Performance", description: "Your budget goes towards measurable actions—clicks, leads, and sales—not just impressions.", icon: Award },
            { title: "Rapid Scaling", description: "Quickly increase spend on campaigns that work, and cut those that don't.", icon: Rocket },
            { title: "Full Funnel Visibility", description: "Track the customer journey from the first click to the final purchase.", icon: Search },
            { title: "Continuous Optimization", description: "Our team is constantly testing and tweaking to improve performance.", icon: Cog },
        ],
        process: [
            { step: "01", title: "Targeting & Research", description: "Defining your ideal customer profile (ICP) and identifying the best channels to reach them." },
            { step: "02", title: "Creative & Copy Testing", description: "Developing multiple ad variations and A/B testing to find the highest performers." },
            { step: "03", title: "Launch & Optimize", description: "Deploying campaigns and using real-time data to adjust bids, audiences, and creatives." },
            { step: "04", title: "Reporting & Analysis", description: "Providing clear, actionable reports on CPA, ROAS, LTV, and other key metrics." }
        ],
        faqs: [
            { question: "What's a good ROAS to aim for?", answer: "A 'good' ROAS varies by industry and margin. For e-commerce, 3x-5x is often a target. We'll work with you to define a profitable ROAS based on your business economics." },
            { question: "How much should I budget for paid ads?", answer: "We recommend starting with a budget that allows for meaningful testing—usually ₹50,000-₹1,00,000/month to start. We can scale from there based on results." },
            { question: "Do you manage the entire funnel?", answer: "Yes. We look at the full picture, from the ad to the landing page to the checkout process, and optimize each step for conversions." },
        ]
    },
    "social-media-management": {
        slug: "social-media-management",
        title: "Social Media Management",
        subtitle: "Building Communities, Not Just Followers",
        description: "We turn your social media channels into vibrant communities. Through consistent, high-quality content and active engagement, we build brand loyalty that lasts.",
        longDescription: "Social media is more than just posting pretty pictures. It's about building a community, a tribe of loyal fans who advocate for your brand. Our social media management services encompass everything from strategy and content creation to daily community management and influencer partnerships. We help you find your unique voice, tell your brand story, and foster genuine relationships with your audience that translate into long-term customer loyalty.",
        icon: Share2,
        gradient: "from-[var(--magenta-500)] to-[var(--orange-500)]",
        stats: [
            { value: "5M+", label: "Social Impressions Generated Monthly" },
            { value: "12%", label: "Avg. Engagement Rate Achieved" },
            { value: "100+", label: "Brands Managed Across Platforms" },
        ],
        features: [
            { title: "Platform Strategy", description: "Choosing the right mix of platforms (Instagram, LinkedIn, X, Facebook, YouTube) for your brand's objectives.", icon: Layers },
            { title: "Content Creation", description: "Stunning visuals, engaging reels, carousels, and copy that stops the scroll and sparks conversation.", icon: Palette },
            { title: "Community Management", description: "Responding to comments, DMs, and mentions to foster dialogue and build relationships.", icon: MessageCircle },
            { title: "Trend & Competitor Analysis", description: "Keeping a pulse on viral trends and competitor activity to keep your brand relevant.", icon: TrendingUp }
        ],
        benefits: [
            { title: "Authentic Brand Voice", description: "We help you develop and maintain a consistent, relatable tone that resonates with your audience.", icon: HeartHandshake },
            { title: "Increased Engagement", description: "Move beyond vanity metrics to build real connections with followers who care.", icon: Users },
            { title: "Content Consistency", description: "Never miss a beat with a planned content calendar and dedicated team.", icon: Clock },
            { title: "Influencer Partnerships", description: "Connect with the right influencers to amplify your message authentically.", icon: Award },
        ],
        process: [
            { step: "01", title: "Brand Voice & Audit", description: "Understanding your brand personality and auditing your current social presence." },
            { step: "02", title: "Content Calendar", description: "Planning impactful, strategic content weeks in advance with your approval." },
            { step: "03", title: "Daily Engagement", description: "Active community management and real-time responses to grow your tribe." },
            { step: "04", title: "Monthly Review", description: "Comprehensive reports on reach, engagement, growth, and sentiment analysis." }
        ],
        faqs: [
            { question: "How often will you post on my accounts?", answer: "This depends on the platform and your goals. Typically, we recommend 3-5 posts per week on Instagram, daily on X/Twitter, and 2-3 times per week on LinkedIn." },
            { question: "Will I have approval over the content?", answer: "Absolutely. We provide you with a content calendar for approval before anything goes live. We also offer revision rounds." },
            { question: "Do you handle negative comments or crises?", answer: "Yes. We have a protocol for handling negative feedback and can help manage communications during a PR situation." },
        ]
    },
    "app-development": {
        slug: "app-development",
        title: "App Development",
        subtitle: "Innovation in Your Pocket",
        description: "We build intuitive, high-performance mobile applications for iOS and Android. Whether it's React Native or Flutter, we deliver seamless experiences that users love.",
        longDescription: "A great mobile app can be a game-changer for your business. It puts your brand in the pocket of your customers, offering a direct, personal channel for engagement. Our app development team specializes in building cross-platform applications using React Native and Flutter, which means you get native-like performance for both iOS and Android without double the development cost. From concept to launch to ongoing maintenance, we are your end-to-end mobile partner.",
        icon: Smartphone,
        gradient: "from-[var(--orange-500)] to-[var(--magenta-500)]",
        stats: [
            { value: "50+", label: "Apps Launched on App Stores" },
            { value: "4.8★", label: "Avg. App Store Rating for Our Apps" },
            { value: "1M+", label: "Total App Downloads Achieved" },
        ],
        features: [
            { title: "Cross-Platform Development", description: "One codebase for both iOS and Android, ensuring faster delivery and cost efficiency.", icon: Layers },
            { title: "UI/UX Design", description: "User-centric, visually stunning interfaces designed for intuitive navigation and delight.", icon: Layout },
            { title: "Backend & API Integration", description: "Robust, scalable backends and seamless third-party API integrations.", icon: Database },
            { title: "App Store Optimization & Launch", description: "Handling the entire submission process and optimizing for discoverability.", icon: Rocket }
        ],
        benefits: [
            { title: "Direct Customer Channel", description: "Engage users directly on their most personal device with push notifications and personalized content.", icon: Smartphone },
            { title: "Enhanced Brand Loyalty", description: "A dedicated app experience strengthens your relationship with customers.", icon: HeartHandshake },
            { title: "Offline Capabilities", description: "Offer core functionality even without an internet connection.", icon: ShieldCheck },
            { title: "Data & Analytics", description: "Gain deep insights into user behavior within your app.", icon: BarChart },
        ],
        process: [
            { step: "01", title: "Discovery & Planning", description: "Defining core features, user flows, and technical requirements." },
            { step: "02", title: "Design & Prototyping", description: "Creating high-fidelity mockups and interactive prototypes for stakeholder validation." },
            { step: "03", title: "Agile Development", description: "Iterative sprints to build, test, and refine the application functionality." },
            { step: "04", title: "Launch & Support", description: "Deployment to app stores and ongoing maintenance and feature updates." }
        ],
        faqs: [
            { question: "Should I build a native or cross-platform app?", answer: "For most businesses, cross-platform (React Native or Flutter) offers the best value, delivering near-native performance at a lower cost and faster timeline. We'll advise if native is truly necessary." },
            { question: "How long does it take to build an app?", answer: "A typical MVP can take 3-4 months, while a more feature-rich app might take 5-8 months. We'll provide a detailed timeline after the discovery phase." },
            { question: "What about post-launch maintenance?", answer: "We offer ongoing maintenance and support packages to keep your app updated, secure, and running smoothly." },
        ]
    },
    "website-webapp-development": {
        slug: "website-webapp-development",
        title: "Web Development",
        subtitle: "Digital Experiences That Scale",
        description: "From stunning marketing sites to complex web applications, we build robust, scalable solutions using the latest technologies like Next.js, React, and Node.js.",
        longDescription: "Your website is often the first impression a potential customer has of your business. We build websites and web applications that are not only visually stunning but also fast, secure, and optimized for conversions. Using modern frameworks like Next.js and React, we create performant, SEO-friendly experiences that work flawlessly across all devices. Whether you need a marketing site, an e-commerce platform, or a complex SaaS application, our full-stack team has you covered.",
        icon: Monitor,
        gradient: "from-[var(--coral-500)] to-[var(--orange-500)]",
        stats: [
            { value: "200+", label: "Websites & Web Apps Delivered" },
            { value: "<2s", label: "Avg. Page Load Time Achieved" },
            { value: "99.9%", label: "Uptime Guarantee" },
        ],
        features: [
            { title: "Custom Web Development", description: "Tailor-made websites and applications built from scratch, no cookie-cutter templates.", icon: Code },
            { title: "Responsive & Mobile-First Design", description: "Flawless experiences on every device, from desktop to mobile.", icon: Smartphone },
            { title: "Performance & SEO Optimization", description: "Lightning-fast page loads and search-engine-ready architecture for better rankings.", icon: Zap },
            { title: "CMS & E-Commerce Integration", description: "Easy content management with platforms like Sanity, Strapi, or Shopify.", icon: Settings }
        ],
        benefits: [
            { title: "Stronger First Impressions", description: "A professional, fast website builds trust and credibility instantly.", icon: Award },
            { title: "Improved Search Rankings", description: "Technical SEO best practices baked in from the start.", icon: Search },
            { title: "Scalable Architecture", description: "Built to grow with your business, handling increased traffic and features seamlessly.", icon: Rocket },
            { title: "Ownership & Control", description: "You own your code and data. No vendor lock-in.", icon: ShieldCheck },
        ],
        process: [
            { step: "01", title: "Architecture & Planning", description: "Defining the tech stack, information architecture, and project scope." },
            { step: "02", title: "Design System Creation", description: "Building a consistent visual language with reusable components." },
            { step: "03", title: "Full-Stack Development", description: "Frontend magic and backend logic, built with clean, maintainable code." },
            { step: "04", title: "QA, Testing & Launch", description: "Rigorous testing across browsers and devices before going live." }
        ],
        faqs: [
            { question: "What technologies do you use?", answer: "Our core stack includes Next.js (React), Node.js, PostgreSQL/MongoDB, and Tailwind CSS. We also work with Python, Django, and other technologies depending on project needs." },
            { question: "Do you offer hosting and maintenance?", answer: "Yes, we can deploy to platforms like Vercel, AWS, or your preferred hosting provider, and offer ongoing maintenance plans." },
            { question: "Can you redesign my existing website?", answer: "Absolutely. We can audit your current site and propose a redesign that improves aesthetics, performance, and user experience." },
        ]
    }
};
