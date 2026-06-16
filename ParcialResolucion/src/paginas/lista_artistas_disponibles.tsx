import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFestival } from "../context/festival_context";
import Artista from "../modelo/Artista";

const GENERO_CONFIG: Record<string, { color: string; bg: string; badge: string }> = {
  ROC: { color: "text-red-400", bg: "bg-red-600", badge: "bg-red-900 text-red-300" },
  POP: { color: "text-pink-400", bg: "bg-pink-600", badge: "bg-pink-900 text-pink-300" },
  ELE: { color: "text-blue-400", bg: "bg-blue-600", badge: "bg-blue-900 text-blue-300" },
  URB: { color: "text-green-400", bg: "bg-green-600", badge: "bg-green-900 text-green-300" },
};

function ArtistaCard({
  artista,
  onClick,
  seleccionado,
}: {
  artista: Artista;
  onClick: (a: Artista) => void;
  seleccionado: boolean;
}) {
  const cfg = GENERO_CONFIG[artista.codigoGenero] ?? {
    color: "text-gray-400",
    bg: "bg-gray-600",
    badge: "bg-gray-800 text-gray-300",
  };

  const iniciales = artista.nombreArtistico
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      onClick={() => onClick(artista)}
      className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-violet-500 rounded-lg px-3 py-2 cursor-pointer transition-all duration-150"
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${cfg.bg}`}
      >
        {iniciales}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-semibold text-gray-100 truncate">
          {artista.nombreArtistico}
        </span>
        <span className="text-xs text-gray-400">{artista.pais}</span>
        <span className={`text-xs font-bold uppercase tracking-wide ${cfg.color}`}>
          {artista.genero}
        </span>
      </div>
      <button
        className={`w-7 h-7 rounded-full text-white font-bold text-lg flex items-center justify-center flex-shrink-0 transition-colors ${
          seleccionado ? "bg-red-600 hover:bg-red-500" : "bg-green-600 hover:bg-green-500"
        }`}
      >
        {seleccionado ? "−" : "+"}
      </button>
    </div>
  );
}

const REQUISITOS = [
  { codigo: "ROC", nombre: "Rock", min: 5 },
  { codigo: "POP", nombre: "Pop", min: 5 },
  { codigo: "ELE", nombre: "Electrónica", min: 3 },
  { codigo: "URB", nombre: "Urbano", min: 3 },
];

export default function ListaArtistasDisponibles() {
  const {
    artistasDisponibles,
    artistasSeleccionados,
    moverASeleccionados,
    moverADisponibles,
    puedeGenerarGrilla,
  } = useFestival();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  function handleGenerar() {
    const err = puedeGenerarGrilla();
    if (err) {
      setError(err);
    } else {
      setError(null);
      navigate("/festival-final");
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-violet-800 px-6 py-4 text-center">
        <h1 className="text-2xl font-bold text-violet-400 tracking-wide">
          🎵 Festival Internacional de Música 2026
        </h1>
      </header>

      {/* Columnas */}
      <div className="flex flex-1 gap-4 p-4 overflow-hidden">
        {/* Columna Izquierda - Disponibles */}
        <div className="flex-1 bg-gray-900 rounded-xl border border-gray-700 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h2 className="text-base font-bold text-violet-300">Artistas Disponibles</h2>
            <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
              Total: {artistasDisponibles.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            {artistasDisponibles.length === 0 ? (
              <p className="text-gray-500 text-center italic py-10 text-sm">
                No hay artistas disponibles
              </p>
            ) : (
              artistasDisponibles.map((a) => (
                <ArtistaCard
                  key={a.id}
                  artista={a}
                  onClick={moverASeleccionados}
                  seleccionado={false}
                />
              ))
            )}
          </div>
        </div>

        {/* Columna Derecha - Seleccionados */}
        <div className="flex-1 bg-gray-900 rounded-xl border border-gray-700 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h2 className="text-base font-bold text-violet-300">Artistas Seleccionados</h2>
            <span className="bg-green-900 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
              Total: {artistasSeleccionados.length} / 20
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            {artistasSeleccionados.length === 0 ? (
              <p className="text-gray-500 text-center italic py-10 text-sm">
                Ningún artista seleccionado aún
              </p>
            ) : (
              artistasSeleccionados.map((a) => (
                <ArtistaCard
                  key={a.id}
                  artista={a}
                  onClick={moverADisponibles}
                  seleccionado={true}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Resumen géneros */}
      {artistasSeleccionados.length > 0 && (
        <div className="flex justify-center gap-3 px-4 pb-2 flex-wrap">
          {REQUISITOS.map(({ codigo, nombre, min }) => {
            const count = artistasSeleccionados.filter((a) => a.codigoGenero === codigo).length;
            const ok = count >= min;
            const cfg = GENERO_CONFIG[codigo];
            return (
              <div
                key={codigo}
                className={`flex flex-col items-center rounded-lg px-4 py-2 border ${
                  ok ? "border-green-600 bg-green-950" : "border-red-600 bg-red-950"
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider ${cfg.color}`}>
                  {nombre}
                </span>
                <span className={`text-lg font-bold ${ok ? "text-green-400" : "text-red-400"}`}>
                  {count}/{min}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mx-4 mb-2 bg-red-950 border border-red-600 text-red-300 rounded-lg px-4 py-3 text-sm text-center">
          ⚠️ {error}
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-700 px-6 py-3 flex justify-center">
        <button
          onClick={handleGenerar}
          className="bg-violet-700 hover:bg-violet-600 active:bg-violet-800 text-white font-bold px-10 py-3 rounded-lg text-base tracking-wide transition-colors shadow-lg shadow-violet-900"
        >
          Generar Grilla Final
        </button>
      </div>
    </div>
  );
}
