import { View, Text,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import SvgIconList from '../../constants/SvgIconList'
import { globalStyles } from '../../constants/GlobalStyles'
import TextComponent from './TextComponent'

const Widget = (props) => {
  return (
    <>
    {/* Widget Small */}

    {props.size==="Widget-S"?
    <View style={globalStyles.widgetS}>
      <SvgIconList
					icon="Gift"
					width={48}
					height={48}
				   />
    <TextComponent style={[globalStyles.widgetSName,{height:"100%"}]}>Widget Name</TextComponent>
    <View style={styles.subtitle}>
    <TextComponent style={globalStyles.widgetSDescription}>Write your subhead here</TextComponent>
    </View>
    </View>
    :null}

  {/* Widget Medium */}

 {props.size==="Widget-M"?
      // <ImageBackground style={styles.widgetMIcon} resizeMode="cover" source="Widget-M.png">
      // <View style={[styles.title, styles.titleFlexBox]}>
      // <Text style={[styles.widgetName, styles.labelTypo]}>Widget Name</Text>
      // </View>
      // <View style={[styles.subtitle, styles.subtitleFlexBox]}>
      // <Text style={[styles.writeYourSubhead, styles.labelTypo]}>Write your subhead here</Text>
      // </View>
      // <View style={[styles.chipsinfo, styles.subtitleFlexBox]}>
      // <Text style={[styles.label, styles.labelTypo]}>Best Deals</Text>
      // </View>
      // </ImageBackground>
      <></>
    :null}

    </>
   
  )
}
const styles = StyleSheet.create({
  subtitle: {
  alignItems: "center",
  flexDirection: "row",
  alignSelf: "stretch"
  },
  });
export default Widget