<template>
  <div class="payment-details">
    <div class="mt-4">
      <div class="row">
        <div class="col-md-12">
          <h4 class="font-weight-bold">Payment details</h4>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-5 mt-4">
              <label>Purchase price</label>
              <div class="form-input">
                <font-awesome-icon class="prepend-icon" icon="dollar-sign"></font-awesome-icon>
                <b-form-input
                        id="input-formatter"
                        :formatter="format"
                        v-model="purchasePrice"
                        class="input"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-5 mt-4">
              <label>Cash down</label>
              <div class="row">
                <div class="col-md-7 pr-md-0">
                  <div class="form-input">
                    <font-awesome-icon class="prepend-icon" icon="dollar-sign"></font-awesome-icon>
                    <b-form-input
                            id="input-formatter"
                            :formatter="format"
                            class="input no-right-radius"
                            v-model="cashDown"
                    ></b-form-input>
                  </div>
                </div>
                <div class="col-md-5 pl-md-0">
                  <div class="form-input">
                    <font-awesome-icon class="prepend-icon" icon="percent"></font-awesome-icon>
                    <b-form-input
                            id="input-formatter"
                            :formatter="format"
                            class="input no-left-radius"
                    ></b-form-input>
                  </div>
                </div>
                <div class="col-md-12 mt-4">
                  <b-form-input id="range-2" v-model="cashDown" type="range" min="0" max="500000" step="1"></b-form-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PaymentDetails",
        computed: {
            formInputs () {
                return this.$store.state.formInputs
            },
            purchasePrice: {
                get () {
                    return this.$store.state.formInputs.purchasePrice
                },
                set (val) {
                    this.formInputs.purchasePrice = val
                    this.$store.commit('setFormInputs', this.formInputs)
                }
            },
            cashDown: {
                get () {
                    return this.$store.state.formInputs.cashDown
                },
                set (val) {
                    this.formInputs.cashDown = val
                    this.$store.commit('setFormInputs', this.formInputs)
                }
            },
        },
    }
</script>

<style scoped>

</style>
