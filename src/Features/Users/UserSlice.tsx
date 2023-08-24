import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {Id:1,name:"Ragul",city:'Chennai',email:'ragul@gmail.com'},
    {Id:2,name:"Jash",city:'Madurai',email:'jash@gmail.com'}
];

const userSlice=createSlice({
    name: 'users',
    initialState,
    reducers: {
        //ADD
        userAdded(state,action){
            state.push(action.payload)
        },
        //EDIT
           userUpdated(state, action) {
            const { id, name,city, email } = action.payload;
            const existingUser = state.find((user) => user.Id === id);
            if (existingUser) {
              existingUser.name = name;
              existingUser.city=city;
              existingUser.email = email;
            }
          },
          //DELETE
          userDeleted(state, action) {
            const { id } = action.payload;
            const existingUser = state.find((user) => user.Id === id);
            if (existingUser) {
              return state.filter((user) => user.Id !== id);
            }
          },
    }
    
});
export const { userAdded,userUpdated,userDeleted } = userSlice.actions;
export default  userSlice.reducer;