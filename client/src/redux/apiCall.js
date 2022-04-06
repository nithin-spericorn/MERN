import { loginFailure, loginStart, loginSuccess,logOut } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {   //user=>{email:"abc",password:"***"}
    console.log(user)  // i got user=>{email:"abc",password:"***"}
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user); //usingg axios
    dispatch(loginSuccess(res));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {   //user=>{email:"abc",password:"***"}
  console.log(user)  // i got user=>{email:"abc",password:"***"}
dispatch(loginStart());
try {
  const res = await publicRequest.post("/auth/signin", user); //usingg axios
  dispatch(loginSuccess(res));
} catch (err) {
  dispatch(loginFailure());
}
};
export const logout=async(dispatch,user)=>{
  dispatch(logOut())
}