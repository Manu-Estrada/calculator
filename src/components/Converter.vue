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
              <label for="ihave">I have</label>
              <select
                class="form-control form-control-lg"
                id="ihave"
                v-model="ihave"
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
              <label for="iwant">I want</label>
              <select
                class="form-control form-control-lg"
                id="iwant"
                v-model="iwant"
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
            <span class="badge badge-success">{{ quantity }} {{ ihave }}</span>
            <span class="badge badge-dark"> SON </span>
            <span class="badge badge-success">{{ getTotal(total) }} {{ iwant }}</span>
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
        ihave: "USD",
        iwant: "EUR",
        total: 0,
      };
    },
    methods: {
      onChange() {
        switch (this.ihave) {
          // Usuario selecciono que tiene dolares
          case "USD":
            if (this.iwant === "USD") {
              this.total = this.quantity;
            }
            if (this.iwant === "EUR") {
              this.total = this.quantity * 0.84;
            }
            if (this.iwant === "LIBRA") {
              this.total = this.quantity * 0.75;
            }
            break;
  
          // Usuario selecciono que tiene euros
          case "EUR":
            if (this.iwant === "USD") {
              this.total = this.quantity * 1.19;
            }
            if (this.iwant === "EUR") {
              this.total = this.quantity;
            }
            if (this.iwant === "LIBRA") {
              this.total = this.quantity * 0.89;
            }
            break;
  
            // Usuario selecciono libra
          case "LIBRA":
            if (this.iwant === "USD") {
              this.total = this.quantity * 1.33;
            }
            if (this.iwant === "EUR") {
              this.total = this.quantity * 1.12;
            }
            if (this.iwant === "LIBRA") {
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