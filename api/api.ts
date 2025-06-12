import { Note } from "@/types";
import React from "react";
const baseUrl = "https://d127-73-209-189-26.ngrok-free.app"


type  SetData = React.Dispatch<React.SetStateAction<Note[]>>
type SetIsLoading = React.Dispatch<React.SetStateAction<boolean>>

export  const getNotes = async (setData:SetData, setIsLoading:SetIsLoading) => {
    try{
      const response = await fetch(`${baseUrl}/notes`);
      const notes: Note[] =await response.json();
      console.log(notes)
      setData(notes)
    }catch(err){
      console.error(err);
    }finally{
      setIsLoading(false)
    }
  }
