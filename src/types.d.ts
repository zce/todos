export interface Todo {
  text: string
  completed: boolean
}

export type Filter = 'all' | 'active' | 'completed'
