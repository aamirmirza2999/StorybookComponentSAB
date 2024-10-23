import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import StoryModule from './StoryModule'
import Widget from './Widget';
import ProductCardNestedComponent from './ProductCardNestedComponent';
import { actuatedNormalize } from '../../constants/PixelScaling';

export default {
    title: 'components/SabStoreComponent',
};

export const StoryModuleStory = (args) => {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    useEffect(() => {
        const headerthemedark = args.colorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
            toggleTheme();
        }
    }, [args.colorStyles, isDarkMode, toggleTheme]);
    return <StoryModule {...args} />
}

StoryModuleStory.args = {
    storyStateType: 'ToSee',
    storyModuleExtraContent: false,
    colorStyles: "LightMode",
};

export const WidgetModuleStory = (args) => {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    useEffect(() => {
        const headerthemedark = args.colorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
            toggleTheme();
        }
    }, [args.colorStyles, isDarkMode, toggleTheme]);
    return <Widget {...args} />
}

WidgetModuleStory.args = {
    size:"Widget-S",
     colorStyles: "LightMode",
};

WidgetModuleStory.argTypes = {
   
     colorStyles: {
         control: 'select',
         options: ['LightMode', 'DarkMode'],
     },
     size: {
        control: 'select',
        options: ['Widget-S', 'Widget-M','Widget-L'],
    }

};



export const ProductCardNestedStory = (args) => {

    const { theme, toggleTheme, isDarkMode } = useTheme();
    useEffect(() => {
        const headerthemedark = args.colorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            toggleTheme();
        }
    }, [args.colorStyles, isDarkMode, toggleTheme]);

    return (
       
            <ProductCardNestedComponent
                top={actuatedNormalize(25)}
                Amount={"200"}
                Currency={"SAR"}
                MainViewStyles={{flex:1,backgroundColor: theme.stylesbackground2}}
                {...args}
            />
        
    );
};

ProductCardNestedStory.args = {
    type: "Amount",
    colorStyles: "LightMode",
};

ProductCardNestedStory.argTypes = {

    type: {
        control: 'select',
        options: ['Amount', 'Quantity', 'Share', 'Amount and Quantity', 'Delete and Quantity', 'Confirmation Status']
    },
    colorStyles: {
        control: 'select',
        options: ['LightMode', 'DarkMode'],
    }
}
