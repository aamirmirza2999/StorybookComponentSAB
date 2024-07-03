import React from 'react';
import {
  Dimensions,
  I18nManager,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {SvgXml} from 'react-native-svg';
import {BackArrowNew, CloseIconNew} from '../../constants/SvgLocations';
import SvgIconList from '../../constants/SvgIconList';
import TextInputComponent from './TextInputComponent';
import TextComponent from './TextComponent';
import SquareSVG from './SvgHeader';
import { PrimaryButtonNew } from './ButtonComponent';
// import Colors from '../../constants/Colors';

// Get device dimensions
const IosSpecific = Platform.OS === 'ios' ? 0 : 0;
const iosMargin = Platform.OS === 'ios' ? 50 : 0; // 90

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height - IosSpecific;
const svgWidth = Number(deviceWidth) + 2;
const svgHeight = Number((deviceheight - iosMargin) / 8 - 0);
const patternStyle =
  Platform.OS === 'ios'
    ? I18nManager.isRTL
      ? actuatedNormalize(svgWidth - 180)
      : actuatedNormalize(svgWidth)
    : actuatedNormalize(svgWidth - 55);
const patternheightStyle =
  Platform.OS === 'ios' ? svgHeight + 10 : svgHeight + actuatedNormalize(20);

const styles = StyleSheet.create({
  SliderContainer: {
    width: Dimensions.get('screen').width,
    height: actuatedNormalize(98),
    //backgroundColor: 'blue',
  },
  // SliderContainer: {
  //   flex: 1,
  // },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: actuatedNormalize(20),
    paddingBottom: actuatedNormalize(14),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  column1: {
    // width: '20%',
    paddingLeft: actuatedNormalize(20),
    // paddingTop: actuatedNormalize(50),
  },
  closeButtonStyle: {
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
    // justifyContent:'center',
    // alignItems:'center'
    // height: actuatedNormalize(25),
    // width: actuatedNormalize(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  column3: {
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // paddingRight: actuatedNormalize(20),
  },
});
const BgHeader = props => (
  
  <View style={styles.SliderContainer}>
    <StatusBar
      animated
      backgroundColor={'#263a52'}
      barStyle={'default'}
      translucent={true}
    />
    <View style={StyleSheet.absoluteFill}>
      <SquareSVG bgColor={'#263a52'} />
    </View>

    <View style={styles.contentContainer}>
      <TouchableOpacity>
        {props.backButtonIsRequired ? (
          <SvgIconList
            icon="backIcon"
            width={actuatedNormalize(25)}
            height={actuatedNormalize(25)}
            transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
          />
        ) : null}
      </TouchableOpacity>
      <TextComponent
        fontWeight={'Bold'}
        style={{
          color: props.color,
          fontSize: actuatedNormalize(14),
        }}>
        {props.title}
      </TextComponent>
      <TouchableOpacity>
        {props.closeButtonIsRequired ? (
          <SvgIconList
            width={actuatedNormalize(25)}
            height={actuatedNormalize(25)}
            icon="closeIcon"
          />
        ) : null}
      </TouchableOpacity>
    </View>
   
  </View>
);

export default BgHeader;
