// This is our VueX store in nuxtJS

export const state = () => ({
  // VueX State
  tags: [],
  about: {},
  darkMode: false,
  links: [
    {
      id: 1,
      name: "Home",
      path: "/",
      active: false
    },
    {
      id: 2,
      name: "Projects",
      path: "/projects",
      active: false
    },
    {
      id: 3,
      name: "About",
      path: "/about",
      active: false
    },
    {
      id: 4,
      name: "Contact",
      path: "/",
      active: false
    }
  ]
})

export const mutations = {
  // VueX mutations.
  setTodos(state, tags) {
    state.tags = tags
  },
  setAbout(state, about) {
    state.about = about
  },
  setDarkMode(state, darkModeValue) {
    state.darkMode = darkModeValue
  },
  setLinks(state, name) {
    // Find the link with name == `name` 
    // and change the active to true.
    state.links.forEach((link) => {
      if (link.name == name) {
        link.active = true
      } else {
        link.active = false
      }
    })
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
  },
  changeTheme({commit}, darkModeValue) {
    // Responsible for changing the themeMode (dark, light)
    commit('setDarkMode', darkModeValue)
  }
}