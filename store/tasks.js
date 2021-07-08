export const state = () => ({
  tasks: []
})

export const mutations = {
  setTasks (state, tasks) {
    state.tasks = tasks
  }
}

export const actions = {
  async fetch ({ commit }) {
    const tasks = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    commit('setTasks', tasks)
  }
}

export const getters = {
  tasks: s => s.tasks
}
