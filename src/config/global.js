export default {
  global: {
    componenteFormativo: 'Implementar la arquitectura de <em>software<em>',
    descripcionCurso:
      'La arquitectura de <em>software</em> es la base donde se cimienta la estructura de un componente o aplicación de <em>software</em> a desarrollar, por esta razón, está orientada a la comprensión de los conceptos más importantes para tener en cuenta en la construcción de dicha estructura y pretende resolver los requerimientos no funcionales de un <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/f1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/f2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/f3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/f4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/f5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/f6.png'),
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
        titulo: 'Conceptos del ciclo de vida del <em>software</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Patrones de diseño definición y clasificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estilos arquitectónicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagramas UML',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Documentación de la arquitectura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Verificar atributos de calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Seguridad - OWASP',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      tema: 'Estilos arquitectónicos',
      referencia:
        'Cubic Factory. (s. f.). Editor HTML Online · Editor CSS Online · Editor JavaScript Online.',
      tipo: 'Página web.',
      link: 'https://www.cubicfactory.com/jseditor/',
    },
    {
      tema: 'Estilos arquitectónicos',
      referencia:
        'CodeSandbox: Online Code Editor and IDE for Rapid Web Development.',
      tipo: 'Página web.',
      link: 'https://codesandbox.io',
    },
    {
      tema: 'Documentación de la arquitectura',
      referencia: 'Normas ISO 25000',
      tipo: 'Página web.',
      link: 'https://iso25000.com/',
    },
    {
      tema: 'Seguridad - OWASP',
      referencia: 'OWASP Foundation. (s. f.). Guía de pruebas OWASP.',
      tipo: 'Página web.',
      descarga: '/downloads/Guia_de_pruebas_de_OWASP_ver_3.0.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Apache Kafka',
      significado:
        '<em>software</em> manejador de eventos o también conocido como motor de eventos.',
    },
    {
      termino: 'SDLC',
      significado: 'Ciclo de vida del desarrollo de software.',
    },
    {
      termino: 'SOA',
      significado: 'Arquitectura Orientada a Servicios.',
    },
    {
      termino: 'PMV',
      significado: 'Producto mínimo viable.',
    },
    {
      termino: 'Capa',
      significado: 'conjunto de clases.',
    },
    {
      termino: 'RPC',
      significado: 'Llamada a procedimientos remotos.',
    },
    {
      termino: 'IoT',
      significado: 'Internet de las cosas.',
    },
  ],
  referencias: [
    {
      referencia: 'Bertucelli, M. (2019). Arquitectura de capas. Somospnt.',
      link: 'https://somospnt.com/blog/118-arquitectura-de-capas',
    },
    {
      referencia:
        'Clements, P., Bachmann, F., Bass, L., Garlan, D. y Ivers, J. (2010). Documenting Software Architectures: Views and Beyond. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Cueva, J. (1999). Calidad del Software. Universidad Nacional de la Pampa.        ',
      link: '',
    },
    {
      referencia:
        'Departamento de Ciencia de la Computación e Inteligencia Artificial. (2019). Arquitectura orientada a servicios (SOA). Universidad de Alicante.',
      link:
        'http://www.jtech.ua.es/j2ee/2007-2008/restringido/int/sesion02-apuntes.html',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (2022). ISO/IEC/IEEE 29119-1:2022 <em>Software and systems engineering — Software testing — Part 1: General concepts.ISO Store.</em>',
      link: 'https://www.iso.org/standard/81291.html',
    },
    {
      referencia:
        'Larman, C. (2004). <em>Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development. Pearson.</em>',
      link: '',
    },
    {
      referencia:
        'Martínez, M. (2020). ¿Qué son los patrones de diseño de <em>software? Profile</em>. ',
      link: 'https://profile.es/blog/patrones-de-diseno-de-software/',
    },
    {
      referencia:
        'Node.js (2022). Node.js assessment of OpenSSL 3 May 2022 security releases.',
      link: 'https://nodejs.org/en/',
    },
    {
      referencia:
        'React.js. (2021). React – A JavaScript library for building user interfaces.',
      link: 'https://reactjs.org/',
    },
    {
      referencia:
        'Red Hat. (2020). ¿Qué es la arquitectura orientada a los servicios (SOA)?',
      link:
        'https://www.redhat.com/es/topics/cloud-native-apps/what-is-service-oriented-architecture',
    },
    {
      referencia:
        'Schmuller, J. (2000). Aprendiendo UML en 24 horas. Prentice Hall.',
      link:
        'https://www.academia.edu/17124068/Aprendiendo_UML_en_24_Horas_Joseph_Schmuller',
    },
    {
      referencia:
        'Ungoti. (s. f.). Ciclo de vida del desarrollo de <em>software</em>. ',
      link:
        'https://ungoti.com/es/soluciones/desarrollo-de-software/sdlc/#:%7E:text=El%20ciclo%20de%20vida%20del,definici%C3%B3n%20de%20los%20requisitos%20hasta',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
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
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
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
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
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
