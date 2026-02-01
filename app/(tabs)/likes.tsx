import { View, Text, StyleSheet } from "react-native";

export default function LikesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>❤️ Likes Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 22, fontWeight: "600" },
});