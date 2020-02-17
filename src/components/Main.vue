<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li v-for="item in todos" :key="item.text" :class="{ completed: item.completed }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @change="onToggle(item)">
          <label>{{ item.text }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" :value="item.text">
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

@Component
export default class Main extends Vue {
  @Prop()
  readonly todos?: Todo[]

  mounted () {
    console.log(this.todos)
  }

  @Emit('toggle')
  onToggle (todo: Todo) {
    return todo
  }
}
</script>
