import { TipoAmbiente } from "./servicio";

export interface Aplicacion {
  id: string;
  nombre: string;
  version: string;
  ambiente: TipoAmbiente;
}
