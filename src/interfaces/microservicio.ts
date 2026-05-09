export interface Microservicio {
  id: string;
  nombre: string;
  descripcion: string;
  url: string;
  ambiente: string;
  notas: string | null;
}
