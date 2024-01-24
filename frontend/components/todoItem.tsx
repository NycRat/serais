import { StyleSheet, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { remove, updateText } from "../redux/features/todoSlice";
import { TextInput } from "react-native";
import { Colors } from "../colors";

interface TodoItemProps {
  text: string;
  index: number;
}

// TODO make the input not have min width on web
export default function TodoItem(props: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => {
            dispatch(updateText({ index: props.index, text }));
          }}
          placeholder="todo"
          value={props.text}
        />
        <EvilIcons
          name="close-o"
          size={30}
          color={Colors.FOREGROUND}
          onPress={() => {
            dispatch(remove(props.index));
          }}
        />
        <EvilIcons
          name="check"
          size={30}
          color={Colors.FOREGROUND}
          onPress={() => {
            dispatch(remove(props.index));
          }}
        />
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: "20%",
  },
  text: {
    fontSize: 24,
    fontFamily: "Nunito-ExtraLight",
    flex: 1,
  },
  line: {
    backgroundColor: "#ebd7dd",
    height: 1,
    width: "62%",
    alignSelf: "center",
  },
});
