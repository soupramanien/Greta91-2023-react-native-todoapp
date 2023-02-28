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
  return (
    <View style={styles.container}>
      <TodoList todos={todos} />
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
