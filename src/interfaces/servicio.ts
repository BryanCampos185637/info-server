export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  url: string;
  ambiente: TipoAmbiente;
  notas?: string;
}

export interface DatosServicioForm {
  nombre: string;
  descripcion: string;
  url: string;
  ambiente: TipoAmbiente;
  notas?: string;
}

export type TipoAmbiente = "DEV" | "QA" | "PRD" | "";
