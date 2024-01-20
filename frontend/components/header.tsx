import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  name: string;
  noBackButton?: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {!props.noBackButton && (
          <>
            <Link href="/">
              <View style={styles.backButtonContainer}>
                <Ionicons name="chevron-back" size={24} color="#7d486b" />
                <Text style={styles.backButtonText}>back</Text>
              </View>
            </Link>
            <Text style={{ flex: 1 }}></Text>
          </>
        )}
        <Text style={styles.text}>{props.name}</Text>
        {props.noBackButton && <Text style={{ flex: 1 }}></Text>}
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 25,
  },
  line: {
    height: 1,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: "#98307B",
  },
  text: {
    fontSize: 40,
    color: "#26204c",
    fontWeight: "bold",
  },
  backButtonText: {
    fontSize: 20,
    color: "#7d486b",
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    paddingRight: 25,
    paddingLeft: 20,
    paddingTop: 5,
  },
});
