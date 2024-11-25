
import React, { } from 'react';
import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../constants/Theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import MainHeader from '../components/Common/MainHeader';
import { spacingM, spacingS } from '../constants/Size';

const Dashboard = (props) => {

  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <PrimaryBgComponent
        ButtonContainer={{
          paddingLeft: spacingS,
          paddingRight: spacingS,
          paddingBottom: spacingM,
          paddingTop: spacingM,
        }}

        BgHeader={
          <MainHeader
            type="level0"
            state='postlogin'
            avatarSize={'Small'}
            Notificationshowbadge={true}
            NotificationCount={"2"}
            avatarElements="Icons"
            avatarType="Filled"
            AccountType={t('initialLang:Premier')}


          />
        }>
      </PrimaryBgComponent>
    </>
  )

}
export default Dashboard;