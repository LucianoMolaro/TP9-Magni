class Artista {
  id: number;
  nombreArtistico: string;
  pais: string;
  genero: string;
  codigoGenero: string;

  constructor(
    id: number,
    nombreArtistico: string,
    pais: string,
    genero: string,
    codigoGenero: string
  ) {
    this.id = id;
    this.nombreArtistico = nombreArtistico;
    this.pais = pais;
    this.genero = genero;
    this.codigoGenero = codigoGenero;
  }
}

export default Artista;
