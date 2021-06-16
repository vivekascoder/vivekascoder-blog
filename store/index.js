// This is our VueX store in nuxtJS

export const state = () => ({
  // VueX State
  tags: [],
  about: {}
})

export const mutations = {
  // VueX mutations.
  setTodos(state, tags) {
    state.tags = tags
  },
  setAbout(state, about) {
    state.about = about
  }
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('fetchTodos')
    await dispatch('fetchAbout')
  },
  async fetchAbout(context) {
    const about = await this.$content('about/about').fetch()
    context.commit('setAbout', about)
  },
  async fetchTodos(context) {
    const tags = await this.$content('tags').fetch()
    context.commit('setTodos', tags)
  },
  getPerfectDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = monthNames[date.getUTCMonth()];
    let year = date.getUTCFullYear();
    let day = date.getUTCDay();
    return `${day} ${month}, ${year}`;
  }
}