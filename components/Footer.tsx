import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                <img src="/logo.png" alt="Aera Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Aera Messenger</span>
            </Link>
            <p className="text-textSecondary text-lg max-w-sm">
              Conversations, Reimagined. The AI-Native Messaging Experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#features" className="text-textSecondary hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="https://github.com/OnkarGaikwad-astro/Aera/releases/latest/download/app-release.apk" className="text-textSecondary hover:text-white transition-colors">Download</Link>
              </li>
              <li>
                <Link href="https://github.com/OnkarGaikwad-astro/Aera" target="_blank" className="text-textSecondary hover:text-white transition-colors">GitHub</Link>
              </li>
              <li>
                <Link href="#" className="text-textSecondary hover:text-white transition-colors">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://github.com/OnkarGaikwad-astro/Aera" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-textSecondary transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-textSecondary transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-textSecondary transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textSecondary text-sm">
            &copy; {new Date().getFullYear()} Aera. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-textSecondary">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
