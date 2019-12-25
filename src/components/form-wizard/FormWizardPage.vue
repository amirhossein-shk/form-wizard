<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-6 m-auto text-center">
        <ul class="list-unstyled mb-5">
          <li class="list-inline-item mr-5" v-for="tab in tabs" :class="{ 'isActive': tab.isActive }">{{ tab.name }}</li>
        </ul>
        <hr/>
      </div>
    </div>
    <div class="row form-content">
      <div class="col-md-6 mx-auto">
        <tab :selected="currentActive === 0">
          <mortgage-type></mortgage-type>
        </tab>
        <tab :selected="currentActive === 1">
          <property-details></property-details>
        </tab>
        <tab :selected="currentActive === 2">
          <payment-details></payment-details>
        </tab>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 mx-auto">
        <hr/>
        <button class="form-buttons next float-right" v-if="currentActive === totalTabs - 1" @click="submit">Submit</button>
        <button class="form-buttons next float-right" v-if="currentActive < totalTabs - 1" @click="nextTab">Next</button>
        <button class="form-buttons back float-left" :class="{'back-disabled': currentActive < 1}" :disabled="currentActive < 1" @click="previousTab">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
    import MortgageType from "./MortgageType";
    import Tab from "./Tab";
    import PropertyDetails from "./PropertyDetails";
    import PaymentDetails from "./PaymentDetails";
    export default {
        name: "FormWizardPage",
        components: {PaymentDetails, PropertyDetails, Tab, MortgageType},
        data () {
            return {
                currentActive: 0,
                totalTabs: 0,
                tabs: [
                    {
                        isActive: true,
                        name: 'Mortgage type'
                    },
                    {
                        isActive: false,
                        name: 'Property details'
                    },
                    {
                        isActive: false,
                        name: 'Payment details'
                    }
                ],
            }
        },
        methods: {
            previousTab () {
                this.currentActive--;
                this.tabs.forEach(tab => {
                    tab.isActive = false;
                });
                this.tabs[this.currentActive].isActive = true;
            },
            nextTab () {
                this.currentActive++;
                this.tabs.forEach(tab => {
                    tab.isActive = false;
                });
                this.tabs[this.currentActive].isActive = true;
            },
            submit () {
                alert('Form Submitted!')
                console.log(this.$store.state.formInputs)
            }
        },
        mounted () {
            this.totalTabs = this.tabs.length;
        }
    }
</script>

<style scoped>

</style>
