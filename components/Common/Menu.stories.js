import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NewListComponent from './NewListComponent';


export default {
    title: 'components/MenuComponent',
  };

  export const MenuComponentStory =(args) =>{

  }
  
  MenuComponentStory.args={

  }

  export const NewListComponentStory = (args) => {
    return <NewListComponent {...args} />;
  };
  
  NewListComponentStory.args = {
    listType: 'Inline',
    inlineListItemType: 'Actionable',
    listItemPreviewType: 'Value',
    iconPreview: false,
    showDivider: true,
    lang: 'en',
    enableDarktheme: false,
  };
  
  NewListComponentStory.argTypes = {
    listType: {
      control: 'select',
      options: ['Inline', 'Stacked'],
    },
    inlineListItemType: { 
      control: 'select',
      options: ['Actionable', 'Preview'], 
      if: { arg: 'listType', eq: 'Inline' } 
    },
    listItemPreviewType: { 
      control: 'select',
      options: ['Value', 'Bullet Point'], 
    },
    iconPreview: {
      control: 'boolean',
      if: { arg: 'inlineListItemType', eq: 'Preview' } 
    },
    showDivider: {
      control: 'boolean',
    },
    lang: {
      control: 'select',
      options: ['en', 'ar'],
    },
    enableDarktheme: {
      control: 'boolean',
    },
  };
  