import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import i18n from '../../locales/i18n';
import HashTagComponent from "./HashTag"
import ExpenseComponent from "./Expenses"
import CategoryComponent from './Category'
import { I18nManager } from 'react-native';
import CommonHelper from '../../constants/CommonHelper';
import WeeklyChart from './WeeklyChart';

export default {
    title: 'components/SAB360',    // Uncomment for development purpose.Don't uncomment and commit.
};

export const HashTagStory = args => {

    const [language, setLanguage] = useState(args.language || 'en');
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const { t, i18n } = useTranslation();

    const handleChange = (newLang, setLanguage, i18n) => {
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        CommonHelper.changeLanguage(newLang, setLanguage);
    };

    useEffect(() => {
        CommonHelper.initLanguage(setLanguage);
    }, []);

    useEffect(() => {
        if (language !== args.language) {
            handleChange(args.language, setLanguage, i18n);
        }
    }, [args.language]);


    useEffect(() => {
        const headerthemedark = args.VariablemodesColorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
            toggleTheme();
        }
    }, [args.VariablemodesColorStyles, isDarkMode, toggleTheme]);

    args.BusinessTrip = t('initialLang:BusinessTrip');
    args.Transactions = t('initialLang:Transactions');
    return <HashTagComponent changeTheme={toggleTheme}
        changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
        {...args} />;
};
HashTagStory.args = {

    language: I18nManager.isRTL ? 'ar' : 'en',
    VariablemodesColorStyles: "LightMode",
};

HashTagStory.argTypes = {
    language: {
        control: 'select',
        options: ['en', 'ar'],
    },
    VariablemodesColorStyles: {
        control: 'select',
        options: ['LightMode', 'DarkMode'],
    }
};

export const ExpensesStory = args => {

    const [language, setLanguage] = useState(args.language || 'en');
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const { t, i18n } = useTranslation();

    const handleChange = (newLang, setLanguage, i18n) => {
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        CommonHelper.changeLanguage(newLang, setLanguage);
    };

    useEffect(() => {
        CommonHelper.initLanguage(setLanguage);
    }, []);

    useEffect(() => {
        if (language !== args.language) {
            handleChange(args.language, setLanguage, i18n);
        }
    }, [args.language]);


    useEffect(() => {
        const headerthemedark = args.VariablemodesColorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
            toggleTheme();
        }
    }, [args.VariablemodesColorStyles, isDarkMode, toggleTheme]);

    // args.myspendnov = t('initialLang:MyspendNov');
    args.myspendtext = t('initialLang:Myspendtext');
    args.mysependdate = t('initialLang:Mysependdate');
    args.expenseamount = t('initialLang:expenseamount');
    return <ExpenseComponent changeTheme={toggleTheme}
        changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
        {...args} />;
};

ExpensesStory.args = {
    language: I18nManager.isRTL ? 'ar' : 'en',
    // VariablemodesColorStyles: "LightMode",
};

ExpensesStory.argTypes = {
    language: {
        control: 'select',
        options: ['en', 'ar'],
    },
    // VariablemodesColorStyles: {
    //   control: 'select',
    //   options: ['LightMode', 'DarkMode'],
    // }
};

