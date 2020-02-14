import Vue from 'vue'
import Vuex from 'vuex'
import storage from './storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: storage.get('filter') || 'all',
    todos: storage.get('todos') || []
  },
  getters: {
    filter: ({ filter }) => filter,
    showTodos: ({ todos, filter }) => {
      const filters = {
        all: i => true,
        active: i => !i.completed,
        completed: i => i.completed
      }
      return todos.filter(filters[filter] || filters.all)
    },
    leftCount: ({ todos }) => {
      return todos.filter(i => !i.completed).length
    },
    allCompleted: ({ todos }) => {
      return todos.every(i => i.completed)
    }
  },
  mutations: {
    ADD_TODO: ({ todos }, todo) => {
      todos.push(todo)
    },
    REMOVE_TODO: ({ todos }, todo) => {
      const index = todos.indexOf(todo)
      todos.splice(index, 1)
    },
    UPDATE_TODO: ({ todos }, { todo, text = todo.text, completed = todo.completed }) => {
      const index = todos.indexOf(todo)
      todos.splice(index, 1, { text, completed })
    },
    UPDATE_FILTER: (state, filter) => {
      state.filter = filter
    }
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      commit('ADD_TODO', todo)
    },
    removeTodo: ({ commit }, todo) => {
      commit('REMOVE_TODO', todo)
    },
    toggleTodo: ({ commit }, todo) => {
      commit('UPDATE_TODO', { todo, completed: !todo.completed })
    },
    toggleAll: ({ state, getters, commit }) => {
      const completed = !getters.allCompleted
      state.todos.forEach(todo => {
        commit('UPDATE_TODO', { todo, completed })
      })
    },
    clearCompleted: ({ state, commit }) => {
      state.todos.filter(i => i.completed).forEach(todo => {
        commit('REMOVE_TODO', todo)
      })
    },
    setFilter: ({ commit }, filter) => {
      commit('UPDATE_FILTER', filter)
    }
  },
  plugins: [
    store => {
      store.subscribe((mutation, { filter, todos }) => {
        if (mutation.type === 'UPDATE_FILTER') {
          storage.set('filter', filter)
        } else {
          storage.set('todos', todos)
        }
      })
    }
  ]
})
