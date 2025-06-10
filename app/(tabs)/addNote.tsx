import { Text, View } from "react-native";

export default function NewNoteForm () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This will be a form for adding a new note.</Text>
    </View>
  );
}