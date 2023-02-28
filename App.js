import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import TodoList from './TodoList';
const initData = [
  { id: 1, label: 'Buy some' },
  { id: 2, label: 'Learn some React' }
]
export default function App() {
  const [todos, setTodos] = useState(initData)
  const updateTodo = (id, label) => {
    // const todoIndex = todos.findIndex(t => t.id === id)
    // const todosBefore = todos.slice(0, todoIndex)
    // const todosAfter = todos.slice(todoIndex + 1)
    // const newtodo = { ...todos[todoIndex], label }
    // setTodos([...todosBefore, newtodo, ...todosAfter]);
    setTodos((todos) => todos.map((todo) => todo.id !== id ? todo : { id: id, label: label }))
  }
  return (
    <View style={styles.container}>
      <TodoList updateTodoLabel={updateTodo} todos={todos} />
      <StatusBar style="dark" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 5
  }
});
