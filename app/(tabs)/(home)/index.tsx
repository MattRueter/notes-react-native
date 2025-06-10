import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}
    >
      <Text>Here are your notes.</Text>
      <Link style={styles.linkBtn} href="err">...where does this lead to?"</Link> 
    </View>
  );
};

const styles = StyleSheet.create({
  linkBtn: {
    color:"blue",
  }
})