<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Patrones de diseño, definición y clasificación

    .bg_img_02
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
      .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
        .col-10
          .crd.bg--gray.shadow.brd--rad_01.p-4
            p.mb-0 #[span.txt--blue.strong Según Canelo (2021)], #[span.strong “Por definición, un patrón de diseño es una solución a un problema de diseño cuya efectividad ha sido comprobada por haber sido empleada para resolver problemas similares en ocasiones anteriores. Otra característica fundamental es que debe ser reusable, lo que significa que sea aplicable a diferentes problemas de diseño en distintas circunstancias”].     

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8(data-aos="zoom-in").d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t2/t2_02.png", alt="alt")

        .col-lg-8(data-aos="fade")
          .row.mb-3
            .col-auto
              h5.cstmH5_02 Los patrones de diseño pretenden:
          
          SlyderF.cstmSlyderF(columnas="col-lg-6 col-xl-6")(data-aos="fade")
            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_03.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 Proporcionar catálogos de elementos reusables en el diseño de sistemas #[em software]. 

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 Evitar la reiteración en la búsqueda de soluciones a problemas ya conocidos y solucionados anteriormente.  

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_05.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 Formalizar un vocabulario común entre diseñadores.

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 Estandarizar el modo en que se realiza el diseño. 

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_07.svg", alt="alt").img90.m-auto               
              p.text-center.mb-0 Facilitar el aprendizaje de las nuevas generaciones de diseñadores condensando conocimiento ya existente.  

      p.strong(data-aos="fade").mb-5 Según su enfoque, los patrones de diseño se agrupan en tipos creacionales, estructurales y de comportamiento.

      .row.mb-3(data-aos="fade")
        .col-auto
          h3.cstmH3 Patrones creacionales

      p(data-aos="fade") #[span.txt--blue.strong Para Canelo (2021)], #[span.strong “Los patrones de creación proporcionan diversos mecanismos de creación de objetos, que aumentan la flexibilidad y la reutilización del código existente de una manera adecuada a la situación. Esto le da al programa más flexibilidad para decidir qué objetos deben crearse para un caso de uso dado”.]

      p(data-aos="fade").mb-4 Observe los patrones creacionales a continuación:      

      .crd.bg_slider_01.brd--rad_02.p-3(data-aos="zoom-in")
        SlyderA(tipo="b")
          .row.justify-content-around.align-items-center.pt-5
            .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="01")
                h4 <em>Abstract Factory</em>
                p En este patrón, una interfaz crea conjuntos o familias de objetos relacionados, sin especificar el nombre de la clase.
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t2/t2_08.svg', alt='').img350.m-auto

          .row.justify-content-around.align-items-center.pt-5                
            .col-lg-4.col-6.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/t2_09.svg', alt='').img350.m-auto
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="02")
                h4 <em>Builder Patterns</em>
                p Permite producir diferentes tipos y representaciones de un objeto utilizando el mismo código de construcción. Se utiliza para la creación etapa por etapa de un objeto complejo combinando objetos simples. La creación final de objetos depende de las etapas del proceso creativo, pero es independiente de otros objetos.

          .row.justify-content-around.align-items-center.pt-5
            .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="03")
                h4 <em>Factory Method</em>
                p Proporciona una interfaz para crear objetos en una superclase, pero permite que las subclases alteren el tipo de objetos que se crearán. Proporciona instanciación de objetos implícita a través de interfaces comunes.
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t2/t2_10.svg', alt='').img350.m-auto

          .row.justify-content-around.align-items-center.pt-5                
            .col-lg-4.col-6.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/t2_11.svg', alt='').img350.m-auto
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="04")
                h4 <em>Prototype</em>
                p Permite copiar objetos existentes sin hacer que su código dependa de sus clases. Se utiliza para restringir las operaciones de memoria / base de datos manteniendo la modificación al mínimo utilizando copias de objetos.

          .row.justify-content-around.align-items-center.pt-5
            .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="05")
                h4 <em>Singleton</em>
                p Este patrón de diseño restringe la creación de instancias de una clase a un único objeto.
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/t2/t2_10.svg', alt='').img350.m-auto
      
    .hr_line_02  

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Patrones estructurales

    p(data-aos="fade") #[span.txt--blue.strong Para Canelo (2021)], los patrones estructurales #[span.strong “facilitan soluciones y estándares eficientes con respecto a las composiciones de clase y las estructuras de objetos. El concepto de herencia se utiliza para componer interfaces y definir formas de componer objetos para obtener nuevas funcionalidades”]

    p(data-aos="fade") Observe los patrones estructurales a continuación:

    .crd.bg_slider_01.brd--rad_02.p-3(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center.pt-5
          .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="01")
              h4 <em>Adapter</em>
              p Se utiliza para vincular dos interfaces que no son compatibles y utilizan sus funcionalidades. El adaptador permite que las clases trabajen juntas de otra manera que no podrían al ser interfaces incompatibles.
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_13.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_14.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="02")
              h4 <em>Bridge</em>
              p En este patrón, hay una alteración estructural en las clases principales y de implementador de interfaz, sin tener ningún efecto entre ellas. Estas dos clases pueden desarrollarse de manera independiente y solo se conectan utilizando una interfaz como puente.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="03")
              h4 <em>Composite</em>
              p Se usa para agrupar objetos como un solo objeto. Permite componer objetos en estructuras de árbol y luego trabajar con estas estructuras como si fueran objetos individuales.
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_15.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_16.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="04")
              h4 <em>Decorator</em>
              p Este patrón restringe la alteración de la estructura del objeto mientras se le agrega una nueva funcionalidad. La clase inicial permanece inalterada mientras que una clase #[em decorator] proporciona capacidades adicionales.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="05")
              h4 <em>Facade</em>
              p Proporciona una interfaz simplificada para una biblioteca, un marco o cualquier otro conjunto complejo de clases.
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_15.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_16.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="06")
              h4 <em>Flyweight</em>
              p El patrón <em>Flyweight</em> se usa para reducir el uso de memoria y mejorar el rendimiento al reducir la creación de objetos. El patrón busca objetos similares que ya existen para reutilizarlos en lugar de crear otros nuevos que sean similares.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-6.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="08")
              h4 <em>Proxy</em>
              p Se utiliza para crear objetos que pueden representar funciones de otras clases u objetos, y la interfaz se utiliza para acceder a estas funcionalidades.
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_17.svg', alt='').img350.m-auto

    .hr_line_02  

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Patrones de comportamiento

    p(data-aos="fade") #[span.txt--blue.strong Para Canelo (2021)], #[span.strong “El patrón de comportamiento se ocupa de la comunicación entre objetos de clase. Se utilizan para detectar la presencia de patrones de comunicación ya presentes y pueden manipular estos patrones. Estos patrones de diseño están específicamente relacionados con la comunicación entre objetos”] 

    .crd.bg_slider_01.brd--rad_02.p-3(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="01")
              h4 <em>Chain of responsibility</em>
              p El patrón de diseño <em>Chain of Responsibility</em> es un patrón de comportamiento que evita acoplar el emisor de una petición a su receptor, dando a más de un objeto la posibilidad de responder a una petición.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_18.svg', alt='').img365.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_19.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="02")
              h4 <em>Command</em>
              p Convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. Esta transformación permite parametrizar métodos con diferentes solicitudes, retrasar o poner en cola la ejecución de una solicitud y respaldar operaciones que no se pueden deshacer.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="03")
              h4 <em>Interpreter</em>
              p Se utiliza para evaluar el lenguaje o la expresión al crear una interfaz que indique el contexto para la interpretación.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_20.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_21.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="04")
              h4 <em>Iterator</em>
              p Su utilidad es proporcionar acceso secuencial a un número de elementos presentes dentro de un objeto de colección, sin realizar ningún intercambio de información relevante.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="05")
              h4 <em>Mediator</em>
              p Este patrón proporciona una comunicación fácil a través de su clase, que permite la comunicación para varias clases.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_22.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_23.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="06")
              h4 <em>Memento</em>
              p El patrón #[em Memento] permite recorrer elementos de una colección sin exponer su representación subyacente.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="07")
              h4 <em>Observer</em>
              p Permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que está siendo observado.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_24.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_25.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="08")
              h4 <em>State</em>
              p En el patrón <em>State</em>, el comportamiento de una clase varía con su estado y, por lo tanto, está representado por el objeto de contexto.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="09")
              h4 <em>Strategy</em>
              p Permite definir una familia de algoritmos, poner cada uno de ellos en una clase separada y hacer que sus objetos sean intercambiables.
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_26.svg', alt='').img350.m-auto

        .row.justify-content-around.align-items-center.pt-5                
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_27.svg', alt='').img350.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="10")
              h4 <em>Template method</em>
              p Se usa con componentes que tienen similitud, donde se puede implementar una plantilla del código para probar ambos componentes. El código se puede cambiar con pequeñas modificaciones.

        .row.justify-content-around.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont.ps-5
              .numb(data-number="11")
              h4 <em>Visitor</em>
              p El propósito de un patrón <em>Visitor</em> es definir una nueva operación sin introducir las modificaciones a una estructura de objeto existente.
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t2/t2_28.svg', alt='').img350.m-auto


    .hr_line_02  

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Arquitectura de capas y de eventos

    .row.mb-3(data-aos="fade")
      .col-auto
        h4.cstmH4 Arquitectura de capas

    .bloque-texto-g.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_29.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[span.txt--blue.strong Según Bertucelli (2019)], #[span.strong “Esta arquitectura se destaca por ser fácil de implementar en el comienzo del proyecto y fácil de entender para principiantes en el desarrollo de #[em software]. Lo que propone la arquitectura de capas es pensar nuestro sistema en capas y cada capa debe exponer en forma clara las operaciones que puede realizar. Estas operaciones se deben exponer mediante un #[em API] que nos diga qué servicio ofrece esa capa y cuál será su retorno, sin importar cómo esté implementado”.] 

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4(data-aos="fade")
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
          .col
            p Por ejemplo, una #[em URL] es un #[em API] que me dice qué datos necesito ingresar y qué retornará, o también puede ser una clase con métodos públicos, etc. Pueden existir “n” capas, pero cada una debe tener una responsabilidad única. Una separación muy utilizada es la de tres capas “presentación”, “lógica de negocio” y “acceso a datos”.
        .cajon.cjn--yellow
          p #[strong “Una capa es un conjunto de “cosas” que tienen cierta responsabilidad. Por ejemplo, una capa puede ser un conjunto de clases, agrupadas en un paquete, dentro de nuestro programa, que representa cierta responsabilidad, o también puede ser un jar que se comunica con otros y cada jar representa una capa, o puede ser un sistema y cada sistema es en sí una capa. Cuando nos referimos a capas, es una abstracción de responsabilidades”] #[span.txt--blue.strong (Bertucelli, 2019).]
      .col-lg-4.col-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_30.png", alt="alt")

    p.strong(data-aos="fade").mb-5 Además, la arquitectura establece dos reglas de cómo se deben comunicar las capas así; observe cómo las define Bertucelli:

    .bg_img_02.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Primera regla
                p.text-white.mb-0 “Cada capa debe tener una responsabilidad única. Es decir, las capas deben tener perfectamente delimitado de qué se ocupa cada una de ellas; por ejemplo, podemos tener una capa de “presentación”, que será la encargada de atender los eventos del cliente y encargada de representar la información para el mismo. Por otro lado, podemos tener la capa de “acceso a datos”, que será la encargada de guardar y acceder a los datos”.
        .col-lg-6(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/icon_02.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Segunda regla
                p.text-white.mb-0 “Las capas deben respetar una estructura jerárquica estricta. Quiere decir que cada capa puede comunicarse solo con la que está debajo suyo, pero NO al revés. Por ejemplo, una clase ubicada en la capa de presentación puede llamar a un método ubicado en la capa de acceso a datos, pero nunca la capa de acceso a datos puede llamar a un método de la capa de presentación. Y cuando nos referimos a la próxima más baja significa que no se puede saltar capas”.

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-8
          .titulo-sexto.color-acento-botones
            h5 Figura 1.
            span Arquitectura de capas

          figure
            img(src="@/assets/curso/temas/t2/t2_32.svg", alt="alt")
            figcaption Nota. Adaptada de https://somospnt.com/blog/118-arquitectura-de-capas 

      .row.mb-3(data-aos="fade")
        .col-auto
          h4.cstmH4 Arquitectura de eventos

      .bloque-texto-g.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_33.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 #[span.txt--blue.strong Según Red Hat (2021)], #[span.strong “Este tipo de arquitectura puede basarse en un modelo de publicación/suscripción o en uno de flujo de eventos, así:] 

      .row.justify-content-center.mb-5
        .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Modelo de publicación y suscripción
                p.text-white.mb-0 Es una infraestructura de mensajería que se basa en suscripciones a un flujo de eventos. Con este modelo, una vez que se genera o publica un evento, este se envía a los suscriptores que necesitan estar informados al respecto.
        .col-lg-6(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/icon_02.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Modelo de flujo de eventos
                p.text-white.mb-0 Con este modelo, los eventos se escriben en un registro. Los consumidores no se suscriben a un flujo de eventos, sino que pueden leerlo desde cualquiera de sus partes y unirse a él en cualquier momento”.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade")
        h5 Hay varios tipos de flujo de eventos:
        ul.fa-ul
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El procesamiento de flujos de eventos utiliza una plataforma de transmisión de datos, como Apache Kafka, para incorporar los eventos y procesar o transformar su flujo. Este procesamiento se puede utilizar para detectar patrones significativos en los flujos.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El procesamiento de eventos simple surge cuando un evento desencadena inmediatamente una acción en el consumidor.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El procesamiento de eventos complejo requiere que un consumidor de eventos procese una serie de ellos para detectar patrones. 

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_34.png", alt="alt")    
    
    .row.mb-3(data-aos="fade")
      .col-auto
        h5.cstmH5 Beneficios de la arquitectura basada en eventos

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_35.png", alt="alt")
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
        p.mb-4 #[span.txt--blue.strong Para Red Hat (2021)], #[strong “Con una arquitectura basada en eventos, las empresas obtienen un sistema flexible que se adapta a los cambios y toma decisiones rápidamente. Conocer la situación de inmediato favorece la toma de decisiones empresariales, ya sean automatizadas o manuales, en función de todos los datos disponibles que reflejan el estado actual de los sistemas”.]
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_03.svg", alt="alt").img90
          .col
            p Los eventos se captan a medida que ocurren desde sus fuentes, como las redes, las aplicaciones y los dispositivos del Internet de las cosas (IoT), lo cual permite que los productores y los consumidores compartan información sobre el estado y la respuesta de forma inmediata.
        .cajon.cjn--yellow(data-aos="zoom-in")
          p Las empresas pueden incorporar la arquitectura basada en eventos a sus sistemas y aplicaciones, para mejorar la capacidad de ajuste y de respuesta de las aplicaciones, y para acceder a los datos y al contexto necesarios para tomar mejores decisiones.

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10        
        .titulo-sexto.color-acento-botones
          h5 Figura 2.
          span Arquitectura de eventos
        figure
          img(src="@/assets/curso/temas/t2/t2_36.png", alt="alt")
          figcaption Nota. Adaptado de http://arquitecturaorientadaaeventos.blogspot.com/2015/10/arquitectura-orientada-eventos_22.html


           




</template>

<script>
export default {
  name: 'Tema2',
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
