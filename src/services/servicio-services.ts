import { Servicio, TipoAmbiente } from "@/interfaces";
import prisma from "@/lib/prisma";

export class ServicioService {
  static async getServicios(): Promise<Servicio[]> {
    try {
      const servicios = await prisma.servicio.findMany();
      return servicios.map(mapper);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getServicioById(id: number): Promise<Servicio> {
    try {
      const servicio = await prisma.servicio.findUnique({
        where: { id },
      });
      return mapper(servicio);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async createServicio(data: {
    nombre: string;
    descripcion: string;
    url: string;
    ambiente: TipoAmbiente;
    notas?: string;
  }): Promise<Servicio> {
    try {
      const servicio = await prisma.servicio.create({ data });
      return mapper(servicio);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async updateServicio(
    id: number,
    data: {
      nombre: string;
      descripcion: string;
      url: string;
      ambiente: TipoAmbiente;
      notas?: string;
    },
  ): Promise<Servicio> {
    try {
      const servicio = await prisma.servicio.update({
        where: { id },
        data,
      });
      return mapper(servicio);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async deleteServicio(id: number): Promise<void> {
    try {
      await prisma.servicio.delete({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const mapper = (servicio: any): Servicio => {
  return { id: `${servicio.id}`, ...servicio };
};
