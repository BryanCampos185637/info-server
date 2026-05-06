export interface Servicio {
  id: string;
  nombre: string;
  descripcion?: string;
  url: string;
  ambiente: string;
}

export interface DatosServicioForm {
  nombre: string;
  descripcion: string;
  url: string;
  ambiente: string;
}
