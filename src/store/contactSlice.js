import {createSlice} from '@reduxjs/toolkit'

const initialState={
    data:[
        {Name:"Pravin",Contact:5465787398,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"Good Morning",time:"10:00 am",msgType:"sent"},{msg:"How are you",time:"12:31 pm",msgType:"sent"},{msg:"Good Morning",time:"10:00 am",msgType:"sent"},{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"12:00 pm",msgType:"sent"},{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"12:00 pm",msgType:"sent"},{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"12:00 pm",msgType:"sent"},{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"12:00 pm",msgType:"sent"}],profile:"./profile8.jpg"},
        {Name:"Rita",Contact:4567893452,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"12:00 pm",msgType:"sent"}],profile:"./profile3.jpeg"},
        {Name:"Neha",Contact:546578798,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"11:35 am",msgType:"sent"}],profile:"./profile4.jpeg"},
        {Name:"Sham",Contact:45678934652,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"Material UI aims to provide building blocks for developers to create great user interfaces using the Material Design guidelines as a reference, which we strive to follow where practical. That doesn't mean we support every component or every feature. We often apply common sense and the latest around web development wherever their guidelines are missing or contradictory.",time:"11:02 am",msgType:"sent"}],profile:"./profile1.webp"},
        {Name:"Riya",Contact:45678934552,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"Hey",time:"10:54 am",msgType:"sent"}],profile:"./profile7.webp"},
        {Name:"Anita",Contact:45678934542,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"sent"},{msg:"Bye",time:"10:11 am",msgType:"received"}],profile:"./profile2.webp"},
        {Name:"Nilesh",Contact:5465787982,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"Good Morning",time:"10:00 am",msgType:"sent"}],profile:"./profile6.webp"},
        {Name:"Priya",Contact:45678934522,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"Have a nice day!!!",time:"9:15 am",msgType:"sent"}],profile:"./profile11.jpeg"},
        {Name:"Ram",Contact:45678934252,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"Hello",time:"8:30 am",msgType:"sent"}],profile:"./profile12.webp"},
        {Name:"Tarun",Contact:45678933452,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"sent"},{msg:"How are you",time:"7:45 am",msgType:"sent"}],profile:"./profile5.jpg"},
        {Name:"Siddhi",Contact:45670934552,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"received"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"7:20 am",msgType:"received"}],profile:"./profile10.webp"},
        {Name:"Sakshi",Contact:45678934852,MsgArr:[{msg:"Hey",time:"6:30 am",msgType:"sent"},{msg:"Hello",time:"6:35 am",msgType:"received"},{msg:"How are you",time:"7:00 am",msgType:"received"}],profile:"./profile9.webp"},
      ],
      searchValue:"",
      selectedContact: null,
}

const contactSlice=createSlice({
    name:"contactSlice",
    initialState,
    reducers:{
        onSelectContact:(state,action)=>{
            state.selectedContact = action.payload;
        },
        onMsg:(state,action)=>{
            state.data[action.payload.index].MsgArr = action.payload.msgArr
        },
        onSearch:(state,action)=>{
            state.searchValue=action.payload  
        }
    }
})
export const {onSelectContact,onMsg,onSearch}=contactSlice.actions
export default contactSlice.reducer