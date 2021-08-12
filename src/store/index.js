import { createStore } from 'vuex'

export default createStore({
    state: {
        showMenu: false,
        showPreview: false,
        countCart: 0
    },
    mutations: {
        setShowMenu(state, payload) {
            state.showMenu = payload
        },
        setShowPreview(state, payload) {
            state.showPreview = payload
        },
        setCountCart(state, payload) {
            state.countCart = payload
        },
    },
    actions: {},
    modules: {}
})