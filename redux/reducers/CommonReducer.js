import {
    LANG_SWITCH,
  } from "../actions/common/CommonActionType";
  
  const initState = {
    LanginitialValue: "en",
   
    
  };
  
  const CommonReducer = (state = initState, action) => {
    if (action.type === LANG_SWITCH) {
      return {
        ...state,
        LanginitialValue: action.payload,
      };
    } 
  
  else {
      return state;
    }
  };
  
  export default CommonReducer;
  