Vue.config.devtools = true
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `<div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="" width="400px">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <!-- <p v-if="inStock">In Stock</p> -->
        <!-- <p v-if="inventory > 10">In Stock</p> -->
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p> -->
        <!-- <p v-else>Out of Stock</p> -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>User is premium: {{ premium }}</p>
        <p>User is shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updatedProduct(index)">

          <!-- @click
            @mouseover
            @submit
            @keyup.enter -->
        </div>

        <!-- <button v-on:click="cart += 1">Add to Cart</button> -->
        <button v-on:click="addToCart" 
                :disabled="!inStock" 
                :class="{ disabledButton: !inStock }">Add to Cart</button>
      </div>

      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">Therea are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
            <p>Name: {{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
          </li>
        </ul>
      </div>
      <product-review @review-submitted="addReview"></product-review>
    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      // image: './img/vmSocks-green.jpg',
      selectedVariant: 0,
      // inStock: false,
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
      reviews: []
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
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  },
  methods: {
    addToCart() {
      // this.cart += 1
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updatedProduct(index) {
      this.selectedVariant = index
      // console.log(index)
    },
    addReview(productReview){
      this.reviews.push(productReview)
    }
  }
})

Vue.component('product-review', {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <p>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
  </p>

  <p>
    <label for="review">Review:</label>
    <textarea id="review" v-model="review" required></textarea>
  </p>

  <p>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
  </p>
  <p>
    <input type="submit" value="Submit">
  </p>
  </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if(this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        this.$emit('review-submitted, productReview')
        this.name = null
        this.review = null
        this.rating = null
      }
      else {
        if(!this.name) this.errors.push("Name required.")
        if(!this.review) this.errors.push("Name required.")
        if(!this.rating) this.errors.push("Name required.")
      }  
    }
  }
})


var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})