import React from 'react'
import {
    View,
} from 'react-native'
import { globalStyles } from '../../constants/GlobalStyles'
import TextComponent from './TextComponent';

const NotificationBadge = (props)=>{

    return (
        <View style={globalStyles.badgestatus}>
        <View style={[globalStyles.badgenotification,{
            borderRadius:100,
            backgroundColor:props.backgroundColor,
            width:props.width,
            height:props.height,
        }]}>
        <TextComponent style={[globalStyles.notificationbadgetext,{
            fontSize:props.fontSize,
            color:props.color
        }]}>{props.BadgeText}</TextComponent>
        </View>
        </View>
       
        );

}

export default NotificationBadge