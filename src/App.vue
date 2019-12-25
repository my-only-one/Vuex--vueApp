<template>
  <div id="app">
    <!--<product-list-one :products="products"></product-list-one>
    <button @click="operating">商品降价</button>
    <product-list-two :products="products"></product-list-two>-->

    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue'
import productListTwo from './components/productListTwo.vue'
export default {
  name: 'app',
  data () {
    return {
      /*products: [
        {name: '马云', price: 200},
        {name: '马化腾', price: 140},
        {name: '马冬梅', price: 20},
        {name: '马蓉', price: 10}
      ]*/
    }
  },
  methods: {
    /*operating () {
     his.products.forEach( (item, index) => {
       item.price = item.price -1
     })
    }*/
  },
  components: {
    'product-list-one': productListOne,
    'product-list-two': productListTwo
  }
}
</script>

<style lang="scss">
  body{
    font-family: Ubuntu;
    color: #555;
  }
</style>
