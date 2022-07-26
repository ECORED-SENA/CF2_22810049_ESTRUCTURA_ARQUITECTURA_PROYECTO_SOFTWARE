<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Verificar atributos de calidad 

    .row.justify-content-center.align-items-center.pb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_01.png", alt="alt")
      .col-lg-8(data-aos="fade")
        .row.mb-4
          .col-auto.d-none.dlg-flex
            figure
              img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
          .col
            p.mb-0 Es necesario tener en cuenta el concepto de calidad; según la RAE, es el grado en el que un conjunto de características propias de un objeto, llámese “servicio, proceso, producto, sistema, organización, o recurso, cumple con los requisitos, estándares o métricas definidas por una entidad de estandarización.
        .cajon.cjn--yellow.mb-4
          p.strong Para los términos de calidad de producción de #[em software], se pueden verificar utilizando las siguientes normas o estándares, de las cuales ya ha comenzado a conocer algunas en el punto previo, siendo las más conocidas:
        ul.fa-ul
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong ISO:] Organización Internacional de Normalización.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong OWASP:] #[em Open Web Application Security Project] (“Seguridad del #[em software]”).
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong IEC:] Organización de normas internacionales para todas las tecnologías eléctricas, electrónicas y relacionadas.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.txt--blue.strong IEEE:] #[em Institute of Electrical and Electronic Engineers] (Instituto de Ingenieros en Electricidad y Electrónica).

    p(data-aos="fade").mb-4 Tanto los estándares como los modelos garantizan la calidad tanto del producto como del proceso, su implementación depende de las necesidades y enfoques definidos. 

    .cajon.cjn--blue.mb-5(data-aos="zoom-in")
      p.strong Algunos modelos y estándares de calidad clásicos han sido la base para los estándares de calidad más recientes y han permitido que los modelos actuales se consoliden como los más completos, para así optimizar con criterios o estándares que respaldan la calidad.

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Performance y escalabilidad 

    p(data-aos="fade").mb-5 #[span.strong De acuerdo con Lovelle (1999)], cuando se habla de performance, se abordan los términos de rendimiento de un producto; la escalabilidad, por su parte, son las propiedades que se espera de un #[em software] o solución informática, lo cual indica su estabilidad para adaptarse, crecer y manejar más volumen de datos, sin perder la calidad en los procesos que este realiza, a lo que se llama rendimiento.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarH
          .row
            .col-auto
              figure
                img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img115
            .col
              h5.text-white.pt-2 Escalabilidad vertical
              p.text-white.mb-0 Tiene que ver con la migración del sistema a un #[em hardware] de mayor potencia.
      .col-lg-6(data-aos="flip-left")
        .crd.crd--avatarH
          .row
            .col-auto
              figure
                img(src="@/assets/curso/recursos/icon_02.svg", alt="alt").img115
            .col
              h5.text-white.pt-2 Escalabilidad horizontal
              p.text-white.mb-0 Consiste en optimizar el rendimiento del #[em software] desde un aspecto de mejora global, utilizando una red de servidores, los cuales se los conoce como clúster; en resumen, “entre más usuarios, más clúster”. 

    .row.mb-4(data-aos="fade")
      .col-auto
        h3.cstmH3 Disponibilidad y modificabilidad 

    .row.justify-content-center.pb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
          .col
            p.mb-0 La disponibilidad es la capacidad de una aplicación o solución informática de ser accesible y utilizable por los usuarios autorizados cuando estos lo necesiten. Por otra parte, la modificabilidad es la capacidad que tiene el #[em software] para admitir cambios que son necesarios por nuevos requerimientos o por posibles errores que se puedan presentar.
        .cajon.cjn--yellow
          p Estos son atributos de calidad que son indispensables al momento de desarrollar una solución informática, también se los conoce como requisitos no funcionales.  

      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_02.png", alt="alt")
    

</template>

<script>
export default {
  name: 'Tema4',
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
