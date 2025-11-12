export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 p-8 sm:p-10 text-white shadow-xl">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40rem_40rem_at_110%_10%,rgba(59,130,246,0.35),transparent_60%)]" />
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mulai transformasi operasional aset Anda</h3>
            <p className="mt-3 text-white/80">Coba gratis 14 hari. Tanpa kartu kredit. Batalkan kapan saja.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-gray-900 font-medium shadow-sm hover:bg-white/90">Buat Akun</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-white hover:bg-white/10">Hubungi Tim</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
