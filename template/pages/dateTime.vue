<template>
  <div class="layout-padding logo-container non-selectable no-pointer-events">
    <q-datetime inverted v-model="model" type="date" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: new Date()
    }
  }
}
</script>

<style lang="stylus">

</style>
