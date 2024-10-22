import React, { useState, useEffect } from 'react';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import StoryModule from './StoryModule'

export default {
    title: 'components/SabStoreRevamp',
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

StoryModuleStory.argTypes = {
    storyStateType: {
        control: 'select',
        options: ['ToSee', 'Seen'],
    },

    storyModuleExtraContent: {
        control: 'boolean',
    },

    colorStyles: {
        control: 'select',
        options: ['LightMode', 'DarkMode'],
    }

};
