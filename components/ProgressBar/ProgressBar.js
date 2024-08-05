import React from 'react'
import * as Progress from "react-native-progress";
import {S4, radiusS} from '../../constants/Size';

const ProgressBar = (props) => {
  return (
      <Progress.Bar
                      testID={props.testID}
                      accessibilityLabel={props.accessibilityLabel}
                      unfilledColor={props.unfilledColor}
                      color={props.color}
                      borderRadius={radiusS}
                      borderWidth={0}
                      width={null}
                      height={S4}
                      progress={props.progress}
                    />
  )
}
export default ProgressBar;