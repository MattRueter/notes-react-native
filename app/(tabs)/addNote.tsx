import { addNote } from "@/api/api";
import { NoteBase } from "@/types";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewNoteForm () {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const newNote:NoteBase ={
      title,
      content
    };
    addNote(newNote)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <View style={styles.formContainer}>
        <Text>Create a new note</Text>
        <TextInput 
          style={styles.input}
          placeholder="Title"
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.longInput] }
          cursorColor={"purple"}
          multiline
          textAlignVertical="top"
          placeholder="your notes"
          onChangeText={setContent}
        />
        <Button 
          onPress={handleSubmit}
          title="submit"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    borderWidth:2,
    padding:8,
    width: "80%",
    gap:20
  },
  heading: {
    fontSize:20,
    fontWeight:"bold"
  },
  input:{
    borderWidth:1,
  },
  longInput:{
    height:200
  },
  button: {
    color:"black"
  }
})