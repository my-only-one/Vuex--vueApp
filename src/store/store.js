import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: { // 存储数据
    products: [
      {name: '马云', price: 200},
      {name: '马化腾', price: 140},
      {name: '马冬梅', price: 20},
      {name: '马蓉', price: 10}
    ]
  },
  getters: { // 获取数据
    saleProducts: (state) => {
      let saleProducts = state.products.map((item) => {
        return {
          name: '**' + item.name + '**',
          price: item.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: { // 更改数据  触发事件的时候用
      reducePrice: state => {
        // setTimeout( ()=> {
        state.products.forEach((item) => {
          item.price -= 1
        })
      // }, 3000)
    }
  },
  action: {
    reducePrice: (context) => {
      setTimeout( ()=> {
        context.commit('reducePrice')
      }, 3000)
    }
  }
})
