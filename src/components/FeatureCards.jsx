import { CheckSquare, Ticket, UserCheck, Shield, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Checklist Aset",
    desc: "Checklist harian/mingguan dengan template, bukti foto, dan status real-time.",
  },
  {
    icon: Ticket,
    title: "Ticketing",
    desc: "Kelola tiket gangguan: prioritas, SLA, assignment, dan histori penanganan.",
  },
  {
    icon: UserCheck,
    title: "Absensi",
    desc: "Check-in berbasis lokasi dan QR, jadwal shift, dan rekap kehadiran otomatis.",
  },
  {
    icon: Shield,
    title: "Kontrol Akses",
    desc: "Peran dan izin granular untuk admin, teknisi, dan auditor.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Dashboard KPI: tingkat kepatuhan, MTTR, dan utilisasi aset.",
  },
  {
    icon: Clock,
    title: "Reminder Cerdas",
    desc: "Notifikasi jadwal pemeliharaan dan tiket mendekati SLA.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fitur Unggulan</h2>
          <p className="mt-3 text-gray-600">Semua yang Anda butuhkan untuk mengelola aset secara efektif.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/30 bg-white/70 p-6 backdrop-blur shadow-sm hover:shadow-md transition shadow-blue-500/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