export const CategoryStory = args => {

    const [language, setLanguage] = useState(args.language || 'en');
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const { t, i18n } = useTranslation();

    const handleChange = (newLang, setLanguage, i18n) => {
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        CommonHelper.changeLanguage(newLang, setLanguage);
    };

    useEffect(() => {
        CommonHelper.initLanguage(setLanguage);
    }, []);

    useEffect(() => {
        if (language !== args.language) {
            handleChange(args.language, setLanguage, i18n);
        }
    }, [args.language]);


    useEffect(() => {
        const headerthemedark = args.VariablemodesColorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
            toggleTheme();
        }
    }, [args.VariablemodesColorStyles, isDarkMode, toggleTheme]);

    args.BusinessTrip = t('initialLang:BusinessTrip');
    args.Transactions = t('initialLang:Transactions');
    return <CategoryComponent changeTheme={toggleTheme}
        changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
        {...args} />;
};
CategoryStory.args = {

    language: I18nManager.isRTL ? 'ar' : 'en',
    VariablemodesColorStyles: "LightMode",
    stackedListItemType: 'Default',
    Divider: true,
    Seconvalue: true,
    CategoryActionableMenuText1: "Label",
    CategoryActionableMenuText2: "Value",
    CategoryActionableMenuText3: "Second Value",
    stackedListItemDefaultIcon: true,
    stackedListItemDefaultBadge: true,
    stackedListItemDefaultAction: true,
    listitemAddonType: 'Icon with BG',
    listItemAddonAvatarSize: 'Medium',
    listItemAddonavataredit: true,
    listItemAddonAvatarElements: 'Initials',
    listItemAddonAvatarInitials: 'JM',
    listItemAddonAvatarType: 'Filled',
    stackedListItemBody: 'Headline+Body',
    stackedListItemBodyShowContent: true,
    stackedListItemBodyShowLabel: true,
    stackedListItemBodyShowSubTitle: true,
    stackedListItemBodyShowBodyCopy: true,
    stackedListItemBodyShowStatus: true,
    stackedListItemBodyStatusState: 'Success',
    stackedListItemBodyHeadline:  I18nManager.isRTL ?  "تاكسي" : "Taxi",
    stackedListItemBodyContent: '50%',
    stackedListItemBodyLabel:I18nManager.isRTL ? 'ملصق' : 'Label',
    stackedListItemBodyValue:I18nManager.isRTL ? 'قيمة' : 'Value',
    stackedListItemBodySubTitle: '42%',
    stackedListItemBodystatusStatus:I18nManager.isRTL ? "حالة": 'Status',
    badgeStatusType: 'Balance',
    badgeStatusText: I18nManager.isRTL ? "محتوى" : 'Content',
    badgeNotificationType: 'Primary',
    badgeNotificationSize: 'Small',
    badgeNotificationNumber: '1',
    badgeStatusShowFirstValue: true,
    badgeStatusFirstValue: '1,230.00',
    badgeStatusShowSecondValue: true,
    badgeStatusSecondValue: '60%',
    listItemActionType: 'Chevron',
    badgeStatuschipsInfoState: 'Error',
    badgeStatuschipsInfoSize: 'Small',
    badgeStatuschipsInfoType: 'Default',
    badgeStatuschipsInfoLabel: I18nManager.isRTL ? "غير نشط" : 'Inactive',
    badgeStatuschipsInfoShowIcon: true,
    listItemActionscheckboxIconState: 'Unchecked',
    listItemActionstoggleState: 'Unselected',
    listItemActionsradiobuttonIconState: 'Unchecked',
    BarProgressProperty1: "75%",
    BarProgresshorizontalbarProperty1: "active"
};

