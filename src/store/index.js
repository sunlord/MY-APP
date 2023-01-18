import Vue from 'vue'
import Vuex from 'vuex'
import Tab from './tab'

Vue.use(Vuex)

// 创建vuex的实例
export default new Vuex.Store({
    modules: {
        Tab
    }
})