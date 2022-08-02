<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Documentación de la arquitectura 

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_01.png", alt="alt")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade")
        .row.justify-content-center.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_07.svg", alt="alt").img75
          .col
            p.mb-0 #[span.txt--blue.strong Según Clements], #[span.strong la documentación de la arquitectura son los documentos que se generan durante el proceso de desarrollo de la arquitectura de #[em software]; esta cumple varios propósitos significativos, como son:] 

        ul.fa-ul.mb-4
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Informar a los distintos involucrados o #[em stakeholders], el diseño y las decisiones que permitieron llegar a este.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Facilitar la realización del análisis y la evaluación del diseño.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Facilitar el soporte de las actividades de mantenimiento.

        .cajon.cjn--yellow(data-aos="zoom-in")
          p.strong Para documentar un diseño de arquitectura, se requiere representar las distintas estructuras del diseño arquitectural, estas se documentan de forma separada, a través de distintas vistas. Cada vista modela una parte del diseño arquitectural desde distintas perspectivas, que pueden ser dinámicas, lógicas o físicas.

    p(data-aos="fade") Para saber qué tantos documentos se llevará en el proyecto de #[em software], se deben considerar diversos aspectos, que incluyen a los #[em stakeholders], el tipo de proyecto y la experiencia del equipo de desarrollo. 

    p.strong.mb-4(data-aos="fade") Por lo general, los documentos más comunes que se generan en este proceso son:

    .row.justify-content-between.align-items-center.mb-5
      .col-lg-7(data-aos="fade")
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Requisitos de sistema.
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Requisitos de #[em software].
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Requisitos de #[em hardware].
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Diseños.
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Diagramas.
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Pruebas en todas sus versiones “planificadas, superadas, test, validación, etc.”.

      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_02.svg", alt="alt")

    p.strong.mb-5(data-aos="fade") Varios estándares para la realización de dicha documentación de la arquitectura:

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 IEEE

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8.mb-4.mb-lg-0
        p El Instituto de Ingenieros Eléctricos y Electrónicos (IEEE, por sus siglas en inglés) es la sociedad técnica profesional más grande del mundo, se dedica a divulgar los avances científicos en las áreas de ingeniería eléctrica, electrónica, energética, informática y afines. 
        .cajon.cjn--blue
          p.strong Esta organización publicó el estándar ISO/IEC/IEEE 29119. Según ISO (2022), las pruebas de #[em software] son un estándar que agrupa procesos, documentación, vocabulario, técnicas y un modelo de evaluación de procesos para realizar las pruebas, se puede usar dentro de cualquier ciclo de vida de desarrollo de #[em software].
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_03.png", alt="alt")

    p(data-aos="fade") Está conformado principalmente por la documentación de prueba y, como su nombre lo indica, se centra en la documentación de las pruebas de #[em software]; se divide en tres tipos de documentación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6 
        .crd--gray.p-4.mb-4(data-aos="fade")
          h3 Del proceso de prueba organizacional
          p Su documentación es sobre:
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Política de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Estrategia de prueba organizacional

        .crd--gray.p-4.mb-4(data-aos="fade")
          h3 Del proceso de gestión de pruebas
          p Su documentación es sobre:
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Plan de prueba 
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Estado de la prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Finalización de la prueba

        .crd--gray.p-4(data-aos="fade")
          h3 Del proceso de prueba dinámica
          p Su documentación es sobre:
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Especificación de diseño de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Especificación del caso de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Especificación del procedimiento de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Requisitos de datos de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Informe de preparación de datos de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Requisitos del entorno de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Informe de preparación del entorno de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Resultados actuales
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Resultado de la prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Registro de ejecución de prueba
            li
              i.fa-li.fas.fa-caret-right.txt--blue
              | Informe de incidentes de prueba

      .col-lg-6.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_04.svg", alt="alt")

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 ISO/IEC 25000

    .bg_img_02
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/t5_05.png', alt='')
        .col-lg-8(data-aos="fade")
          p También se la conoce con el nombre SQuaRE (#[em System and Software Quality Requirements and Evaluation]) “Evaluación y requisitos de calidad del #[em software] y del sistema”. 
          .cajon.cjn--yellow
            p.strong El objetivo de este estándar es la creación de un marco o guía de trabajo para evaluar la calidad del producto de #[em software] o aplicación, esta norma es la evolución de las normas ISO/IEC 9126 e ISO/IEC 14598; se compone principalmente por: conceptos, modelos o patrones de referencia y definiciones, divididos en cinco áreas, así:
                  
          SlyderF.cstmSlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/recursos/icon_05.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 #[strong ISO 2500n]<br> Gestión de calidad

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/recursos/icon_06.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 #[strong ISO 2501n]<br> Modelo de calidad: compuesto por fiabilidad, seguridad, mantenibilidad y usabilidad.

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/recursos/icon_05.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 #[strong ISO 2502n]<br> Medición de calidad

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/recursos/icon_06.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 #[strong ISO 2503n]<br> Requisitos de calidad

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/recursos/icon_05.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 #[strong ISO 2504n]<br> Evaluación de calidad

      .bloque-texto-a.custom01.p-4.p-md-5.mb-5(data-aos="zoom-in") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/t5/t5_06.png", alt="alt").img90.m-auto 
          .col-lg-10
            .bloque-texto-a__texto.p-4
              p Dentro de este estándar, se destaca una de las normas más usadas para verificar la calidad de #[em software]: el modelo ISO/IEC 25010, el cual se encuentra compuesto por las ocho características de calidad que se muestran en la siguiente figura:

      .row.justify-content-center.mb-5(data-aos="zoom-in")        
        .col-lg-6
          .titulo-sexto.color-acento-botones
            h5 Figura 5.
            span Representación modelo ISO/IEC 25010            
          figure
            img(src="@/assets/curso/temas/t5/t5_07.svg", alt="alt")

    .bg--blue.p-4.mb-5(data-aos="zoom-in")
      .row
        .col-auto 
          figure
            img(src="@/assets/curso/recursos/square_06.svg", alt="alt").img30
        .col
          p.mb-0 Tenga en cuenta, a su vez, que, de sus ochos características, cada una cuenta con algunas subcaracterísticas relacionadas con su funcionamiento, como se puede ver en la siguiente tabla:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Tabla 3.
          span Subcaracterísticas relacionadas con el proceso de calidad ISO/IEC 25010
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(style="width:35%;") Caracter&iacute;stica
                th(style="width:65%;") Subcaracter&iacute;stica 
            tbody
              tr
                td.text-center(rowspan='3') Adecuaci&oacute;n funcional
                td Completitud funcional
              tr
                td Correcci&oacute;n funcional
              tr
                td Pertinencia funcional
              tr.gray--cell
                td.text-center(rowspan='3') Eficiencia de desempe&ntilde;o
                td Capacidad
              tr.gray--cell
                td Comportamiento temporal
              tr.gray--cell
                td Utilizaci&oacute;n de recursos
              tr
                td.text-center(rowspan='2') Compatibilidad
                td Coexistencia
              tr
                td Interoperabilidad
              tr.gray--cell
                td.text-center(rowspan='6') Usabilidad
                td Accesibilidad 
              tr.gray--cell
                td Aprendizaje 
              tr.gray--cell
                td Est&eacute;tica 
              tr.gray--cell
                td Inteligibilidad 
              tr.gray--cell
                td Operabilidad 
              tr.gray--cell
                td Protecci&oacute;n frente a errores de usuario
              tr
                td.text-center(rowspan='4') Fiabilidad
                td Capacidad de recuperaci&oacute;n 
              tr
                td Disponibilidad 
              tr
                td Madurez
              tr
                td Tolerancia a fallos
              tr.gray--cell
                td.text-center(rowspan='5') Seguridad
                td Autenticidad 
              tr.gray--cell
                td Confidencialidad 
              tr.gray--cell
                td Integridad 
              tr.gray--cell
                td No repudio 
              tr.gray--cell
                td Responsabilidad
              tr
                td.text-center(rowspan='5') Mantenibilidad
                td Analizabilidad 
              tr
                td Capacidad de ser modificado 
              tr
                td Capacidad de ser probado 
              tr
                td Modularidad 
              tr
                td Reusabilidad
              tr.gray--cell
                td.text-center(rowspan='3') Portabilidad
                td Adaptabilidad 
              tr.gray--cell
                td Capacidad de ser reemplazado 
              tr.gray--cell
                td Facilidad de instalaci&oacute;n

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Modelo 4+1

    p(data-aos="fade").mb-5 Este modelo fue creado por Hilippe Kruchten, ofrece una técnica para organizar la descripción de una arquitectura de #[em software] utilizando un conjunto de cuatro “vistas” concurrentes, que son las que se muestran en la figura:

    .row.justify-content-center.mb-5(data-aos="zoom-in")        
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 6.
          span Modelo 4+1            
        figure
          img(src="@/assets/curso/temas/t5/t5_08.svg", alt="alt")

    .crd--gray.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 #[span.strong.txt--blue Según Kruchten (1995)], #[strong además, los casos de uso o escenarios seleccionados se utilizan como la vista ‘más uno’ para mostrar el diseño.] Como resultado, el modelo tiene 4+1 vistas, de ahí que el modelo se llame “#[em The 4+1 Architectural View]”. 

    .row.mb-3(data-aos="fade")
      .col-auto
        h4.cstmH4 Ahora, observe los tipos de vistas de forma individual:

    .row.justify-cotent-center
      .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_09.svg", alt="alt")
      .col-lg-7(data-aos="fade")
        .bg_slider_02.brd--rad_02.p-3
          SlyderA(tipo="b")
            .row.justify-content-around.align-items-center.pt-5
              .col-lg-8.mb-4.mb-lg-0                          
                h4 Vista lógica
                p Se ocupa de la funcionalidad del sistema en lo que respecta a los usuarios finales. Los diagramas de clase y los diagramas de estado son ejemplos de diagramas UML que se utilizan para representar la vista lógica.
              .col-lg-3.col-4
                figure
                  img(src='@/assets/curso/temas/t5/t5_10.svg', alt='').img350.m-auto

            .row.justify-content-around.align-items-center.pt-5
              .col-lg-8.mb-4.mb-lg-0                          
                h4 Vista de desarrollo
                p Se enfoca en el comportamiento del tiempo de ejecución del sistema y se ocupa de los elementos dinámicos del sistema. Explica los procesos del sistema y cómo estos se comunican. La concurrencia , la distribución, el integrador, el rendimiento y la escalabilidad se abordan en la vista del proceso. El diagrama de secuencia, el diagrama de comunicación y el diagrama de actividad son todos diagramas UML que se pueden usar para describir una vista de proceso.
              .col-lg-3.col-4
                figure
                  img(src='@/assets/curso/temas/t5/t5_11.svg', alt='').img350.m-auto

            .row.justify-content-around.align-items-center.pt-5
              .col-lg-8.mb-4.mb-lg-0                          
                h4 Vista de proceso
                p Describe un sistema desde el punto de vista de un programador y se ocupa de la administración del #[em software], también se lo conoce como vista de despliegue, describe los componentes del sistema utilizando el diagrama de paquetes UML. 
              .col-lg-3.col-4
                figure
                  img(src='@/assets/curso/temas/t5/t5_12.svg', alt='').img350.m-auto

            .row.justify-content-around.align-items-center.pt-5
              .col-lg-8.mb-4.mb-lg-0                          
                h4 Vista física
                p Representa el sistema desde la perspectiva de un ingeniero de sistemas. La capa física se ocupa de la topología de los componentes de #[em software], así como de las conexiones físicas entre estos, también se la conoce como vista de implementación, aquí se utiliza el diagrama de implementación de UML para representar la perspectiva física.
              .col-lg-3.col-4
                figure
                  img(src='@/assets/curso/temas/t5/t5_13.svg', alt='').img350.m-auto


    
    

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
