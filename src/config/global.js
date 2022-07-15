export default {
  global: {
    componenteFormativo: 'Seguimiento y control de ventas',
    descripcionCurso:
      'El cliente es el motor de cualquier empresa por pequeña que sea, la atención al cliente es una tarea que no se debe dejar de lado, los clientes fidelizados son la mejor estrategia de comercialización de cualquier tipo de producto, no solo se trata de hacer una venta, es importante hacer seguimiento, el <i>feedback</i> es la mejor estrategia de éxito y  posicionamiento de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fidelización de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y etapas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Retroalimentación e importancia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aplicación de la retroalimentación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicio posventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Seguimiento y fidelización',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Realización de encuestas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Registros ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Recolección de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Datos cuantitativos y datos cualitativos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Interpretación de resultados',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Realización de un reporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Presentación de reportes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Seguimiento del reporte',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Evaluación final',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fidelización de clientes',
      referencia:
        'Conduce tu empresa [Conduce Tu Empresa].(2021, 13 de agosto) ¿Qué es la fidelización del cliente?  Ventajas y Desventajas de fidelizar clientes.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sfkgNgU44vo',
    },
    {
      tema: 'Servicio posventa',
      referencia:
        'NextLab Ventures Group. [NextLab Ventures Group] (2014, 19 de junio del).Servicio Posventa.Definición.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BwM_CenfDZI',
    },
    {
      tema: 'Datos Cuantitativos y Datos Cualitativos',
      referencia:
        'Datademia. [Datademia]. (2021, 1 de noviembre ) Diferencia entre datos cualitativos vs datos cuantitativos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H6NBPgWoFtw',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos',
      significado:
        'Es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: 'Cuantitativo',
      significado:
        'Es un adjetivo que se emplea con frecuencia para referirse a la propiedad numérica de los datos, investigaciones, métodos o resultados. Este concepto se encuentra asociado de manera directa con “cantidad”, por lo que sus variables siempre pueden medirse.',
    },
    {
      termino: 'Cualitativo',
      significado:
        'Significa calidad, es un análisis y valoración de la naturaleza o modo de ser de un objeto o fenómeno.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona o entidad que compra los bienes y servicios que ofrece una empresa.',
    },
    {
      termino: 'Cliente Leal',
      significado:
        'Es uno de los principales elementos que eleva la competitividad de una marca. Es aquel usuario que maximiza la utilización de un determinado producto y/o servicio, volviéndose indispensable para la empresa.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Es un instrumento para recoger información cualitativa y/o cuantitativa de una población estadística. Para ello, se elabora un cuestionario, cuyos datos obtenidos serán procesados con métodos estadísticos.',
    },
    {
      termino: 'Lead',
      significado:
        'Lead	Se refiere al contacto con un cliente potencial, también conocido como un “prospecto”.',
    },
    {
      termino: 'Retroalimentación ',
      significado:
        'Hace referencia a una serie  de elementos relacionados entre sí, y se designa para mencionar el regreso de una parte de la salida a la propia entrada, es un concepto muy utilizado en el ámbito de la comunicación.',
    },
    {
      termino: 'Registro',
      significado:
        'Es el espacio físico o virtual donde se deja constancia de un hecho, o el acto de hacer lo mismo. Esto, con el fin de que terceras personas y las autoridades competentes estén informadas al respecto.',
    },
    {
      termino: 'Reporte',
      significado:
        'Es un documento informativo que sirve para comunicar información que sea relevante, este puede ser un material creado por una empresa, organización o un trabajo de clases que sirve para dar mayor información sobre un tema en específico, por otro lado, el reporte también la información que se divulga a través de un medio de comunicación, este puede ser visual o textual.',
    },
    {
      termino: 'Posventa',
      significado:
        'Parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades.',
    },
    {
      termino: 'Venta en línea',
      significado:
        'Consiste en ofrecer productos, servicios, ideas u otros mediante internet, de tal forma, que los posibles compradores puedan conocer en qué consisten y cuáles son sus ventajas y beneficios a través la web',
    },
    {
      termino: 'Soporte Técnico',
      significado:
        'Este servicio se brinda en forma remota (generalmente por teléfono). Cuando un técnico de soporte trabaja en un centro de atención al cliente (también conocido como departamento de soporte técnico) puede asistir a clientes de compañías diferentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Botín, R, (2022). Servicio post venta: 8 estrategias y ejemplos infalibles.',
      link:
        'https://www.shopify.com.mx/blog/17011080-lo-que-debes-saber-sobre-el-servicio-post-venta',
    },
    {
      referencia:
        'Da Silva, D. (2021). Importancia de la fidelización de clientes: ¿cómo construir lealtad? ',
      link:
        'https://www.zendesk.com.mx/blog/importancia-de-la-fidelizacion-de-clientes/',
    },
    {
      referencia:
        'Da Silva, D. (2021). 5 métricas para evaluación de la fuerza de ventas.',
      link: 'https://www.zendesk.com.mx/blog/evaluacion-fuerza-de-ventas/',
    },
    {
      referencia:
        'Chávez, José. (sf). ¿Qué es la Calidad de datos? Concepto y beneficios.',
      link:
        'https://www.ceupe.com/blog/calidad-de-datos.html?msclkid=127517afb5b311eca902e195d4dc88dd',
    },
    {
      referencia: 'Gevert, R. (2022). seguimiento y fidelización de clientes. ',
      link:
        'https://gevert.com/2022/01/13/seguimiento-y-fidelizacion-de-clientes-b2b/',
    },
    {
      referencia:
        'Gutiérrez, P.(sf). Cómo Hacer Seguimiento Al Cliente (Métodos y Automatizaciones). ',
      link: 'https://www.linkportnet.com/blog/seguimiento-al-cliente/',
    },
    {
      referencia: 'Medina, F. (2021). Recolección de datos.',
      link: 'https://economipedia.com/definiciones/recoleccion-de-datos.html',
    },
    {
      referencia:
        'Muriel, A. (2020). Fidelización del cliente: concepto, importancia, consejos y métricas. ',
      link: 'https://www.rdstation.com/es/blog/fidelizacion-del-cliente/',
    },
    {
      referencia:
        'Lauria, G. (2019). Conoce los 6 Pasos del Proceso de Fidelización de Clientes Nuevos. ',
      link: 'https://debmedia.com/blog/fidelizacion-de-clientes/',
    },
    {
      referencia:
        'QuestionPro. (sf). Retroalimentación del cliente: Qué es y cuál es su importancia. ',
      link:
        'https://www.questionpro.com/blog/es/retroalimentacion-del-cliente-para-impulsar-un-negocio/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifha',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
