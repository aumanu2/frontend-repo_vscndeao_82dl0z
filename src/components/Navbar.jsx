import { Menu, CheckSquare, Ticket, UserCheck } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg shadow-blue-500/5">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-500 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-white/90" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">AsetCheck</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#features" className="hover:text-gray-900 transition">Fitur</a>
              <a href="#pricing" className="hover:text-gray-900 transition">Harga</a>
              <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#demo" className="text-sm font-medium text-gray-700 hover:text-gray-900">Lihat Demo</a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-sm shadow-blue-600/30 hover:shadow-blue-600/40">
                <span>Coba Gratis</span>
              </a>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/60 backdrop-blur">
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/30 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3 text-sm text-gray-700">
                <a href="#features">Fitur</a>
                <a href="#pricing">Harga</a>
                <a href="#faq">FAQ</a>
                <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 px-4 py-2 text-white">Coba Gratis</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
