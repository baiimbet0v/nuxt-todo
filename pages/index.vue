<template>
  <div class="header mt-20">
    <article>
      <h1 class="header_article text-center py-8 uppercase font-bold text-xl">Nuxt Todolist</h1>
    </article>
    <ul class="container list-none mx-auto ">
      <li class="py-1" v-for="task of tasks" :key="task.id">
        <a href="#" class="" @click.prevent="openTask(task)">{{task.id}} - {{task.title}}</a>
      </li>
    </ul>

    <label for="">UserId - 1</label>
    <input type="checkbox" value="" v-model="task">
    <ul>
      <li v-for="task of tasks" :key="task.id">
        <a href="" v-if="task.userId === 1" @click.prevent="userTask(task)">{{task.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store: [],
      task: []
    }
  },
  async fetch ({ store }) {
    if (store.getters['tasks/tasks'].length === 0) {
      await store.dispatch('tasks/fetch')
    }
  },
  computed: {
    tasks () {
      return this.$store.getters['tasks/tasks']
    }
  },
  methods: {
    openTask (task) {
      this.$router.push('/tasks/' + task.id)
    },
    userTask (task) {
      this.$router.push('/tasks/' + task.id)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
