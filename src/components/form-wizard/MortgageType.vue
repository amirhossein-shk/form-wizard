<template>
  <div class="mt-4">
    <h4 class="font-weight-bold">Mortgage type</h4>
    <p class="mt-5">What do you want to do?</p>
    <div class="row mortgage-type">
      <div class="col-md-3">
        <div class="row mortgage-card text-center d-flex align-items-center justify-content-center" :class="{selected: formInputs.toDo === 'Buy'}">
          <img src="https://image.flaticon.com/icons/png/512/2405/2405503.png"/>
        </div>
        <div class="row justify-content-center">
          <button @click="setToDo('Buy')">Buy</button>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row mortgage-card text-center d-flex align-items-center justify-content-center" :class="{selected: formInputs.toDo === 'Reflnance'}">
          <img src="https://image.flaticon.com/icons/png/512/2405/2405503.png"/>
        </div>
        <div class="row justify-content-center">
          <button @click="setToDo('Reflnance')">Reflnance</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MortgageType",
        computed: {
            formInputs () {
                return this.$store.state.formInputs
            }
        },
        methods: {
            setToDo (val) {
                this.formInputs.toDo = val
                this.$store.commit('setFormInputs', this.formInputs)
            }
        },
        created () {
            console.log(this.formInputs)
        }
    }
</script>

<style scoped>

</style>
