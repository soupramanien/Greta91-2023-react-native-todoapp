import { StyleSheet, Text, View } from "react-native";

export default function Todo(props) {
    return (
        <View>
            <Text style={styleSheet.item}>{props.todo.label}</Text>
        </View>
    )
}
const styleSheet = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        borderStyle: 'solid'
    }
})