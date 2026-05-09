import { Microservicio } from "@/interfaces";
import prisma from "@/lib/prisma";

export class MicroservicioService {
  static createMicroservicio = async (data: {}): Promise<void> => {
    try {
      await prisma.microservicio.create({ data });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static deleteMicroservicio = async (id: number) => {
    try {
      await prisma.microservicio.delete({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static getMicroserviciosByServicioId = async (servicioId: number) => {
    try {
      const microservicios = await prisma.microservicio.findMany({
        where: {
          id_servicio: servicioId,
        },
      });
      console.log({ microservicios });
      return microservicios.map(mapper);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

const mapper = (data: any): Microservicio => {
  const { servicio: microservicio } = data;
  return {
    id: `${microservicio.id}`,
    nombre: microservicio.nombre,
    descripcion: microservicio.descripcion,
    url: microservicio.url,
    ambiente: microservicio.ambiente,
    notas: microservicio.notas,
  };
};
