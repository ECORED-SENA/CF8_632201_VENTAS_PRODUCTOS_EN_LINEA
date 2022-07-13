<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción

    .cajon.cjn--green.p-4.mb-4(data-aos="zoom-in")
      p.mb-0 Bienvenido a este componente formativo denominado #[strong “Seguimiento y control ventas”], para comenzar el recorrido por el mismo, observe con atención el siguiente video que le dará una introducción sobre el tema: 

    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/AJvMTvTnOS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
      

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
