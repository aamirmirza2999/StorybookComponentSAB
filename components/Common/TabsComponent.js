import React, { useCallback, useState } from 'react';
import { View, Text, Dimensions, useWindowDimensions } from 'react-native';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';
import { TabView, TabBar } from 'react-native-tab-view';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { useTranslation } from 'react-i18next';


const TabsComponent = ({
    mainTabs, subTabs, scrollEnabled = true, numberOfTabs, type, numOfSubTabs, language: initialLanguage
}) => {
    const layout = useWindowDimensions();
    const deviceHeight = Dimensions.get('window').height;
    const { theme, isDark } = useTheme()
    const [activeIndex, setActiveIndex] = useState(0);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(initialLanguage);




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


    return (
        <>
            <View>


                <View style={[globalStyles.tabBarComponent, { backgroundColor: theme.primaryinvert }]}>


                    <TabView
                        navigationState={{
                            index: activeIndex,

                            routes: numberOfTabsToShow === 0 ? tabsToDisplay.slice(0, 1) : tabsToDisplay.slice(0, numberOfTabsToShow)
                        }}
                        renderScene={renderScene}

                        onIndexChange={index => setActiveIndex(index)}
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
                                            width: "auto",

                                        }}
                                        scrollEnabled={scrollEnabled}
                                        style={[globalStyles.tabBarStyle, { backgroundColor: theme.primaryinvert }]}
                                        indicatorContainerStyle={globalStyles.tabBarIndicatorContainerStyle}
                                        pressColor="transparent"
                                        pressOpacity={1}
                                        renderLabel={({ route, focused, color }) => (
                                            <>
                                                <View style={[globalStyles.TabBarView, {

                                                    backgroundColor: type === 'mainTab'
                                                        ? (focused ? theme.primarycolor : theme.primarybackgroundtab)
                                                        : (focused ? theme.primarytextcolor2_2 : theme.primarybackgroundtab),

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

                                </View>

                            )
                        }
                        swipeEnabled={false}
                        animationEnabled={false}
                    />
                </View>




            </View>
        </>
    );
};


export default TabsComponent;
