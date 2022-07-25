<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estilos arquitectónicos   

    .bg_gray_right.pt-4.mb-5
      .row.justify-content-center
        .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_01.png", alt="alt")

        .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade")      
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
            .col
              p.mb-0 #[span.txt--blue.strong Un aspecto muy importante en arquitectura de software son los patrones, tanto de diseño como de arquitectura, que son complementados por los estilos arquitectónicos.] Los estilos favorecen el tratamiento estructural, la investigación y la teoría, mientras que los patrones están orientados o están más cerca del diseño, la práctica, el proceso o el código. Un estilo describe una clase de arquitectura o partes de esta, los estilos pueden ser reutilizados en situaciones semejantes, a futuro.
          .cajon.cjn--yellow 
            p.strong.mb-0 Un estilo arquitectónico es una abstracción de tipos de elementos y aspectos formales a partir de arquitecturas específicas o un conjunto de reglas de diseño que identifica las clases de componentes y conectores que se pueden utilizar para componer el sistema o subsistema, junto con las restricciones locales o globales de la forma en que la composición se lleva a cabo.

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        ul.fa-ul
          li(data-aos="fade")
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong Componentes:] sistemas encapsulados indicando la forma de empaquetado y la forma en que interactúan con otros componentes.
          .hr_line(data-aos="fade")
          li(data-aos="fade")
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong Conectores:] los procesos interactúan por medio de protocolos de transferencia de mensajes o por flujo de datos, etc.
          .hr_line(data-aos="fade")
          li(data-aos="fade")
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong Estilo arquitectónico:]  es una descripción del patrón de los datos y la interacción de control entre los componentes, ligada a una descripción informal de los beneficios e inconvenientes del uso del estilo.
          .hr_line(data-aos="fade")
          li(data-aos="fade")
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong Estilos:] son entidades que ocurren en un nivel sumamente abstracto y puramente arquitectónico.
          .hr_line(data-aos="fade")
          li(data-aos="fade")
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong Evolución:] Estructurado, Orientado a objetos, Orientado a componentes, Orientado a servicios.

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt")

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Catálogo de estilos arquitectónicos

    p(data-aos="fade") Hay diferentes tipos de arquitectura, por lo cual le presentamos el catálogo de los estilos arquitectónicos más comunes, a través del siguiente video

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
