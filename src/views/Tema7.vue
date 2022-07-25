<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Seguridad - OWASP  

    .bg_gray_left.pt-4.mb-5
      .row.justify-content-center
        .col-lg-8(data-aos="fade")
          .row.mb-4  
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
            .col
              p #[span.txt--blue.strong.italic “Open Web Application Security Project”] es una fundación sin ánimo de lucro que trabaja para mejorar la seguridad de las soluciones informáticas, los miembros de esta fundación trabajan de forma voluntaria y por medio de proyectos, todos los proyectos cuentan con código abierto para su libre uso. 
          p.mb-0 Uno de los proyectos más importantes es el #[span.strong OWASP #[span.italic Guide Project], es una guía para el analista de seguridad donde se identifican los principales controles a auditar en cualquier aplicación #[em web]], estos se agrupan en las siguientes categorías:

        .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t7/t7_01.png", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-5.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t7/t7_02.svg", alt="alt")
      .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Recopilación de información")
            .col
              p.mb-0 Son pruebas para obtener información sensible de la solución de software o aplicación, también realizan ataques controlados que vulneren la seguridad del sitio y obtienen datos del ataque.

          .row(numero="2" titulo="Configuración y despliegue")
            .col
              p.mb-0 Son controles de seguridad en la configuración del servidor de la aplicación, como la red, conexiones a la web, etc.

          .row(numero="3" titulo="Gestión de la identidad")
            .col
              p.mb-0 Son controles de seguridad en la asignación de roles, usuarios, numeración de cuentas y políticas de acceso en la aplicación/web.

          .row(numero="4" titulo="Autenticación")
            .col
              p.mb-0 Son controles de seguridad enfocados en el acceso a la aplicación/web, como las contraseñas.

          .row(numero="5" titulo="Autorización")
            .col
              p.mb-0 Son controles de seguridad para probar los privilegios o evasión de métodos de autorización en el portal.


    .row.justify-content-center.mb-5      
      .col-lg-7(data-aos="fade")
        LineaTiempoD.color-acento-contenido
          .row(numero="6" titulo="Control de la sesión")
            .col
              p.mb-0 Son controles de seguridad relacionados con los tiempos de sesión y las cookies. 

          .row(numero="7" titulo="Validación de entrada de datos")
            .col
              p.mb-0 Son controles de seguridad en todas las entradas de datos de que disponga la aplicación/web, como formularios de contacto, registros de información, búsquedas, etc.

          .row(numero="8" titulo="Manejo de errores")
            .col
              p.mb-0 Se enfoca en la seguridad y el óptimo funcionamiento de los mensajes de error que muestra la aplicación.

          .row(numero="9" titulo="Criptografía")
            .col
              p.mb-0 Son controles para examinar la robustez y seguridad de los mecanismos de cifrado que implemente la solución de software.

          .row(numero="10" titulo="Lógica de la aplicación")
            .col
              p.mb-0 Son controles para examinar la robustez y seguridad de los mecanismos de cifrado que implemente la solución de software.

          .row(numero="11" titulo="Pruebas de cliente")
            .col
              p.mb-0 Son todas las pruebas de seguridad realizadas desde el punto de vista del usuario.

      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t7/t7_03.svg", alt="alt")

    .cajon.cjn--blue.mb-5(data-aos="zoom-in")
      p.strong Esta es una guía completa, la cual cuenta actualmente con un total de 87 controles diferentes de seguridad, todos relacionados con las categorías antes mencionadas y que permiten generar un estado global y actual de la seguridad de la página web.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/t7/t7_04.svg", alt="alt")

    .bg_img_02
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t7/t7_05.png", alt="alt")
        .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade")
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
            .col
              p #[span.strong Como dato importante, OWASP, de forma periódica, realiza un informe haciendo la recopilación de las vulnerabilidades más frecuentes dentro de las aplicaciones #[em web]]; este informe es un insumo importante para comprobar si la aplicación que está en desarrollo tiene alguna vulnerabilidad mencionada en el informe; estos informes se los puede encontrar en la página oficial: https://owasp.org

          .cajon.cjn--yellow.mb-4
            p.strong Para aplicaciones móviles, esta fundación cuenta con #[em OWASP Mobile Security Testing Guide MSTG], ya que una aplicación móvil posee una serie de características diferentes a una aplicación web estándar o página web; esta guía se enfoca en auditar aplicativos móviles Android e iOS, la conforman 3 apartados o documentos relacionados entre sí, que son:

          ul.fa-ul
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[span.txt--blue.strong.italic OWASP Mobile App Security Verification Standard (MASVS):] son los requisitos de seguridad, los cuales se verifican por el auditor.
            .hr_line
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[span.txt--blue.strong.italic Mobile Security Testing Guide (MSTG):] son instrucciones para verificar cada requisito del MASVS (Guía de buenas prácticas para que el auditor testee el requisito de seguridad).
            .hr_line
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[span.txt--blue.strong.italic Mobile App Security Checklist:]  es un listado de comprobación de los requisitos del MASVS.

      p(data-aos="fade").mb-5 Después de hacer la respectiva revisión de los controles, el cliente final puede obtener un estado de la seguridad de su aplicación de forma gráfica, gracias a las tablas y gráficas que se producen en el proceso de la auditoría.

      .row.justify-content-center.align-items.center.mb-5
        .col-lg-7.mb-4.mb-lg-0
          .row  
            .col-12.mb-4(data-aos="zoom-in")
              .crd.crd--avatarH_02
                .row.align-items-center
                  .col-auto.gx-0
                    figure
                      img(src="@/assets/curso/recursos/icon_03.svg", alt="alt").img75
                  .col
                    p.mb-0 #[span.strong Aplicación nativa:] interactúa estrechamente con el sistema operativo del dispositivo móvil y accede a componentes del dispositivo, como una cámara, sensores, etc.
            .col-12.mb-4(data-aos="zoom-in")
              .crd.crd--avatarH_02
                .row.align-items-center
                  .col-auto.gx-0
                    figure
                      img(src="@/assets/curso/recursos/icon_04.svg", alt="alt").img75
                  .col
                    p.mb-0 #[span.strong Aplicación #[em web:]]  interactúa con los servicios web y no interactúa con los componentes del dispositivo.
            .col-12.mb-4(data-aos="zoom-in")
              .crd.crd--avatarH_02
                .row.align-items-center
                  .col-auto.gx-0
                    figure
                      img(src="@/assets/curso/recursos/icon_03.svg", alt="alt").img75
                  .col
                    p.mb-0 #[span.strong Aplicación híbrida: ] Se ejecuta como una aplicación nativa, pero una parte de la aplicación se ejecuta en un navegador web integrado.
            .col-12(data-aos="zoom-in")
              .crd.crd--avatarH_02
                .row.align-items-center
                  .col-auto.gx-0
                    figure
                      img(src="@/assets/curso/recursos/icon_04.svg", alt="alt").img75
                  .col
                    p.mb-0 #[span.strong Aplicación progresiva:] Son páginas web normales, pero tienen la ventaja adicional de permitir que los desarrolladores trabajen sin conexión y obtengan acceso al hardware del dispositivo móvil.
        .col-lg-5.col-8(data-aos="flip-left")
          figure
            img(src="@/assets/curso/temas/t7/t7_06.png", alt="alt")

      .row.mb-3(data-aos="fade")
        .col-auto
          h3.cstmH3 Pruebas de seguridad 

      p(data-aos="fade").mb-5 Si se desea tener un programa de pruebas, es necesario saber cuáles son los objetivos de estas. #[strong Estos objetivos son especificados por los requisitos de seguridad. A continuación, verá cuáles son los objetivos de las pruebas derivados de las normas y reglamentos aplicables de la guía OWASP]. También, cómo los requisitos de seguridad conducen efectivamente a gestionar los riesgos de seguridad del software:

      TabsC.color-primario.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Pruebas de caja negra")
          .row.justify-content-around
            .col-lg-6.mb-4.mb-lg-0
              h4 Pruebas de caja negra
              p El probador se comporta como un atacante real y explora todas las posibles combinaciones y casos de uso para obtener información disponible públicamente y detectable. También se le llama “prueba de conocimiento cero”.          
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t7/t7_08.svg', alt='')

        .py-3.py-md-4(titulo="Pruebas de caja blanca")
          .row.justify-content-around
            .col-lg-6.mb-4.mb-lg-0
              h4 Pruebas de caja blanca
              p Es lo contrario a la caja negra, aquí el evaluador realiza pruebas más sofisticadas, con conocimiento sobre las vulnerabilidades, correcciones, código fuente, documentación y diagramas. También se llama "prueba de conocimiento completo".      
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t7/t7_09.svg', alt='')

        .py-3.py-md-4(titulo="Pruebas de caja gris")
          .row.justify-content-around
            .col-lg-6.mb-4.mb-lg-0
              h4 Pruebas de caja gris
              p Intercalado entre los dos tipos mencionados anteriormente, aquí el probador recibe cierta información (como credenciales), mientras que las otras áreas generalmente están ocultas.  
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t7/t7_10.svg', alt='')

        .py-3.py-md-4(titulo="Análisis de vulnerabilidad")
          .row.justify-content-around
            .col-lg-6.mb-4.mb-lg-0
              h4 Análisis de vulnerabilidad
              p Aquí, se busca vulnerabilidades en una aplicación, el análisis estático implica un análisis detallado del código fuente, se puede hacer de forma manual o automática; este dinámico es más sofisticado, ya que se realiza durante el tiempo de ejecución y ayuda a los probadores o testers a ver detalles como puntos de entrada vulnerables, características débiles, etc.  
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t7/t7_11.svg', alt='')

        .py-3.py-md-4(titulo="Pruebas de penetración")
          .row.justify-content-around
            .col-lg-6.mb-4.mb-lg-0
              h4 Pruebas de penetración
              p Se realiza en las etapas finales. Implica un plan completo que comienza desde la preparación, la recopilación de información y el mapeo de aplicaciones, hasta las pruebas y los informes reales.
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t7/t7_12.svg', alt='')

    .row.mb-4(data-aos="fade")
      .col-auto
        h4.cstmH4 Por último, otro de los puntos clave de la guía OWASP es la autenticación. 

    .row.justify-content-center.align-items-center
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t7/t7_13.png', alt='')
      .col-lg-8(data-aos="fade")
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/recursos/square_07.svg", alt="alt").img75
          .col
            p Aquí, se encuentran las credenciales de usuario, como contraseña o PIN, información confidencial como SIM, token de hardware, generador de contraseña, biometría (voz, retina, huella digital, etc.). Aquí, se debe tener en cuenta lo siguiente:
                
        SlyderF.cstmSlyderF(columnas="col-lg-6 col-xl-4")
            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t7/t7_14.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 La autenticación de nombre de usuario/contraseña se debe realizar en el punto final remoto.
          
            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t7/t7_15.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 Se debe aplicar una política de contraseñas.

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t7/t7_16.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 El segundo factor de autenticación se aplicará a las aplicaciones confidenciales.

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t7/t7_17.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 El usuario debe estar informado de las actividades recientes de la cuenta.
          

    

    


    


            

    

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
