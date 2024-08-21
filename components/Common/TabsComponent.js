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

let users= [
    { name: "All " ,index:0},
    { name: "Payment",index:1 },
    { name: "Mobile" ,index:2},
    { name: "Transfer",index:3},
    { name: "Payment Method",index:4 },
    { name: "Beneficiary" ,index:5},
    
  ]

const TabsComponent = (props) => {
    const layout = useWindowDimensions();
    const deviceHeight = Dimensions.get('window').height;
    const { theme, isDark } = useTheme()
    const [activeIndex, setActiveIndex] = useState(0);  
    const generateRoutes = () => {
        return [
            { key: 'all', title: 'All' },
            { key: 'mobile', title: 'Mobile' },
            { key: 'international', title: 'International' },
            { key: 'Transfer', title: 'Transfer Account' },
            { key: 'Card', title: 'Card' },
            { key: 'Sabb', title: 'Sabb Card' }
            // Add more routes here if needed
        ];
    };
    
  
    const fontsFamily = (fontFamily) => {
        switch (fontFamily) {
            case "Bold": {
                return globalStyles.boldTextFamily
            }
            case "Regular": {
                return globalStyles.regularTextFamily
            }
            case "Light": {
                return globalStyles.lightTextFamily
            }
            default: {
                return globalStyles.regularTextFamily
            }
        }
    }

    
    const renderScene = useCallback(({ route }) => {
        switch (route.key) {
            case 'all':
                return <View  />;
            case 'mobile':
                return <View />;
            case 'International':
                return <View  />;
                case 'Transfer':
                return <View  />;
            case 'Card':
                return <View />;
            case 'Sabb Card':
                return <View  />;
            default:
                return null;
        }
    }, []);

    return (
        <>
        <View style={globalStyles.tabBarContainer}>

 
                <View style={globalStyles.tabBarComponent}>
  

                    <TabView
                        navigationState={{
                            index: 0,
                            routes: generateRoutes(props.numberOfTabs)
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
                                        scrollEnabled={props.scrollEnabled}
                                        style={globalStyles.tabBarStyle}
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
                                                        textTransform: props.textTransform,
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
                            {users.map((item, index) => (
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
                                    key={item.title}
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
