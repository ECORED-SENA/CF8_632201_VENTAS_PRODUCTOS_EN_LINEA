<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Es innegable que el éxito de una  empresa, independientemente de su tamaño y razón social, depende de la relación que mantenga  con sus clientes además, de los mecanismos utilizados para la captación de nuevos potenciales consumidores, el servicio posventa y el seguimiento constante a los clientes es una de las mejores estrategias para fidelizarlos y hacerlos parte de la compañía, existen muchas técnicas, elementos y procesos que se deben seguir para llevar  esta tarea de la mejor manera posible, por ende el objetivo principal de este espacio de formación es dar a conocer dichos elementos, pues una empresa que no trabaje en pro de la conservación de sus clientes, que no le haga el debido seguimiento para identificar sus gustos y necesidades, será una empresa destinada hacia el fracaso. 
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
