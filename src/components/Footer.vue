<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ remaining }}</strong> {{ remaining === 1 ? 'item' : 'items' }} left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  @Prop()
  readonly remaining!: number
}
</script>
