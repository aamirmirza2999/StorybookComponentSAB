import React, { useCallback,useState ,useEffect} from 'react';
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


const TabsComponent = ({ 
    mainTabs, subTabs ,scrollEnabled = true ,numberOfTabs, type,numOfSubTabs, language: initialLanguage
}) => {
    const layout = useWindowDimensions();
    const deviceHeight = Dimensions.get('window').height;
    const { theme, isDark } = useTheme()
    const [activeIndex, setActiveIndex] = useState(0);  
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(initialLanguage);

    const changeLanguage = async (lang) => {
        console.log("currentLang--lang->>", lang, " - ", lang === 'ar');

        if (lang === 'ar') {
            I18nManager.forceRTL(true);
        } else {
            I18nManager.forceRTL(false);
        }

        await i18n.changeLanguage(lang);
        await AsyncStorage.setItem('currentLang', lang);
        setLanguage(lang);
        RNRestart.Restart(); // Restart the app to apply RTL changes
    };

    // Initialize and listen to language prop changes
    useEffect(() => {
        const init = async () => {
            let currentLang = await AsyncStorage.getItem('currentLang');
            console.log("currentLang-->>", currentLang);
            if (currentLang) {
                i18n.changeLanguage(currentLang);
                setLanguage(currentLang);
            } else {
                i18n.changeLanguage(initialLanguage);
                setLanguage(initialLanguage);
            }
        };

        init();
    }, []); // Run only once on mount

    // Update language when initialLanguage prop changes
    useEffect(() => {
        if (language !== initialLanguage) {
            changeLanguage(initialLanguage);
        }
    }, [initialLanguage]);
    
   
    const renderScene = useCallback(({ route }) => {
        switch (route.key) {
            case 1:
                return null

            default:
                return null;
        }
    }, [])
  
    const tabsToDisplay = type === 'mainTab' ? mainTabs : subTabs;
  const numberOfTabsToShow = type === 'mainTab' ? numberOfTabs : numOfSubTabs;

  const localizedTabs = tabsToDisplay.map(tab => ({
    ...tab,
    title: t(`initialLang:${tab.title}`), // Translate the title dynamically
}));
    return (
        <>
        <View>

 
                <View style={[globalStyles.tabBarComponent,{backgroundColor:theme.primaryinvert}]}>
  

                    <TabView
                        navigationState={{
                            index: 0,
                            // routes:numberOfTabs === 0 ? mainTabs.slice(0,1): mainTabs.slice(0,numberOfTabs)
                            // routes: numberOfTabsToShow === 0 ? tabsToDisplay.slice(0,1) : tabsToDisplay.slice(0, numberOfTabsToShow)             
                            routes: numberOfTabsToShow === 0 ? localizedTabs.slice(0,1) : localizedTabs.slice(0, numberOfTabsToShow),           
                          }}
                        renderScene={renderScene}
                        onIndexChange={() => console.log("some function to execute")}
                        // onIndexChange={index => setActiveIndex(index)}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={
                            propss => (
                                <View style={globalStyles.renderTabBarView}>
                                    <TabBar
                                        {...propss}
                                        indicatorStyle={[globalStyles.tabBarIndicatorStyle]}
                                        tabStyle={{ 
                                             elevation: 0, shadowOpacity: 0, 
                                                marginHorizontal: actuatedNormalize(-4),
                                               width:"auto",
                                            //    gap:8
                                         }} 
                                        scrollEnabled={scrollEnabled}
                                        style={[globalStyles.tabBarStyle,{backgroundColor:theme.primaryinvert}]}
                                        indicatorContainerStyle={globalStyles.tabBarIndicatorContainerStyle}
                                        pressColor="transparent" 
                                        pressOpacity={1} 
                                        renderLabel={({ route, focused, color }) => (
                                            <>
                                            <View style={ [globalStyles.TabBarView,{
                                            //  backgroundColor: focused ? theme.primarycolor : theme.stylesblockbg,  
                                            backgroundColor: type === 'mainTab' 
                  ? (focused ? theme.primarycolor : theme.stylesblockbg) 
                  : (focused ? theme.primarytextcolor2_2 : theme.stylesblockbg),
      
                                            }]}
                                 
                                            >

                                            
                                                <Text
                                                    style={[globalStyles.tabBarLabel,
                                                    {
                                                        color: type === 'mainTab' 
                                                        ? (focused ? theme.primaryinvert : theme.primarycolor) 
                                                        : (focused ? theme.primarycolor4 : theme.primarycolor),
                                                    },
                                                  ]}>
                                                    {route.title}
                                                </Text>
                                                </View>


                  
                                            </>
                                        )}
                                    />
                                      {/* Sub-Tabs Below the Main Tabs */}
                    {/* <View style={[globalStyles.subTabs,{}]}>
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
                    </View> */}
                                </View>
                                
                            )
                        }
                        swipeEnabled={false}  // Disable swipe gestures
                        animationEnabled={false}
                    />
                </View>

            
               
        
            </View>
</>
    );
};


export default TabsComponent;
