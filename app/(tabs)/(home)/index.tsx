import { getNotes } from "@/api/api";
import { Note } from "@/types";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";


export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Note[]>([])
  
  useEffect (() =>{
    getNotes(setData, setIsLoading)
  },[]);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop:80
      }}
    >
      {isLoading ? (
        <ActivityIndicator/>
      ):(
        <>
          <Text style={styles.heading}>Here are your notes</Text>
          <FlatList
            data={data}
            keyExtractor={( {id} ) => id}
            renderItem={( {item} ) => (
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
              </View>
            )}
          />
        </>
      )}

    </View>
  );
};

const styles =StyleSheet.create({
  heading: {
    fontWeight:"bold",
    fontSize:30
  },
  card:{
    padding: 10,
    borderWidth:1,
    margin:10
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
  },
  content:{
    color:"slate"
  }
})