import React, { useCallback,useState } from 'react';
import { View, Text, Dimensions, useWindowDimensions } from 'react-native';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';
import { TabView, TabBar } from 'react-native-tab-view';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { I18nManager } from 'react-native';
import Fonts from '../../constants/Fonts';
import TextComponent from './TextComponent';
import { useTranslation } from 'react-i18next';


let subTabs= [
    { name: "All " ,index:0},
    { name: "Payment",index:1 },
    { name: "Mobile" ,index:2},
    { name: "Transfer",index:3},
    { name: "Payment Method",index:4 },
    { name: "Beneficiary" ,index:5},
    
  ]

const TabsComponent = ({ 
    mainTabs, subTabs ,scrollEnabled = true ,numberOfTabs, numOfSubTabs
}) => {
    const layout = useWindowDimensions();
    const deviceHeight = Dimensions.get('window').height;
    const { theme, isDark } = useTheme()
    const [activeIndex, setActiveIndex] = useState(0);  
    const { t } = useTranslation();

  
    
   

    const renderScene = useCallback(({ route }) => {
        switch (route.key) {
            case 1:
                return null

            default:
                return null;
        }
    }, [])
  

    return (
        <>
        <View style={[globalStyles.tabBarContainer,{backgroundColor:theme.primaryinvert}]}>

 
                <View style={[globalStyles.tabBarComponent,{backgroundColor:theme.primaryinvert}]}>
  

                    <TabView
                        navigationState={{
                            index: 0,
                            routes:numberOfTabs === 0 ? mainTabs.slice(0,1): mainTabs.slice(0,numberOfTabs)
                            // routes:mainTabs,                     
                          }}
                        renderScene={renderScene}
                        onIndexChange={() => console.log("some function to execute")}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={
                            propss => (
                                <View style={globalStyles.renderTabBarView}>
                                    <TabBar
                                        {...propss}
                                        indicatorStyle={[globalStyles.tabBarIndicatorStyle]}
                                        tabStyle={{ 
                                             elevation: 0, shadowOpacity: 0, 
                                               marginHorizontal: actuatedNormalize(-5),
                                               width:"auto"
                                         }} 
                                        scrollEnabled={scrollEnabled}
                                        style={[globalStyles.tabBarStyle,{backgroundColor:theme.primaryinvert}]}
                                        indicatorContainerStyle={globalStyles.tabBarIndicatorContainerStyle}
                                        pressColor="transparent" // Removes the ripple effect color
                                        pressOpacity={1} // Removes the ripple effect opacity
                                        renderLabel={({ route, focused, color }) => (
                                            <>
                                            <View style={ [globalStyles.TabBarView,{
                                             backgroundColor: focused ? theme.primarycolor : theme.stylesblockbg,        
                                            }]}
                                 
                                            >

                                            
                                                <Text
                                                    style={[globalStyles.tabBarLabel,
                                                    {
                                                        color: focused ? theme.primaryinvert : theme.primarycolor, 
                                                        // textTransform: props.textTransform,
                                                    },
                                                  ]}>
                                                    {route.title}
                                                </Text>
                                                </View>


                  
                                            </>
                                        )}
                                    />
                                      {/* Sub-Tabs Below the Main Tabs */}
                    <View style={[globalStyles.subTabs,{}]}>
                        <ScrollView 
                            bounces={true}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {subTabs.slice(0, numOfSubTabs).filter(tab => tab).map((item, index) => (
                                <TouchableOpacity
                                    testID={index + "tab"}
                                    accessibilityLabel={index + "tab"}
                                    style={
                                        index === activeIndex
                                            ? [
                                            globalStyles.activetab,{                                               
                                                 backgroundColor: theme.primarytextcolor2_2,
                                            }
                                            ]
                                            : [
                                                globalStyles.inactivetab,{                                               
                                                    backgroundColor: theme.stylesblockbg,
                                                }
                                                
                                            ]
                                    }
                                    key={item.name}
onPress={() => setActiveIndex(index)}                                >
                                    <Text
                                        style={
                                            index === activeIndex
                                                ? [
                                                    globalStyles.activetext,{                                               
                                                        color: theme.primarycolor4,
                                                    }  
                                                ]
                                                : [
                                                    globalStyles.activetext,{                                               
                                                        color: theme.primarycolor,

                                                    }  
                                                ]
                                        }
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                                </View>
                                
                            )
                        }
                    />
                </View>

            
               
        
            </View>
</>
    );
};


export default TabsComponent;
