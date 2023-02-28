import { StyleSheet, View } from "react-native";
import Todo from "./Todo";

export default function TodoList(props) {
    return (
        <View style={styleSheet.todolist}>
            {/* {props.todos.map((todo) => <Todo todo={todo} key={todo.id} />)} */}
            {props.todos.map(function (todo) {
                return <Todo todo={todo} key={todo.id} />
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