import React, { useState, useEffect } from 'react';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import StoryModule from './StoryModule'
import Widget from './Widget';

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
