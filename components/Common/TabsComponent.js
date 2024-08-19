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
    { name: " Transfer" ,index:4},
    { name: "Payment Method",index:5 },
    { name: "Beneficiary" ,index:6},
    
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
                            index: 1,
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
                                             marginHorizontal: actuatedNormalize(-30),
                                         }} 
                                        scrollEnabled={props.scrollEnabled}
                                        style={globalStyles.tabBarStyle}
                                        indicatorContainerStyle={globalStyles.tabBarIndicatorContainerStyle}

                                        renderLabel={({ route, focused, color }) => (
                                            <>
                                            <View style={{
                                             backgroundColor: focused ? '#000000' : '#eeeeee',
                                             borderRadius: actuatedNormalize(8),
                                            height: actuatedNormalize(36),
                                            alignItems: "center",
                                            justifyContent:"space-evenly",
                                         paddingHorizontal: actuatedNormalize(16),
                                            width: "auto",

                                            }}
                                 
                                            >

                                            
                                                <Text
                                                    style={[globalStyles.tabBarLabel,
                                                    {
                                                        color: focused ? '#ffffff' : '#000000', 
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
                    <View style={{ flexDirection: "row-reverse", justifyContent: "flex-end", marginTop: 10,        marginHorizontal: actuatedNormalize(16),
 }}>
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
                                            ? [{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "auto",
                                                backgroundColor: "#B2B2B2",
                                                borderRadius: actuatedNormalize(8),
                                                marginVertical: actuatedNormalize(10),
                                            }]
                                            : [{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "auto",
                                                backgroundColor: isDark
                                                    ? "#B2B2B2"
                                                    : "#F2F3F4",
                                                borderRadius: actuatedNormalize(8),
                                                marginHorizontal: actuatedNormalize(5),
                                                marginVertical: actuatedNormalize(10),
                                                height: actuatedNormalize(35),
                                            }]
                                    }
                                    key={item.title}
onPress={() => setActiveIndex(index)}                                >
                                    <Text
                                        style={
                                            index === activeIndex
                                                ? [{
                                                    textAlign: "center",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    fontSize: actuatedNormalize(14),
                                                    fontFamily: I18nManager.isRTL
                                                        ? Fonts.UniversArabicForHSBC_Regular
                                                        : Fonts.UniversNextforHSBC_Regular,
                                                    paddingHorizontal: actuatedNormalize(16),
                                                    paddingVertical: actuatedNormalize(8),
                                                    color: "#FFFFFF",
                                                }]
                                                : [{
                                                    textAlign: "center",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    fontSize: actuatedNormalize(14),
                                                    fontFamily: I18nManager.isRTL
                                                        ? Fonts.UniversArabicForHSBC_Regular
                                                        : Fonts.UniversNextforHSBC_Regular,
                                                    paddingHorizontal: actuatedNormalize(16),
                                                    paddingVertical: actuatedNormalize(8),
                                                    color: "#000000",
                                                }]
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
