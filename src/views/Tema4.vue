<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diagramas UML          

    .bg_gray_left
      .row.justify-content-center.align-items-center.mb-5        
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
            .col
              p.mb-0 Con el nacimiento de la Programación Orientada a Objetos (POO), se establecieron una variedad de lenguajes, métodos y simbologías usadas para detallar el desarrollo de los diferentes sistemas. Indudablemente, esta situación generó un desconcierto en los programadores de #[em software]. #[span.strong Tratando de darle solución a este inconveniente, aparece el Lenguaje de Modelado Unificado, o UML por sus siglas en inglés (#[em Unified Modeling Language]).]

          p.mb-0 El Lenguaje de Modelado Unificado proporciona un grupo de herramientas que facilitan realizar el modelado (análisis y diseño) de los sistemas que son orientados a objetos. #[strong Indicando una serie de normas técnicas que representan de manera gráfica el camino y la estructura de un sistema determinado a los programadores, analistas, desarrolladores, diseñadores, etc.]

        .col-lg-4.col-8(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_02.png", alt="alt")
      .col-lg-8(data-aos="fade")
        .cajon.cjn--yellow.mb-4
          p.strong “El UML (Lenguaje Unificado de Modelado) es una de las herramientas más emocionantes en el mundo actual del desarrollo de sistemas. Esto se debe a que permite a los creadores de sistemas generar diseños que capturen sus ideas en una forma convencional y fácil de comprender para comunicarlas a otras personas”. (Schmuller, 2000). 
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
          .col
            p.mb-0 #[strong En UML, existen dos tipos principales de diagramas que son:] diagramas de estructura y diagramas de comportamiento. Entre los diagramas más relevantes (y más utilizados) que se encuentran en UML, están los diagramas de casos de uso, por lo que a continuación se realiza una definición más detallada de ellos.

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Diagrama de casos de uso

    p(data-aos="fade") Según Larman, los casos de uso permiten la descripción de cada una de las funciones de las aplicaciones a desarrollar, desde el punto de vista del usuario. Su utilización radica en expresar las funcionalidades que el producto de #[em software] debe efectuar y poder definir las personas que serán las encargadas de ejecutar estas funcionalidades. Es una técnica que consiste en hacer un diagrama con su respectiva notación.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade")
        .row.mb-5
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
          .col
            p.mb-0 El caso de uso representa el comportamiento del #[em software] en la interacción con el usuario, para que este alcance un objetivo; la notación de un diagrama de caso de uso se compone principalmente de tres (3) elementos que ayudan a representar simbólicamente las funcionalidades, personas involucradas y relación entre estas, y son: los actores, las relaciones y los casos de uso. 

        .row.mb-3(data-aos="fade")
          .col-auto
            h3.cstmH3 Componentes de los diagramas de casos de uso

        p(data-aos="fade").mb-5 La notación de un diagrama de caso de uso se compone principalmente de tres (3) elementos que ayudan a representar simbólicamente las funcionalidades, personas involucradas y relación entre estas, que son: 
        .row.justify-content-center
          .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--white.shadow.brd--rad_01.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt").img90.m-auto
              p.text-center.mb-0 Los actores
          .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--white.shadow.brd--rad_01.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t4/t4_05.svg", alt="alt").img90.m-auto
              p.text-center.mb-0 Las relaciones
          .col-lg-3.col-8(data-aos="flip-left")
            .crd.bg--white.shadow.brd--rad_01.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t4/t4_06.svg", alt="alt").img90.m-auto
              p.text-center.mb-0 Los casos de uso          

      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_03.svg", alt="alt")

    p(data-aos="fade").mb-4 A partir del siguiente ejemplo, observe en qué consiste cada uno de estos elementos:

    .cajon.cjn--blue.mb-4(data-aos="fade")
      p.strong “Una empresa solicita tener un sistema que permita hacer el proceso de generación de factura de venta a un comerciante, la cuál debe ser enviada por medio de un sistema externo que se encargará del proceso de la factura”.

    p.strong.mb-5 Observe a continuación la explicación de cada elemento y cómo sería la representación de cada uno basado en el ejemplo indicado:

    .bg_gray_left.pt-4
      
      .row.justify-content-center.mb-5
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
          .row.mb-3
            .col-auto
              h3.cstmH3 Actor
          .row.mb-4(data-aos="fade")
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
            .col  
              p.mb-0 Especifica un rol que ejecutará un usuario, representa a una persona o grupo de personas que interactúan con un #[em software], se representa mediante un hombre de palo “stickman” con el nombre del actor (obligatorio). El uso de los actores se realiza para mostrar la clase de usuario que participará en el sistema, el cuál será el encargado de realizar una función.
          p.mb-4 Los nombres de los actores normalmente inician con Mayúscula.

          h4(data-aos="fade") Existen varios tipos de actores:
          ul.fa-ul(data-aos="fade")
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[span.txt--blue.strong Principales:] son aquellos que se especifican para localizar cada uno de los objetivos de un usuario que son dirigidos por los casos de uso.
            .hr_line
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[span.txt--blue.strong De apoyo:]  son los que brindan un servicio al sistema como un sistema informático, se definen para dar claridad a las interfaces externas.
            .hr_line
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[span.txt--blue.strong Pasivos:] son aquellos que se interesan en el funcionamiento del caso de uso, pero no es un actor principal.

        .col-lg-4.col-7(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t4/t4_07.png", alt="alt")

    h4(data-aos="fade").mb-5 Ten en cuenta:

    .row.justify-content-center.mb-5
      .col-lg-5.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_08.png", alt="alt")
      .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
        .row  
          .col-12.mb-4(data-aos="zoom-in")
            .crd.crd--avatarH_02
              .row.align-items-center
                .col-auto.gx-0
                  figure
                    img(src="@/assets/curso/recursos/icon_03.svg", alt="alt").img75
                .col
                  p.mb-0 No necesariamente los actores son personas, pese a que los actores estén personificados por formas humanas. 
          .col-12.mb-4(data-aos="zoom-in")
            .crd.crd--avatarH_02
              .row.align-items-center
                .col-auto.gx-0
                  figure
                    img(src="@/assets/curso/recursos/icon_04.svg", alt="alt").img75
                .col
                  p.mb-0 Los sistemas externos también son actores, que pueden requerir alguna información del sistema real o tener alguna interacción con él como una base de datos, por ejemplo.
          .col-12.mb-4(data-aos="zoom-in")
            .crd.crd--avatarH_02
              .row.align-items-center
                .col-auto.gx-0
                  figure
                    img(src="@/assets/curso/recursos/icon_03.svg", alt="alt").img75
                .col
                  p.mb-0 Al momento de determinar los casos de uso, se hace necesario identificar el actor, que es el nombre que se le da al usuario cuando desempeña ese papel. 
          .col-12.mb-4(data-aos="zoom-in")
            .crd.crd--avatarH_02
              .row.align-items-center
                .col-auto.gx-0
                  figure
                    img(src="@/assets/curso/recursos/icon_04.svg", alt="alt").img75
                .col
                  p.mb-0 Un actor tiene la posibilidad de hacer diferentes casos de uso y viceversa. Para identificar un actor, solo es necesario visualizar los roles que interactuarán en el sistema.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg--mint.p-3
          h4.text-center.mb-0 Según el ejemplo planteado, observe su representación:    

        .crd--gray.p-4
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="zoom-in").mb-4
              figure.pt-4
                img(src="@/assets/curso/temas/t4/t4_08A.svg", alt="alt").img350.m-auto
            .col-lg-6.mb-4
              .crd--gray_02.brd--rad_01.p-4
                p.text-center Los actores identificados en los requerimientos son: 
                p.strong.text-center.mb-0 Comerciante y Sistema externo.

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Relación

    p.mb-5(data-aos="fade") Un actor interactúa con un caso de uso y está representado por una relación, su símbolo es una línea o una flecha.

    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_09.svg", alt="alt")

      .col-lg-8(data-aos="fade")
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | La relación entre un actor y un caso de uso se llama relación de comunicación, esta relación se distingue por los actores pasivos o activos.
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El actor activo inicia o dispara la ejecución del caso de uso y la línea o flecha apunta al caso de uso.
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El actor pasivo no inicia el caso de uso y la flecha apunta al actor.
        .hr_line
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El tipo de comunicación o la relación entre los casos de uso y los actores forman la asociación directa con el caso de uso. 

    .row.justify-content-center(data-aos="fade")
      .col-lg-11
        .bg--mint.p-3
          h4.text-center.mb-0 Según el ejemplo, observe a continuación:         

        .crd--gray.p-4
          .row.justify-content-center.align-items-center
            .col-lg-6(data-aos="fade")
              p Se identifican las siguientes relaciones de comunicación:
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-caret-right.txt--blue
                  | Entre el comerciante y la generación de factura.
                li
                  i.fa-li.fas.fa-caret-right.txt--blue
                  | Entre el comerciante y el envío de la factura. 
                li
                  i.fa-li.fas.fa-caret-right.txt--blue
                  | Entre la factura y el sistema externo.
            .col-lg-4.col-8(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t4/t4_10.svg", alt="alt")

    .hr_line.my-5

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Caso de uso

    p(data-aos="fade").mb-5 Los casos de uso se identifican a través de los verbos o acciones que el actor realiza o realizará. 

    .row.justify-content-around.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_11.svg", alt="alt")
      .col-lg-7
        .row  
          .col-12.mb-4(data-aos="zoom-in")
            .crd.crd--avatarH_02
              .row.align-items-center
                .col-auto.gx-0
                  figure
                    img(src="@/assets/curso/recursos/icon_04.svg", alt="alt").img75
                .col
                  p.mb-0 Se representa mediante un óvalo e indica una función que el sistema debe proveer.    
          .col-12.mb-4(data-aos="zoom-in")
            .crd.crd--avatarH_02
              .row.align-items-center
                .col-auto.gx-0
                  figure
                    img(src="@/assets/curso/recursos/icon_03.svg", alt="alt").img75
                .col
                  p.mb-0 El caso de uso debe ser de fácil lectura e interpretación, tanto para los desarrolladores como para el cliente, y para el nombre se sugiere usar un verbo en infinitivo con un complemento.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .bg--mint.p-3
          h4.text-center.mb-0 Según el ejemplo, observe a continuación:

        .crd--gray.p-4
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="zoom-in").mb-4
              figure.pt-4
                img(src="@/assets/curso/temas/t4/t4_10A.svg", alt="alt").img250.m-auto
            .col-lg-6.mb-4
              .crd--gray_02.brd--rad_01.p-4
                p.text-center Los casos de uso que se identifican son: 
                p.strong.text-center.mb-0 Generar factura y Enviar factura.


      .col-lg-11.mb-5    
        .cajon.cjn--yellow
          p.strong A continuación, se presenta la representación gráfica del diagrama de caso de uso con los actores, relaciones y caso de uso del problema del ejemplo propuesto anteriormente:

      .col-lg-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_12.svg", alt="alt")

    h3(data-aos="fade") Tenga en cuenta

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
        p Los pasos realizados para el diseño del diagrama de casos de uso del sistema de ventas es el siguiente:
        .row.justify-content-center
          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray_02.brd--rad_02.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t4/t4_13.svg", alt="alt").img75.m-auto
              h4.text-center PASO 1
              p.text-center Se identificaron los posibles actores que interactuarían con el sistema; para el caso del ejemplo: Comerciante y Sistema externo.
          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray_02.brd--rad_02.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t4/t4_13.svg", alt="alt").img75.m-auto
              h4.text-center PASO 2
              p.text-center Se identificaron las relaciones de comunicación entre comerciante y los casos de uso.
          .col-lg-4.col-10(data-aos="flip-left")
            .crd.bg--gray_02.brd--rad_02.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t4/t4_13.svg", alt="alt").img75.m-auto
              h4.text-center PASO 3
              p.text-center Se identificaron los casos de uso según requerimientos; para el caso del ejemplo, son: Generar factura, Enviar factura.

      .col-lg-4.d-none.d-lg-flex(data-aos="fade")
        figure
          img(src="@/assets/curso/temas/t4/t4_14.svg", alt="alt")

    .bg--blue.p-4.mb-5(data-aos="zoom-in")
      .row
        .col-auto
          figure
            img(src="@/assets/curso/recursos/square_06.svg", alt="alt").img30
        .col
          p.mb-0 Además de la relación simple de comunicación que se muestra en el ejemplo trabajado, existen más relaciones en los casos de uso que especifican más detalladamente las acciones entre estos y que se mencionan a continuación:

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Relaciones de casos de uso

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_15.svg", alt="alt")       
      .col-lg-8(data-aos="fade")
        p.mb-5.mb-lg-4 En el proceso de desarrollo, pueden definirse diferentes casos de uso y estos no ser independientes, ya que se pueden establecer relaciones que dependan, uno del otro, entre los casos de uso.
        p.strong.mb-4 Las principales relaciones consideradas por UML son: 
        .row.justify-content-center(data-aos="zoom-in")
          .col-lg-10
            figure
              img(src="@/assets/curso/temas/t4/t4_16.svg", alt="alt")

    p(data-aos="fade").mb-5 #[span.strong Estos tres tipos de relaciones que son soportadas por el estándar UML], se encuentran explicadas a continuación: 

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta-flip.bg--white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.shadow.brd--rad_02
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_16.png')})`}")
              .crdTitle.py-2.px-3
                p.strong.text-center.mb-0 Inclusión
                p.text-center.italic.mb-0 (#[em Include o use])
            .tarjeta-flip__contenido.p-4.p-xl-5             
              figure.py-5
                img(src="@/assets/curso/temas/t4/t4_19.svg", alt="alt")                
              p.text-center Se utiliza para extender a otro caso de uso, es útil para nuevos requerimientos del sistema. 

      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta-flip.bg--white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.shadow.brd--rad_02
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_17.png')})`}")
              .crdTitle.py-2.px-3
                p.strong.text-center.mb-0 Extensión
                p.text-center.italic.mb-0 (Extend)
            .tarjeta-flip__contenido.p-4.p-xl-5             
              figure.py-5
                img(src="@/assets/curso/temas/t4/t4_20.svg", alt="alt")                
              p.text-center Se utiliza para extender a otro caso de uso, es útil para nuevos requerimientos del sistema. 

      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta-flip.bg--white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.shadow.brd--rad_02
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_18.png')})`}")
              .crdTitle.py-2.px-3
                p.strong.text-center.mb-0 Generalización
                p.text-center.italic.mb-0 (Generalization)
            .tarjeta-flip__contenido.p-4.p-xl-5             
              figure.py-5
                img(src="@/assets/curso/temas/t4/t4_21.svg", alt="alt")                
              p.text-center Se utiliza para extender a otro caso de uso, es útil para nuevos requerimientos del sistema. 

    .bg_img_02  
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-10
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/t4_22.png", alt="alt")
            .col
              p.mb-0 Teniendo en cuenta lo anterior y con el propósito de perfeccionar el diagrama de casos de uso, se pueden agregar unos nuevos casos de uso donde se visualicen las relaciones mencionadas anteriormente, con sus respectivos ejemplos:

      .row.align-items-center.mb-5(data-aos="zoom-in")
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/recursos/square_01.svg", alt="alt").img115
        .col
          p.mb-0 #[span.txt--blue.strong &#60;&#60;#[em extend]&#62;&#62;:] se define esta relación cuando se cuenta con un caso de uso que es muy parecido a otro, pero que realiza mucho más.

      .bloque-texto-g.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_23.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 #[span.strong Por ejemplo, en el caso a continuación, se puede ampliar el caso de uso envía factura hasta envía factura por correo electrónico. Ambos casos establecen la misma acción, la diferencia es que el caso de uso, además de enviar la factura al sistema externo, también envía un correo electrónico con la factura, y se representaría de la siguiente manera:]   

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-8
          .titulo-sexto.color-acento-botones
            h5 Figura 3.
            span Ejemplo diagrama de caso de uso venta con relación #[em extend]
          figure
            img(src="@/assets/curso/temas/t4/t4_24.svg", alt="alt")

      .row.justify-content-center.mb-5(data-aos="fade")
        .col-lg-10
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/t4_22.png", alt="alt")
            .col
              p.mb-0 La relación de la figura anterior se lee de la siguiente manera: el caso de uso enviar factura por correo extiende del caso de uso enviar factura. 

    .row.align-items-center.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/recursos/square_01.svg", alt="alt").img115
      .col
        p.mb-0 #[span.txt--blue.strong &#60;&#60;#[em uses o include]&#62;&#62;:] se define esta relación cuando una parte del comportamiento o acción es equivalente en más de un caso de uso y no se requiere duplicar la representación de su actuación.

    .bloque-texto-g.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[span.strong Por otro lado, tomando el ejemplo anterior, el mismo se amplía con el siguiente requerimiento funcional: antes de que el usuario envié la factura, puede realizar una búsqueda de facturas para seleccionarla y enviarla, haciendo necesario incluir la relación &#60;&#60;#[em include]&#62;&#62;. Por lo que se vería así:]   

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 4.
          span Ejemplo diagrama de caso de uso venta con relación #[em include]
        figure
          img(src="@/assets/curso/temas/t4/t4_26.svg", alt="alt")

    .row.mb-4(data-aos="fade")
      .col-auto
        h4.cstmH4 Especificación de casos de uso

    .bg_img_02
      .row.justify-content-around.mb-5
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
          p Cuando se habla de especificación de casos de uso, se hace referencia al proceso de descripción textual de cada uno de los casos de uso, detallando flujos y eventos que interactúan con el sistema y los actores que participan en él; usualmente, el analista, que es la persona encargada del diseño de los casos de uso, a medida que va identificando los requerimientos, los va documentando.

          p.strong La especificación de casos de uso busca:
          .row
            .col-auto
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-check-circle.txt--orange02
                  | Realizar la descripción de la interacción de un actor con el sistema.
              .hr_line
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-check-circle.txt--orange02
                  | Narrar el rol desempeñado por los actores en la interacción con el sistema y sus flujos. 
        .col-lg-3.col-8(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t4/t4_27.png", alt="alt")

      p(data-aos="fade").mb-5 A continuación, en la siguiente tabla, se describe una plantilla donde se indican las partes y las indicaciones básicas para la documentación de casos de uso.
      
      .row.justify-content-center.mb-5(data-aos="fade")
        .col-lg-10
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th(colspan='2') DESCRIPCI&Oacute;N DE UNA  ESPECIFICACI&Oacute;N DE CASO DE USO
              tbody
                tr.white--cell
                  td.strong Nombre del caso de uso
                  td Indica el nombre del caso de uso. Normalmente, el nombre  expresa el resultado objetivo y observable del caso de uso, como, por  ejemplo, &quot;Imprimir factura&quot;, en el caso de un de un  sistema de ventas.
                tr.gray--cell
                  td.strong Autor
                  td Persona que dise&ntilde;a el caso de uso.
                tr.white--cell
                  td.strong Fecha
                  td Aqu&iacute; se diligencia la fecha en la que se realiz&oacute; el caso de  uso.
                tr.gray--cell
                  td.strong Descripci&oacute;n
                  td Se realiza una corta descripci&oacute;n del caso de uso.
                tr.white--cell
                  td.strong Actores
                  td Describe los nombres del actor o actores del caso de uso. 
                tr.gray--cell
                  td.strong Precondiciones
                  td Son aquellas condiciones que deben existir para que se  cumpla el caso de uso.
                tr.white--cell
                  td.strong Flujo normal
                  td Son los pasos normales de ejecuci&oacute;n del caso de uso.
                tr.gray--cell
                  td.strong Flujo alternativo
                  td Flujos alternativos de ejecuci&oacute;n de casos de uso.
                tr.white--cell
                  td.strong PosCondiciones
                  td Son aquellas condiciones que se cumplen cuando finaliza un  caso de uso.

      p(data-aos="fade").mb-5 A continuación, se muestra un ejemplo de especificación de casos de uso para el caso de uso #[strong “Crear foro”] utilizando la plantilla propuesta en la tabla anterior.

      .row.justify-content-center.mb-5(data-aos="fade")
        .col-lg-10
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th(colspan='2') DESCRIPCI&Oacute;N DE UNA  ESPECIFICACI&Oacute;N DE CASO DE USO
              tbody
                tr.white--cell
                  td.strong Nombre del caso de uso
                  td Crear foro
                tr.gray--cell
                  td.strong Autor
                  td Mario Vara Cuz
                tr.white--cell
                  td.strong Fecha
                  td 20/09/2021
                tr.gray--cell
                  td.strong Descripción
                  td Crea un nuevo mensaje.
                tr.white--cell
                  td.strong Actores
                  td Alumno/Docente
                tr.gray--cell
                  td.strong Precondiciones
                  td Al iniciar, el usuario debe estar autenticado en el sistema.
                tr.white--cell
                  td.strong Flujo normal
                  td Alumno/Docente
                tr.gray--cell
                  td.strong Precondiciones
                  td 1. El actor da clic en la opción nuevo mensaje.<br><br>2. Se muestra un área de texto para escribir el mensaje.<br><br>3. El actor introduce el mensaje.<br><br>4. El sistema verifica datos y los almacena.<br><br>5. El profesor acepta y publica.
                tr.white--cell
                  td.strong Flujo alternativo
                  td Alumno/Docente
                tr.gray--cell
                  td.strong Precondiciones
                  td A. Se hace una comprobación de los datos, si no son correctos, muestra mensaje de corrección.<br><br>B. El profesor rechaza el mensaje, de modo que no es publicado, sino devuelto.
                tr.white--cell
                  td.strong PosCondiciones
                  td Se publica y almacena el mensaje satisfactoriamente.


    .row.mb-4(data-aos="fade")
      .col-auto
        h4.cstmH4 Casos de uso reales

    .bg_gray_right.py-2.mb-5 
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t4/t4_28.png", alt="alt")
        .col-lg-8(data-aos="fade")
          p #[strong Su objetivo principal es detallar el proceso de un sistema de información que se describe por medio de un caso de uso, incluyendo la interacción de objetos, así como definir las transacciones de las interfaces y clases de los diferentes procedimientos secundarios de diseño.] De este modo, cuando se reconozcan las clases que participan internamente de un caso de uso, es fundamental que los entornos que se recolectan del análisis se completen, incorporando las correspondientes clases de diseño sin dejar a un lado las restricciones del ambiente tecnológico.
          .row.justify-content-center
            .col-lg-10
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/square_05.svg", alt="alt")
                .col
                  p #[strong Los casos de uso reales representan el diseño preciso del caso de uso desde una tecnología en específico.] Así pues, si se trata de un diseño gráfico para el usuario, se incluirá el diseño de ventanas de este y una descripción de la interacción con los objetos de la interfaz. #[strong En resumen, los casos de uso reales brindan diseños de pantalla y explicación de la interacción entre los objetos de esta.]
    
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade")
        .cajon.cjn--blue.mb-4
          p Para aclarar las definiciones anteriores, observe un ejemplo de un sistema de ventas donde se realiza el diseño del caso de uso real y se hace la descripción de interacción entre los artefactos del diseño:
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.strong.txt--blue Caso de uso:] Adquirir productos.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.strong.txt--blue Actores:] cliente (quien inicia el proceso), cajero.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.strong.txt--blue Tipo:] primario, real.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | #[span.strong.txt--blue Descripción:] en el almacén de ropa, el cliente se dirige a la caja registradora con los productos a comprar. El empleado-cajero hace el registro de los productos que el cliente compra y recibe el dinero en efectivo. Al finalizar el proceso, el cliente se retira con los artículos comprados.

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_29.svg", alt="alt")

    
    .bg_img_02
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t4/t4_30.png", alt="alt")
      .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
        .col-10
          .crd.bg--gray.shadow.brd--rad_01.p-4
            p.mb-0 #[span.strong El inicio de este caso de uso se da cuando el cliente se acerca a la caja registradora con los artículos que desea llevar; observe las interacciones entre objetos en el diseño:]

      .row.justify-content-center(data-aos="fade")
        .col-lg-7
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t4/t4_31.svg', alt='')          

            .crd.bg--white.brd--rad_01.shadow(x="43.5%" y="23.5%" numero="1")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Código Producto
              .p-4
                p.text-center.mb-0 El cajero deberá, para cada producto, ingresar el código del producto

            .crd.bg--white.brd--rad_01.shadow(x="90.5%" y="23.5%" numero="2")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Cantidad del producto
              .p-4
                p.text-center.mb-0 En el caso de que el usuario tenga más de un producto, es opcional registrar la cantidad de estos.

            .crd.bg--white.brd--rad_01.shadow(x="43.5%" y="32%" numero="3")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Precio
              .p-4
                p.text-center.mb-0 Con el paso anterior, aparecerá la visualización de la descripción y el precio del producto.
                
            .crd.bg--white.brd--rad_01.shadow(x="90.5%" y="40.5%" numero="4")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Total venta
              .p-4
                p.text-center.mb-0 El sistema hará el cálculo y mostrará el total de la venta.

            .crd.bg--white.brd--rad_01.shadow(x="32.5%" y="58%" numero="5")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Ingresar producto
              .p-4
                p.text-center.mb-0 Una vez que se finalice el registro de todos los productos, se presiona el botón (ingresar producto). El sistema almacenará los productos registrados. 

            .crd.bg--white.brd--rad_01.shadow(x="60.5%" y="58%" numero="6")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Terminar venta
              .p-4
                p.text-center.mb-0 Para finalizar, el cajero presiona el botón (Terminar Venta), para dar por finalizada la venta. 

            .crd.bg--white.brd--rad_01.shadow(x="89%" y="58%" numero="7")
              .bg--mint.shadow.brd--top.p-3
                h5.text-center.mb-0 Efectuar pago
              .p-4
                p.text-center.mb-0 Por último, se procederá al pago
            



    
                

    


    

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
