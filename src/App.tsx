import { MODELS, type Model } from './data/models';

const LOBE_BASE = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/';

function ModelLogo({ slug, bg, invert }: { slug: string; bg: string; invert: boolean }) {
  return (
    <div
      className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl shadow-md overflow-hidden border border-slate-200"
      style={{ background: bg }}
    >
      <img
        src={`${LOBE_BASE}${slug}.svg`}
        alt=""
        loading="lazy"
        className="w-6 h-6 object-contain"
        style={invert ? { filter: 'invert(1)' } : undefined}
      />
    </div>
  );
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <span className="bg-gradient-to-br from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-black text-xl">
        1
      </span>
    );
  if (rank === 2)
    return (
      <span className="bg-gradient-to-br from-gray-200 to-gray-500 bg-clip-text text-transparent font-black text-xl">
        2
      </span>
    );
  if (rank === 3)
    return (
      <span className="bg-gradient-to-br from-amber-500 to-amber-800 bg-clip-text text-transparent font-black text-xl">
        3
      </span>
    );
  return <span className="text-gray-400 font-semibold text-base">{rank}</span>;
}

function ContextPill({ ctx, color }: { ctx: string; color: string }) {
  const map: Record<string, string> = {
    pink: 'text-pink-600 bg-pink-50 border-pink-200',
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    purple: 'text-violet-600 bg-violet-50 border-violet-200',
    gray: 'text-slate-600 bg-slate-50 border-slate-200',
  };
  return (
    <span
      className={`px-2.5 py-0.5 text-[10px] font-black rounded-full border-2 uppercase tracking-tight ${map[color] ?? map.gray}`}
    >
      {ctx}
    </span>
  );
}

export default function App() {
  const rows: Model[] = MODELS;

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-700 font-sans pb-16 selection:bg-blue-500 selection:text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute top-60 -right-20 w-[600px] h-[600px] bg-sky-300/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[700px] h-[700px] bg-indigo-200/15 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-700">Chính Thức • Cập nhật Tháng 4/2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-mono font-black text-slate-900 tracking-[-0.04em] leading-[1.1] mb-6">
          BẢNG XẾP HẠNG <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-500 font-bold leading-relaxed mb-4">
          Models Dịch Thuật Tiếng Trung sang Tiếng Việt
        </p>
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative w-full overflow-hidden rounded-[32px] border-2 border-slate-300 shadow-[0_30px_70px_rgba(0,0,0,0.08)] bg-white/95 backdrop-blur-3xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap min-w-[1000px]">
              <thead className="text-[11px] text-slate-500 font-black uppercase tracking-[0.1em] bg-slate-100/90 border-b-2 border-slate-200 sticky top-0 z-20">
                <tr>
                  <th className="px-6 py-5 text-center w-20">Rank</th>
                  <th className="px-5 py-5 text-center w-28">Spread</th>
                  <th className="px-6 py-5">Mô Hình</th>
                  <th className="px-6 py-5 text-center w-40">Elo Score</th>
                  <th className="px-6 py-5 text-center w-36">Context</th>
                </tr>
              </thead>

              <tbody className="divide-y-2 divide-slate-100">
                {rows.map((m) => (
                  <tr key={`model-${m.rank}`} className="bg-white hover:bg-blue-50/30 transition-all duration-200 group">
                    <td className="px-6 py-4.5 text-center border-r-2 border-slate-100/50">
                      <RankBadge rank={m.rank} />
                    </td>

                    <td className="px-5 py-4.5 text-center border-r border-slate-100/50">
                      <div className="flex items-center justify-center gap-1 font-mono text-slate-400 text-[11px]">
                        <span className="opacity-60">{m.rankMin}</span>
                        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-slate-300" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 15h8M12 5v14" />
                        </svg>
                        <span>{m.rankMax}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4.5 border-r border-slate-100/50">
                      <div className="flex items-center gap-4">
                        <ModelLogo slug={m.logoSlug} bg={m.logoBg} invert={m.logoInvert} />
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-800 font-mono font-black text-sm group-hover:text-blue-600 transition-colors">
                              {m.name}
                            </span>
                            {m.rank <= 10 ? (
                              <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 text-[9px] font-black tracking-widest uppercase">TỐT</span>
                            ) : m.rank <= 12 ? (
                              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-200 text-[9px] font-black tracking-widest uppercase">TẠM</span>
                            ) : (
                              <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-200 text-[9px] font-black tracking-widest uppercase">RÁC</span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400 mt-0.5 font-bold uppercase tracking-tight">
                            {m.provider} &bull;{' '}
                            <span className={m.license === 'Open' ? 'text-emerald-600' : ''}>
                              {m.license}
                            </span>
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4.5 border-r border-slate-100/50 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="text-base font-black text-slate-800 leading-none">{m.elo}</span>
                        <span className="text-[10px] text-slate-400 font-mono font-bold">±{m.eloError}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4.5 text-center border-r border-slate-100/50">
                      <ContextPill ctx={m.context} color={m.contextColor} />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {rows.length === 0 && (
          <div className="py-20 text-center bg-white/50 rounded-[32px] border-2 border-dashed border-slate-300 mt-8">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Không tìm thấy mô hình nào</span>
          </div>
        )}
      </div>
    </div>
  );
}
