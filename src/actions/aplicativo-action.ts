"use server";
import { revalidatePath } from "next/cache";

import { DatosAplicativoForm } from "@/interfaces";
import { AplicacionService } from "@/services";

const SaveAplicativo = async (data: DatosAplicativoForm) => {
  try {
    await AplicacionService.createAplicacion(data);
    revalidatePath("/aplicativo");
  } catch (error) {
    throw error;
  }
};

const UpdateAplicativo = async (id: string, data: DatosAplicativoForm) => {
  try {
    if (!Number(id)) {
      throw new Error("El ID del aplicativo es inválido");
    }

    await AplicacionService.updateAplicacion(+id, data);
    revalidatePath("/aplicativo");
  } catch (error) {
    throw error;
  }
};

export { SaveAplicativo, UpdateAplicativo };
