import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "EN" | "ID";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  "hero.tagline": {
    EN: "Empowering logistics and workforce transformation with metrics-driven digital solutions.",
    ID: "Mendukung transformasi logistik dan tenaga kerja dengan solusi digital berbasis metrik."
  },
  "hero.startConsultation": {
    EN: "Start Consultation",
    ID: "Mulai Konsultasi"
  },
  "hero.viewProducts": {
    EN: "View Products",
    ID: "Lihat Produk"
  },
  "nav.home": {
    EN: "Home",
    ID: "Beranda"
  },
  "nav.consultation": {
    EN: "Consultation",
    ID: "Konsultasi"
  },
  "nav.products": {
    EN: "Products",
    ID: "Produk"
  },
  "nav.clients": {
    EN: "Clients",
    ID: "Klien"
  },
  "nav.contact": {
    EN: "Contact",
    ID: "Kontak"
  },
  "products.title": {
    EN: "Our Products",
    ID: "Produk Kami"
  },
  "products.subtitle": {
    EN: "Comprehensive digital solutions designed to streamline your operations and drive measurable results.",
    ID: "Solusi digital komprehensif yang dirancang untuk menyederhanakan operasi dan mendorong hasil yang terukur."
  },
  "products.learnMore": {
    EN: "Learn More →",
    ID: "Pelajari Lebih Lanjut →"
  },
  "products.dashboard.title": {
    EN: "Interactive Dashboard & Task Monitoring",
    ID: "Dashboard Interaktif & Pemantauan Tugas"
  },
  "products.dashboard.description": {
    EN: "Real-time visualization and monitoring system that provides comprehensive insights into your operations. Track KPIs, monitor task progress, and make data-driven decisions with our intuitive dashboard interface.",
    ID: "Sistem visualisasi dan pemantauan waktu nyata yang memberikan wawasan komprehensif tentang operasi Anda. Pantau KPI, lacak progres tugas, dan ambil keputusan berbasis data dengan antarmuka dashboard intuitif kami."
  },
  "products.dashboard.tag1": {
    EN: "Real-time Analytics",
    ID: "Analitik Waktu Nyata"
  },
  "products.dashboard.tag2": {
    EN: "Task Management",
    ID: "Manajemen Tugas"
  },
  "products.dashboard.tag3": {
    EN: "KPI Tracking",
    ID: "Pelacakan KPI"
  },
  "products.kurir.title": {
    EN: "Kurir Pintar",
    ID: "Kurir Pintar"
  },
  "products.kurir.description": {
    EN: "End-to-end supply chain visibility for logistics and courier operations — integrated with air, sea, and land transport modes. Track shipments, optimize routes, and ensure delivery excellence across all transportation channels.",
    ID: "Visibilitas rantai pasok menyeluruh untuk operasi logistik dan kurir — terintegrasi dengan moda transportasi udara, laut, dan darat. Lacak pengiriman, optimalkan rute, dan pastikan keunggulan pengiriman di semua saluran transportasi."
  },
  "products.kurir.tag1": {
    EN: "Multi-modal Tracking",
    ID: "Pelacakan Multi-moda"
  },
  "products.kurir.tag2": {
    EN: "Route Optimization",
    ID: "Optimalisasi Rute"
  },
  "products.kurir.tag3": {
    EN: "Real-time Updates",
    ID: "Pembaruan Waktu Nyata"
  },
  "products.kru.title": {
    EN: "KRU",
    ID: "KRU"
  },
  "products.kru.description": {
    EN: "HRIS solution that simplifies the employment lifecycle for high-volume teams, ensuring compliance and automation. Streamline recruitment, onboarding, payroll, and performance management with intelligent workflows.",
    ID: "Solusi HRIS yang menyederhanakan siklus ketenagakerjaan untuk tim berskala besar, memastikan kepatuhan dan otomatisasi. Sederhanakan rekrutmen, orientasi, penggajian, dan manajemen kinerja dengan alur kerja cerdas."
  },
  "products.kru.tag1": {
    EN: "HR Automation",
    ID: "Otomatisasi SDM"
  },
  "products.kru.tag2": {
    EN: "Compliance",
    ID: "Kepatuhan"
  },
  "products.kru.tag3": {
    EN: "Performance Tracking",
    ID: "Pelacakan Kinerja"
  },
  "products.jurnal.title": {
    EN: "Jurnal Pintar",
    ID: "Jurnal Pintar"
  },
  "products.jurnal.description": {
    EN: "Smart accounting system with modular setup, local tax compliance, and support for automation and analytics. Streamline financial operations with intelligent bookkeeping and comprehensive reporting capabilities.",
    ID: "Sistem akuntansi cerdas dengan pengaturan modular, kepatuhan pajak lokal, dan dukungan untuk otomatisasi serta analitik. Sederhanakan operasi keuangan dengan pembukuan cerdas dan kemampuan pelaporan komprehensif."
  },
  "products.jurnal.tag1": {
    EN: "Tax Compliance",
    ID: "Kepatuhan Pajak"
  },
  "products.jurnal.tag2": {
    EN: "Automation",
    ID: "Otomatisasi"
  },
  "products.jurnal.tag3": {
    EN: "Analytics",
    ID: "Analitik"
  },
  "clients.title": {
    EN: "Our Trusted Clients",
    ID: "Klien Terpercaya Kami"
  },
  "clients.subtitle": {
    EN: "Partnering with industry leaders to drive digital transformation.",
    ID: "Bermitra dengan pemimpin industri untuk mendorong transformasi digital."
  },
  "clients.cta": {
    EN: "Join numerous companies that trust Air Box for their digital transformation journey.",
    ID: "Bergabunglah dengan berbagai perusahaan yang mempercayai Air Box untuk perjalanan transformasi digital mereka."
  },
  "consultation.title": {
    EN: "Strategic Consultation",
    ID: "Konsultasi Strategis"
  },
  "consultation.approach.title": {
    EN: "Our Approach",
    ID: "Pendekatan Kami"
  },
  "consultation.approach.description": {
    EN: "We begin by helping organizations clarify their strategic objectives, design metric trees, and assess their data pipeline readiness — before we offer any digital products. This ensures our solutions are relevant, effective, and tailored to your business context.",
    ID: "Kami memulai dengan membantu organisasi memperjelas tujuan strategis, merancang pohon metrik, dan menilai kesiapan jalur data mereka — sebelum menawarkan produk digital. Hal ini memastikan solusi kami relevan, efektif, dan disesuaikan dengan konteks bisnis Anda."
  },
  "consultation.chat.title": {
    EN: "Chat with our smart consultant here:",
    ID: "Konsultasi dengan asisten cerdas kami di sini:"
  },
  "consultation.chat.subtitle": {
    EN: "Get instant insights and recommendations for your digital transformation journey.",
    ID: "Dapatkan wawasan dan rekomendasi instan untuk perjalanan transformasi digital Anda."
  },
  "contact.title": {
    EN: "Contact Us",
    ID: "Hubungi Kami"
  },
  "contact.subtitle": {
    EN: "Ready to transform your business? Let's start the conversation.",
    ID: "Siap mentransformasi bisnis Anda? Mari mulai percakapan."
  },
  "contact.getInTouch": {
    EN: "Get in Touch",
    ID: "Hubungi Kami"
  },
  "contact.officeAddress": {
    EN: "Office Address",
    ID: "Alamat Kantor"
  },
  "contact.phone": {
    EN: "Phone",
    ID: "Telepon"
  },
  "contact.email": {
    EN: "Email",
    ID: "Email"
  },
  "contact.readyToStart": {
    EN: "Ready to Get Started?",
    ID: "Siap untuk Memulai?"
  },
  "contact.readyToStartDesc": {
    EN: "Book a free consultation with our experts and discover how AirBox can transform your operations.",
    ID: "Jadwalkan konsultasi gratis dengan ahli kami dan temukan bagaimana Air Box dapat mentransformasi operasi Anda."
  },
  "contact.bookFreeConsultation": {
    EN: "Book Free Consultation",
    ID: "Jadwalkan Konsultasi Gratis"
  },
  "contact.sendMessage": {
    EN: "Send us a Message",
    ID: "Kirim Pesan kepada Kami"
  },
  "contact.form.fullName": {
    EN: "Full Name",
    ID: "Nama Lengkap"
  },
  "contact.form.fullNamePlaceholder": {
    EN: "Your full name",
    ID: "Nama lengkap Anda"
  },
  "contact.form.company": {
    EN: "Company",
    ID: "Perusahaan"
  },
  "contact.form.companyPlaceholder": {
    EN: "Your company name",
    ID: "Nama perusahaan Anda"
  },
  "contact.form.emailPlaceholder": {
    EN: "your.email@company.com",
    ID: "email.anda@perusahaan.com"
  },
  "contact.form.message": {
    EN: "Message",
    ID: "Pesan"
  },
  "contact.form.messagePlaceholder": {
    EN: "Tell us about your project...",
    ID: "Ceritakan tentang proyek Anda..."
  },
  "contact.form.send": {
    EN: "Send Message",
    ID: "Kirim Pesan"
  },
  "contact.form.sending": {
    EN: "Sending...",
    ID: "Mengirim..."
  },
  "contact.toast.success.title": {
    EN: "Message Sent Successfully!",
    ID: "Pesan Berhasil Terkirim!"
  },
  "contact.toast.success.description": {
    EN: "Thank you for your interest. We'll get back to you within 24 hours.",
    ID: "Terima kasih atas minat Anda. Kami akan menghubungi Anda dalam 24 jam."
  },
  "contact.toast.error.title": {
    EN: "Error",
    ID: "Kesalahan"
  },
  "contact.toast.error.description": {
    EN: "Failed to send message. Please try again later.",
    ID: "Gagal mengirim pesan. Silakan coba lagi nanti."
  },
  "footer.digitalSolutions": {
    EN: "Digital Solutions",
    ID: "Solusi Digital"
  },
  "footer.rights": {
    EN: "© 2024 Air Box Teknologi. All rights reserved.",
    ID: "© 2024 Air Box Teknologi. Hak cipta dilindungi undang-undang."
  },
  "footer.privacyPolicy": {
    EN: "Privacy Policy",
    ID: "Kebijakan Privasi"
  },
  "footer.teamMembers": {
    EN: "Team Members",
    ID: "Anggota Tim"
  },
  "backToHome": {
    EN: "← Back to Home",
    ID: "← Kembali ke Beranda"
  },
  "team.title": {
    EN: "Our Team",
    ID: "Tim Kami"
  },
  "team.hero.title": {
    EN: "Meet Our Team",
    ID: "Kenali Tim Kami"
  },
  "team.hero.subtitle": {
    EN: "Expert professionals driving digital transformation with deep industry knowledge and technical excellence.",
    ID: "Profesional ahli yang mendorong transformasi digital dengan pengetahuan industri mendalam dan keunggulan teknis."
  },
  "team.business.title": {
    EN: "Business Experts",
    ID: "Ahli Bisnis"
  },
  "team.business.subtitle": {
    EN: "Strategic leaders with deep industry experience and proven track records in business transformation.",
    ID: "Pemimpin strategis dengan pengalaman industri mendalam dan rekam jejak terbukti dalam transformasi bisnis."
  },
  "team.tech.title": {
    EN: "Tech Experts",
    ID: "Ahli Teknologi"
  },
  "team.tech.subtitle": {
    EN: "Technical innovators with extensive software engineering experience and cutting-edge expertise.",
    ID: "Inovator teknis dengan pengalaman rekayasa perangkat lunak yang luas dan keahlian terdepan."
  },
  "team.experience": {
    EN: "Experience",
    ID: "Pengalaman"
  },
  "team.expertise": {
    EN: "Expertise",
    ID: "Keahlian"
  },
  "team.cta.title": {
    EN: "Ready to Work with Us?",
    ID: "Siap Bekerja dengan Kami?"
  },
  "team.cta.subtitle": {
    EN: "Our team combines business acumen with technical expertise to deliver transformative digital solutions.",
    ID: "Tim kami menggabungkan ketajaman bisnis dengan keahlian teknis untuk menghadirkan solusi digital yang transformatif."
  },
  "team.cta.button": {
    EN: "Get in Touch",
    ID: "Hubungi Kami"
  },
  "kru.badge": {
    EN: "Workforce Management",
    ID: "Manajemen Tenaga Kerja"
  },
  "kru.hero.title": {
    EN: "One Admin for Thousands of Employees. Built for Real Scale.",
    ID: "Satu Admin untuk Ribuan Karyawan. Dibangun untuk Skala Nyata."
  },
  "kru.hero.description": {
    EN: "KRU Pintar is a workforce management system designed for manpower companies, BPOs, and HR outsourcing firms to manage thousands of employees without increasing administrative overhead.",
    ID: "KRU Pintar adalah sistem manajemen tenaga kerja yang dirancang untuk perusahaan manpower, BPO, dan perusahaan outsourcing SDM untuk mengelola ribuan karyawan tanpa menambah beban administratif."
  },
  "kru.hero.cta": {
    EN: "Calculate Your Admin Leverage",
    ID: "Hitung Leverage Admin Anda"
  },
  "kru.problem.title": {
    EN: "Scaling Workforce Should Not Mean Scaling Administration",
    ID: "Menambah Tenaga Kerja Tidak Harus Berarti Menambah Administrasi"
  },
  "kru.problem.subtitle": {
    EN: "Many organizations experience:",
    ID: "Banyak organisasi mengalami:"
  },
  "kru.problem.item1": {
    EN: "Growing admin teams as headcount increases",
    ID: "Tim admin bertambah seiring bertambahnya jumlah karyawan"
  },
  "kru.problem.item2": {
    EN: "Slower payroll cycles",
    ID: "Siklus penggajian yang lebih lambat"
  },
  "kru.problem.item3": {
    EN: "Increasing payroll disputes",
    ID: "Perselisihan penggajian yang meningkat"
  },
  "kru.problem.warning": {
    EN: "This linear growth model is not scalable and erodes margins.",
    ID: "Model pertumbuhan linear ini tidak skalabel dan menggerus margin."
  },
  "kru.solution.title": {
    EN: "KRU Pintar as a Workforce Operating System",
    ID: "KRU Pintar sebagai Sistem Operasi Tenaga Kerja"
  },
  "kru.solution.item1.title": {
    EN: "Integrated attendance and payroll",
    ID: "Absensi dan penggajian terintegrasi"
  },
  "kru.solution.item1.desc": {
    EN: "Seamlessly connect time tracking with compensation",
    ID: "Hubungkan pelacakan waktu dengan kompensasi secara mulus"
  },
  "kru.solution.item2.title": {
    EN: "Strong data controls",
    ID: "Kontrol data yang kuat"
  },
  "kru.solution.item2.desc": {
    EN: "Ensure accuracy and compliance at every level",
    ID: "Pastikan akurasi dan kepatuhan di setiap level"
  },
  "kru.solution.item3.title": {
    EN: "Productivity measurement linked to billing",
    ID: "Pengukuran produktivitas terhubung ke penagihan"
  },
  "kru.solution.item3.desc": {
    EN: "Connect workforce output directly to revenue",
    ID: "Hubungkan output tenaga kerja langsung ke pendapatan"
  },
  "kru.solution.item4.title": {
    EN: "Infrastructure designed for large-scale operations",
    ID: "Infrastruktur dirancang untuk operasi skala besar"
  },
  "kru.solution.item4.desc": {
    EN: "Handle thousands of employees without breaking a sweat",
    ID: "Tangani ribuan karyawan dengan mudah"
  },
  "kru.value.title": {
    EN: "If Administration Grows Linearly, Your Operations Are Not Scalable",
    ID: "Jika Administrasi Tumbuh Linear, Operasi Anda Tidak Skalabel"
  },
  "kru.value.subtitle": {
    EN: "KRU Pintar enables operational leverage, allowing:",
    ID: "KRU Pintar memungkinkan leverage operasional, memungkinkan:"
  },
  "kru.value.highlight": {
    EN: "One administrator to confidently manage thousands of employees.",
    ID: "Satu administrator dengan percaya diri mengelola ribuan karyawan."
  },
  "kru.cta.title": {
    EN: "Ready to Scale Your Workforce Management?",
    ID: "Siap Menskalakan Manajemen Tenaga Kerja Anda?"
  },
  "kru.cta.subtitle": {
    EN: "Discover how KRU Pintar can transform your operations",
    ID: "Temukan bagaimana KRU Pintar dapat mentransformasi operasi Anda"
  },
  "jurnal.badge": {
    EN: "Smart Accounting",
    ID: "Akuntansi Cerdas"
  },
  "jurnal.hero.title": {
    EN: "Financial Numbers You and Your Investors Can Trust",
    ID: "Angka Keuangan yang Anda dan Investor Dapat Percaya"
  },
  "jurnal.hero.description": {
    EN: "Jurnal Pintar is an enterprise grade accounting system designed to assist you to produce transparent, consistent, and funder-ready financial reports.",
    ID: "Jurnal Pintar adalah sistem akuntansi tingkat enterprise yang dirancang untuk membantu Anda menghasilkan laporan keuangan yang transparan, konsisten, dan siap investor."
  },
  "jurnal.hero.cta": {
    EN: "Check Your Investor Trust Score",
    ID: "Periksa Skor Kepercayaan Investor Anda"
  },
  "jurnal.problem.title": {
    EN: "Neat Numbers Are Not the Same as Trusted Numbers",
    ID: "Angka yang Rapi Tidak Sama dengan Angka yang Dipercaya"
  },
  "jurnal.problem.subtitle": {
    EN: "Many companies struggle with:",
    ID: "Banyak perusahaan kesulitan dengan:"
  },
  "jurnal.problem.item1": {
    EN: "Poor traceability",
    ID: "Keterlacakan yang buruk"
  },
  "jurnal.problem.item2": {
    EN: "Founder-dependent reporting",
    ID: "Pelaporan yang bergantung pada pendiri"
  },
  "jurnal.problem.item3": {
    EN: "Unpreparedness for due diligence",
    ID: "Ketidaksiapan untuk due diligence"
  },
  "jurnal.problem.warning": {
    EN: "Internal reports do not automatically earn external trust.",
    ID: "Laporan internal tidak secara otomatis mendapat kepercayaan eksternal."
  },
  "jurnal.solution.title": {
    EN: "Smart Accounting Built for External Scrutiny",
    ID: "Akuntansi Cerdas yang Dibangun untuk Pengawasan Eksternal"
  },
  "jurnal.solution.item1.title": {
    EN: "System-assisted transaction classification",
    ID: "Klasifikasi transaksi berbantuan sistem"
  },
  "jurnal.solution.item1.desc": {
    EN: "Automated categorization for accuracy",
    ID: "Kategorisasi otomatis untuk akurasi"
  },
  "jurnal.solution.item2.title": {
    EN: "Full audit trail, connected to bank transaction record",
    ID: "Jejak audit lengkap, terhubung ke catatan transaksi bank"
  },
  "jurnal.solution.item2.desc": {
    EN: "Complete transparency and traceability",
    ID: "Transparansi dan keterlacakan lengkap"
  },
  "jurnal.solution.item3.title": {
    EN: "Consistent chart of accounts",
    ID: "Bagan akun yang konsisten"
  },
  "jurnal.solution.item3.desc": {
    EN: "Standardized financial structure",
    ID: "Struktur keuangan yang terstandarisasi"
  },
  "jurnal.solution.item4.title": {
    EN: "Bank and investor readiness",
    ID: "Kesiapan bank dan investor"
  },
  "jurnal.solution.item4.desc": {
    EN: "Prepared for external review at any time",
    ID: "Siap untuk tinjauan eksternal kapan saja"
  },
  "jurnal.value.title": {
    EN: "Numbers That Cannot Be Explained Cannot Be Trusted",
    ID: "Angka yang Tidak Dapat Dijelaskan Tidak Dapat Dipercaya"
  },
  "jurnal.value.subtitle": {
    EN: "Investors do not look for perfect numbers.",
    ID: "Investor tidak mencari angka yang sempurna."
  },
  "jurnal.value.highlight": {
    EN: "They look for defensible numbers.",
    ID: "Mereka mencari angka yang dapat dipertahankan."
  },
  "jurnal.activation.title": {
    EN: "Activation Process",
    ID: "Proses Aktivasi"
  },
  "jurnal.activation.subtitle": {
    EN: "Your path to investor-ready financials",
    ID: "Jalan Anda menuju keuangan siap investor"
  },
  "jurnal.activation.step1.title": {
    EN: "Investor Trust Diagnostic",
    ID: "Diagnostik Kepercayaan Investor"
  },
  "jurnal.activation.step1.desc": {
    EN: "Assess your current financial reporting readiness",
    ID: "Nilai kesiapan pelaporan keuangan Anda saat ini"
  },
  "jurnal.activation.step2.title": {
    EN: "Funder-Grade Walkthrough",
    ID: "Walkthrough Tingkat Investor"
  },
  "jurnal.activation.step2.desc": {
    EN: "Review your books with investor-level scrutiny",
    ID: "Tinjau pembukuan Anda dengan pengawasan tingkat investor"
  },
  "jurnal.activation.step3.title": {
    EN: "Implementation",
    ID: "Implementasi"
  },
  "jurnal.activation.step3.desc": {
    EN: "Deploy Jurnal Pintar for your organization",
    ID: "Terapkan Jurnal Pintar untuk organisasi Anda"
  },
  "jurnal.cta.title": {
    EN: "Ready to Build Investor Trust?",
    ID: "Siap Membangun Kepercayaan Investor?"
  },
  "jurnal.cta.subtitle": {
    EN: "Start your journey to funder-ready financial reports",
    ID: "Mulai perjalanan Anda menuju laporan keuangan siap investor"
  },
  "jurnal.cta.button": {
    EN: "Start Trust Assessment",
    ID: "Mulai Penilaian Kepercayaan"
  },
  "kurir.badge": {
    EN: "Logistics Operations System",
    ID: "Sistem Operasi Logistik"
  },
  "kurir.hero.title": {
    EN: "100% Shipment Traceability. 100% SLA Milestone Transparency.",
    ID: "100% Keterlacakan Pengiriman. 100% Transparansi Milestone SLA."
  },
  "kurir.hero.description": {
    EN: "Kurir Pintar is an enterprise-grade logistics operations system designed to give companies full visibility and control over every shipment — from assignment to delivery confirmation.",
    ID: "Kurir Pintar adalah sistem operasi logistik tingkat enterprise yang dirancang untuk memberikan visibilitas dan kontrol penuh kepada perusahaan atas setiap pengiriman — dari penugasan hingga konfirmasi pengiriman."
  },
  "kurir.hero.cta": {
    EN: "Run a Delivery Performance Diagnostic",
    ID: "Jalankan Diagnostik Kinerja Pengiriman"
  },
  "kurir.hero.seeHow": {
    EN: "See How It Works",
    ID: "Lihat Cara Kerjanya"
  },
  "kurir.video.title": {
    EN: "How Kurir Pintar Traceability Works",
    ID: "Cara Kerja Keterlacakan Kurir Pintar"
  },
  "kurir.problem.title": {
    EN: "Logistics Issues Are Rarely Invisible — They Are Usually Untraceable",
    ID: "Masalah Logistik Jarang Tidak Terlihat — Biasanya Tidak Terlacak"
  },
  "kurir.problem.subtitle": {
    EN: "Most logistics operations struggle not because deliveries fail, but because:",
    ID: "Kebanyakan operasi logistik kesulitan bukan karena pengiriman gagal, tetapi karena:"
  },
  "kurir.problem.item1": {
    EN: "Shipment status cannot be fully traced end-to-end",
    ID: "Status pengiriman tidak dapat dilacak sepenuhnya dari awal hingga akhir"
  },
  "kurir.problem.item2": {
    EN: "SLA milestones are not consistently recorded",
    ID: "Milestone SLA tidak dicatat secara konsisten"
  },
  "kurir.problem.item3": {
    EN: "Investigating delays relies on assumptions, not evidence",
    ID: "Investigasi keterlambatan bergantung pada asumsi, bukan bukti"
  },
  "kurir.problem.item4": {
    EN: "Operational reports cannot withstand client scrutiny",
    ID: "Laporan operasional tidak tahan terhadap pengawasan klien"
  },
  "kurir.problem.warning": {
    EN: "Without complete traceability, accountability breaks down.",
    ID: "Tanpa keterlacakan lengkap, akuntabilitas runtuh."
  },
  "kurir.positioning.title": {
    EN: "If You Cannot Trace It, You Cannot Control It",
    ID: "Jika Anda Tidak Dapat Melacaknya, Anda Tidak Dapat Mengontrolnya"
  },
  "kurir.positioning.subtitle": {
    EN: "Kurir Pintar is built on a simple operational principle:",
    ID: "Kurir Pintar dibangun berdasarkan prinsip operasional sederhana:"
  },
  "kurir.positioning.principle1": {
    EN: "Every shipment must be traceable.",
    ID: "Setiap pengiriman harus dapat dilacak."
  },
  "kurir.positioning.principle2": {
    EN: "Every SLA milestone must be transparent.",
    ID: "Setiap milestone SLA harus transparan."
  },
  "kurir.positioning.foundation": {
    EN: "This is the foundation of scalable and defensible logistics operations.",
    ID: "Ini adalah fondasi dari operasi logistik yang skalabel dan dapat dipertahankan."
  },
  "kurir.solution.title": {
    EN: "End-to-End Control Across the Entire Delivery Lifecycle",
    ID: "Kontrol Menyeluruh di Seluruh Siklus Pengiriman"
  },
  "kurir.solution.subtitle": {
    EN: "Kurir Pintar provides:",
    ID: "Kurir Pintar menyediakan:"
  },
  "kurir.solution.item1.title": {
    EN: "100% Shipment Traceability",
    ID: "100% Keterlacakan Pengiriman"
  },
  "kurir.solution.item1.desc": {
    EN: "Every package is recorded, tracked, and linked to a responsible courier",
    ID: "Setiap paket dicatat, dilacak, dan terhubung ke kurir yang bertanggung jawab"
  },
  "kurir.solution.item2.title": {
    EN: "100% SLA Milestone Transparency",
    ID: "100% Transparansi Milestone SLA"
  },
  "kurir.solution.item2.desc": {
    EN: "Each SLA checkpoint is timestamped, auditable, and reviewable",
    ID: "Setiap checkpoint SLA memiliki stempel waktu, dapat diaudit, dan dapat ditinjau"
  },
  "kurir.solution.item3.title": {
    EN: "Real-time Operational Visibility",
    ID: "Visibilitas Operasional Waktu Nyata"
  },
  "kurir.solution.item3.desc": {
    EN: "Operations teams always know what is happening and why",
    ID: "Tim operasional selalu mengetahui apa yang terjadi dan mengapa"
  },
  "kurir.solution.item4.title": {
    EN: "Single Source of Truth",
    ID: "Satu Sumber Kebenaran"
  },
  "kurir.solution.item4.desc": {
    EN: "One consistent dataset for operations, management, and clients",
    ID: "Satu dataset konsisten untuk operasi, manajemen, dan klien"
  },
  "kurir.solution.highlight": {
    EN: "No blind spots. No manual reconciliation.",
    ID: "Tidak ada titik buta. Tidak ada rekonsiliasi manual."
  },
  "kurir.value.title": {
    EN: "Traceability Is Not a Feature. It Is an Operational Requirement.",
    ID: "Keterlacakan Bukan Fitur. Ini adalah Kebutuhan Operasional."
  },
  "kurir.value.subtitle": {
    EN: "With Kurir Pintar, companies can:",
    ID: "Dengan Kurir Pintar, perusahaan dapat:"
  },
  "kurir.value.item1": {
    EN: "Reduce shipment disputes with verifiable data",
    ID: "Mengurangi perselisihan pengiriman dengan data yang dapat diverifikasi"
  },
  "kurir.value.item2": {
    EN: "Enforce SLA compliance with objective evidence",
    ID: "Menegakkan kepatuhan SLA dengan bukti objektif"
  },
  "kurir.value.item3": {
    EN: "Identify root causes of delays faster",
    ID: "Mengidentifikasi akar penyebab keterlambatan lebih cepat"
  },
  "kurir.value.item4": {
    EN: "Build client trust through transparent reporting",
    ID: "Membangun kepercayaan klien melalui pelaporan transparan"
  },
  "kurir.value.highlight": {
    EN: "Your delivery data becomes an asset, not a liability.",
    ID: "Data pengiriman Anda menjadi aset, bukan liabilitas."
  },
  "kurir.activation.title": {
    EN: "We Start by Measuring, Not by Selling Software",
    ID: "Kami Memulai dengan Mengukur, Bukan Menjual Perangkat Lunak"
  },
  "kurir.activation.step1.title": {
    EN: "Delivery Performance Diagnostic",
    ID: "Diagnostik Kinerja Pengiriman"
  },
  "kurir.activation.step1.time": {
    EN: "(5 minutes)",
    ID: "(5 menit)"
  },
  "kurir.activation.step1.desc": {
    EN: "Assess traceability gaps and SLA visibility in your current operation",
    ID: "Nilai kesenjangan keterlacakan dan visibilitas SLA dalam operasi Anda saat ini"
  },
  "kurir.activation.step2.title": {
    EN: "Operational Review Call",
    ID: "Panggilan Tinjauan Operasional"
  },
  "kurir.activation.step2.time": {
    EN: "(30 minutes)",
    ID: "(30 menit)"
  },
  "kurir.activation.step2.desc": {
    EN: "Walk through your diagnostic results with an operations specialist",
    ID: "Telusuri hasil diagnostik Anda dengan spesialis operasi"
  },
  "kurir.activation.step3.title": {
    EN: "Pilot & Phased Implementation",
    ID: "Pilot & Implementasi Bertahap"
  },
  "kurir.activation.step3.desc": {
    EN: "Deploy Kurir Pintar based on operational impact and readiness",
    ID: "Terapkan Kurir Pintar berdasarkan dampak operasional dan kesiapan"
  },
  "kurir.cta.title": {
    EN: "Ready to Achieve 100% Traceability?",
    ID: "Siap Mencapai 100% Keterlacakan?"
  },
  "kurir.cta.subtitle": {
    EN: "Start your journey to complete logistics visibility",
    ID: "Mulai perjalanan Anda menuju visibilitas logistik lengkap"
  },
  "kurir.cta.button": {
    EN: "Start the Diagnostic",
    ID: "Mulai Diagnostik"
  },
  "dashboard.badge": {
    EN: "Operational Intelligence System",
    ID: "Sistem Intelijen Operasional"
  },
  "dashboard.hero.title": {
    EN: "Real-Time Visibility. Actionable Control. One Source of Truth.",
    ID: "Visibilitas Waktu Nyata. Kontrol yang Dapat Ditindaklanjuti. Satu Sumber Kebenaran."
  },
  "dashboard.hero.description": {
    EN: "ABT Interactive Dashboard & Task Monitoring is a real-time operational intelligence system that transforms raw operational data into clear, actionable insights — enabling leaders to monitor KPIs, track execution, and make decisions with confidence.",
    ID: "Dashboard Interaktif ABT & Pemantauan Tugas adalah sistem intelijen operasional waktu nyata yang mentransformasi data operasional mentah menjadi wawasan yang jelas dan dapat ditindaklanjuti — memungkinkan pemimpin memantau KPI, melacak eksekusi, dan membuat keputusan dengan percaya diri."
  },
  "dashboard.hero.cta": {
    EN: "Run an Operational Visibility Diagnostic",
    ID: "Jalankan Diagnostik Visibilitas Operasional"
  },
  "dashboard.hero.capabilities": {
    EN: "See Dashboard Capabilities",
    ID: "Lihat Kemampuan Dashboard"
  },
  "dashboard.preview.kpis": {
    EN: "Real-time KPIs",
    ID: "KPI Waktu Nyata"
  },
  "dashboard.preview.monitoring": {
    EN: "Live Monitoring",
    ID: "Pemantauan Langsung"
  },
  "dashboard.preview.progress": {
    EN: "Task Progress",
    ID: "Progres Tugas"
  },
  "dashboard.problem.title": {
    EN: "Most Dashboards Show Data. Very Few Enable Control.",
    ID: "Kebanyakan Dashboard Menampilkan Data. Sangat Sedikit yang Memungkinkan Kontrol."
  },
  "dashboard.problem.subtitle": {
    EN: "Many organizations already have reports and dashboards, yet still face:",
    ID: "Banyak organisasi sudah memiliki laporan dan dashboard, namun masih menghadapi:"
  },
  "dashboard.problem.item1": {
    EN: "KPIs that lag behind real operational issues",
    ID: "KPI yang tertinggal dari masalah operasional nyata"
  },
  "dashboard.problem.item2": {
    EN: "Task execution that cannot be monitored end-to-end",
    ID: "Eksekusi tugas yang tidak dapat dipantau dari awal hingga akhir"
  },
  "dashboard.problem.item3": {
    EN: "Multiple versions of performance data",
    ID: "Beberapa versi data kinerja"
  },
  "dashboard.problem.item4": {
    EN: "Delayed decisions due to unclear ownership and status",
    ID: "Keputusan tertunda karena kepemilikan dan status yang tidak jelas"
  },
  "dashboard.problem.warning": {
    EN: "Visibility without context does not improve performance.",
    ID: "Visibilitas tanpa konteks tidak meningkatkan kinerja."
  },
  "dashboard.positioning.title": {
    EN: "If You Cannot See It in Real Time, You Cannot Manage It in Real Time",
    ID: "Jika Anda Tidak Dapat Melihatnya Secara Waktu Nyata, Anda Tidak Dapat Mengelolanya Secara Waktu Nyata"
  },
  "dashboard.positioning.subtitle": {
    EN: "ABT Interactive Dashboard is built on one core principle:",
    ID: "Dashboard Interaktif ABT dibangun berdasarkan satu prinsip inti:"
  },
  "dashboard.positioning.principle": {
    EN: "Operational decisions require live, trusted, and contextual data, not static reports.",
    ID: "Keputusan operasional memerlukan data langsung, terpercaya, dan kontekstual, bukan laporan statis."
  },
  "dashboard.positioning.bridge": {
    EN: "This system bridges the gap between metrics and execution.",
    ID: "Sistem ini menjembatani kesenjangan antara metrik dan eksekusi."
  },
  "dashboard.solution.title": {
    EN: "A Unified View of Performance and Execution",
    ID: "Tampilan Terpadu Kinerja dan Eksekusi"
  },
  "dashboard.solution.subtitle": {
    EN: "The system provides:",
    ID: "Sistem ini menyediakan:"
  },
  "dashboard.solution.item1.title": {
    EN: "Real-time KPI Visualization",
    ID: "Visualisasi KPI Waktu Nyata"
  },
  "dashboard.solution.item1.desc": {
    EN: "Track operational, financial, and performance metrics as they happen",
    ID: "Lacak metrik operasional, keuangan, dan kinerja saat terjadi"
  },
  "dashboard.solution.item2.title": {
    EN: "Task and Workflow Monitoring",
    ID: "Pemantauan Tugas dan Alur Kerja"
  },
  "dashboard.solution.item2.desc": {
    EN: "See task ownership, progress, bottlenecks, and delays in one view",
    ID: "Lihat kepemilikan tugas, progres, hambatan, dan keterlambatan dalam satu tampilan"
  },
  "dashboard.solution.item3.title": {
    EN: "Drill-down Traceability",
    ID: "Keterlacakan Drill-down"
  },
  "dashboard.solution.item3.desc": {
    EN: "From high-level KPI to individual task or transaction",
    ID: "Dari KPI tingkat tinggi ke tugas atau transaksi individual"
  },
  "dashboard.solution.item4.title": {
    EN: "Single Operational Command Center",
    ID: "Pusat Komando Operasional Tunggal"
  },
  "dashboard.solution.item4.desc": {
    EN: "One dashboard for management, operations, and execution teams",
    ID: "Satu dashboard untuk tim manajemen, operasi, dan eksekusi"
  },
  "dashboard.solution.highlight": {
    EN: "Designed for complex, multi-team operations.",
    ID: "Dirancang untuk operasi kompleks dengan banyak tim."
  },
  "dashboard.value.title": {
    EN: "Decisions Should Be Driven by Reality, Not by Delayed Reports",
    ID: "Keputusan Harus Didorong oleh Realitas, Bukan Laporan yang Tertunda"
  },
  "dashboard.value.subtitle": {
    EN: "With ABT Interactive Dashboard, organizations can:",
    ID: "Dengan Dashboard Interaktif ABT, organisasi dapat:"
  },
  "dashboard.value.item1": {
    EN: "Detect operational issues earlier",
    ID: "Mendeteksi masalah operasional lebih awal"
  },
  "dashboard.value.item2": {
    EN: "Hold teams accountable with transparent task tracking",
    ID: "Meminta pertanggungjawaban tim dengan pelacakan tugas transparan"
  },
  "dashboard.value.item3": {
    EN: "Align execution with strategic KPIs",
    ID: "Menyelaraskan eksekusi dengan KPI strategis"
  },
  "dashboard.value.item4": {
    EN: "Reduce dependency on manual reporting and follow-ups",
    ID: "Mengurangi ketergantungan pada pelaporan manual dan tindak lanjut"
  },
  "dashboard.value.highlight": {
    EN: "Your dashboard becomes a management tool, not a presentation slide.",
    ID: "Dashboard Anda menjadi alat manajemen, bukan slide presentasi."
  },
  "dashboard.activation.title": {
    EN: "We Start by Diagnosing Visibility Gaps",
    ID: "Kami Memulai dengan Mendiagnosis Kesenjangan Visibilitas"
  },
  "dashboard.activation.step1.title": {
    EN: "Operational Visibility Diagnostic",
    ID: "Diagnostik Visibilitas Operasional"
  },
  "dashboard.activation.step1.time": {
    EN: "(5 minutes)",
    ID: "(5 menit)"
  },
  "dashboard.activation.step1.desc": {
    EN: "Assess KPI clarity, data latency, and task monitoring maturity",
    ID: "Nilai kejelasan KPI, latensi data, dan kematangan pemantauan tugas"
  },
  "dashboard.activation.step2.title": {
    EN: "Dashboard & Workflow Mapping Call",
    ID: "Panggilan Pemetaan Dashboard & Alur Kerja"
  },
  "dashboard.activation.step2.time": {
    EN: "(30 minutes)",
    ID: "(30 menit)"
  },
  "dashboard.activation.step2.desc": {
    EN: "Define the KPIs, task flows, and decision points that matter",
    ID: "Tentukan KPI, alur tugas, dan titik keputusan yang penting"
  },
  "dashboard.activation.step3.title": {
    EN: "Pilot Dashboard Implementation",
    ID: "Implementasi Dashboard Pilot"
  },
  "dashboard.activation.step3.desc": {
    EN: "Deploy dashboards aligned to real operational control needs",
    ID: "Terapkan dashboard yang selaras dengan kebutuhan kontrol operasional nyata"
  },
  "dashboard.cta.title": {
    EN: "Ready to Gain Real-Time Visibility?",
    ID: "Siap Mendapatkan Visibilitas Waktu Nyata?"
  },
  "dashboard.cta.subtitle": {
    EN: "Start your journey to actionable operational intelligence",
    ID: "Mulai perjalanan Anda menuju intelijen operasional yang dapat ditindaklanjuti"
  },
  "dashboard.cta.button": {
    EN: "Start the Diagnostic",
    ID: "Mulai Diagnostik"
  },
  "common.cancel": {
    EN: "Cancel",
    ID: "Batal"
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return (saved as Language) || "EN";
    }
    return "EN";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
