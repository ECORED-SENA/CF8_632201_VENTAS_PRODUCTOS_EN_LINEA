<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Fidelización de clientes

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10
        p Dentro del proceso de ventas de una empresa, se podrá evidenciar de manera especial, la interrelación que se genera cuando un cliente compra de manera constante sus productos y/o servicios. Esas compras repetidas durante un periodo de tiempo, diario, semanal, mensual, son un indicativo positivo que le permite a una empresa #[strong “fidelizar clientes”]. 
        p Para profundizar en el tema de fidelización de clientes revise con atención el siguiente recurso educativo: 

    .bg_img_01(data-aos="zoom-in")
      figure
        img(src="@/assets/curso/temas/t1/t1_01.svg", alt="alt")

      separador

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
        h2 1.1 Definición y etapas

      p.mb-5(data-aos="fade") La fidelización de clientes es un concepto de #[em marketing] cuyo objetivo es conseguir, mediante diversas estrategias y técnicas de venta, que el consumidor, que ya haya adquirido diversos productos o servicios, siga comprando y se convierta en un cliente habitual.

      h3(data-aos="fade") Etapas de fidelización de clientes
      p.mb-4(data-aos="fade") La lealtad del cliente asume un impacto directo no solo en el desempeño del negocio, sino también en la imagen de marca. El impacto de los clientes satisfechos puede ser más importante que cualquier estrategia de #[em marketing].

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_02.png", alt="alt")
        .col-lg-8(data-aos="fade")
          p Dentro de los tipos de posibles clientes se tienen: 
          .crd.clr--purple.p-4.mb-3
            ol.lista-ol--cuadro.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | El que no compra (indistintamente si le gustó o no el producto).
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | El que compra y no vuelve.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 3
                | El cliente que vuelve y compra constantemente. 
          p.mb-0 Las mediciones que se realizan a las ventas de cualquier empresa, permiten saber qué tan satisfechos están los clientes, sobre todo para el cliente que compra, regresa y compra constantemente, desde esta perspectiva es fundamental conocer las 5 etapas del proceso de fidelización de clientes que se exponen en el siguiente recurso educativo: 

    TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-4.py-md-5(titulo="La primera visita" :icono="require('@/assets/curso/temas/t1/t1_03.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 La primera visita
            p Es el momento en el que una persona se dirige a determinada  empresa para observar y analizar los productos y/o servicios y saber si le gustan o no, puede ser que el cliente no compre nada (esto es muy frecuente), o que el cliente compre, pero en otro momento (por lo general es un cliente en duda), o  puede pasar también, que compre inmediatamente (por lo general el 25 % de los clientes que entran a un punto de venta por primera vez y realizan una compra, se convierten en clientes fieles)   
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/t1/t1_08.png', alt='')

      .py-4.py-md-5(titulo="Primer consumo" :icono="require('@/assets/curso/temas/t1/t1_04.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 Primer consumo
            p Primer consumo, único consumo, se presenta cuando los compradores no se encuentran satisfechos con el producto y/o con el servicio. Si hay un buen producto, pero una mala atención de parte de quien realiza la venta, el comprador no volverá, o en defecto si el producto no cumple con las expectativas y no dejan al cliente satisfecho y este no lo manifiesta y no permite una mejora, muy posiblemente no volverá a la tienda.   
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/t1/t1_09.png', alt='')

      .py-4.py-md-5(titulo="Visitas repetidas" :icono="require('@/assets/curso/temas/t1/t1_05.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 Visitas repetidas
            p Ya en este punto se encuentran clientes satisfechos, atentos a las diferentes promociones de la empresa, incluso con el ánimo de apoyar, opinar y discrepar en asuntos de interés en común.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/t1/t1_10.png', alt='')

      .py-4.py-md-5(titulo="Lealtad a la empresa" :icono="require('@/assets/curso/temas/t1/t1_06.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 Lealtad a la empresa
            p Luego de tener clientes satisfechos, existirá una confianza bastante amplia hacia los productos y servicios, esto permitirá que el cliente no busque en otro proveedor lo que encuentran en la empresa ya seleccionada.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/t1/t1_11.png', alt='')

      .py-4.py-md-5(titulo="Fidelización de clientes" :icono="require('@/assets/curso/temas/t1/t1_07.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            h4 Fidelización de clientes
            p En esta etapa de sus ventas, están los clientes que se deben cuidar al máximo, en una relación de satisfacción en el producto-precio, porque son los que van a generar un buen porcentaje e incremento de sus ventas mensuales. Si no se cuidan, naturalmente van a satisfacer sus requerimientos con otros proveedores.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/t1/t1_12.png', alt='')

    p.text-center(data-aos="fade").mb-5 De acuerdo con esta información de las etapas de fidelización tenga presente lo siguiente:

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .crd.crd--avatarH.clr--01.p-4
            .row.justify-content-center.align-items-center.middleY
              .col-auto
                img(src='@/assets/curso/temas/t1/t1_13.svg' alt='AvatarTop')
              .col            
                p.mb-0 Un cliente fiel es un consumidor en potencia para una empresa.

          .crd.crd--avatarH.clr--02.p-4
            .row.justify-content-center.align-items-center.middleY
              .col-auto
                img(src='@/assets/curso/temas/t1/t1_14.svg' alt='AvatarTop')
              .col            
                p.mb-0 Un cliente satisfecho da a conocer su experiencia por intermedio de redes sociales.

          .crd.crd--avatarH.clr--01.p-4
            .row.justify-content-center.align-items-center.middleY
              .col-auto
                img(src='@/assets/curso/temas/t1/t1_15.svg' alt='AvatarTop')
              .col        
                p.mb-0 Un cliente fidelizado no le interesa acudir a la competencia, ya que el producto o servicio cumple con todas las expectativas.

          .crd.crd--avatarH.clr--02.p-4
            .row.justify-content-center.align-items-center.middleY
              .col-auto
                img(src='@/assets/curso/temas/t1/t1_16.svg' alt='AvatarTop')
              .col         
                p.mb-0 Una cliente fiel siempre está a la expectativa de tendencias y productos novedosos, aproveche esto para hacer de las redes sociales un fuerte aliado comercial.

          .crd.crd--avatarH.clr--01.p-4
            .row.justify-content-center.align-items-center.middleY
              .col-auto
                img(src='@/assets/curso/temas/t1/t1_17.svg' alt='AvatarTop')
              .col           
                p.mb-0 Un cliente fiel se convierte en un promotor de un producto o servicio de acuerdo con su satisfacción.


    separador

    .bg_gradient_01

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 1.2 Retroalimentación e importancia

      p(data-aos="fade").mb-5 Tener una medición de las compras constantes de clientes, le permitirá a la empresa tener un conocimiento amplio de las fortalezas y debilidades de los productos y mediante estos datos diseñar estrategias de mercadeo bien dirigidas y definidas, que le generen aumento en ventas, estabilidad laboral a los empleados y una consolidación de una marca empresarial relevante.    

      .row.justify-content-center(data-aos="zoom-in").mb-5
        .col-lg-10
          .bloque-texto-g.clr--purple02.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_18.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La importancia de la retroalimentación mediante la medición de ventas y estadísticas, permite tener un programa de fidelización de clientes óptimo, pues esta facilita a una empresa tener una proyección de ventas acertada, un presupuesto de compras apropiado, estrategias de #[em marketing] empresarial convenientes, elementos que resultan fundamentales para atraer nuevos clientes.

      p(data-aos="fade") La retroalimentación permite fortalecer la relación empresa-cliente, además de establecer estrategias para la mejora e innovación de los productos y servicios.  Las mediciones estadísticas llevan a identificar qué tan satisfechos están los clientes con los productos y la atención prestada, por otro lado, por medio de ellas, también es posible saber si los clientes recomendarían a otros dichos productos o servicios. Esta es una de las mejores formas de identificar cómo se encuentra la empresa frente a la competencia.

      separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Aplicación de la retroalimentación

    p(data-aos="fade") Para contar con una buena retroalimentación por parte de los clientes es fundamental contar con canales de comunicación adecuada que generen confianza y seguridad en el usuario. Un cliente totalmente satisfecho expresa su opinión de acuerdo a su experiencia. Por ende, es fundamental escucharlo y hacerlo partícipe de las novedades de la empresa, si se obtienen respuestas acertadas por parte del cliente se sabrá qué mejorar, cambiar o innovar. 

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.cjn--green.p-4(data-aos="zoom-in")
          p.text-center.mb-0 Para conocer algunas de las ventajas que trae para una empresa la aplicación de dicho proceso de retroalimentación, revise con atención el siguiente recurso propuesto:

    ImagenInfografica.color-acento-botones(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/t1_19.svg', alt='Texto que describa la imagen')                    

      .tarjeta.clr--paleYellow.p-3(x="15%" y="45%" numero="+")             
        p.mb-0 Incremento en ventas, cuando un cliente compra repetitivamente, es más fácil vender productos nuevos, escuchar las sugerencias, mejorar y de esta forma aumentan las ventas.

      .tarjeta.clr--paleYellow.p-3(x="23.5%" y="45%" numero="+")           
        p.mb-0 Bajo costos de promoción, al venderle nuevos productos a los clientes fieles, estos van a generar la respuesta deseada, ya sea positiva o negativa, de esta manera se tiene la posibilidad de mejorar e incursionar en el mercado de manera acertada.

      .tarjeta.clr--paleYellow.p-3(x="32.5%" y="45%" numero="+")           
        p.mb-0 Retención de empleados, con unas ventas en crecimiento y la consolidación de una empresa en un mercado determinado, se podrá generar estabilidad laboral, haciendo partícipes a los empleados de las dinámicas positivas de la empresa, estos de igual forma serán fieles a las políticas de la empresa y los beneficios que se les otorgue.

      .tarjeta.clr--paleYellow.p-3(x="41.2%" y="45%" numero="+")           
        p.mb-0 Menor sensibilidad al precio, un cliente que recibe un producto y servicio que llame su atención y le produzca alto grado de satisfacción, no pondrá objeciones a los precios que está recibiendo, incluso si en el mercado lo encuentra más económico.

      .tarjeta.clr--paleYellow.p-3(x="50%" y="45%" numero="+")            
        p.mb-0 Otra de las ventajas que generan clientes fieles, es la promoción gratuita de productos y servicios mediante la voz a voz de manera confiable. Al escuchar un cliente satisfecho, un posible nuevo cliente va a comprar con más tranquilidad y con muy buena expectativa.

      .tarjeta.clr--paleYellow.p-3(x="59%" y="45%" numero="+")             
        p.mb-0 Mejorar el producto y servicio, apoyándose de una investigación de mercado con el fin de establecer cuáles son las necesidades de los clientes.

      .tarjeta.clr--paleYellow.p-3(x="68%" y="45%" numero="+")             
        p.mb-0 Medir el nivel de satisfacción de los clientes de acuerdo a sus comentarios y expectativas.

      .tarjeta.clr--paleYellow.p-3(x="77%" y="45%" numero="+")            
        p.mb-0 Convertir la retroalimentación negativa en una opción de venta, tomar como referencia la retroalimentación para que esta sea una opción de mejora.

      .tarjeta.clr--paleYellow.p-3(x="85.5%" y="45%" numero="+")           
        p.mb-0 Tomar las mejores decisiones para la empresa, no se debe suponer, es importante recopilar información con la cual se pueda implementar una estrategia de mercado.    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
