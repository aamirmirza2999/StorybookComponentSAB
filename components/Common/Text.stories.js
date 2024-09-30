// import React, { useEffect, useState } from 'react'
// import TextComponent from './TextComponent';
// import { useTheme } from '../../constants/Theme/ThemeProvider';
// import { useTranslation } from 'react-i18next';
// import CommonHelper from '../../constants/CommonHelper';
// import i18n from '../../locales/i18n';


// export default {
//     title: 'components/TextComponent',
//   };

//   export const TextComponentStory =(args) =>{
//     const { t } = useTranslation();
//     const [language, setLanguage] = useState('en');
//   const { theme, toggleTheme,isDarkMode } = useTheme();

//     const handleChange = (newLang, setLanguage, i18n) => {
//       setLanguage(newLang);
//       i18n.changeLanguage(newLang); 
//       CommonHelper.changeLanguage(newLang, setLanguage); 
//     };
  
//     useEffect(() => {
//       CommonHelper.initLanguage(setLanguage);
//     }, []);
  
//     useEffect(() => {
//       if (language !== args.lang) {
//         handleChange(args.lang, setLanguage, i18n);
//       }
//     }, [args.lang, language]);
     
    
//     useEffect(() => {
//           if (args.enableDarkTheme !== isDarkMode) {
//         toggleTheme();
//       }     
//     }, [args.enableDarkTheme, isDarkMode, toggleTheme]);
  
    
// return (<TextComponent {...args}/>)
//   }  
//   TextComponentStory.args = {
//     children: 'text1',
//     headlineText:'Headline',
//     textColor: 'black',
//     fontSize: 16,
//     fontFamily: 'Regular',
//     fontWeight: '600',
//     onPress: null,
//     numberOfLines: 1,
//     textTransform: 'none',
//     enableSecondary:false,
//     editable:false,
//     copyable:false,
//     bulletPoint:'false',
//     badgeIcon:false,
//     textInfoIcon:false,
//     enableDarkTheme:false,
//     isHeadline:true,
//     lang:'en',
//   };

//   TextComponentStory.argTypes = {
//     children: {control: 'text'},
//     headlineText: {control: 'text'},
//     textColor: {control: 'color'},
//     fontSize: {control: 'number'},
//     enableSecondary:{control:'boolean'},
//     editable:{control:'boolean'},
//     copyable:{control:'boolean'},
//     badgeIcon:{control:'boolean'},
//     textInfoIcon:{control:'boolean'},
//     enableDarkTheme:{control:'boolean'},
//     isHeadline:{control:'boolean'},
//     bulletPoint:{
//       control:'select',
//       options:['true', 'false', 'true.success']
//     },
//     fontFamily: {
//       control: 'select',
//       options: ['Bold', 'Regular', 'Light'],
//     },
//     fontWeight: {
//       control: 'select',
//       options: ["null",'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']
//     },
//     onPress: {action: 'pressed'},
//     lang: {
//       control: 'select',
//       options: ['en', 'ar'],
//     },
//     numberOfLines: {control: 'number'},
//     textTransform: {
//       control: 'select',
//       options: ['none', 'capitalize', 'uppercase', 'lowercase'],
//     },
//   };