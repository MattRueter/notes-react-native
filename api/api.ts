import { Note, NoteBase } from "@/types";
import React from "react";
const baseUrl = "https://d127-73-209-189-26.ngrok-free.app"


type  SetData = React.Dispatch<React.SetStateAction<Note[]>>
type SetIsLoading = React.Dispatch<React.SetStateAction<boolean>>

export  const getNotes = async (setData:SetData, setIsLoading:SetIsLoading) => {
    try{
      const response = await fetch(`${baseUrl}/notes`);
      const notes: Note[] =await response.json();
      setData(notes)
    }catch(err){
      console.error(err);
    }finally{
      setIsLoading(false)
    }
};



export const addNote = async(note:NoteBase) => {
  try{
    const response = await fetch(`${baseUrl}/notes`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note)
    });
    const newNote = await response.json();
  }catch(err){
    console.error(err);
  }
}
