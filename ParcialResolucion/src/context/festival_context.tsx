import { createContext, useContext, useState, ReactNode } from "react";
import Artista from "../modelo/Artista";
import artistasData from "../artistas.json";

interface FestivalContextType {
  artistasDisponibles: Artista[];
  artistasSeleccionados: Artista[];
  moverASeleccionados: (artista: Artista) => void;
  moverADisponibles: (artista: Artista) => void;
  puedeGenerarGrilla: () => string | null;
}

const FestivalContext = createContext<FestivalContextType | undefined>(undefined);

export function FestivalProvider({ children }: { children: ReactNode }) {
  const [artistasDisponibles, setArtistasDisponibles] = useState<Artista[]>(
    artistasData.map(
      (a) => new Artista(a.id, a.nombreArtistico, a.pais, a.genero, a.codigoGenero)
    )
  );
  const [artistasSeleccionados, setArtistasSeleccionados] = useState<Artista[]>([]);

  function moverASeleccionados(artista: Artista) {
    setArtistasDisponibles((prev) => prev.filter((a) => a.id !== artista.id));
    setArtistasSeleccionados((prev) => [...prev, artista]);
  }

  function moverADisponibles(artista: Artista) {
    setArtistasSeleccionados((prev) => prev.filter((a) => a.id !== artista.id));
    setArtistasDisponibles((prev) => [...prev, artista]);
  }

  function puedeGenerarGrilla(): string | null {
    if (artistasSeleccionados.length !== 20) {
      return `Debe seleccionar exactamente 20 artistas. Actualmente tiene ${artistasSeleccionados.length}.`;
    }
    const rock = artistasSeleccionados.filter((a) => a.codigoGenero === "ROC").length;
    const pop = artistasSeleccionados.filter((a) => a.codigoGenero === "POP").length;
    const ele = artistasSeleccionados.filter((a) => a.codigoGenero === "ELE").length;
    const urb = artistasSeleccionados.filter((a) => a.codigoGenero === "URB").length;

    if (rock < 5 || pop < 5 || ele < 3 || urb < 3) {
      return "La programación del festival no cumple los requisitos por género musical.";
    }
    return null;
  }

  return (
    <FestivalContext.Provider
      value={{
        artistasDisponibles,
        artistasSeleccionados,
        moverASeleccionados,
        moverADisponibles,
        puedeGenerarGrilla,
      }}
    >
      {children}
    </FestivalContext.Provider>
  );
}

export function useFestival(): FestivalContextType {
  const ctx = useContext(FestivalContext);
  if (!ctx) throw new Error("useFestival debe usarse dentro de FestivalProvider");
  return ctx;
}
