import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";

export default function TodoPage() {
  return (
    <View style={styles.container}>
      <Header name="todo" />
      <View style={styles.page}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    flex: 1,
  },
});
