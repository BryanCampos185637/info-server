"use server";
import { revalidatePath } from "next/cache";

import { DatosServicioForm } from "@/interfaces";
import { ServicioService } from "@/services";

const SaveServicio = async (data: DatosServicioForm) => {
  try {
    await ServicioService.createServicio(data);
    revalidatePath("/servicio");
  } catch (error) {
    throw error;
  }
};

const UpdateServicio = async (id: string, data: DatosServicioForm) => {
  try {
    if (!Number(id)) {
      throw new Error("El ID del servicio es inválido");
    }

    await ServicioService.updateServicio(+id, data);
    revalidatePath("/servicio");
  } catch (error) {
    throw error;
  }
};

export { SaveServicio, UpdateServicio };
