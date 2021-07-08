<template>
    <section class="text-center">
        <div>
          <p class="">UserId: {{task.userId}}</p>
        </div>
        <div>
          <p class="">Id: {{task.id}}</p>
        </div>
        <div>
          <p class="">Title: {{task.title}}</p>
        </div>
        <div>
          <p>Completed: {{task.completed}}</p>
        </div>
    </section>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ $axios, params }) {
    const task = await $axios.$get('https://jsonplaceholder.typicode.com/todos/' + params.id)
    return { task }
  }
}
</script>
