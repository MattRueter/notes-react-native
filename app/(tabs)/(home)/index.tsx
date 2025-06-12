import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

type Note = {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Note[]>([])
  
  const getNotes = async () => {
    try{
      const response = await fetch('http://localhost:5000/notes');
      const notes = await response.json();
      setData(notes)
    }catch(err){
      console.error(err);
    }finally{
      setIsLoading(false)
    }
  
  }

  useEffect (() =>{
    getNotes()
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