<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li v-for="item in todos" :key="item.text" :class="{ completed: item.completed, editing: editing === item }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @change="onToggle(item)">
          <label @dblclick="onEditing(item)">{{ item.text }}</label>
          <button class="destroy" @click="onDestory(item)"></button>
        </div>
        <input class="edit" v-focus="editing === item" :value="item.text" @blur="onComfirmEditing(item, $event)" @keyup.enter="onComfirmEditing(item, $event)" @keyup.esc="onCancelEditing">
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
// import { Vue, Component } from 'vue-property-decorator'
// import { Todo } from '../types'

// @Component({
//   props: {
//     todos: Array
//   }
// })
// export default class Main extends Vue {
//   readonly todos?: Todo[]

//   mounted () {
//     console.log(this.todos)
//   }
// }

import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Todo } from '../types'

@Component({
  directives: {
    focus (ref, { value }) {
      if (!value) return
      const input = ref as HTMLInputElement
      input.focus()
      input.select()
    }
  }
})
export default class Main extends Vue {
  private editing: Todo | null = null

  @Prop()
  readonly todos?: Todo[]

  mounted () {
    console.log(this.todos)
  }

  onEditing (todo: Todo) {
    this.editing = todo
  }

  onCancelEditing () {
    this.editing = null
  }

  @Emit('editing')
  onComfirmEditing (todo: Todo, e: Event) {
    const input = e.target as HTMLInputElement
    const text = input.value.trim()
    if (!text) {
      return this.onDestory(todo)
    }
    this.editing = null
    todo.text = text
    return todo
  }

  @Emit('toggle')
  onToggle (todo: Todo) {
    return todo
  }

  @Emit('remove')
  onDestory (todo: Todo) {
    return todo
  }
}
</script>
