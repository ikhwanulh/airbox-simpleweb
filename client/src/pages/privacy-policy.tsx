import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-slate-800">Privacy Policy</h1>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-slate max-w-none"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy for Kru Pintar</h1>
              <div className="flex justify-center mb-6">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF Version</span>
                </Button>
              </div>
              <p className="text-lg text-slate-600">
                <strong>Effective Date:</strong> March 1st, 2025
              </p>
            </div>

            {/* English Version */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
              <p className="text-lg leading-relaxed text-slate-700">
                Kru Pintar is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our HRIS mobile application on Android and iOS.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Types of Data Collected</h2>
                <p className="text-slate-600 mb-4">We collect the following categories of information:</p>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, gender, location, place & date of birth, tax ID, personal ID (e.g., KTP), bank account information, marital status, PTKP tax status, BPJS Kesehatan & Ketenagakerjaan details, and mother's name.</li>
                  <li><strong>Usage Data:</strong> App interactions, feature usage statistics, crash reports, performance logs, etc.</li>
                  <li><strong>Device Identifiers:</strong> Device ID, IP address, IDFA (iOS Identifier for Advertisers), and other diagnostic identifiers.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Purpose of Data Collection</h2>
                <p className="text-slate-600 mb-4">
                  The primary reason for data collection is to facilitate employment management. Users of Kru Pintar are typically employees of companies that use the platform to manage HR operations. Your data enables:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>Attendance and payroll management</li>
                  <li>Tax and benefit processing</li>
                  <li>Employee recordkeeping and lifecycle tracking</li>
                  <li>System notifications and HR communication</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Third-Party Sharing</h2>
                <p className="text-slate-600">
                  We do <strong>not</strong> share your personal data with third parties, except with your direct employer (the organization that registered your Kru Pintar account). Your data is never sold or disclosed to advertisers, marketers, or unrelated third parties.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Retention & Deletion</h2>
                <p className="text-slate-600 mb-4">
                  Your data is retained as long as your employer continues to use Kru Pintar and for a period as required by labor and tax regulations in Indonesia.
                </p>
                <p className="text-slate-600">
                  You may request your data to be deleted by contacting your employer's HR department or by sending a request to <a href="mailto:privacy@airbox.co.id" className="text-blue-600 hover:underline">privacy@airbox.co.id</a>. Deletion requests will be processed in coordination with your employer, subject to legal and contractual obligations.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Contact Us</h2>
                <p className="text-slate-600 mb-4">
                  If you have any questions or concerns regarding this policy, please contact us at:
                </p>
                <div className="bg-slate-50 rounded-lg p-4 flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:privacy@airbox.co.id" className="text-blue-600 hover:underline font-medium">
                    privacy@airbox.co.id
                  </a>
                </div>
              </section>
            </div>

            {/* Indonesian Version */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">Kebijakan Privasi Kru Pintar</h1>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-12">
                <p className="text-lg leading-relaxed text-slate-700">
                  Kru Pintar berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan aplikasi HRIS kami di Android dan iOS.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Jenis Data yang Dikumpulkan</h2>
                  <p className="text-slate-600 mb-4">Kami mengumpulkan kategori informasi berikut:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>Data Pribadi:</strong> Nama, alamat email, nomor telepon, jenis kelamin, lokasi, tempat & tanggal lahir, NPWP, nomor identitas (seperti KTP), informasi rekening bank, status pernikahan, status PTKP, informasi BPJS Kesehatan & Ketenagakerjaan, dan nama ibu kandung.</li>
                    <li><strong>Data Penggunaan:</strong> Interaksi dengan aplikasi, statistik penggunaan fitur, laporan kerusakan, log performa, dll.</li>
                    <li><strong>Identifikasi Perangkat:</strong> ID perangkat, alamat IP, IDFA (iOS Identifier for Advertisers), dan pengenal diagnostik lainnya.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Tujuan Pengumpulan Data</h2>
                  <p className="text-slate-600 mb-4">
                    Tujuan utama pengumpulan data adalah untuk memfasilitasi manajemen ketenagakerjaan. Pengguna Kru Pintar biasanya merupakan karyawan dari perusahaan yang menggunakan platform ini untuk mengelola operasi SDM. Data Anda digunakan untuk:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>Manajemen absensi dan penggajian</li>
                    <li>Proses pajak dan tunjangan</li>
                    <li>Pencatatan dan pelacakan siklus hidup karyawan</li>
                    <li>Notifikasi sistem dan komunikasi SDM</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Berbagi Data dengan Pihak Ketiga</h2>
                  <p className="text-slate-600">
                    Kami <strong>tidak</strong> membagikan data pribadi Anda kepada pihak ketiga, kecuali kepada perusahaan tempat Anda bekerja (yang mendaftarkan akun Kru Pintar Anda). Data Anda tidak akan dijual atau dibagikan ke pengiklan, pemasar, atau pihak ketiga yang tidak terkait.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Penyimpanan & Penghapusan Data</h2>
                  <p className="text-slate-600 mb-4">
                    Data Anda disimpan selama perusahaan tempat Anda bekerja terus menggunakan Kru Pintar dan selama jangka waktu yang diwajibkan oleh peraturan ketenagakerjaan dan perpajakan di Indonesia.
                  </p>
                  <p className="text-slate-600">
                    Anda dapat meminta penghapusan data dengan menghubungi departemen HRD perusahaan Anda atau dengan mengirim permintaan ke <a href="mailto:privacy@airbox.co.id" className="text-blue-600 hover:underline">privacy@airbox.co.id</a>. Permintaan penghapusan akan diproses bersama dengan pihak perusahaan Anda sesuai dengan kewajiban hukum dan kontraktual.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Hubungi Kami</h2>
                  <p className="text-slate-600 mb-4">
                    Jika Anda memiliki pertanyaan atau kekhawatiran terkait kebijakan ini, silakan hubungi kami di:
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:privacy@airbox.co.id" className="text-blue-600 hover:underline font-medium">
                      privacy@airbox.co.id
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}