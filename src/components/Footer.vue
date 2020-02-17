<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ remaining }}</strong> {{ remaining === 1 ? 'item' : 'items' }} left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a :class="{ selected: filter === 'all' }" href="#/" @click="onToggleFilter('all')">All</a>
      </li>
      <li>
        <a :class="{ selected: filter === 'active' }" href="#/active" @click="onToggleFilter('active')">Active</a>
      </li>
      <li>
        <a :class="{ selected: filter === 'completed' }" href="#/completed" @click="onToggleFilter('completed')">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" @click="onClearCompleted">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Filter } from '../types'

@Component
export default class Footer extends Vue {
  private state: Filter

  @Prop()
  readonly filter?: Filter

  @Prop()
  readonly remaining!: number

  constructor () {
    super()
    this.state = this.filter || 'all'
  }

  @Emit('toggleFilter')
  onToggleFilter (filter: Filter) {
    this.state = filter
    return filter
  }

  @Emit('clear')
  onClearCompleted () {} // eslint-disable-line @typescript-eslint/no-empty-function
}
</script>
