import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData : {
      id: 0,
      name: "咖啡拿鐵",
      price: "90",
      quantity: "2",
      note: "",
    }
  },
  actions: {
    updateTableData(context, status){
      context.commit('setTableData',status)
    }
  },
  mutations: {
    setTableData(state,status){
      state.tableData = status;
    }
  },
  getters: {
  },
})
