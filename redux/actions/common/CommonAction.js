import {
    LANG_SWITCH,
  } from "./CommonActionType";

  
  export const setlangSwitch = (value) => {
    return {
      type: LANG_SWITCH,
      payload: value,
    };
  };
  
  
  