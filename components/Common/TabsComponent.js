import React, { useCallback } from 'react';
import { View, Text, Dimensions, useWindowDimensions } from 'react-native';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';
import { TabView, TabBar } from 'react-native-tab-view';

const TabsComponent = (props) => {
    const layout = useWindowDimensions();
    const deviceHeight = Dimensions.get('window').height;

    const generateRoutes = (numTabs) => {
        const routes = [];
        for (let i = 0; i < numTabs; i++) {
            routes.push({ key: `label${i}`, title: `Label${i + 1}` });
        }
        return routes;
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
            case 1:
                return null

            default:
                return null;
        }
    }, [])

    return (
        <View style={globalStyles.tabBarContainer}>
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
                                        indicatorStyle={globalStyles.tabBarIndicatorStyle}
                                        tabStyle={props.tabWidth === 0 ? null : { width: actuatedNormalize(props?.tabWidth) }}
                                        scrollEnabled={props.scrollEnabled}
                                        style={globalStyles.tabBarStyle}
                                        indicatorContainerStyle={globalStyles.tabBarIndicatorContainerStyle}

                                        renderLabel={({ route, focused, color }) => (
                                            <>
                                                <Text
                                                    style={[globalStyles.tabBarLabel,
                                                    {
                                                        color: props.textColor,
                                                        textTransform: props.textTransform,
                                                        fontWeight : props.fontWeight === "null"? null : props.fontWeight,
                                                    },
                                                    fontsFamily(props.fontFamily),]}>
                                                    {route.title}
                                                </Text>
                                            </>
                                        )}
                                    />
                                </View>
                            )
                        }
                    />
                </View>
            </View>
        </View>

    );
};


export default TabsComponent;
