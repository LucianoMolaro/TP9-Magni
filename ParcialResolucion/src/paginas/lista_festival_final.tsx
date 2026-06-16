import { useNavigate } from "react-router-dom";
import { useFestival } from "../context/festival_context";
import Artista from "../modelo/Artista";

const GENEROS = [
  { codigo: "ROC", nombre: "Rock", min: 5, color: "text-red-400", border: "border-red-500", bg: "bg-red-600", section: "bg-red-950" },
  { codigo: "POP", nombre: "Pop", min: 5, color: "text-pink-400", border: "border-pink-500", bg: "bg-pink-600", section: "bg-pink-950" },
  { codigo: "ELE", nombre: "Electrónica", min: 3, color: "text-blue-400", border: "border-blue-500", bg: "bg-blue-600", section: "bg-blue-950" },
  { codigo: "URB", nombre: "Urbano", min: 3, color: "text-green-400", border: "border-green-500", bg: "bg-green-600", section: "bg-green-950" },
];

function ArtistaCardFinal({ artista, bgClass }: { artista: Artista; bgClass: string }) {
  const iniciales = artista.nombreArtistico
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg p-2">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${bgClass}`}
      >
        {iniciales}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-gray-100 truncate">
          {artista.nombreArtistico}
        </span>
        <span className="text-xs text-gray-400 truncate">{artista.pais}</span>
      </div>
    </div>
  );
}

export default function ListaFestivalFinal() {
  const { artistasSeleccionados } = useFestival();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-violet-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="border border-violet-600 text-violet-400 hover:bg-violet-700 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            ← Volver
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold text-violet-400">
              🎶 Grilla Final de Programación – 20 Artistas
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Total: {artistasSeleccionados.length} |{" "}
              {GENEROS.map(({ codigo, nombre }) => {
                const count = artistasSeleccionados.filter((a) => a.codigoGenero === codigo).length;
                return `${nombre}: ${count}`;
              }).join(" | ")}
            </p>
          </div>
        </div>
      </header>

      {/* Grilla por géneros */}
      <div className="max-w-5xl mx-auto p-4 flex flex-col gap-6">
        {GENEROS.map(({ codigo, nombre, min, color, border, bg, section }) => {
          const artistas = artistasSeleccionados.filter((a) => a.codigoGenero === codigo);
          return (
            <section
              key={codigo}
              className={`rounded-xl border ${border} ${section} p-4`}
            >
              <div className={`flex items-baseline gap-2 border-l-4 ${border} pl-3 mb-4`}>
                <h2 className={`text-lg font-bold ${color}`}>{nombre}</h2>
                <span className={`text-sm ${color} opacity-75`}>
                  (Min {min}) · Total: {artistas.length} artista{artistas.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* flex-wrap con width 33% tal como indica el examen */}
              <div className="flex flex-wrap">
                {artistas.map((a) => (
                  <div key={a.id} className="w-1/3 box-border p-1">
                    <ArtistaCardFinal artista={a} bgClass={bg} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
