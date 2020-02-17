<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model.trim="input" @change="onInputChange">
  </header>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  private input = ''

  // onInputChange () {
  //   if (!this.input) return
  //   // console.log(this.input)
  //   this.$emit('change', this.input)
  //   this.input = ''
  // }

  @Emit('change')
  onInputChange () {
    if (!this.input) return
    const text = this.input
    this.input = ''
    return text
  }
}
</script>
