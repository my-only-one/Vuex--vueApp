<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(item, index) in saleProducts">
        <span class="name">{{item.name}}</span>
        <span class="name">${{item.price}}</span>
      </li>
    </ul>
    <button @click="reducePriceFn(4)">商品降价</button>
    <button @click="addePriceFn(2)">商品加价</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions} from 'vuex'
  export default {
    name: "productLlistOne",
    // 第一种方法，属性传值
    // props: ['products'],

    // 第二种方法
    computed: {
      products() {
        return this.$store.state.products
      },
      /*saleProducts() {
        return this.$store.getters.saleProducts
      },*/
      // 多个方法时,可以使用mapGetters
      ...mapGetters(['saleProducts'])
    },
    methods: {
      /*reducePriceFn(amount) {
        // 第一种方法
        /!*this.$store.state.products.forEach( (item) => {
          item.price -=1
        })*!/

        // 第二种方法
        // this.$store.commit('reducePrice') // 调用mutations里面的方法

        // 第三种方法
        // this.$store.dispatch('reducePriceFn', amount) // 调用actions里面的方法

      },*/
      ...mapActions(['reducePriceFn', 'addePriceFn'])

    }

  }
</script>

<style scoped>
  #product-list-one {
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }

  #product-list-one ul {
    padding: 0;
  }

  #product-list-one li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }

  .price {
    font-weight: bold;
    color: #E8800C;
  }
</style>
