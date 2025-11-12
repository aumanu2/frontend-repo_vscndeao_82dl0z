export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/30 pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">© 2025 AsetCheck. Semua hak dilindungi.</p>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-900">Syarat Layanan</a>
            <a href="#" className="hover:text-gray-900">Bantuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
