export const initialUser={
    user:null
}


const LoginReducer=(state,action)=>{
    switch (action.type) {
          case "SET_USER":
            return{
              ...state,
              user:action.user
            }
        default:
          return state;
      }
}
export default LoginReducer;