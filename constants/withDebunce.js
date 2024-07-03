import React from 'react';
import * as _ from 'underscore';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default (WrappedComponent, debounceMillis = 2000) => {
    
  
  class withDebunce extends React.PureComponent {

    constructor(props) {
        super(props);
        this.debounceEvent = _.debounce(this.debounceFun, 1000, true);   
      }

      debounceFun=(fun) => {
        if(fun!==undefined){
          console.log('Debounce...Block')
            fun()
        }      
      }
    
   
    
    render() {
      return <WrappedComponent {...this.props} debounceEvent={this.debounceEvent} />
          
    }
  }
  
 
  return withDebunce;

};