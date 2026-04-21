import type { StandingRow } from "@/types";
import Link from "next/link";

interface RankingTableProps {
  rows: StandingRow[];
  title?: string;
  round?: string;
}

export default function RankingTable({
  rows,
  title = "Classement Ligue 1",
  round = "J22",
}: RankingTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b-2 border-[#CC0000]">
        <h3 className="text-xs font-black text-white uppercase tracking-widest">
          {title} — {round}
        </h3>
        <Link
          href="/classements"
          className="text-[10px] text-white/60 font-bold hover:text-white transition-colors"
        >
          Complet →
        </Link>
      </div>

      {/* Table */}
      <table className="w-full text-xs border-collapse" aria-label={title}>
        <thead>
          <tr className="bg-gray-50">
            <th className="py-2 px-2 text-center text-[10px] font-black text-gray-400 uppercase w-6" scope="col">#</th>
            <th className="py-2 pl-3 text-left text-[10px] font-black text-gray-400 uppercase" scope="col">Club</th>
            <th className="py-2 px-2 text-center text-[10px] font-black text-gray-400 uppercase" scope="col" title="Points">Pts</th>
            <th className="py-2 px-2 text-center text-[10px] font-black text-gray-400 uppercase" scope="col" title="Matchs joués">J</th>
            <th className="py-2 px-2 text-center text-[10px] font-black text-gray-400 uppercase" scope="col" title="Différence de buts">DB</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.rank}
              className={[
                "border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50/80",
                row.status === "leader" ? "bg-red-50/50" : "",
                row.status === "relegation" ? "bg-gray-50 text-gray-400" : "",
              ].join(" ")}
            >
              <td className="py-2 px-2 text-center font-bold text-gray-400">{row.rank}</td>
              <td className="py-2 pl-3 font-bold text-gray-800">
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: row.color }}
                  />
                  {row.name}
                </span>
              </td>
              <td className="py-2 px-2 text-center font-black text-gray-900">{row.points}</td>
              <td className="py-2 px-2 text-center text-gray-500">{row.played}</td>
              <td className={`py-2 px-2 text-center ${row.gd > 0 ? "text-green-700" : row.gd < 0 ? "text-red-600" : "text-gray-400"}`}>
                {row.gd > 0 ? `+${row.gd}` : row.gd}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="px-3 py-2 bg-gray-50 border-t border-gray-100 flex flex-col gap-1">
        <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <span className="w-2 h-2 rounded-full bg-[#CC0000]" /> Champions + Ligue des Champions CAF
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <span className="w-2 h-2 rounded-full bg-gray-300" /> Relégation
        </span>
      </div>
    </div>
  );
}
