import React, { Component } from 'react';
import { Animated, View, Text, Easing } from 'react-native';

class ComponentToest extends Component {
  state = {
    showToast: false,
    translateY: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
        console.log("prevProps",prevProps)
    if (this.props.Supplist.length < 2 && this.props.Supplist.length !== prevProps.Supplist.length) {
      console.log("heyywaminside>>>", true)
      this.showToast();
    }
  }

  showToast = () => {
    this.setState({ showToast: true }, () => {
      Animated.timing(this.state.translateY, {
        toValue: 1,
        duration: 500, // adjust duration as needed
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        // Hide toast after animation
        setTimeout(() => {
          this.hideToast();
        }, 2000); // Adjust hide delay as needed
      });
    });
  };

  hideToast = () => {
    Animated.timing(this.state.translateY, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      this.setState({ showToast: false });
    });
  };

  render() {
    const { showToast, translateY } = this.state;

    return (
      <Animated.View
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0], // Adjust initial and final positions as needed
              }),
            },
          ],
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#000000',
          opacity: 0.7,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: showToast ? 999 : -1,
        }}
      >
        <Text style={{ color: 'white' }}>
          hdjhghjghjghjghjgh
        </Text>
      </Animated.View>
    );
  }
}

export default ComponentToest;
