
export const APP_PAGES = {
    // Páginas Generales
    inicio: '/',
    inforcap: '/inforcap',
    formacion_profesional: '/formacion-profesional',
    videos: '/videos',

    // Carreras Técnicas
    carrera_tecnica_panaderia_y_confiteria: '/carreras-tecnicas/panaderia-y-confiteria',

    // Especializaciones
    especializacion_pasteleria_y_confiteria: '/especializaciones/pasteleria-y-confiteria',
    especializacion_decoracion_de_tortas: '/especializaciones/decoracion-de-tortas',

    especializaciones: (slug: string) => `/especializaciones/${slug}`,

    diplomados: (slug: string) => `${slug}`,
    contenido: (slug: string) => `${slug}`,//para taller o seminarios
    // Formaciones Profesionales
    capacitacion_personalizada: '/formacion-profesional/capacitacion-personalizada',
    clases_magistrales: '/formacion-profesional/clases-magistrales',
}



