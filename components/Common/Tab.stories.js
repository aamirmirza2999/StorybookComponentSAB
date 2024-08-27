import TabsComponent from './TabsComponent';
import i18n from '../../locales/i18n';




const mainTabs = [
  {key: 0, title: i18n.t('initialLang:All')},
  {key: 1, title: i18n.t('initialLang:Mobile')},
  {key: 2, title: i18n.t('initialLang:International')},
  {key: 3, title: i18n.t('initialLang:Transfer')},
  {key: 4, title: i18n.t('initialLang:Payment')},
  {key: 5, title: i18n.t('initialLang:Beneficary')},
];

const subTabs = [
  {title: i18n.t('initialLang:All'), key: 0},
  {title: i18n.t('initialLang:Payment'), key: 1},
  {title: i18n.t('initialLang:Mobile'), key: 2},
  {title: i18n.t('initialLang:Transfer'), key: 3},
  {title: i18n.t('initialLang:International'), key: 4},
  {title: i18n.t('initialLang:Beneficary'), key: 5},
  // Add more sub-tabs here if needed
];

export default {
  title: 'components/TabsComponent',
};


export const MainTab = args => <TabsComponent {...args} />
MainTab.args = {
  type:"mainTab",
  numberOfTabs: 2,
  numOfSubTabs: 4,
  mainTabs:mainTabs,
  subTabs:subTabs,
};

export const SubTab =args => <TabsComponent {...args} />
SubTab.args = {
  type:"subTab",
  numberOfTabs: 2,
  numOfSubTabs: 4,
  mainTabs:mainTabs,
  subTabs:subTabs,
};
