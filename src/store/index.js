import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      formInputs: {
          toDo: null,
          isFirstTime: null,
          whenToPurchase: 0,
          whatType: null,
          howPlan: 0,
          purchasePrice: null,
          cashDown: 0,
      }
  },
  mutations: {
    setFormInputs: (state, payload) => {
      state.formInputs = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
