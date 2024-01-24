import { StyleSheet, ScrollView, Pressable } from "react-native";
import Header from "../components/header";
import TodoItem from "../components/todoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { push } from "../redux/features/todoSlice";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../colors";

export default function TodoPage() {
  const todo = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Header name="Todo" />
      <ScrollView style={styles.page}>
        {todo.map((text, i) => (
          <TodoItem key={i} text={text} index={i} />
        ))}
      </ScrollView>
      <Pressable style={styles.button} onPress={() => dispatch(push(""))}>
        <Ionicons name="add" size={54} color="#26204c" />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    flex: 1,
    width: "100%",
  },
  button: {
    position: "absolute",
    right: 30,
    bottom: 30,
    // borderRadius: 999,
    // padding: 12,
    // backgroundColor: "#ececeb",
  },
});
