<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="input" @change="addTodo" />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" :checked="allCompleted" @change="toggleAll"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li v-for="(item, i) in showTodos" :key="item.text" :class="{ completed: item.completed }">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.completed" />
            <label>{{ item.text }}</label>
            <button class="destroy" @click="removeTodo(i)"></button>
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
          <a :class="{ selected: filter === 'all' }" @click="filter = 'all'" href="javascript:;">All</a>
        </li>
        <li>
          <a :class="{ selected: filter === 'active' }" @click="filter = 'active'" href="javascript:;">Active</a>
        </li>
        <li>
          <a :class="{ selected: filter === 'completed' }" @click="filter = 'completed'" href="javascript:;">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
  </section>
</template>

<script>
import storage from './storage'

export default {
  name: 'App',
  computed: {
    showTodos () {
      const filters = {
        all: i => true,
        active: i => !i.completed,
        completed: i => i.completed
      }

      return this.todos.filter(filters[this.filter] || filters.all)
    },
    leftCount () {
      return this.todos.filter(i => !i.completed).length
    },
    allCompleted () {
      return this.todos.every(i => i.completed)
    }
  },
  data () {
    const todos = storage.get('todos') || []
    return {
      input: '',
      filter: 'all',
      todos: todos
    }
  },
  watch: {
    todos: {
      handler (todos) {
        storage.set('todos', todos)
      },
      deep: true
    }
  },
  methods: {
    addTodo () {
      // prevent duplicate item
      const text = this.input.trim()
      if (this.todos.find(i => i.text === text)) {
        return
      }
      this.todos.push({ text, completed: false })
      this.input = ''
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    },
    clearCompleted () {
      this.todos = this.todos.filter(i => !i.completed)
    },
    toggleAll () {
      const completed = !this.allCompleted
      this.todos.forEach(i => {
        i.completed = completed
      })
    }
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
