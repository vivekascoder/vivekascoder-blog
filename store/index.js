// This is our VueX store in nuxtJS

export const state = () => ({
  // VueX State
  tags: [
  ]
})

export const mutations = {
  // VueX mutations.
  setTodos(state, tags) {
    state.tags = tags
  }
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('fetchTodos')
  },
  async fetchTodos(context) {
    const tags = await this.$content('tags').fetch()
    console.log('Executing fetchTodos.')
    context.commit('setTodos', tags)
  }
}