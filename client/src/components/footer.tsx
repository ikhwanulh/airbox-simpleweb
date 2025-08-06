import airboxLogo from "@assets/airbox white_1754038254518.png";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={airboxLogo} alt="Air Box Teknologi" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Air Box Teknologi</h3>
                <p className="text-slate-400 text-sm">Digital Solutions</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-400">© 2024 Air Box Teknologi. All rights reserved.</p>
            </div>
            
            <div className="flex justify-end space-x-6">
              <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/team" className="text-slate-400 hover:text-white transition-colors">
                Team Members
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}