import { StyleSheet, View } from "react-native";
import Todo from "./Todo";

// export default function TodoList({ todos, updateTodoLabel }) {
export default function TodoList(props) {
    // const { todos, updateTodoLabel } = props;
    const todos = props.todos;
    const updateTodoLabel = props.updateTodoLabel;
    return (
        <View style={styleSheet.todolist}>
            {/* {props.todos.map((todo) => <Todo todo={todo} key={todo.id} />)} */}
            {todos.map(function (todo) {
                return <Todo updateTodoLabel={updateTodoLabel} todo={todo} key={todo.id} />
            })}
        </View>
    )
}
const styleSheet = StyleSheet.create({
    todolist: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 3,
        borderStyle: 'solid',
    }
})