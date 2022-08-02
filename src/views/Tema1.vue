<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos del ciclo de vida del <em>software</em>   

    .row.justify-content-center.mb-5
      .col-lg-8
        .row(data-aos="fade").mb-4
          .col-auto
            figure
              img(src="@/assets/curso/recursos/square_04.svg", alt="alt")
          .col
            p #[span.txt--blue.strong Según Ungoti (2021), el ciclo de vida del desarrollo de #[em software] (SDLC – #[em Systems Development Life Cycle])] #[span.strong “es la estructura que contiene los procesos, actividades y tareas relacionadas con el desarrollo y mantenimiento de un producto de #[em software], abarcando la vida completa del sistema, desde la definición de los requisitos hasta la finalización de su uso, y en general, el ciclo de vida del #[em software] comprende los siguientes ítems:”]
        .row.justify-content-center
          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .bg--gray.brd--top
              figure
                img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt").img220.m-auto
            .bg--darkBlue.brd--botom
              h5.text-center.text-white.mb-0.py-2 Gestión de proyectos ágiles
          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .bg--gray.brd--top
              figure
                img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt").img220.m-auto
            .bg--darkBlue.brd--botom
              h5.text-center.text-white.mb-0.py-2 Tablero Kanban
          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .bg--gray.brd--top
              figure
                img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt").img220.m-auto
            .bg--darkBlue.brd--botom
              h5.text-center.text-white.mb-0.py-2 Equipo de desarrollo

      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")

    .bg_img_02
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5
            .col-auto 
              figure
                img(src="@/assets/curso/temas/t1/t1_05.png", alt="alt").img145
            .col
              p.mb-0 Observe, a continuación, #[strong las definiciones de los ítems que conforman el ciclo de vida del desarrollo de #[em software] (SDLC) y que, a su vez, mantienen un orden de realización lógico:]

      .row.justify-content-center.mb-5
        .col-lg-5.col-8.order-2.order-lg-1(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_06.svg", alt="alt")
        .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade")
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="Comunicación")
              .col-12
                p.mb-0 Este es el momento en el que un cliente solicita un producto de #[em software] determinado.<br><br>Nos contacta para plasmar sus necesidades concretas y presentar su solicitud de desarrollo de #[em software].

            .row(numero="2" titulo="Planificación y análisis")
              .col-12
                p El desarrollo de #[em software] comienza con una fase inicial de planificación, incluyendo un análisis de requisitos. Nos fijamos en los requisitos que piden los clientes para estudiar cuáles están poco claros, incompletos, ambiguos o contradictorios.
                .cajon.cjn--yellow
                  p Se indaga en profundidad y se hacen demostraciones prácticas, incluyendo a los usuarios clave. Los requisitos se agrupan en requisitos del usuario, requisitos funcionales y requisitos del sistema. La recolección de todos los requisitos se lleva a cabo: estudiando el #[em software] actual que tengan, entrevistando a usuarios y desarrolladores, consultando bases de datos o mediante cuestionarios.

            .row(numero="3" titulo="Estudio de viabilidad")
              .col-12
                p Después de la recolección de requisitos, se idea un plan para procesar el #[em software], se analiza qué parte del #[em software] cubre los requisitos de cada usuario. 
                .cajon.cjn--yellow
                  p Se investiga la viabilidad financiera y tecnológica y se utilizan algoritmos para saber si el proyecto de #[em software] es factible o no.

            .row(numero="4" titulo="Análisis del sistema")
              .col-12
                p.mb-0 En este paso, el equipo del proyecto asigna recursos y planifica el tiempo de duración del proyecto. Se buscan limitaciones del producto y se identifican los impactos del proyecto sobre toda la organización en su conjunto. 

      .row.justify-content-center.mb-5    
        .col-lg-7.mb-4(data-aos="fade")
          LineaTiempoD.color-acento-contenido
            .row(numero="5" titulo="Codificación")
              .col-12
                p Esta fase también es denominada “fase de programación” o “fase de desarrollo”, es en la que se elige el lenguaje de programación más conveniente y se desarrollan programas ejecutables y sin errores, de manera eficiente.
                .cajon.cjn--yellow
                  p Nuestro enfoque es construir trozos de funcionalidad. Por lo tanto, entregar unidades de funcionalidad concisa. Al final de esta fase, se puede obtener un PMV (Producto Mínimo Viable) o el #[em software] completamente desarrollado y listo para implementarse. 

            .row(numero="6" titulo="Integración")
              .col-12
                p.mb-0 El #[em software] puede necesitar estar integrado con bibliotecas, bases de datos o con otros programas. Esta fase del SDLC integra el #[em software] con las entidades del mundo exterior.

            .row(numero="7" titulo="Pruebas")
              .col-12
                p Esta fase, junto con la fase de desarrollo, entra en un ciclo continuo hasta que se completan el desarrollo y las pruebas. Probamos, probamos y luego volvemos a probar, tanto como sea necesario, hasta que la funcionalidad sea del 100 %. 
                .cajon.cjn--yellow
                  p Además, se hacen evaluaciones para evitar errores, incluyendo la evaluación de módulos, programas, productos, y finalmente, evaluación con el cliente final. Encontrar errores y arreglarlos a tiempo es la clave para conseguir un #[em software] confiable y eficiente.

            .row(numero="8" titulo="Implementación")
              .col-12
                p.mb-0 Aquí se instala el #[em software], se evalúa la integración, la adaptabilidad, la portabilidad y se instalan las configuraciones posteriores necesarias.

            .row(numero="9" titulo="Formación")
              .col-12
                p.mb-0 Esta es la fase más interesante, la adopción del usuario es muy importante y para ello se ofrece la capacitación inicial para cada usuario. Es importante comprobar el nivel de uso, la experiencia de usuario y resolver cualquier dificultad que pueda surgir a la hora de enfrentarse a un nuevo sistema o plataforma.

            .row(numero="10" titulo="Mantenimiento y funcionamiento")
              .col-12
                p.mb-0 Por último, pero no menos importante, el mantenimiento es uno de los elementos clave de éxito de cualquier proyecto. En esta fase, se minimizan pequeños errores, se confirma el buen funcionamiento del #[em software], su eficiencia y estabilidad. El proyecto ya está completado y necesitamos monitorear y mantener de forma continua para garantizar que el proyecto siga ejecutándose bien.
                
        .col-lg-5.col-8(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt")

               
                                                           
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
