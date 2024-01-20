import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name="serais" noBackButton />
      <View style={styles.page}>
        <Link
          href="/TodoPage"
          style={{ textDecorationLine: "underline", fontSize: 30 }}
        >
          todo list
        </Link>
      </View>
    </SafeAreaView>
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
