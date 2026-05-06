import { Servicio } from "@/interfaces";

export const serviciosSeed: Servicio[] = [
  {
    id: "1",
    nombre: "API de Autenticación",
    descripcion:
      "Servicio encargado de la gestión de usuarios, tokens JWT y permisos de acceso.",
    url: "https://api-auth.desarrollo.local",
    ambiente: "DEV",
    notas:
      "Requiere configuración de variables de entorno para el secreto del token.",
  },
  {
    id: "2",
    nombre: "Procesador de Pagos",
    descripcion:
      "Gateway para la integración con Stripe y validación de transacciones bancarias.",
    url: "https://payments-stg.empresa.com",
    ambiente: "QA",
    notas: "Usar tarjetas de prueba únicamente.",
  },
  {
    id: "3",
    nombre: "Servicio de Notificaciones",
    descripcion:
      "Microservicio para el envío de correos electrónicos y notificaciones push vía Firebase.",
    url: "https://notify.produccion.com",
    ambiente: "PRD",
  },
  {
    id: "4",
    nombre: "Buscador ElasticSearch",
    descripcion: "Motor de búsqueda indexado para el catálogo de productos.",
    url: "http://localhost:9200",
    ambiente: "DEV",
    notas: "Asegurarse de tener Docker corriendo antes de probar.",
  },
  {
    id: "5",
    nombre: "Gestor de Inventarios",
    descripcion:
      "API interna para el control de stock en tiempo real y sincronización con almacenes.",
    url: "https://inventory-qa.red.internal",
    ambiente: "QA",
  },
];
