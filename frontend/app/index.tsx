import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name="Serais" noBackButton />
      <View style={styles.page}>
        <View style={styles.module}>
          <Link
            href="/TodoPage"
            style={{
              textDecorationLine: "underline",
              fontSize: 30,
              fontFamily: "Nunito-ExtraLight",
            }}
          >
            todo list
          </Link>
        </View>
      </View>
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
  },
  module: {
    borderWidth: 1,
    borderColor: Colors.ACCENT_1,
    borderRadius: 10,
    padding: 15,
  },
});
