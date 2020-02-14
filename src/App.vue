<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus v-model.trim="input" @change="addTodo" />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" :checked="allCompleted" @change="toggleAll"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li v-for="item in showTodos" :key="item.text" :class="{ completed: item.completed }">
          <div class="view">
            <input class="toggle" type="checkbox" :checked="item.completed" @change="toggleTodo(item)" />
            <label>{{ item.text }}</label>
            <button class="destroy" @click="removeTodo(item)"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
      </ul>
    </section>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count">
        <strong>{{ leftCount }}</strong> {{ leftCount === 1 ? 'item' : 'items' }} left
      </span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a :class="{ selected: filter === 'all' }" @click="setFilter('all')" href="javascript:;">All</a>
        </li>
        <li>
          <a :class="{ selected: filter === 'active' }" @click="setFilter('active')" href="javascript:;">Active</a>
        </li>
        <li>
          <a :class="{ selected: filter === 'completed' }" @click="setFilter('completed')" href="javascript:;">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      input: ''
    }
  },
  computed: mapGetters([
    'filter',
    'showTodos',
    'leftCount',
    'allCompleted'
  ]),
  methods: {
    addTodo () {
      if (!this.input) return
      this.$store.dispatch('addTodo', {
        text: this.input,
        completed: false
      })
      this.input = ''
    },
    ...mapActions([
      'removeTodo',
      'toggleTodo',
      'toggleAll',
      'clearCompleted',
      'setFilter'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
