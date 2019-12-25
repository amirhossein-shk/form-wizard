<template>
  <div class="property-details">
    <div class="mt-4">
      <div class="row">
        <div class="col-md-12">
          <h4 class="font-weight-bold">Property details</h4>
          <p class="mt-5">Are you first time homebuyer?</p>
        </div>
        <div class="col-md-12">
          <button @click="setIsFirstTime(true)" class="mr-3">Yes</button>
          <button @click="setIsFirstTime(false)" class="no-button">No</button>
        </div>
        <div class="col-md-12 mt-5">
          <p>When do you plan to purchase your home?</p>
          <div class="col-md-3">
            <div class="row form-select-container">
              <select v-model="whenToPurchase" class="form-select">
                <option value="0">Select in months</option>
                <option value="1">Month 1</option>
                <option value="2">Month 2</option>
              </select>
              <font-awesome-icon icon="angle-down" class="custom-appearance"></font-awesome-icon>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-5 type-of-home-section">
          <p>What type of home?</p>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4 col-lg-3 col-xl-2 icon-holder" role="button" @click="setWhatType('Home')"
                   :class="{'text-danger': (formInputs.whatType === 'Home')}">
                <div>
                  <font-awesome-icon icon="home" size="2x" />
                </div>
                <div class="mt-2">Home</div>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-2 icon-holder" role="button" @click="setWhatType('Condominium')">
                <div>
                  <font-awesome-icon icon="building" size="2x" />
                </div>
                <div class="mt-2">Condominium</div>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-2 icon-holder" role="button" @click="setWhatType('Townhouse')">
                <div>
                  <font-awesome-icon icon="city" size="2x" />
                </div>
                <div class="mt-2">Townhouse</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-lg-3 col-xl-2 icon-holder" role="button" @click="setWhatType('Multi-family')">
                <div>
                  <font-awesome-icon icon="hotel" size="2x" />
                </div>
                <div class="mt-2">Multi-family</div>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-2 icon-holder" role="button" @click="setWhatType('Land')">
                <div>
                  <font-awesome-icon icon="tree" size="2x" />
                </div>
                <div class="mt-2">Land</div>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-2 icon-holder" role="button" @click="setWhatType('New construction')">
                <div>
                  <font-awesome-icon icon="wrench" size="2x" />
                </div>
                <div class="mt-2">New construction</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-5">
          <p>How do you plan to use this home?</p>
          <div class="col-md-3">
            <div class="row form-select-container">
              <select v-model="howPlan" class="form-select">
                <option value="0">Property type</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
              </select>
              <font-awesome-icon icon="angle-down" class="custom-appearance"></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PropertyDetails",
        computed: {
            formInputs () {
                return this.$store.state.formInputs
            },
            whenToPurchase: {
                get () {
                    return this.$store.state.formInputs.whenToPurchase
                },
                set (val) {
                    this.formInputs.whenToPurchase = val
                    this.$store.commit('setFormInputs', this.formInputs)
                }
            },
            howPlan: {
                get () {
                    return this.$store.state.formInputs.howPlan
                },
                set (val) {
                    this.formInputs.howPlan = val
                    this.$store.commit('setFormInputs', this.formInputs)
                }
            }
        },
        methods: {
            setIsFirstTime (val) {
                this.formInputs.isFirstTime = val
                this.$store.commit('setFormInputs', this.formInputs)
            },
            setWhatType (val) {
                this.formInputs.whatType = val
                this.$store.commit('setFormInputs', this.formInputs)
            },
        }
    }
</script>

<style scoped>

</style>
