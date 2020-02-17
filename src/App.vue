<template>
  <section class="todoapp" v-cloak>
    <Header @change="addTodo"/>
    <!-- This section should be hidden by default and shown when there are todos -->
    <Main v-show="todos.length" :todos="visibleTodos" @toggle="toggleTodo" @remove="removeTodo" @editing="editTodo"/>
    <!-- This footer should hidden by default and shown when there are todos -->
    <Footer v-show="todos.length" :remaining="remaining" :filter="filter" :showClear="remaining < todos.length" @toggleFilter="toggleFilter" @clear="clearCompleted"/>
  </section>
</template>

<script lang="ts">
// eslint 不推荐使用这种引入类型声明的方式
// 改用 import 模块的方式代替
// /// <reference path="./types.d.ts" />

import { Vue, Component, Watch } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import storage from './utils/storage'
import { Todo, Filter } from './types'

@Component({
  components: {
    Header,
    Main,
    Footer
  }
})
export default class App extends Vue {
  private todos: Todo[]
  private filter: Filter = 'all'

  get remaining () {
    return this.todos.filter(t => !t.completed).length
  }

  get visibleTodos () {
    let todos = this.todos
    if (this.filter === 'active') {
      todos = todos.filter(t => !t.completed)
    } else if (this.filter === 'completed') {
      todos = todos.filter(t => t.completed)
    }
    return todos
  }

  constructor () {
    super()
    this.todos = storage.get<Todo[]>('todos') || []
  }

  addTodo (text: string) {
    if (this.todos.some(t => t.text === text)) return
    this.todos.push({ text, completed: false })
  }

  toggleTodo (todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1, { text: todo.text, completed: !todo.completed })
  }

  editTodo (todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1, { text: todo.text, completed: todo.completed })
  }

  removeTodo (todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  clearCompleted () {
    this.todos
      .filter(t => t.completed)
      .forEach(t => this.removeTodo(t))
  }

  toggleFilter (filter: Filter) {
    this.filter = filter
  }

  @Watch('todos')
  onTodosChange (todos: Todo[]) {
    storage.set('todos', todos)
  }
}
</script>

<style >
[v-cloak] {
  display: none;
}
</style>
