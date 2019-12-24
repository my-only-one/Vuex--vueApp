<template>
  <div id="app">
    <product-list-one>
      <h2>Product List One</h2>
    </product-list-one>
    <product-list-two>
      <h2>Product List Two</h2>
    </product-list-two>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue'
import productListTwo from './components/productListTwo.vue'
export default {
  name: 'app',
  data () {
    return {
      products: [
        {name: '马云', price: 200},
        {name: '马化腾', price: 140},
        {name: '马冬梅', price: 20},
        {name: '马蓉', price: 10}
      ]
    }
  },
  components: {
    'product-list-one': productListOne,
    'product-list-two': productListTwo
  }
}
</script>

<style lang="scss">

</style>
