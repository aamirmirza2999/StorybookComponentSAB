import MainHeader from './MainHeader';
import PostLoginHeader from './PostLoginHeader';

export const PostLoginHeaderStory = args => <PostLoginHeader {...args} />;
PostLoginHeaderStory.args = {
  title: 'Primary Button',
  TextColor: 'white',
  enableBackButton: true,
  enableCloseButton: false,
  LanguageSwitchReq:false,
  MenuHeader:false,
  Headline:'Headline',
  HeaderTitleReq:true
  //enableLivechat:true
};
PostLoginHeaderStory.argTypes = {
  textColor: {control: 'color'},
};

export const MainHeaderStory = args => <MainHeader {...args} />;
MainHeaderStory.args = {
  enableLogo:true,
  isAccountTypeReq:true,
  SearchIconReq:true,
  NotificationIconReq:true,
  AvatarIconReq:true,
  LanguageSwitchReq:false,
  AccountType:'Premier',
  avatarblack:true,
  avatarname:false

};
MainHeaderStory.argTypes = {
  bgColor: {control: 'color'},
};

export default {
    title: 'components/HeaderComponent',
  };