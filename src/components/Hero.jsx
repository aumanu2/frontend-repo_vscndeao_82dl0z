import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pb-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_45rem_at_120%_10%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(30rem_30rem_at_-10%_40%,rgba(147,51,234,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Aplikasi modern untuk aset operasional
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Checklist, Ticketing, dan Absensi dalam satu platform
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Kelola perangkat aset Anda dengan mudah: buat checklist harian, tangani tiket perbaikan, dan catat kehadiran teknisi—semua terintegrasi mulus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 px-5 py-3 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40">
                Coba Gratis Sekarang
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/70 px-5 py-3 text-gray-800 hover:bg-white">
                Lihat Fitur
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl border border-white/30 bg-white/60 backdrop-blur shadow-xl shadow-blue-500/10">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-1/2 bg-gradient-to-t from-white to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
}
