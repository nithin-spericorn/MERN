import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{
                currentUser:null,
                isFetching:false,
                error:false,
                msg:""
                  },
    reducers:{
        loginStart:(user,action)=>{
            user.isFetching=true;
        },
        loginSuccess:(user,action)=>{
            user.isFetching=false;
            user.currentUser=action.payload
        },
        loginFailure:(user)=>{
            user.isFetching=false;
            user.error=true;
        },  

        registerSuccess:(user,action)=>{
            user.msg=action.payload.data

        },
        logOut:(user)=>{
            user.currentUser=null;
        }
            
        
    }              
})
export const {loginStart,loginSuccess,loginFailure,logOut,registerSuccess}=userSlice.actions
export default userSlice.reducer;