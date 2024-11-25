import { View, } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../constants/PixelScaling';
import { QuickButton } from '../components/Common/Button';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { spacingS } from '../constants/Size';
const Payment = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <>

      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View
          style={{
            marginLeft: spacingS,
            marginRight: spacingS,
            marginTop: spacingS

          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >

            <QuickButton
              quickActionButtonBox={{
                marginRight: actuatedNormalize(8)
              }}
              HideIcon={true}
              Icon={<SvgIconList
                icon="AccountAction"
                width={24}
                height={24}
              />}
              quickActionButtonLabel={t('initialLang:Button')}
              Type={"Vertical"}
              onPress={() => navigation.navigate('Bills')}
            ></QuickButton>
            <QuickButton
              quickActionButtonBox={{
                marginRight: actuatedNormalize(8)
              }}
              HideIcon={true}
              Icon={<SvgIconList
                icon="AccountAction"
                width={24}
                height={24}
              />}
              quickActionButtonLabel={t('initialLang:Button')}
              Type={"Vertical"}
              onPress={() => alert("Button")}

            ></QuickButton>
            <QuickButton
              HideIcon={true}
              Icon={<SvgIconList
                icon="AccountAction"
                width={24}
                height={24}
              />}
              quickActionButtonLabel={t('initialLang:Button')}
              Type={"Vertical"}
              onPress={() => alert("Button1")}
            ></QuickButton>
          </View>
        </View>
      </View>
    </>
  )
}
export default Payment;