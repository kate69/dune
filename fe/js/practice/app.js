console.assert(typeof Vue !== 'undefined');

const items = [
  {name: '鉛筆', price: '300', quantity: 0},
  {name: 'ノート', price: '400', quantity: 0},
  {name: '消しゴム', price: '500', quantity: 0}
]
const vm = new Vue({
  el: '#app',
  filters: {
    numberWithDelimiter (value) {
      if ( !value ){
        return 0
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  data: {
    message: {
      japan: 'こんにちは',
      eng: 'hello'
    },
      items
  },
  computed:{
    totalPrice() {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax () {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy () {
      return this.totalPrice >= 1000
    },
    errorMessageStyle() {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red'
      }
    }
  }
})

window.vm = vm

vm.$watch(function() {
  // 鉛筆の個数
  return this.items[0].quantity
},
function(quantity){
  console.log(quantity)

})