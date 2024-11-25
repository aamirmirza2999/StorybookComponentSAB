import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { spacingS, spacingM, spacingL } from '../../constants/Size';

const PrimaryBgComponent = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primaryinvert,
      }}>
      {props.BgHeader}

      <ScrollView>
        <View
          style={{
            paddingLeft: spacingS,
            paddingRight: spacingS,
            paddingBottom: spacingM,
            paddingTop: spacingL,
          }}>

          {props.children}
        </View>
      </ScrollView>
      <View
        style={
          props.ButtonContainer

        }>
        {props.PrimaryButton}
        {props.SecondaryButton}
        {props.BottomButton}
      </View>
    </View>
  );
};

export default PrimaryBgComponent;

const styles = StyleSheet.create({});
