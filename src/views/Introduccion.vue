<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

          
    .row.align-items-center.mb-5(data-aos="fade")
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/recursos/square_01.svg", alt="alt").img115
      .col
        p.mb-0 La arquitectura de #[em software] es la base donde se cimienta la estructura de un componente o aplicación de #[em software] a desarrollar. Le damos la bienvenida y le invitamos a ver el siguiente video:         

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VaFd7sfrYeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

       
        

      

             

        

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
