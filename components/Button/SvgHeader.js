import React from 'react';
import {View, Platform, Dimensions} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {actuatedNormalize} from '../../constants/PixelScaling';

const IosSpecific = Platform.OS === 'ios' ? 0 : 0;
const iosMargin = Platform.OS === 'ios' ? 50 : 0;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height - IosSpecific;
const svgWidth = Number(deviceWidth) + 2;
const svgHeight = Number((deviceHeight - iosMargin) / 8 - 0);

const SquareSVG = ({bgColor}) => {
  const xml2 = `<svg width=${
    Platform.OS === 'ios'
      ? svgWidth + actuatedNormalize(50)
      : svgWidth + actuatedNormalize(230)
  } height=${svgHeight + 1} preserveAspectRatio="none" viewBox="0 0 ${
    Platform.OS === 'ios'
      ? svgWidth + actuatedNormalize(20)
      : svgWidth + actuatedNormalize(210)
  } ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity=".1" fill-rule="evenodd" clip-rule="evenodd" d="M-319 254.848 468.5 0 206 518.485l-525-263.637z" fill="#F5F5F5" fill-opacity=".5"/>
  <path opacity=".08" fill-rule="evenodd" clip-rule="evenodd" d="M-221.5 43.94V536.06h480l-480-492.122z" fill="#F5F5F5" fill-opacity=".5"/>
  <path opacity=".12" fill-rule="evenodd" clip-rule="evenodd" d="M-4 395.455 378.5 87.879l315 386.666L-4 395.455z" fill="#F5F5F5" fill-opacity=".5"/>
  </svg>`;

  return (
    <View style={{overflow: 'hidden'}}>
      <SvgXml style={{width: '100%', backgroundColor: bgColor}} xml={xml2} />
    </View>
  );
};

export default SquareSVG;
