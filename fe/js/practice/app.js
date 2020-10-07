console.assert(typeof Vue !== 'undefined');

var items = [
    {name: '鉛筆', price: '300', quantity: 0},
    {name: 'ノート', price: '400', quantity: 0},
    {name: '消しゴム', price: '500', quantity: 0}
]
var vm = new Vue({
    el: '#app',
    data: {
        message: {
            japan: 'こんにちは',
            eng: 'hello'
        },
        items: items
    },
    computed:{
        totalPrice: function () {
            return this.items.reduce(function (sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function () {
            return this.totalPrice >= 1000
        }
    },
    filters: {
        numberWithDelimiter: function(value){
            if (!value){
                return 0
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    }
})
window.vm = vm

vm.$watch(function(){
    // 鉛筆の個数
    return this.items[0].quantity
},function(quantity){
    // このコールバックは、鉛筆の購入個数が変更されたら呼ばれます
    console.log(quantity)
})