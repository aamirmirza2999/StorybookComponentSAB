import React, { Component } from 'react';
import {
  View,
  Animated,
  Dimensions,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  I18nManager,
  PanResponder,
  Platform,
  //Pressable
} from 'react-native';
import { globalStyles } from '../../constants/GlobalStyles';
import { actuatedNormalize } from '../../constants/PixelScaling';

const { height, width } = Dimensions.get('window');
import { Close } from '../../constants/SvgLocations';
import TextComponent from '../Button/TextComponent';

//snack bar will be dismmised if user swipes beyound DISMISS_THRESHOLD% of screen width
const DISMISS_THRESHOLD = 0.5;

class SnackBar extends Component {
  constructor(props) {
    super(props);
    this.handlePanResponderMove = this.handlePanResponderMove.bind(this);
    this.handlePanResponderEnd = this.handlePanResponderEnd.bind(this);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => { return true },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dx, dy } = gestureState
        return dx > 2 || dx < -2 || dy > 2 || dy < -2
        // return !(gestureState.dx === 0 && gestureState.dy === 0)
      },
      onStartShouldSetPanResponderCapture: () => { return false },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        const { dx, dy } = gestureState
        return (dx > 2 || dx < -2 || dy > 2 || dy < -2)
      },
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    });
    this.left = 0;
    this.opacity = 1;
    this.shouldHide = false;
    this.snackBarStyles = {
      style: {
        left: this.left,
        opacity: this.opacity,
        backgroundColor: this.backgroundColor,
      },
    };
    this.state = {
      hide: false,
    };
  }

  handlePanResponderMove(e, gestureState) {
    I18nManager.isRTL ?
      this.snackBarStyles.style.left = this.left - gestureState.dx :
      this.snackBarStyles.style.left = this.left + gestureState.dx
    this.getOpacity();
    this.updateNativeStyles();
  }
  handlePanResponderEnd(e, gestureState) {
    if (this.shouldHide) {
      this.setState({
        hide: true,
      });
      // clearTimeout(this.hideTimeout);
     // this.closeFn();
    }
    this.snackBarStyles.style.opacity = 1;
    this.snackBarStyles.style.left = 0;
    this.updateNativeStyles();
  }

 
  updateNativeStyles() {
    this.snackBar && this.snackBar.setNativeProps(this.snackBarStyles);
  }

  getOpacity() {
    let leftFactor = Math.abs(this.snackBarStyles.style.left) / width;
    if (leftFactor > 0.5) {
      this.snackBarStyles.style.opacity = 0;
      this.shouldHide = true;
    } else {
      this.snackBarStyles.style.opacity = 1 - leftFactor / 0.5;
      this.shouldHide = false;
    }
  }

  render() {    
   
    return this.state.hide === false  ? (
        <>
        <StatusBar
          animated
          backgroundColor="transparent"
          // backgroundColor={"rgba (0,0,0,0.7)"}
          barStyle={'dark-content'}
          translucent={true}
        />
        <Animated.View
          style={[this.snackBarStyles.style, styles.container(this.props)]}
          ref={(snackBar) => {
            this.snackBar = snackBar;
          }}
          {...this.panResponder.panHandlers}
        >
        <View style={[globalStyles.snackbarContainer,{backgroundColor:this.props.backgroundColor,borderColor:this.props.borderColor}]}>
            {this.props.Icon}
            <View style={[globalStyles.snackbarBox]}>
             <TextComponent style={[globalStyles.snackBarLabel]}>{this.props.label}</TextComponent>
            </View>
            <TouchableOpacity
             onPress={this.props.onPress}>
                <Close style={styles.rightactionaddonIcon}/>
            </TouchableOpacity>
        </View>
        </Animated.View>
      </>
      ) : null
  }
}

const styles = StyleSheet.create({
  

  container: function (props) {
    return {
    width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: actuatedNormalize(20),
    paddingBottom : actuatedNormalize(16),
    zIndex: 999,
  
    }
  },
  
});



export default SnackBar;
