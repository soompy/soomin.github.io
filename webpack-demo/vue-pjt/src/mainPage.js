var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    // image: './img/vmSocks-green.jpg',
    selectedVariant: 0,
    inStock: true,
    inventory: 8,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2245,
        variantColor: 'green',
        variantImage: './img/vmSocks-green.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2246,
        variantColor: 'blue',
        variantImage: './img/vmSocks-blue.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0,
    brand: 'Vue Mastery',
    product: 'Socks'
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updatedProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }

})