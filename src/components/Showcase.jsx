import { motion } from 'framer-motion';
import { CheckSquare, MessageSquare, UserCheck2 } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/30 bg-white/70 p-6 backdrop-blur shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white"><CheckSquare className="h-5 w-5"/></div>
              <div>
                <h3 className="text-lg font-semibold">Checklist Aset</h3>
                <p className="text-sm text-gray-600">Template, foto, status, dan tanda tangan.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Checklist Harian</div>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-blue-600" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-blue-200" />
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Status</div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">OK</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs text-amber-700">Perlu Cek</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/30 bg-white/70 p-6 backdrop-blur shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-600 text-white"><MessageSquare className="h-5 w-5"/></div>
              <div>
                <h3 className="text-lg font-semibold">Ticketing</h3>
                <p className="text-sm text-gray-600">Prioritas, SLA, dan assignment tim.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Antrian</div>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-cyan-600" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-cyan-200" />
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">SLA</div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs text-red-700">Kritis</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs text-amber-700">Tinggi</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 rounded-3xl border border-white/30 bg-white/70 p-6 backdrop-blur shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white"><UserCheck2 className="h-5 w-5"/></div>
              <div>
                <h3 className="text-lg font-semibold">Absensi</h3>
                <p className="text-sm text-gray-600">Check-in lokasi, QR, dan rekap otomatis.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-violet-200 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Hari Ini</div>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-violet-600" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-violet-200" />
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Tim</div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">Hadir</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs text-slate-700">Izin</span>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Riwayat</div>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-violet-200" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-violet-100" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
