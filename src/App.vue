<template>
  <section class="todoapp">
    <Header @change="addTodo"/>
    <!-- This section should be hidden by default and shown when there are todos -->
    <Main :todos="todos" @toggle="toggleTodo" @remove="removeTodo"/>
    <!-- This footer should hidden by default and shown when there are todos -->
    <Footer/>
  </section>
</template>

<script lang="ts">
// eslint 不推荐使用这种引入类型声明的方式
// 改用 import 模块的方式代替
// /// <reference path="./types.d.ts" />

import { Vue, Component } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import { Todo } from './types'

@Component({
  components: {
    Header,
    Main,
    Footer
  }
})
export default class App extends Vue {
  private todos: Todo[]

  constructor () {
    super()
    this.todos = [
      { text: 'Learning Vue.js', completed: true },
      { text: 'Learning TypeScript', completed: false }
    ]
  }

  addTodo (text: string) {
    if (this.todos.some(t => t.text === text)) return
    this.todos.push({ text, completed: false })
  }

  toggleTodo (todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1, { text: todo.text, completed: !todo.completed })
  }

  removeTodo (todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }
}
</script>
