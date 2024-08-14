import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/Theme/ThemeProvider';

const DarkLightToggle = () => {
    const {theme, toggleTheme} = useTheme();

  return (
    <View>
      <Text>DarkLightToggle</Text>
      <Button
      title="Toggle"
      onPress={toggleTheme}
      />
    </View>
  )
}

export default DarkLightToggle

const styles = StyleSheet.create({})