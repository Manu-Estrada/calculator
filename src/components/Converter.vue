<template>
    <div>
      <div class="container pt-3">
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <label for="quantity">Enter Quantity</label>
              <input
                type="number"
                class="form-control form-control-lg"
                id="quantity"
                placeholder="Enter quantity.."
                v-model="quantity"
                v-on:keyup="onChange"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label for="I have">I have</label>
              <select
                class="form-control form-control-lg"
                id="I have"
                v-model="I have"
                v-on:change="onChange()"
              >
                <option v-for="(currency, index) in coins" v-bind:key="index">
                  {{ currency }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label for="I want">Quiero</label>
              <select
                class="form-control form-control-lg"
                id="I want"
                v-model="I want"
                v-on:change="onChange()"
              >
                <option v-for="(coin, index) in coins" v-bind:key="index">
                  {{ coin }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="text-center pt-4">
          <h5 v-if="cantidad > 0">
            <span class="badge badge-success">{{ quantity }} {{ I have }}</span>
            <span class="badge badge-dark"> SON </span>
            <span class="badge badge-success">{{ getTotal(total) }} {{ I want }}</span>
          </h5>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        coins: ["USD", "EUR", "LIBRA"],
        quantity: 0,
        I have: "USD",
        I want: "EUR",
        total: 0,
      };
    },
    methods: {
      onChange() {
        switch (this.I have) {
          // Usuario selecciono que tiene dolares
          case "USD":
            if (this.I want === "USD") {
              this.total = this.quantity;
            }
            if (this.I want === "EUR") {
              this.total = this.quantity * 0.84;
            }
            if (this.I want === "LIBRA") {
              this.total = this.quantity * 0.75;
            }
            break;
  
          // Usuario selecciono que tiene euros
          case "EUR":
            if (this.I want === "USD") {
              this.total = this.quantity * 1.19;
            }
            if (this.I want === "EUR") {
              this.total = this.quantity;
            }
            if (this.I want === "LIBRA") {
              this.total = this.quantity * 0.89;
            }
            break;
  
            // Usuario selecciono libra
          case "LIBRA":
            if (this.I want === "USD") {
              this.total = this.quantity * 1.33;
            }
            if (this.I want === "EUR") {
              this.total = this.quantity * 1.12;
            }
            if (this.I want === "LIBRA") {
              this.total = this.quantity;
            }
            break;
          default:
        }
      },
      getTotal(value) {
          return Math.round(value)
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .badge {
    margin: 2px;
    font-size: 150%;
  }
  label {
    font-weight: 700;
    font-size: 130%;
  }
  </style>