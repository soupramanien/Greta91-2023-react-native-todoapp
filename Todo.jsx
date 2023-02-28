import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// const Todo = ({ todo, updateTodoLabel }) => {
function Todo(props) {
    // const { todo, updateTodoLabel } = props;
    const todo = props.todo;
    const updateTodoLabel = props.updateTodoLabel;
    const [editMode, setEditMode] = useState(false);
    const [label, setLabel] = useState(todo.label);
    //flex : 1; flex : 1 1 0em;
    const renderShowMode = () => (
        <View style={styles.container}>
            <Text>{label}</Text>
            <Button title="Edit" onPress={onEditPress}
                style={{ flexGrow: 1, flexBasis: '0%', flexShrink: 0 }}
            />
        </View>
    )
    const renderEditMode = () => (
        <View style={styles.editMode}>
            <TextInput
                value={label}
                onChangeText={onChange}
                autoFocus
                style={{
                    flexBasis: '100%', borderColor: "blue", borderWidth: 2, borderStyle: "solid", padding: 3
                }} />
            <View style={{ flexDirection: 'row' }}>
                <Button title="Save" onPress={() => onSavePress(todo.id)} color="blue" />
                <Button title="Cancel" onPress={onCancelPress} color="red" />
            </View>
        </View>
    )
    const onEditPress = () => setEditMode(true);
    const onChange = (text) => setLabel(text);
    const onSavePress = (id) => {
        setEditMode(false);
        updateTodoLabel(id, label);
    }
    const onCancelPress = () => {
        //anuler la modification et remettre le texte initial
        setLabel(todo.label);
        //changer le mode
        setEditMode(false);
    }
    return (
        <View>{editMode ? renderEditMode() : renderShowMode()}</View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
    },
    editMode: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        alignItems: "center"
    }
})
export default Todo;