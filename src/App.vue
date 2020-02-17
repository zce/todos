<template>
  <section class="todoapp">
    <Header/>
    <!-- This section should be hidden by default and shown when there are todos -->
    <Main/>
    <!-- This footer should hidden by default and shown when there are todos -->
    <Footer/>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

@Component({
  components: {
    Header,
    Main,
    Footer
  }
})
export default class App extends Vue {

}
</script>
