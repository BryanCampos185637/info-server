import { Aplicacion } from "@/interfaces";
import prisma from "@/lib/prisma";

export class AplicacionService {
  static async getAplicaciones(): Promise<Aplicacion[]> {
    try {
      const aplicaciones = await prisma.aplicacion.findMany();
      return aplicaciones.map(mapper);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAplicacionById(id: number): Promise<Aplicacion> {
    try {
      const aplicaciones = await prisma.aplicacion.findUnique({
        where: { id },
      });
      return mapper(aplicaciones);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async createAplicacion(data: {
    nombre: string;
    version: string;
    ambiente: string;
  }): Promise<Aplicacion> {
    try {
      const aplicaciones = await prisma.aplicacion.create({ data });
      return mapper(aplicaciones);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async updateAplicacion(
    id: number,
    data: { nombre: string; version: string; ambiente: string },
  ): Promise<Aplicacion> {
    try {
      const aplicaciones = await prisma.aplicacion.update({
        where: { id },
        data,
      });
      return mapper(aplicaciones);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async deleteAplicacion(id: number): Promise<void> {
    try {
      await prisma.aplicacion.delete({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const mapper = (aplicacion: any): Aplicacion => {
  return { id: `${aplicacion.id}`, ...aplicacion };
};
