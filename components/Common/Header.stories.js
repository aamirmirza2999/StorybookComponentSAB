import MainHeader from './MainHeader';
import PostLoginHeader from './PostLoginHeader';
import {
    Dimensions,
} from 'react-native'
import React, { useState ,useEffect} from 'react';
import { store } from '../../redux/store/Store';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper'
import { useTranslation } from 'react-i18next';

export default {
  title: 'components/HeaderComponent',
};

let initiallanguage = store.getState().commonReducer.LanginitialValue
console.log("REDUX VALUE LANG>>>>>>>>>",initiallanguage)
const deviceheight = Dimensions.get('window').height 



export const PostLoginHeaderStory = args => {
  const [language, setlanguage] = useState('en');
  const { t } = useTranslation();
  args.Headline=t('initialLang:headline')
  args.title=t('initialLang:PostloginHeader')

  useEffect(() => {
    CommonHelper.initLanguage(setlanguage);
  }, []);


  return (
    <PostLoginHeader
      {...args}
      changeLanguage={() => CommonHelper.changeLanguage(language == 'en' ? 'ar' : 'en',setlanguage)}
      HeaderHeight={deviceheight}
    />
  );
};

export const MainHeaderStory = args => {
  const [language, setlanguage] = useState('en');
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  args.AccountType=t('initialLang:Premier')

  useEffect(() => {
    CommonHelper.initLanguage(setlanguage);
  }, []);

  return (
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      HeaderHeight={deviceheight}
      changeLanguage={() => CommonHelper.changeLanguage(language == 'en' ? 'ar' : 'en',setlanguage)}
    />
  );
};

MainHeaderStory.args = {
  enableLogo: true,
  isAccountTypeReq: true,
  SearchIconReq: true,
  NotificationIconReq: true,
  AvatarIconReq: true,
  LanguageSwitchReq: true,
  //AccountType: 'Premier',
  avatarblack: true,
  avatarname: false,
};
MainHeaderStory.argTypes = {
  bgColor: { control: 'color' },
};

PostLoginHeaderStory.args = {
  //title: 'Primary Button',
  TextColor: 'white',
  enableBackButton: true,
  enableCloseButton: false,
  LanguageSwitchReq:false,
  MenuHeader:false,
 // Headline:'Headline',
  HeaderTitleReq:true
  //enableLivechat:true
};
PostLoginHeaderStory.argTypes = {
  textColor: {control: 'color'}
}