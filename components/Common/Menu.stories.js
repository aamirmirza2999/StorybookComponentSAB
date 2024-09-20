import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NewListComponent from './NewListComponent';
import TextDivider from './TextDivider';

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
    listItemActionableType: 'Menu',
    listItemActionableSelectType: 'Check Box',
    iconActionableMenu: true,
    badgeActionableMenu: true,
    linkActionableMenu: true,
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
    listItemActionableType: { 
      control: 'select',
      options: ['Menu', 'Select'], 
    },
    listItemActionableSelectType: { 
      control: 'select',
      options: ['Check Box', 'Radio Button'], 
    },
    iconActionableMenu: {
      control: 'boolean',
    },
    badgeActionableMenu: {
      control: 'boolean',
    },
    linkActionableMenu: {
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
  

  export const TextDividerComponentStory = (args) => {
    return <TextDivider {...args} />;
  };

  TextDividerComponentStory.args={
    promotional:true,
    pagetitle:true
  }