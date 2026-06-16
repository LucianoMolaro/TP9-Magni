import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FestivalProvider } from "./context/festival_context";
import ListaArtistasDisponibles from "./paginas/lista_artistas_disponibles";
import ListaFestivalFinal from "./paginas/lista_festival_final";

export default function App() {
  return (
    <BrowserRouter>
      <FestivalProvider>
        <Routes>
          <Route path="/" element={<ListaArtistasDisponibles />} />
          <Route path="/festival-final" element={<ListaFestivalFinal />} />
        </Routes>
      </FestivalProvider>
    </BrowserRouter>
  );
}
