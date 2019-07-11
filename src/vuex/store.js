import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

export default new Vuex.store(
    {
        state
    }
)