CategoryStory.argTypes = {
    language: {
        control: 'select',
        options: ['en', 'ar'],
    },
    VariablemodesColorStyles: {
        control: 'select',
        options: ['LightMode', 'DarkMode'],
    },
    stackedListItemType: {
        control: 'select',
        options: ['Default', 'Preview'],
    },
    Divider: {
        control: 'boolean',
    },
    Seconvalue: {
        control: 'boolean',
    },
    CategoryActionableMenuText1: {
        control: 'text'
    },
    CategoryActionableMenuText2: {
        control: 'text'
    },
    CategoryActionableMenuText3: {
        control: 'text'
    },
    stackedListItemDefaultIcon: {
        control: 'boolean',
    },
    stackedListItemDefaultBadge: {
        control: "boolean"
    },
    stackedListItemDefaultAction: {
        control: "boolean"
    },
    listitemAddonType: {
        control: 'select',
        options: [
            'Avatar',
            'Icon',
            'Logo',
            'Icon with BG',
            'Avatar With Bank',
            'Pie Graph',
        ],
    },
    listItemAddonAvatarSize: {
        control: 'select',
        options: ['Small', 'Medium', 'Large'],
    },
    listItemAddonavataredit: {
        control: "boolean"
    },
    listItemAddonAvatarElements: {
        control: 'select',
        options: ['Initials', 'Icon'],
    },
    listItemAddonAvatarInitials: {
        control: 'text',
    },
    listItemAddonAvatarType: {
        control: 'select',
        options: ['Filled', 'Outline'],
    },
    stackedListItemBody: {
        control: 'select',
        options: ['Headline+Body', 'Label+Value', 'Extra Content'],
    },
    stackedListItemBodyShowContent: {
        control: 'boolean',
    },
    stackedListItemBodyShowLabel: {
        control: 'boolean',
    },
    stackedListItemBodyShowSubTitle: {
        control: 'boolean',
    },
    stackedListItemBodyShowBodyCopy: {
        control: 'boolean',
    },
    stackedListItemBodyShowStatus: {
        control: 'boolean',
    },
    stackedListItemBodyStatusState: {
        control: 'select',
        options: ['Success', 'Error', 'Warning', 'Neutral'],
    },
    stackedListItemBodyHeadline: {
        control: 'text',
    },
    stackedListItemBodyContent: {
        control: 'text'
    },
    stackedListItemBodyLabel: {
        control: 'text',
    },
    stackedListItemBodyValue: {
        control: 'text'
    },
    stackedListItemBodySubTitle: {
        control: 'text'
    },
    stackedListItemBodystatusStatus: {
        control: 'text'
    },
    badgeStatusType: {
        control: 'select',
        options: [
            'Badge Notification',
            'Chips Info',
            'Text',
            'Balance',
            'Balance with Status',
        ],
    },
    badgeStatusText: {
        control: 'text',
    },
    badgeNotificationType: {
        control: 'select',
        options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    },
    badgeNotificationSize: {
        control: 'select',
        options: ['Small', 'Large', 'XS'],
    },
    badgeNotificationNumber: {
        control: 'select',
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    },
    badgeStatusShowFirstValue: {
        control: 'boolean'
    },
    badgeStatusFirstValue: {
        control: 'text'
    },
    badgeStatusSecondValue: {
        control: 'text'
    },
    badgeStatusShowSecondValue: {
        control: 'boolean'
    },

    listItemActionType: {
        control: 'select',
        options: [
            'Toggle',
            'Check Box',
            'Chevron',
            'Radio Button',
            'Edit',
            'Delete',
            'Tick'
        ],
    },
    badgeStatuschipsInfoState: {
        control: 'select',
        options: [
            'Success',
            'Error',
            'Warning',
            'Neutral',
            'Info',
        ],
    },
    badgeStatuschipsInfoSize: {
        control: 'select',
        options: [
            'Small',
            'Large'
        ],
    },
    badgeStatuschipsInfoType: {
        control: 'select',
        options: [
            'Text with Icon',
            'Default'
        ]
    },
    badgeStatuschipsInfoLabel: {
        control: 'text'
    },
    badgeStatuschipsInfoShowIcon: {
        control: 'boolean'
    },
    listItemActionscheckboxIconState: {
        control: 'select',
        options: [
            'Disabled',
            'Checked',
            'Unchecked'
        ]
    },
    listItemActionstoggleState: {
        control: 'select',
        options: [
            'Unselected',
            'Selected',
        ]
    },
    listItemActionsradiobuttonIconState: {
        control: 'select',
        options: [
            'Disabled',
            'Checked',
            'Unchecked'
        ]
    },
    BarProgressProperty1: {
        control: 'select',
        options: [
            '100%',
            '75%',
            '50%',
            "25%"
        ]
    },
    BarProgresshorizontalbarProperty1: {
        control: 'select',
        options: [
            'default',
            'active',
        ]
    }

};

export const WeeklyChartStory = (args) => {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const [language, setLanguage] = useState(args.lang || 'en');
    const { t, i18n } = useTranslation();

    const handleChange = (newLang) => {
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        CommonHelper.changeLanguage(newLang);
    };

    useEffect(() => {
        CommonHelper.initLanguage(setLanguage);
    }, []);

    useEffect(() => {
        if (args.lang && args.lang !== language) {
            handleChange(args.lang);
        }
    }, [args.lang]);

    useEffect(() => {
        const headerthemedark = args.colorStyles !== 'LightMode';
        if (headerthemedark !== isDarkMode) {
            console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
            toggleTheme();
        }
    }, [args.colorStyles, isDarkMode, toggleTheme]);
    return (<WeeklyChart
        changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
        {...args}
    />
    )
}

WeeklyChartStory.args = {
    myActivityType: "Week",
    // barChartType: '75%',
    colorStyles: "LightMode",
    lang: I18nManager.isRTL ? 'ar' : 'en',
};

WeeklyChartStory.argTypes = {

    myActivityType: {
        control: 'select',
        options: ['Month', 'Week']
    },
    // barChartType: {
    //     control: 'select',
    //     options: ['25%', '50%', '75%', '100%']
    // },
    colorStyles: {
        control: 'select',
        options: ['LightMode', 'DarkMode'],
    },
    lang: {
        control: 'select',
        options: ['en', 'ar'],
    },
}
