import React from "react";
import { Platform, Dimensions, I18nManager , NativeModules, Alert } from "react-native";
import DeviceInfo from "react-native-device-info";
import { actuatedNormalize, isTab } from "./PixelScaling";
import {ThemeContext} from '../theme/ThemeProvider'
import {
  Softtoken1,
  Softtoken2,
  Softtoken3,
  Hardtoken1,
  Hardtoken2,
  Hardtoken3,
  Homeicon,
  Beautyicon,
  Educationicon,
  Foodicon,
  Healthicon,
  Familyicon,
  Investmentsicon,
  Insuranceicon,
  Lifestyleicon,
  Othericon,
  Shoppingicon,
  Transportationicon,
  Vacationicon,
  Educationiconwhite,
  Healthiconwhite,
  Vacationiconwhite,
  Foodiconwhite,
  Insuranceiconwhite,
  Shoppingiconwhite,
  Lifestyleiconwhite,
  Beautyiconwhite,
  Othericonwhite,
  Homeiconwhite,
  Transportationiconwhite,
  Familyiconwhite,
  Investmentsiconwhite,
  Feesicon,
  Incomeiconwhite,
  Feesiconwhite,
  Incomeicon,
  Transfericon,
  Transfericonwhite,
  CartIcon,
  WhiteCartIcon,
  InvestmentsiconNew
} from "./SvgLocations";
import AesUtil from "./AesUtil";
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
// import { store } from "../redux/store/Store";
import i18n from "../config/I18n";
import * as ApiEndpoints from "../api/ApiEndpoints";
import PngLocations from "../constants/PngLocations";
import { CordovaDeviceID } from '../containers/NativeHelper/MyNativeModule';
import { sha512 } from 'react-native-sha512';
import CryptoJS from "crypto-js";
// import {
//    setPerformanceApiStatus
// } from '../redux/actions/performance/PerformanceAction'
import moment from "moment";

const CommonHelper = {
  getDeviceHeight: function () {
    return Dimensions.get("window").height;
  },
  getDeviceWidth: function () {
    return Dimensions.get("window").width;
  },
  CustomError: (defaultError, CustomErrorObj = {}, errorOrderTop = false) => {
    let defaultErrorArray = defaultError.split(",");
    let singleError =
      defaultErrorArray.length > 1
        ? defaultErrorArray[errorOrderTop ? 0 : defaultErrorArray.length - 1]
        : defaultErrorArray[0];

    let returnError = singleError;

    for (let key in CustomErrorObj) {
      if (key === singleError) {
        returnError = CustomErrorObj[key];
      }
    }
    return returnError;
  },

  generateGlobalTransactionId: function () {
    var date = new Date();
    var components = [date.getDate(), date.getHours(), date.getTime()];
    var value = components.join("");
    return value;
  },

  getVersionhost: function () {
    
    let hostkey = store.getState().commonReducer.hostkey;
    let versionhost = "";
    switch (hostkey) {
      case "0":
        versionhost = "V-QA-";
        break;
      case "1":
        versionhost = "V-QA-";
        break;
      case "2":
        versionhost = "V";
        break;
      case "3":
        versionhost = "V-SIT-";
        break;
      case "4":
        versionhost = "V-PRE-";
        break;
      case "5":
        versionhost = "V-UAT-";
        break;
      case "6":
        versionhost = "V-PROD-";
        break;
      case "7":
        versionhost = "V-UAT2-";
        break;
      case "8":
        versionhost = "V-STUB";
        break;
      case "9":
        versionhost = "V-UAT3-";
        break;
      case "10":
        versionhost = "V-DEV-";
        break;
      case "11":
        versionhost = "V-UAT4-";
        break;
      case "12":
        versionhost = "V-UAT5-";
        break;
      case "13":
        versionhost = "V-UAT6-";
        break;
      default:
        versionhost = "";
        break;
    }
    return versionhost;

    // let hostName = ApiEndpoints.HostName;
    // let versionhost = "";
    // switch (hostName) {
    //   case "http://192.168.12.240:9090/MTCServices/services/":
    //     versionhost = "V";
    //     break;
    //   case "http://182.74.202.246/MTCServices/services/":
    //     versionhost = "V-QA-";
    //     break;
    //   case "http://182.74.202.246/MTCServicesStub1/services/":
    //     versionhost = "V-STUB-";
    //     break;
    //   case "http://192.168.12.240:9090/MTCServicesStub1/services/":
    //     versionhost = "V-STUB-";
    //     break;
    //   case "https://urmb.sabb.com/imServices/services/":
    //     versionhost = "V-UAT-";
    //     break;
    //   case "https://urmb2.sabb.com/imServices/services/":
    //     versionhost = "V-UAT-";
    //     break;
    //   case "https://lprmb.sabb.com/imServices/services/":
    //     versionhost = "V-PRE-";
    //     break;
    //   case "https://prmb.sabb.com/imServices/services/":
    //     versionhost = "V-";
    //     break;
    //   case "https://srmb.sabb.com/imServices/services/":
    //     versionhost = "V-SIT-";
    //     break;
    //   default:
    //     versionhost = "";
    //     break;
    // }
    // return versionhost;
  },

  geticons: (code) => {
    // let width = isTab() ? actuatedNormalize(36) : actuatedNormalize(26) ;
    // let height = isTab() ? actuatedNormalize(36) : actuatedNormalize(26) ;
    switch (code) {
      case 86:
        return <Educationicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 48:
        return <Healthicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 96:
        return <Vacationicon width={actuatedNormalize(30)} height={actuatedNormalize(30)} />;
      case 116:
        return <Foodicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 307:
        return <Insuranceicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 64:
        return <Shoppingicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 70:
        return <Lifestyleicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 815:
        return <Beautyicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 112:
        return <Othericon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 229:
        return <Transfericon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />
      case 210:
        return <Othericon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 13:
        return <Homeicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 32:
        return <Transportationicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 40:
        return <Familyicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 101:
        return <InvestmentsiconNew width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 1:
        return <Incomeicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 54:
        return <Feesicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 229:
        return <Transfericon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 14:
        return <Foodicon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case "CartIcon":
        return <CartIcon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />
    }
  },

  getheadercolor: (code) => {
    let color
    switch (code) {
      case 86:
        color = "#724DDE"
        break;
      case 48:
        color = "#008A7D"
        break;
      case 96:
        color = "#0093A1"
        break;
      case 116:
        color = "#E02D48"
        break;
      case 307:
        color = "#4550F5"
        break;
      case 64:
        color = "#9041BA"
        break;
      case 70:
        color = "#2685AE"
        break;
      case 815:
        color = "#CC3991"
        break;
      case 112:
        color = "#405C70"
        break;
      case 229:
        color = "#bc425c"
        break;
      case 210:
        color = "#405C70"
        break;
      case 13:
        color = "#D38900"
        break;
      case 32:
        color = "#A15A4F"
        break;
      case 40:
        color = "#D66111"
        break;
      case 101:
        color = "#006DC7"
        break;
      case 54:
        color = "#D64731"
        break;
      case 1:
        color = "#299452"
        break;
      // case 229:
      //   color = "#bc425c"
      //   break;
      // case "Groceries":
      //   color = "#E02D48"
      //   break;
    }
    return color;
  },

  getCategoriesRgbaColor: (cat) => {
    let color
    switch (cat) {
      case 86:
        color = "rgba(236, 231, 253,0.9)" //"rgba(236,231,253, 0.2)" #ece7fd
        break;
      case 48:
        color = 'rgba(224, 245, 243, 0.9)' //'rgba(0, 138, 125, 0.2)' e0f5f3
        break;
      case 96:
        color = 'rgba(229, 249, 251, 0.9)' //'rgba(0, 147, 161, 0.2)'
        break;
      case 116:
        color = 'rgba(254, 231, 235, 0.9)' //'rgba(224, 45, 72, 0.2)'
        break;
      case 307:
        color =  'rgba(232, 234, 255, 0.9)' //'rgba(69, 80, 245, 0.2)' #e8eaff
        break;
      case 64:
        color = 'rgba(241, 227, 249, 0.9)' //'rgba(144, 65, 186, 0.2)'
        break;
      case 70:
        color = 'rgba(226, 243, 248, 0.9)' //'rgba(38, 133, 174, 0.2)' e2f3f8
        break;
      case 815:
        color = 'rgba(248, 229, 240, 0.9)' //'rgba(204, 57, 145, 0.2)'
        break;
      case 112:
        color = 'rgba(64, 92, 112, 0.2)'
        break;
      case 229:
        color = 'rgba(188, 66 ,92,0.2)'
        break;
      case 210:
        color = 'rgba(230, 237, 240, 0.9)' //'rgba(64, 92, 112, 0.2)'
        break;
      case 13:
        color = 'rgba(246, 237, 220, 0.9)' //'rgba(211, 137, 0, 0.2)'
        break;
      case 32:
        color = 'rgba(243, 237, 236, 0.9)' //'rgba(161, 90, 79, 0.2)'
        break;
      case 40:
        color = 'rgba(252, 238, 229, 0.9)' //'rgba(214, 97, 17, 0.2)'
        break;
      case 101:
        color = 'rgba(227, 240, 252, 0.9)' //'rgba(0, 109, 199, 0.2)' e3f0fc
        break;
      case 54:
        color = 'rgba(247, 231, 231, 0.9)' //'rgba(214, 71, 49, 0.2)'
        break;
      case 1:
        color = 'rgba(41, 148, 82, 0.2)'
        break;
      // case 229:
      //   color = 'rgb (188, 66 ,92,0.2)'
      //   break;
      // case "Groceries":
      //   color = 'rgba(224, 45, 72, 0.2)'
      //   break;
    }
    return color
  },

  getheaderbg: (code) => {
    switch (code) {
      case 86:
        return require("../../assets/images/pfm/Categoriesbg/Educationbg.png");
      case 48:
        return require("../../assets/images/pfm/Categoriesbg/Healthbg.png");
      case 96:
        return require("../../assets/images/pfm/Categoriesbg/Vacationbg.png");
      case 116:
        return require("../../assets/images/pfm/Categoriesbg/Foodbg.png");
      case 307:
        return require("../../assets/images/pfm/Categoriesbg/Insurancebg.png");
      case 64:
        return require("../../assets/images/pfm/Categoriesbg/Shoppingbg.png");
      case 70:
        return require("../../assets/images/pfm/Categoriesbg/Leisurebg.png");
      case 815:
        return require("../../assets/images/pfm/Categoriesbg/Beautybg.png");
      case 112:
        return require("../../assets/images/pfm/Categoriesbg/Othersbg.png");
      case 229:
        return require("../../assets/images/pfm/Categoriesbg/Transfersbg.png");
      case 210:
        return require("../../assets/images/pfm/Categoriesbg/Othersbg.png");
      case 13:
        return require("../../assets/images/pfm/Categoriesbg/Homebg.png");
      case 32:
        return require("../../assets/images/pfm/Categoriesbg/Transportbg.png");
      case 40:
        return require("../../assets/images/pfm/Categoriesbg/Familybg.png");
      case 101:
        return require("../../assets/images/pfm/Categoriesbg/Investmentsbg.png");
      case 1:
        return require("../../assets/images/pfm/Categoriesbg/Incomebg.png");
      // case 229:
      //   return require("../../assets/images/pfm/Categoriesbg/Transfersbg.png");
      case 54:
        return require("../../assets/images/pfm/Categoriesbg/Feesbg.png");
      // case "Groceries":
      default:
        return require("../../assets/images/myaccounts/bgPatternCopy.png")
      //   return require("../../assets/images/pfm/Categoriesbg/Foodbg.png");
    }
  },

  // Education ------------------------>    86
  // Health & Wellness ---------------->    48
  // Vacation & travel ---------------->    96
  // Food ----------------------------->    116
  // Insurance ------------------------>    307
  // shopping & services -------------->    64
  // Leisure & Lifestyle -------------->    70
  // Beauty --------------------------->    815
  // Uncategorized Expenses ----------->    112
  // Uncategorised Transfers ---------->    229 **
  // Excluded From Expenses ----------->    210
  // Home ----------------------------->    13
  // Transportation ------------------->    32
  // Children & Family ---------------->    40
  // Investments & Savings ------------>    101
  // Income---------------------------->    1
  // Fees, Loans, Fines, & Tax -------->    54
  // Transfers ------------------------>    229 **

  gettabmenucolor: (code) => {
    // const { colors } = useTheme();
    
    let theme = ThemeContext._currentValue.colors;
    let color
    console.log("THEME >>> ", theme.currenttheme)
    switch (code) {
      case 86:
        color = theme.currenttheme === 'light' ? "#ece7fd" : "#2d1a66"
        break;
      case 48:
        color = theme.currenttheme === 'light' ? "#e0f5f3" : "#003830"
        break;
      case 96:
        color = theme.currenttheme === 'light' ? "#e5f9fb" : "#003338"
        break;
      case 116:
        color = theme.currenttheme === 'light' ? "#fee7eb" : "#450e16"
        break;
      case 307:
        color = theme.currenttheme === 'light' ? "#e8eaff" : "#1f2469"
        break;
      case 64:
        color = theme.currenttheme === 'light' ? "#f1e3f9" : "#411d54"
        break;
      case 70:
        color = theme.currenttheme === 'light' ? "#e2f3f8" : "#033347"
        break;
      case 815:
        color = theme.currenttheme === 'light' ? "#f8e5f0" : "#451632"
        break;
      case 112:
        color = theme.currenttheme === 'light' ? "#e6edf0" : "#2b3740"
        break;
      case 229:
        color = theme.currenttheme === 'light' ? "#f2e8ea" : "#4b0c27"
        break;
      case 210:
        color = theme.currenttheme === 'light' ? "#e6edf0" : "#2b3740"
        break;
      case 13:
        color = theme.currenttheme === 'light' ? "#f6eddc" : "#3d2d12"
        break;
      case 32:
        color = theme.currenttheme === 'light' ? "#f3edec" : "#3b2b28"
        break;
      case 40:
        color = theme.currenttheme === 'light' ? "#fceee5" : "#471d00"
        break;
      case 101:
        color = theme.currenttheme === 'light' ? "#e3f0fc" : "#002f57"
        break;
      case 54:
        color = theme.currenttheme === 'light' ? "#f7e7e7" : "#451b17"
        break;
      case 1:
        color = theme.currenttheme === 'light' ? "#e5faf1" : "#0b381c"
        break;
      // case 229:
      //   color = "#f2e8ea"
      //   break;
      // case "Groceries":
      //   color = "#fee7eb"
      //   break;
    }
    return color;
  },

  getWhiteIcons: (icon) => {
    switch (icon) {
      case 96:
        return <Vacationiconwhite />
      case 40:
        return <Familyiconwhite />
      case 101:
        return <Investmentsiconwhite />
      default:
        break;
    }
  },

  getheaderimage: (code) => {
    switch (code) {
      case 86:
        return <Educationiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 48:
        return <Healthiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 96:
        return <Vacationiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 116:
        return <Foodiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 307:
        return <Insuranceiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 64:
        return <Shoppingiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 70:
        return <Lifestyleiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 815:
        return <Beautyiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 112:
        return <Othericonwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 229:
        return <Transfericonwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 210:
        return <Othericonwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 13:
        return <Homeiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 32:
        return <Transportationiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 40:
        return <Familyiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 101:
        return <Investmentsiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 1:
        return <Incomeiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      // case 229:
      //   return <Transfericonwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case 54:
        return <Feesiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      // case "Groceries":
      //   return <Foodiconwhite width={actuatedNormalize(26)} height={actuatedNormalize(26)} />;
      case "CartIcon":
        return <WhiteCartIcon width={actuatedNormalize(26)} height={actuatedNormalize(26)} />
    }
  },

  getcategorybgicon: (code) => {
    switch (code) {
      case 86:
        return PngLocations.educationicon;
      case 48:
        return PngLocations.healthicon;
      case 96:
        return PngLocations.travelicon;
      case 116:
        return PngLocations.foodicon;
      case 307:
        return PngLocations.insuranceicon;
      case 64:
        return PngLocations.shoppingicon;
      case 70:
        return PngLocations.leisureicon;
      case 815:
        return PngLocations.beautyicon;
      case 112:
        return PngLocations.othersicon;
      case 229:
        return PngLocations.transfericon;
      case 210:
        return PngLocations.othersicon;
      case 13:
        return PngLocations.homeicon;
      case 32:
        return PngLocations.transporticon;
      case 40:
        return PngLocations.familyicon;
      case 101:
        return  PngLocations.investmentsicon;
      case 1:
        return PngLocations.incomeicon;
      case 54:
        return PngLocations.feesicon;
    }
  },

  getDeviceUniqueId: async function () {
    //return DeviceInfo.getUniqueId();

    if (Platform.OS === "ios") {

      //This will don't resets the device's Keychain(device id) when it detects the app has been uninstalled.
      RNSecureKeyStore.setResetOnAppUninstallTo(false);

      let bundleName = DeviceInfo.getBundleId();
      //console.warn("bundleName----->", bundleName);
      let deviceIdkey = bundleName + "-deviceId";
      let deviceId = "";
      await RNSecureKeyStore.get(deviceIdkey).then(
        (res) => {
          deviceId = res;
          console.warn("DeviceId Get Success");
          console.warn(res);
          //return deviceId;
        },
        (err) => {
          console.warn("DeviceId Get Error");
          console.warn(err);
        }
      );

      if (!deviceId) {
        let device_ID;
        device_ID = await CordovaDeviceID.getCordovaDeviceID();
        if (!device_ID) {
          device_ID = await DeviceInfo.getUniqueId();
          //Alert.alert("RN-DeviceID",device_ID);
        }
        // else {
        //   //Alert.alert("C-DeviceID",device_ID);
        // }

        RNSecureKeyStore.set(deviceIdkey, device_ID, {
          accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
        }).then(
          (res) => {
            //console.log("Set Success");
            console.log(res);
          },
          (err) => {
            //console.log("Set Error");
            console.log(err);
          }
        );
        console.warn("DeviceId---->", device_ID);
        return device_ID;
      } else {
        return deviceId;
      }
    } else {
      let deviceID =await DeviceInfo.getUniqueId();
      console.log(deviceID);
      return deviceID;
    }
  },

  Biometric: function () {
    let biometricType = store.getState().commonReducer.biometricType;
    let biometricflag = store.getState().commonReducer.biometricflag;
    let biometricowndevice =
      store.getState().commonReducer.isBioMetricOwndevice;
    let biometricactive = "";
    let otherdevice = "";

    if (biometricType !== "") {
      {
        if (biometricflag === "true" && biometricowndevice === "Y") {
          biometricactive = "active";
          otherdevice = "inactive";
        }
        if (biometricflag === "true" && biometricowndevice !== "Y") {
          biometricactive = "inactive";
          otherdevice = "active";
        }
        if (biometricflag !== "true") {
          biometricactive = "inactive";
          otherdevice = "inactive";
        }
      }
    } else {
      if (biometricflag === "true" && biometricowndevice === "Y") {
        biometricactive = "active";
        otherdevice = "inactive";
      }
      if (biometricflag === "true" && biometricowndevice === "N") {
        biometricactive = "unavailable";
        otherdevice = "active";
      }
    }

    let title = "";

    if (biometricactive === "active" && otherdevice === "inactive") {
      if (biometricType === "TID") {
        title = i18n.t("Login:Login.head.dtouchid");
      } else if (biometricType === "FID") {
        title = i18n.t("Login:Login.head.dfaceid");
      } else {
        title = i18n.t("Login:Login.head.deactivatebiometricgnrlbtn");
      }
    } else if (biometricactive === "inactive" && otherdevice === "active") {
      title = i18n.t("Login:Login.head.deactivatebiometricgnrlbtn");
    } else if (biometricactive === "unavailable" && otherdevice === "active") {
      title = i18n.t("Login:Login.head.deactivatebiometricgnrlbtn");
    }
    return title;
  },

  Encrypt: async function (plainText) {
    let iv = "00000000000000000000000000000000";
    let salt = "00000000000000000000000000000000";
    let keySize = 128;
    let deviceid = await this.getDeviceUniqueId();
    let iterationCount = 10;
    let passPhrase = "";
    if (deviceid.length >= 16) {
      passPhrase = deviceid.substring(0, 16);
    } else {
      let len = deviceid.length;
      let paddingval = "";
      let balLen = 16 - len;
      for (var i = 0; i < balLen; i++) {
        paddingval += "0";
      }
      passPhrase = deviceid + paddingval;
    }
    let encrypted = "";
    let aesUtil = new AesUtil(keySize, iterationCount);
    encrypted = aesUtil.encrypt(salt, iv, passPhrase, plainText);
    console.log("Encrypted " + encrypted);
    this.Decrypt(encrypted);
    return encrypted;
  },

  Decrypt: async function (plainText) {
    let iv = "00000000000000000000000000000000";
    let salt = "00000000000000000000000000000000";
    let keySize = 128;
    let deviceid = await this.getDeviceUniqueId();
    let iterationCount = 10;
    let passPhrase = "";
    if (deviceid.length >= 16) {
      passPhrase = deviceid.substring(0, 16);
    } else {
      let len = deviceid.length;
      let paddingval = "";
      let balLen = 16 - len;
      for (var i = 0; i < balLen; i++) {
        paddingval += "0";
      }
      passPhrase = deviceid + paddingval;
    }
    let decrypted = "";
    let aesUtil = new AesUtil(keySize, iterationCount);
    decrypted = aesUtil.decrypt(salt, iv, passPhrase, plainText);
    console.log("Decrypted ", decrypted);
    return decrypted;
  },

  Encryptuser: async function (plainText, randomsalt) {
    var app_enc_Flag = "Y"; //els.get("encRequiredFlag");
    var ret_val = "";
    if (app_enc_Flag == "Y") {
      console.log("commonjs:::::" + randomsalt);
      //var AesUtil = aesjsfile('libs/aes/aesutil',"AesUtil");
      var str = new String(randomsalt);
      var strlength = str.length;
      console.log(
        "commonjs:::::" + randomsalt + " " + plainText + " " + strlength
      );
      var iv = "00000000000000000000000000000000";
      var salt = "00000000000000000000000000000000";
      var keySize = 128;
      //var deviceid=getDeviceId();
      var iterationCount = 10;
      var passPhrase = "";

      if (strlength >= 16) {
        passPhrase = randomsalt.substring(0, 16);
      } else {
        var len = strlength;
        var paddingval = "";
        var balLen = 16 - len;
        for (var i = 0; i < balLen; i++) {
          paddingval += "0";
          passPhrase = randomsalt + paddingval;
        }

        passPhrase = randomsalt + paddingval;
        console.log("after the padding" + passPhrase);

        //passPhrase=passPhrase+randomsalt;
        var encrypt = "";
        var aesUtil = new AesUtil(keySize, iterationCount);
        encrypt = aesUtil.encrypt(salt, iv, passPhrase, plainText);
        ret_val = "E-" + encrypt;
      }
    } else {
      ret_val = plainText;
    }
    return ret_val;
  },

  /********************* Timestamp *********************/
  Encryptusertime: async function (plainText, randomsalt) {
    var app_enc_Flag = "Y"; //els.get("encRequiredFlag");
    var enc_req = "";

    try {
      enc_req = eval(plainText);
      if (Number.isInteger(enc_req)) enc_req = "False";
      else enc_req = "True";
    } catch (e) {
      enc_req = "True";
    }
    var ret_val = "";
    //if(app_enc_Flag=="Y"){
    //if(enc_req=="True"){
    console.log("commonhelper:::::" + randomsalt);
    //var AesUtil = aesjsfile('libs/aes/aesutil',"AesUtil");
    var str = new String(randomsalt);
    var strlength = str.length;
    console.log(
      "commonjs:::::" + randomsalt + " " + plainText + " " + strlength
    );
    var iv = "00000000000000000000000000000000";
    var salt = "00000000000000000000000000000000";
    var keySize = 128;
    //var deviceid=getDeviceId();
    var iterationCount = 10;
    var passPhrase = "";
    var paddingval = "";

    var len = strlength;
    var paddingval = "";
    var balLen = 16 - len;
    for (var i = 0; i < balLen; i++) {
      paddingval += "0";
      passPhrase = randomsalt + paddingval;
    }

    passPhrase = randomsalt + paddingval;
    console.log("after the padding decrypt" + passPhrase);

    //passPhrase=passPhrase+randomsalt;
    var encrypt = "";
    var aesUtil = new AesUtil(keySize, iterationCount);
    encrypt = aesUtil.encrypt(salt, iv, passPhrase, plainText);
    ret_val = "E-" + encrypt;

    return ret_val;
  },

  responseValidator: (response) => {
    if (
      response.internetStatus === false &&
      response.internetStatus !== undefined
    ) {
      return false;
    }
    return true;
  },

  /********************** DECRYPT *********************/
  DEcryptuser: async function (plainText, randomsalt) {
    var app_enc_Flag = "Y"; //els.get("encRequiredFlag");
    var enc_req = "";
    try {
      enc_req = eval(plainText);
      if (Number.isInteger(enc_req)) enc_req = "False";
      else enc_req = "True";
    } catch (e) {
      enc_req = "True";
    }
    var ret_val = "";
    if (enc_req == "True") {
      console.log("commonjs:::::" + randomsalt);
      //var AesUtil = aesjsfile('libs/aes/aesutil',"AesUtil");
      var str = new String(randomsalt);
      var strlength = str.length;
      console.log(
        "commonjs:::::" + randomsalt + " " + plainText + " " + strlength
      );
      var iv = "00000000000000000000000000000000";
      var salt = "00000000000000000000000000000000";
      var keySize = 128;
      //var deviceid=getDeviceId();
      var iterationCount = 10;
      var passPhrase = "";
      var paddingval = "";
      /*if(strlength>=16){
   alert("1");
    passPhrase=randomsalt.substring(0, 16);
    passPhrase = randomsalt+paddingval;
    console.log("after the padding decrypt"+passPhrase);
    alert("after the padding decrypt"+passPhrase);
  var decrypt="";
   var aesUtil = new AesUtil(keySize, iterationCount);
   decrypt = aesUtil.decrypt(salt, iv, passPhrase, plainText);
   alert(decrypt);
  return decrypt;
  }else{*/
      var len = strlength;
      var paddingval = "";
      var balLen = 16 - len;
      for (var i = 0; i < balLen; i++) {
        paddingval += "0";
        passPhrase = randomsalt + paddingval;
      }

      passPhrase = randomsalt + paddingval;
      console.log("after the padding decrypt" + passPhrase);

      //passPhrase=passPhrase+randomsalt;
      var decrypt = "";
      var aesUtil = new AesUtil(keySize, iterationCount);
      decrypt = aesUtil.decrypt(salt, iv, passPhrase, plainText);
      ret_val = decrypt;
    } else {
      ret_val = plainText;
    }
    return ret_val;
  },

  uniqueIdGenerator: () => {
    //  return Math.floor(Math.random() * 1000).toString()
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  },

  getCardColor: function (data) {
    var casaAccountPersonalizationListDTO =
      store.getState().accountsReducer.accountSummary
        .casaAccountPersonalizationListDTO;
    if (casaAccountPersonalizationListDTO) {
      casaAccountPersonalizationListDTO.map(
        (casaAccountPersonalizationList) => {
          if (
            casaAccountPersonalizationList.accountshortname ===
            data.accountShortName
          ) {
            console.warn("color----->", casaAccountPersonalizationList.color);
            //return casaAccountPersonalizationList.color;

            switch (casaAccountPersonalizationList.color) {
              case "red":
                return require("../../assets/images/cards/cardColorRed.png");
              case "darkBlue":
                return require("../../assets/images/cards/cardColorDarkBlue.png");
              case "darkGray":
                return require("../../assets/images/cards/cardColorDarkGrey.png");
              case "green":
                return require("../../assets/images/cards/cardColorGreen.png");
              case "lightBlue":
                return require("../../assets/images/cards/cardColorLightBlue.png");
              case "silver":
                return require("../../assets/images/cards/cardColorSilver.png");
              default:
                return require("../../assets/images/cards/cardColorRed.png");
            }
          }
        }
      );
      //return "";
    } else {
      return require("../../assets/images/cards/cardColorLightBlue.png");
    }
  },

  image: function () {
    return require("../../assets/images/cards/cardColorRed.png");
  },

  getRandomCards: function (index) {
    //console.warn("index----->", index);
    switch (index) {
      case 0:
        return require("../../assets/images/cards/cardColorRed.png");
      case 1:
        return require("../../assets/images/cards/cardColorDarkBlue.png");
      case 2:
        return require("../../assets/images/cards/cardColorDarkGrey.png");
      case 3:
        return require("../../assets/images/cards/cardColorGreen.png");
      case 4:
        return require("../../assets/images/cards/cardColorLightBlue.png");
      case 5:
        return require("../../assets/images/cards/cardColorSilver.png");
      default:
        return require("../../assets/images/cards/cardColorRed.png");
    }
  },

  getRandomCardsV2: function (index) {
    //console.warn("index----->", index);
    switch (index) {
      case "red":
        return require("../../assets/images/cards/cardColorRed.png");
      case "darkBlue":
        return require("../../assets/images/cards/cardColorDarkBlue.png");
      case "darkGray":
        return require("../../assets/images/cards/cardColorDarkGrey.png");
      case "green":
        return require("../../assets/images/cards/cardColorGreen.png");
      case "lightBlue":
        return require("../../assets/images/cards/cardColorLightBlue.png");
      case "silver":
        return require("../../assets/images/cards/cardColorSilver.png");
      case "light-blue":
        return require("../../assets/images/cards/cardColorLightBlue.png");
      case "dark-blue":
        return require("../../assets/images/cards/cardColorDarkBlue.png");
      case "gray":
        return require("../../assets/images/cards/cardColorDarkGrey.png");
      default:
        return require("../../assets/images/cards/cardColorRed.png");
    }
  },

  getRandomCardsColor: function (index) {
    let color = "";
    switch (index) {
      case 0:
        color = "red";
        break;
      case 1:
        color = "darkBlue";
        break;
      case 2:
        color = "darkGray";
        break;
      case 3:
        color = "green";
        break;
      case 4:
        color = "lightBlue";
        break;
      case 5:
        color = "silver";
        break;
      default:
        color = "red";
    }
    return color;
  },

  //account cards priority based on productType color
  customAccountOrder: function (color) {
    let order = 0;
    switch (color) {
      case "red": //CASA Account
        order = 0;
        break;
      case "darkGray": //Credit Card
        order = 1;
        break;
      case "green": //Investment Account
        order = 2;
        break;
      case "lightBlue": //Personal Finance
        order = 3;
        break;
      case "darkBlue": //Mortgage
        order = 4;
        break;
      case "silver": //Portfolio
        order = 5;
        break;
      default:
        order = 6;
    }
    return order;
  },

  getCardBackgroundImage: function (cardColor) {
    // var cardColor = this.getCardColor(item);
    //   console.warn("cardColor ------>", cardColor);

    //return this.image();

    switch (cardColor) {
      case "red":
        return require("../../assets/images/cards/cardColorRed.png");
      case "darkBlue":
        return require("../../assets/images/cards/cardColorDarkBlue.png");
      case "darkGray":
        return require("../../assets/images/cards/cardColorDarkGrey.png");
      case "green":
        return require("../../assets/images/cards/cardColorGreen.png");
      case "lightBlue":
        return require("../../assets/images/cards/cardColorLightBlue.png");
      case "silver":
        return require("../../assets/images/cards/cardColorSilver.png");
      default:
        return require("../../assets/images/cards/cardColorLightBlue.png");
    }
  },

  getCardColors: function (colors) {
    switch (colors) {
      case "red":
        return ["#ff2e65", "#a8282f"];
      case "darkBlue":
        //return ["#002e42", "#2d6077"];
        return ["#2d6077", "#002e42"];
      case "darkGray":
        //return ["#252527", "#757980"];
        return ["#757980", "#252527"];
      case "green":
        //return ["#003b39", "#008580"];
        return ["#008580", "#003b39"];
      case "lightBlue":
        //return ["#004f63", "#00a9ba"];
        return ["#00a9ba", "#004f63"];
      case "silver":
        //return ["#909090", "#f0f0f0"];
        return ["#f0f0f0", "#909090"];
      default:
        return ["#ff2e65", "#a8282f"];
    }
  },

  getTokenImage: function (id) {
    switch (id) {
      case "01":
        return (
          <Softtoken1
            width={actuatedNormalize(80)}
            height={actuatedNormalize(110)}
          />
        );
      case "02":
        return (
          <Softtoken2
            width={actuatedNormalize(80)}
            height={actuatedNormalize(110)}
          />
        );
      case "03":
        return (
          <Softtoken3
            width={actuatedNormalize(80)}
            height={actuatedNormalize(110)}
          />
        );
      case "04":
        return (
          <Hardtoken1
            width={actuatedNormalize(80)}
            height={actuatedNormalize(110)}
          />
        );
      case "05":
        return (
          <Hardtoken2
            width={actuatedNormalize(80)}
            height={actuatedNormalize(110)}
          />
        );
      case "06":
        return (
          <Hardtoken3
            width={actuatedNormalize(80)}
            height={actuatedNormalize(110)}
          />
        );
    }
  },
  addCommaToNumber: (data) => {
    if (!data) {
      if (data === 0) {
        return `${data}${".00"}`;
      }
      return "";
    }
    let num = data.toString();

    const dec = num.split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    let amount = Number(num).toFixed(len);

    var delimiter = ","; // replace comma if desired
    var a = amount.split(".", 2);
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) {
      return "";
    }
    var minus = "";
    if (i < 0) {
      minus = "-";
    }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
      var nn = n.substr(n.length - 3);
      a.unshift(nn);
      n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
      a.unshift(n);
    }
    n = a.join(delimiter);
    if (d.length < 1) {
      amount = n;
    } else {
      amount = n + "." + d;
    }
    amount = minus + amount;
    return amount;
  },

  addPointToNumber: (data) => {
    if (!data) {
      if (data === 0) {
        return `${data}${".00"}`;
      }
      return "";
    }
    let num = data.toString();

    const dec = num.split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    let amount = Number(num).toFixed(len);

    var delimiter = ""; // replace comma if desired
    var a = amount.split(".", 2);
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) {
      return "";
    }
    var minus = "";
    if (i < 0) {
      minus = "-";
    }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
      var nn = n.substr(n.length - 3);
      a.unshift(nn);
      n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
      a.unshift(n);
    }
    n = a.join(delimiter);
    if (d.length < 1) {
      amount = n;
    } else {
      amount = n + "." + d;
    }
    amount = minus + amount;
    return amount;
  },

  formatNumberByTruncatingZero : (data) => {
    // Note Formatting would only work if val is greater than 16 number formatting won't work (js restrictions)
    if(data && (data+"").length > 16) return data

    const formattedNum = Number(data).toString();
    return formattedNum !== "NaN" ?  formattedNum : data
  },


  getResponsiveValue: (currentValue) => {
    let protoWidth = 375; //zeplin proptye UI secreen width
    let protoHeight = 768; //zeplin proptye UI secreen height
    let ratio = currentValue / (protoHeight / protoWidth);
    let value =
      (Dimensions.get("window").height / Dimensions.get("window").width) *
      ratio;
    return Number(value);
  },

  getTransactionType: (txntype) => {
    var txntypetxt = "";
    switch (txntype) {
      case "F":
        return i18n.t("MyAccounts:transfer_history.fast");
      case "R":
        return i18n.t("MyAccounts:transfer_history.regular");
      case "I":
        return i18n.t("MyAccounts:transfer_history.localtransferips");
      case "O":
        return i18n.t("MyAccounts:transfer_history.intertransferlabel");
      case "V":
        return i18n.t("MyAccounts:transfer_history.overseasvisadebit");
      case "L":
        return i18n.t("MyAccounts:transfer_history.localtransferlabel");
      case "W":
        return i18n.t("MyAccounts:transfer_history.withinshblimits");
      case "P":
        return i18n.t("MyAccounts:transfer_history.ownaccountstransfer");
      case "C":
        return i18n.t("MyAccounts:transfer_history.sabbcreditcard");
      case "N":
        return i18n.t("MyAccounts:transfer_history.cashout");
      case "M":
        return i18n.t("MyAccounts:transfer_history.mobilewallet");
      case "J":
        return i18n.t("Transfer:ips:instantpaymentwithin");
      case "D":
        return i18n.t("Transfer:grid.donation");
      case "Z":
        return i18n.t("Transfer:grid.zakatytransfer");
      default:
        return i18n.t("MyAccounts:transfer_history.regular");
    }
  },

  getTransactionFees: (chargeTye) => {
    var chargeAmt = "";
    if (chargeTye != "" && chargeTye != null && chargeTye != undefined) {
      chargeTye = chargeTye.split(" ");
      chargeAmt = parseInt(chargeTye[0]) / 100;
      return CommonHelper.addCommaToNumber(chargeAmt);
    } else {
      return "0";
    }
  },

  getTransactionDate: (txnDate) => {
    if (txnDate != "" && txnDate != null && txnDate != undefined) {
      txnDate = txnDate.split(" ")[0];
      var stsdateNew = txnDate.split("-");
      return (stsdateNew =
        stsdateNew[2] + "/" + stsdateNew[1] + "/" + stsdateNew[0]);
    }
    return "";
  },

  getName: (name) => {
    name = name.replace(/-/g, " ");
    name = name.split(" ");
    return name[0].charAt(0, 1);
  },

  splitWord: (name) => {
    if (name.indexOf("-") != -1) {
      return name.substring(0, name.indexOf("-"));
    } else {
      return name;
    }
  },

  hideDigits: (number) => {
    return number.replace(new RegExp("[0-9]", "g"), "*");
  },

  getAccountStatus: (acctStatus, categorycode, isCardStoped) => {
    if (acctStatus === "1") {
      return i18n.t("MyAccounts:accounts.active");
    } else if (acctStatus === "2") {
      if (categorycode === "CCA") {
        return i18n.t("MyAccounts:accounts.inactive");
      } else {
        return i18n.t("Dashboard:landing.dormant");
      }
    } else if (acctStatus === "8") {
      return i18n.t("addbeneficiary:addbeneficiary.inprogress");
    } else if (acctStatus === "3") {
      return i18n.t("Dashboard:landing.unclaim");
    } else if (acctStatus === "B" && isCardStoped === "Y") {
      return i18n.t("managesupplementarycard:managesupplementarycard.stopped");
    }
  },

  getCCStatus: (cardstatus) => {
    if (cardstatus === "A") {
      return i18n.t("MyAccounts:accounts.active");
    } else {
      return i18n.t("MyAccounts:accounts.inactive");
    }
  },

  accountStatusVisible: (acctStatus, categorycode) => {
    if (acctStatus === "1") {
      if (categorycode === "CCA") {
        return true;
      } else {
        return false;
      }
    } else if (acctStatus === "2") {
      if (categorycode === "CCA") {
        return true;
      } else {
        return true;
      }
    } else if (acctStatus === "3") {
      return true;
    }
  },

  // getAccountInfoLabels: (key) => {
  //   if (key === "statement1") {
  //     return i18n.t("MyAccounts:accounts.statement1");
  //   } else if(key === "statement2"){
  //     return i18n.t("MyAccounts:accounts.statement2");
  //   } else if(key === "statement3"){
  //     return i18n.t("MyAccounts:accounts.statement3");
  //   } else if(key === "statement4"){
  //     return i18n.t("MyAccounts:accounts.statement4");
  //   } else if(key === "statement5"){
  //     return i18n.t("MyAccounts:accounts.statement5");
  //   } else if(key === "statement6"){
  //     return i18n.t("MyAccounts:accounts.statement6");
  //   } else {
  //     return "AAA";
  //   }
  // },

  getArabicMonth: (value) => {
    const gregorianMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const gregorianMonthsAr = ['يناير ', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']

    let tempval = moment(value, "MMMM YYYY").format("MM/YYYY")
    let tempvaluesplit = tempval.split("/")
    let customvalue = `${I18nManager.isRTL ? gregorianMonthsAr[Number(tempvaluesplit[0]) - 1] : gregorianMonths[Number(tempvaluesplit[0]) - 1]} ${tempvaluesplit[1]}`
    return customvalue;
  },

  getAccountDeatilsName: (summaryData, accountStatement) => {
    //console.warn()
    if (summaryData.product.productType.code == "OLP") {
      if (
        accountStatement.olpaccountdetail != "" &&
        accountStatement.olpaccountdetail != undefined &&
        accountStatement.olpaccountdetail != null
      ) {
        return (
          summaryData.nicknamedisplay +
          " - " +
          accountStatement.olpaccountdetail.olpAliasID
        );
      } else {
        return summaryData.nicknamedisplay;
      }
    } else {
      return summaryData.nicknamedisplay;
    }
  },

  getAccountDetailsLabel: (summaryData) => {
    var productTypeCode = summaryData.product.productType.code;
    var isLoanAccount = summaryData.product.code;
    isLoanAccount = isLoanAccount === "LOAN" ? "Y" : "N";
    if (
      summaryData?.accountNumber != "PORTFOLIO ACCOUNT" &&
      isLoanAccount != "Y" &&
      productTypeCode != "RSA"
    ) {
      if (summaryData.product.productType.categorycode === "CCA") {
        return i18n.t("MyAccounts:accounts.availablelimit");
      } else if (summaryData.product.code === "TD") {
        return i18n.t("MyAccounts:accounts.ledgerbalance");
      } else {
        return i18n.t("MyAccounts:accounts.balance");
      }
    }
    // else if (summaryData.accountNumber === "PORTFOLIO ACCOUNT") {
    //   return i18n.t("MyAccounts:accounts.ledgerbalance");
    // }
    else if (
      (isLoanAccount === "Y" && productTypeCode === "PIL") ||
      (productTypeCode === "MEL") |
      (productTypeCode === "AP1") |
      (productTypeCode === "AP2") |
      (productTypeCode === "SEL") |
      (productTypeCode === "PRL") |
      (productTypeCode === "LTF")
    ) {
      return i18n.t("MyAccounts:accounts.principle_outstanding");
    } else {
      return i18n.t("MyAccounts:accounts.ledgerbalance");
      //return i18n.t("MyAccounts:accounts.principle_outstanding");
    }
  },

  getAccountDetailsAmount: (summaryData, accountStatement) => {
    var isLoanAccount = summaryData.product.code;
    var loanProductType = summaryData.product.productType.code;
    isLoanAccount = isLoanAccount === "LOAN" ? "Y" : "N";

    if (summaryData.product.productType.categorycode === "CCA") {
      return CommonHelper.addCommaToNumber(
        summaryData.mwavailbal ? summaryData.mwavailbal : 0
      );
    } else if (summaryData.product.code === "TD") {
      return CommonHelper.addCommaToNumber(
        accountStatement.accountdetail.tdclearedbalance
          ? accountStatement.accountdetail.tdclearedbalance
          : 0
      );
    } else {
      if (summaryData?.accountNumber != "PORTFOLIO ACCOUNT") {
        if (isLoanAccount === "Y") {
          // return CommonHelper.addCommaToNumber(
          //   accountStatement.accountdetail.loanoverduepenaltyamt
          //     ? accountStatement.accountdetail.loanoverduepenaltyamt
          //     : 0
          // );
          return CommonHelper.addCommaToNumber(
            summaryData.availableBalance ? summaryData.availableBalance : 0
          );
        } else {
          return CommonHelper.addCommaToNumber(
            accountStatement.accountdetail.availableBalance
              ? accountStatement.accountdetail.availableBalance
              : 0
          );
        }
      } else {
        return CommonHelper.addCommaToNumber(
          summaryData.availableBalance ? summaryData.availableBalance : 0
        );
      }
    }
  },

  getBGColorAccountStatus: (theme, acctStatus, categorycode, isCardStoped) => {
    if (acctStatus === "1") {
      return theme.labelSuccess;
    } else if (acctStatus === "2" || acctStatus === "8") {
      if (categorycode === "CCA") {
        return theme.inActiveBackgroundnew;
      } else {
        return theme.pendingColor;
      }
    } else if (acctStatus === "3") {
      return theme.inActiveBackgroundnew;
    } else if (acctStatus === "B" && isCardStoped === "Y") {
      return theme.inActiveBackgroundnew;
    }
  },

  getTextColorAccountStatus: (
    theme,
    acctStatus,
    categorycode,
    isCardStoped
  ) => {
    if (acctStatus === "1") {
      return theme.labelSuccessText;
    } else if (acctStatus === "2" || acctStatus === "8") {
      if (categorycode === "CCA") {
        return theme.tabActive;
      } else {
        return theme.goldColor;
      }
    } else if (acctStatus === "3") {
      return theme.tabActive;
    } else if (acctStatus === "B" && isCardStoped === "Y") {
      return theme.tabActive;
    }
  },

  getCCBackgroundStatus: (theme, cardstatus) => {
    if (cardstatus === "A") {
      return theme.labelSuccess;
    } else {
      return theme.inActiveBackground;
    }
  },

  getCCTextColor: (theme, cardstatus) => {
    if (cardstatus === "A") {
      return theme.labelSuccessText;
    } else {
      return theme.tabActive;
    }
  },

  getTransferStatus: (status) => {
    var txnSts = status.toUpperCase();
    var txnStstxt = "";
    if (txnSts == "DELIVERED") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.delivered");
    } else if (txnSts == "PENDING") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.pending");
    } else if (txnSts == "REJECTED") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.rejected");
    } else if (txnSts == "PROCESSING") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.processing");
    } else if (txnSts == "REFUNDED") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.refunded");
    } else if (txnSts == "TRANSMITTED") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.transmitted");
    } else if (txnSts == "COMPLETED") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.completed");
    } else if (txnSts == "CASHPICKEDUP") {
      txnStstxt = i18n.t("MyAccounts:transfer_history.cashpickedup");
    }
    return txnStstxt;
  },

  getTransferStatusBackgroundColor: (status) => {
    var txnSts = status.toUpperCase();
    if (
      txnSts == "DELIVERED" ||
      txnSts == "COMPLETED" ||
      txnSts == "REFUNDED" ||
      txnSts == "TRANSMITTED" ||
      txnSts == "CASHPICKEDUP"
    ) {
      return "rgb(229, 242, 242)";
    } else if (txnSts == "REJECTED") {
      return "#f9f2f3";
    } else {
      return "#fff8ea";
    }
  },

  getTransferStatusTextColor: (status) => {
    var txnSts = status.toUpperCase();
    if (
      txnSts == "DELIVERED" ||
      txnSts == "COMPLETED" ||
      txnSts == "REFUNDED" ||
      txnSts == "TRANSMITTED" ||
      txnSts == "CASHPICKEDUP"
    ) {
      return "rgb(0, 132, 127)";
    } else if (txnSts == "REJECTED") {
      return "#d22630";
    } else {
      return "#e6b012";
    }
  },

  filterYearinDate: function (fullDate) {
    console.log("fullDateneww1111",fullDate)
    fullDate = fullDate.substring(0, 10);
    var datesub = fullDate.split("-");
    var _year = datesub[0];
    return _year;
  },

  filterMonthinDate: function (fullDate) {
    console.log("fullDate>>>>111",fullDate)
    fullDate = fullDate.substring(0, 10);
    var datesub = fullDate.split("-");
    var _year = datesub[0];
    var _mon = datesub[1];
    var _date = datesub[2];
    switch (_mon) {
      case "01":
      case "1":
        return "January";
      case "02":
      case "2":
        return "February";
      case "03":
      case "3":
        return "March";
      case "04":
      case "4":
        return "April";
      case "05":
      case "5":
        return "May";
      case "06":
      case "6":
        return "June";
      case "07":
      case "7":
        return "July";
      case "08":
      case "8":
        return "August";
      case "09":
      case "9":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  },
  filterMonthinDatefrVat: function (fullDate) {
    console.log("fullDate>>>>111",fullDate)
   
    switch (fullDate) {
      case "01":
      case "1":
        return "January";
      case "02":
      case "2":
        return "February";
      case "03":
      case "3":
        return "March";
      case "04":
      case "4":
        return "April";
      case "05":
      case "5":
        return "May";
      case "06":
      case "6":
        return "June";
      case "07":
      case "7":
        return "July";
      case "08":
      case "8":
        return "August";
      case "09":
      case "9":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  },

  getMonthNameShrt: function (mon) {
    var dtMonth = "";
    switch (mon) {
      case "1":
      case "01":
        dtMonth = "Jan";
        break;
      case "2":
      case "02":
        dtMonth = "Feb";
        break;
      case "3":
      case "03":
        dtMonth = "Mar";
        break;
      case "4":
      case "04":
        dtMonth = "Apr";
        break;
      case "5":
      case "05":
        dtMonth = "May";
        break;
      case "6":
      case "06":
        dtMonth = "Jun";
        break;
      case "7":
      case "07":
        dtMonth = "Jul";
        break;
      case "8":
      case "08":
        dtMonth = "Aug";
        break;
      case "9":
      case "09":
        dtMonth = "Sep";
        break;
      case "10":
        dtMonth = "Oct";
        break;
      case "11":
        dtMonth = "Nov";
        break;
      case "12":
        dtMonth = "Dec";
        break;
    }
    return dtMonth;
  },

  getMonthNameShrtArb: function (mon) {
    var dtMonth = "";
    switch (mon) {
      case "1":
      case "01":
        dtMonth = "يناير";
        break;
      case "2":
      case "02":
        dtMonth = "فبراير";
        break;
      case "3":
      case "03":
        dtMonth = "مارس";
        break;
      case "4":
      case "04":
        dtMonth = "ابريل";
        break;
      case "5":
      case "05":
        dtMonth = "مايو";
        break;
      case "6":
      case "06":
        dtMonth = "يونيو";
        break;
      case "7":
      case "07":
        dtMonth = "يوليو";
        break;
      case "8":
      case "08":
        dtMonth = "اغسطس";
        break;
      case "9":
      case "09":
        dtMonth = "سبتمبر";
        break;
      case "10":
        dtMonth = "أكتوبر";
        break;
      case "11":
        dtMonth = "نوفمبر";
        break;
      case "12":
        dtMonth = "ديسمبر";
        break;
    }
    return dtMonth;
  },
  /*********************** get credit card progress bar percentage ***************/
  utilityPercentage: (bal, limit) => {
    console.warn("bal---->", bal);
    console.warn("limit---->", limit);
    var availBalance = bal;
    var totalLimit = limit;
    var utilityRatio = (availBalance / totalLimit) * 100;
    console.log("utilityRatio", utilityRatio);
    utilityRatio = Math.round(utilityRatio);
    console.log("utilityRatio", utilityRatio);
    if (isNaN(utilityRatio) == true) {
      utilityRatio = "0";
    } else if (utilityRatio == "-Infinity") {
      utilityRatio = "0";
    } else if (utilityRatio == "Infinity") {
      utilityRatio = "0";
    }
    console.warn("utilityRatiofinal--->", utilityRatio);
    //return utilityRatio / 100;
    return utilityRatio;
  },

  Authentication: ({ callBackWithOTP, callBackWithoutAuthenticate,mandatoryOTP}) => {
    // let biometriclogin = true

    let biometriclogin = store.getState().commonReducer.biometriclogin;
    let dskLogin = store.getState().commonReducer.dsklogin;
    let qakLogin = store.getState().commonReducer.qaklogin;

    let viaOTP = false;

    if (biometriclogin) {
      viaOTP = true;
    }

    if (dskLogin) {
      viaOTP = false;
    }

    if (qakLogin) {
      viaOTP = true;
    }

    if(mandatoryOTP){
      viaOTP=true
    }

    if (viaOTP) {
      callBackWithOTP();
    } else {
      callBackWithoutAuthenticate();
    }
  },
  calculateProfit: (profitrate) => {
    var str = profitrate;
    var res = str.split("%");
    var result = "";
    if (str.indexOf("%") != -1) {
      result = parseFloat(res[0]).toFixed(2) + "%";
    } else {
      result = parseFloat(res[0]).toFixed(2);
    }
    return result;
  },

  accountsDetailButtonName: (summaryData, newAccount) => {
    if (summaryData?.accountNumber != "PORTFOLIO ACCOUNT") {
      if (summaryData.acctStatus == "1") {
        if (summaryData.product.productType.categorycode == "CCA") {
          return i18n.t("MyAccounts:accounts.paynow");
        } else {
          if (summaryData.transferAllow == "YES") {
            return i18n.t("MyAccounts:accounts.makeatransfer");
          }
        }

        if (
          summaryData.product.productType.code == "RSA" &&
          newAccount == "Y"
        ) {
          return i18n.t("MyAccounts:accounts.breakwaaferacc");
        }

        if (summaryData.product.code == "TD" && newAccount == "Y" && summaryData.product.productType.code !== "AIU") {
          return i18n.t("MyAccounts:accounts.updatematuritybutton");
        }
      }
    }

    if (summaryData?.accountNumber === "PORTFOLIO ACCOUNT") {
      return i18n.t("MyAccounts:accounts.website");
    }
  },
  numberWithCommas: (x) => {
    // return ""
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  numberWithCommasV2: (x) => {
    // var parts = x.toString().split(".");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "";
    // parts.join(".");
  },
  numberWithCommasV3: (x) => {
    return "";
    // x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  },
  getMonthNameFullArabic: (month) => {
    var monthFull;
    switch (month) {
      case 0:
        monthFull = "يناير";
        break;
      case 1:
        monthFull = "فبراير";
        break;
      case 2:
        monthFull = "مارس";
        break;
      case 3:
        monthFull = "ابريل";
        break;
      case 4:
        monthFull = "مايو";
        break;
      case 5:
        monthFull = "يونيو";
        break;
      case 6:
        monthFull = "يوليو";
        break;
      case 7:
        monthFull = "اغسطس";
        break;
      case 8:
        monthFull = "سبتمبر";
        break;
      case 9:
        monthFull = "أكتوبر";
        break;
      case 10:
        monthFull = "نوفمبر";
        break;
      case 11:
        monthFull = "ديسمبر";
        break;
    }
    return monthFull;
  },
  getMonthNameFullEnglish: (month) => {
    var monthFull;
    switch (month) {
      case 0:
        monthFull = "January";
        break;
      case 1:
        monthFull = "February";
        break;
      case 2:
        monthFull = "March";
        break;
      case 3:
        monthFull = "April";
        break;
      case 4:
        monthFull = "May";
        break;
      case 5:
        monthFull = "June";
        break;
      case 6:
        monthFull = "July";
        break;
      case 7:
        monthFull = "August";
        break;
      case 8:
        monthFull = "September";
        break;
      case 9:
        monthFull = "October";
        break;
      case 10:
        monthFull = "November";
        break;
      case 11:
        monthFull = "December";
        break;
    }
    return monthFull;
  },

  slicingToAccountName: (data) => {
    // let name = data;
    // let index = name.indexOf("*");
    // let customername = name.slice(0, index + 2);
    // return customername;
    let proxyBeneficiaryName = data;
    if (proxyBeneficiaryName !== "" && proxyBeneficiaryName !== null && proxyBeneficiaryName !== undefined) {
      proxyBeneficiaryName = proxyBeneficiaryName.split("(");
      if (I18nManager.isRTL) {
        if (proxyBeneficiaryName[1] !== "" && proxyBeneficiaryName[1] !== null && proxyBeneficiaryName[1] !== undefined) {
          proxyBeneficiaryName = proxyBeneficiaryName[1].replace(")", "");
          let proxyBeneficiaryNameNew = "";
          let proxyBeneficiaryNameAstrics = "";
          if (proxyBeneficiaryName.indexOf("*") !== -1) {
            let textAllow = "*";
            for (let i = 0; i < proxyBeneficiaryName.length; i++) {
              console.log("text--i->>", i);
              console.log("text-->>", proxyBeneficiaryName[i]);
              if (textAllow.indexOf(proxyBeneficiaryName[i]) === -1) {
                proxyBeneficiaryNameNew += proxyBeneficiaryName[i].replace("*", "");
                console.log("text--new-->>", proxyBeneficiaryNameNew);
              } else {
                proxyBeneficiaryNameAstrics += proxyBeneficiaryName[i];
                console.log("text--astrics-->>", proxyBeneficiaryNameAstrics);
              }
            }
            proxyBeneficiaryName = proxyBeneficiaryNameNew + " " + proxyBeneficiaryNameAstrics
          }
        }else {
          proxyBeneficiaryName = proxyBeneficiaryName[0];
        }
      } else {
        proxyBeneficiaryName = proxyBeneficiaryName[0];
      }
      proxyBeneficiaryName = proxyBeneficiaryName.trim();
    }
    return proxyBeneficiaryName;
  },

  getImageLogo: (item) => {
    let vchartwork = store.getState().commonReducer.loginData.vchartworkenabled;
    console.log("vchartwork--->>", vchartwork);
    let logo = "";

    if (item.product.productType.code === "MPT") {
      logo = PngLocations.worldelite01;
    } else if (
      item.product.productType.code === "MPA" ||
      item.product.productType.code === "MGP"
    ) {
      logo = PngLocations.World01;
    } else if (item.product.productType.code === "VTA") {
      logo = PngLocations.PDR_VTA;
    } else if (item.product.productType.code === "VAG") {
      logo = PngLocations.PDR_VAG;
    } else if (item.product.productType.code === "VEG") {
      logo = PngLocations.PDR_VEG;
    } else if (
      item.product.productType.code === "MGT" ||
      item.product.productType.code === "MGs"
    ) {
      logo = PngLocations.Platinum01;
    } else if (
      item.product.productType.code === "MCL" ||
      item.product.productType.code === "MCS" ||
      item.product.productType.code === "MCT"
    ) {
      logo = PngLocations.titanium01;
    } else if (
      item.product.productType.code === "VPT" ||
      item.product.productType.code === "VPS" ||
      item.product.productType.code === "VPC" ||
      item.product.productType.code === "VGT" ||
      item.product.productType.code === "VGS"
    ) {
      logo = PngLocations.PDR_VP;
    } else if (
      item.product.productType.code === "VCL" ||
      item.product.productType.code === "VCT" ||
      item.product.productType.code == "VCS" 
      // ||
      // item.product.productType.code == "VLL"
    ) {
      logo = PngLocations.PDR_VCL;
    } else if (
      item.product.productType.code == "VLL"
    ) {
      logo = PngLocations.PDR_VLL;
    } else if (item.product.productType.code === "MAW") {
      logo = PngLocations.SABB_World;
    } else if (item.product.productType.code === "MFP") {
      logo = PngLocations.AlFurasan;
    } else if (item.product.productType.code === "MQP") {
      logo = PngLocations.Qitaf;
    }
    else if (item.product.productType.code === "VCH"){
      logo = vchartwork == "Y" ? PngLocations.cashbackcardNew : PngLocations.cashbackcard;
    } 
    // else {
    //   logo = PngLocations.worldelite01;
    // }
    return logo;
  },

  getMadaCardlogo: (item) => {
    let loginData = store.getState().commonReducer?.loginData;
    let segment = loginData?.userLoginProfile?.segment;
    if (segment !== null && segment !== "" && segment !== undefined) {
      segment = segment;
    } else {
      segment = "PREMIER";
    }
    let logo = "";
    if (item.cardtypename === "Visa") {
      if (segment?.toUpperCase() === "PREMIER") {
        logo = PngLocations.Premier;
      } else if (segment?.toUpperCase() === "ADVANCE") {
        logo = PngLocations.Advance;
      } else if (segment?.toUpperCase() === "PRIVATE") {
        logo = PngLocations.PrivateBanking;
      } else if (segment?.toUpperCase() === "MASS") {
        logo = PngLocations.Mass;
      } else if (segment?.toUpperCase() === "RUWAD") {
        logo = PngLocations.Ruawd;
      } else {
        logo = PngLocations.Mass;
      }
    } else {
      logo = PngLocations.Mass;
    }
    return logo;
  },

  getVirtualCreditCard: (item) => {
    let vchartwork = store.getState().commonReducer.loginData.vchartworkenabled;
    console.log("vchartwork--->>", vchartwork);
    let logo = "";

    if (item.entprodtypcode == "MPT") {
      logo = PngLocations.worldelite01;
    } else if (item.entprodtypcode === "MPA" || item.entprodtypcode === "MGP") {
      logo = PngLocations.World01;
    } else if (item.entprodtypcode === "VTA") {
      logo = PngLocations.PDR_VTA;
    } else if (item.entprodtypcode === "VAG") {
      logo = PngLocations.PDR_VAG;
    } else if (item.entprodtypcode === "VEG") {
      logo = PngLocations.PDR_VEG;
    } else if (item.entprodtypcode === "MGT" || item.entprodtypcode === "MGs") {
      logo = PngLocations.Platinum01;
    } else if (
      item.entprodtypcode === "MCL" ||
      item.entprodtypcode === "MCS" ||
      item.entprodtypcode === "MCT"
    ) {
      logo = PngLocations.titanium01;
    } else if (
      item.entprodtypcode === "VPT" ||
      item.entprodtypcode === "VPS" ||
      item.entprodtypcode === "VPC" ||
      item.entprodtypcode === "VGT" ||
      item.entprodtypcode === "VGS"
    ) {
      logo = PngLocations.PDR_VP;
    } else if (
      item.entprodtypcode === "VCL" ||
      item.entprodtypcode === "VCT" ||
      item.entprodtypcode == "VCS" 
      // ||
      // item.entprodtypcode == "VLL"
    ) {
      logo = PngLocations.PDR_VCL;
    } else if (item.entprodtypcode == "VLL") {
      logo = PngLocations.PDR_VLL;
    } else if (item.entprodtypcode === "MAW") {
      logo = PngLocations.SABB_World;
    } else if (item.entprodtypcode === "MFP") {
      logo = PngLocations.AlFurasan;
    } else if (item.entprodtypcode === "MQP") {
      logo = PngLocations.Qitaf;
    }
    else if (item.entprodtypcode === "VCH") {
      logo = vchartwork == "Y" ? PngLocations.cashbackcardNew : PngLocations.cashbackcard;
    }
    // else {
    //   logo = PngLocations.worldelite01;
    // }
    return logo;
  },

  getSupplmentaryCardImage: (item) => {
    let vchartwork = store.getState().commonReducer.loginData.vchartworkenabled;
    console.log("vchartwork--->>", vchartwork);
    let logo = "";

    if (item.entProdTypCde == "MPT" || item.entprodtypcde == "MPT") {
      logo = PngLocations.worldelite01;
    } else if (item.entProdTypCde === "MPA" || item.entProdTypCde === "MGP" || item.entprodtypcde === "MPA" || item.entprodtypcde === "MGP") {
      logo = PngLocations.World01;
    } else if (item.entProdTypCde === "VTA" || item.entprodtypcde === "VTA") {
      logo = PngLocations.PDR_VTA;
    } else if (item.entProdTypCde === "VAG" || item.entprodtypcde === "VAG") {
      logo = PngLocations.PDR_VAG;
    } else if (item.entProdTypCde === "VEG" || item.entprodtypcde === "VEG") {
      logo = PngLocations.PDR_VEG;
    } else if (item.entProdTypCde === "MGT" || item.entProdTypCde === "MGs" || item.entprodtypcde === "MGT" || item.entprodtypcde === "MGs") {
      logo = PngLocations.Platinum01;
    } else if (
      item.entProdTypCde === "MCL" ||
      item.entProdTypCde === "MCS" ||
      item.entProdTypCde === "MCT" ||
      item.entprodtypcde === "MCL" ||
      item.entprodtypcde === "MCS" ||
      item.entprodtypcde === "MCT"
    ) {
      logo = PngLocations.titanium01;
    } else if (
      item.entProdTypCde === "VPT" ||
      item.entProdTypCde === "VPS" ||
      item.entProdTypCde === "VPC" ||
      item.entProdTypCde === "VGT" ||
      item.entProdTypCde === "VGS" ||
      item.entprodtypcde === "VPT" ||
      item.entprodtypcde === "VPS" ||
      item.entprodtypcde === "VPC" ||
      item.entprodtypcde === "VGT" ||
      item.entprodtypcde === "VGS"
    ) {
      logo = PngLocations.PDR_VP;
    } else if (
      item.entProdTypCde === "VCL" ||
      item.entProdTypCde === "VCT" ||
      item.entProdTypCde == "VCS"  ||
      item.entprodtypcde === "VCL" ||
      item.entprodtypcde === "VCT" ||
      item.entprodtypcde == "VCS" 
      // ||
      // item.entProdTypCde == "VLL"
    ) {
      logo = PngLocations.PDR_VCL;
    } else if (item.entProdTypCde == "VLL" || item.entprodtypcde == "VLL") {
      logo = PngLocations.PDR_VLL;
    } else if (item.entProdTypCde === "MAW" || item.entprodtypcde === "MAW") {
      logo = PngLocations.SABB_World;
    } else if (item.entProdTypCde === "MFP" || item.entprodtypcde === "MFP") {
      logo = PngLocations.AlFurasan;
    } else if (item.entProdTypCde === "MQP" || item.entprodtypcde === "MQP") {
      logo = PngLocations.Qitaf;
    } else if (item.entProdTypCde === "VCH" || item.entprodtypcde === "VCH") {
      logo = vchartwork == "Y" ? PngLocations.cashbackcardNew : PngLocations.cashbackcard;
    } else if (item.entProdTypCde === "UMC" || item.entprodtypcde === "UMC") {
      logo =  PngLocations.umalatyCards 
    } 
    // else {
    //   logo = PngLocations.worldelite01;
    // }
    return logo;
  },

  getVirtualCardlogo: (segment) => {
    let logo = "";

    if (segment?.toUpperCase() === "PREMIER") {
      logo = PngLocations.Premier_front;
    } else if (segment?.toUpperCase() === "ADVANCE") {
      logo = PngLocations.Advance_front;
    } else if (segment?.toUpperCase() === "PRIVATE") {
      logo = PngLocations.Private_front_v2;
    } else if (segment?.toUpperCase() === "MASS") {
      logo = PngLocations.Generic_front;
    } else if (segment?.toUpperCase() === "RUWAD") {
      logo = PngLocations.Al_Rowad_front;
    } else if (segment?.toUpperCase() === "SALARY") {
      logo = PngLocations.Salary_front;
    } else {
      logo = PngLocations.Generic_front;
    }

    return logo;
  },

  getVirtualCardbacklogo: (segment) => {
    let logo1 = "";

    if (segment?.toUpperCase() === "PREMIER") {
      logo1 = PngLocations.Premier_back;
    } else if (segment?.toUpperCase() === "ADVANCE") {
      logo1 = PngLocations.Advance_back;
    } else if (segment?.toUpperCase() === "PRIVATE") {
      logo1 = PngLocations.Private_back_v2;
    } else if (segment?.toUpperCase() === "MASS") {
      logo1 = PngLocations.Generic_back;
    } else if (segment?.toUpperCase() === "RUWAD") {
      logo1 = PngLocations.Al_Rowad_back;
    } else if (segment?.toUpperCase() === "SALARY") {
      logo1 = PngLocations.Salary_back;
    } else {
      logo1 = PngLocations.Generic_back;
    }

    return logo1;
  },

  getRMCardImage : (segment) => {
    console.log("Segment", segment);
    let logo = "";

    if(segment?.toUpperCase() === "PREMIER") {
      logo = PngLocations.Premier_RM;
    } else if(segment?.toUpperCase() === "ADVANCE") {
      logo = PngLocations.Advance_RM;
    } else if(segment?.toUpperCase() === "PRIVATE") {
      logo = PngLocations.Private_RM;
    } else if(segment?.toUpperCase() === "MASS") {
      logo = PngLocations.MASS_RM;
    } else {
      logo = PngLocations.MASS_RM;
    }

    return logo;
  },

  getApplePayImage: (segment) => {
    let logo = "";

    if (segment?.toUpperCase() === "PREMIER") {
      logo = PngLocations.Premier;
    } else if (segment?.toUpperCase() === "ADVANCE") {
      logo = PngLocations.Advance;
    } else if (segment?.toUpperCase() === "PRIVATE") {
      logo = PngLocations.PrivateBanking;
    } else if (segment?.toUpperCase() === "MASS") {
      logo = PngLocations.Mass;
    } else if (segment?.toUpperCase() === "RUWAD") {
      logo = PngLocations.Ruawd;
    } else {
      logo = PngLocations.Mass;
    }

    return logo;
  },

  getApplePayCreditcardImage: (item) => {
    let vchartwork = store.getState().commonReducer.loginData.vchartworkenabled;
    console.log("vchartwork--->>", vchartwork);
    let logo = "";

    if (item.product.productType.code === "MPT") {
      logo = PngLocations.worldelite01;
    } else if (
      item.product.productType.code === "MPA" ||
      item.product.productType.code === "MGP"
    ) {
      logo = PngLocations.World01;
    } else if (item.product.productType.code === "VTA") {
      logo = PngLocations.PDR_VTA;
    } else if (item.product.productType.code === "VAG") {
      logo = PngLocations.PDR_VAG;
    } else if (item.product.productType.code === "VEG") {
      logo = PngLocations.PDR_VEG;
    } else if (
      item.product.productType.code === "MGT" ||
      item.product.productType.code === "MGS"
    ) {
      logo = PngLocations.Platinum01;
    } else if (
      item.product.productType.code === "MCL" ||
      item.product.productType.code === "MCS" ||
      item.product.productType.code === "MCT"
    ) {
      logo = PngLocations.titanium01;
    } else if (
      item.product.productType.code === "VPT" ||
      item.product.productType.code === "VPS" ||
      item.product.productType.code === "VPC" ||
      item.product.productType.code === "VGT" ||
      item.product.productType.code === "VGS"
    ) {
      logo = PngLocations.PDR_VP;
    } else if (
      item.product.productType.code === "VCL" ||
      item.product.productType.code === "VCS" ||
      // item.product.productType.code === "VLL" ||
      item.product.productType.code === "VCT"
    ) {
      logo = PngLocations.PDR_VCL;
    } else if (item.product.productType.code == "VLL") {
      logo = PngLocations.PDR_VLL;
    } else if (item.product.productType.code === "MAW") {
      logo = PngLocations.SABB_World;
    } else if (item.product.productType.code === "MFP") {
      logo = PngLocations.AlFurasan;
    } else if (item.product.productType.code === "MQP") {
      logo = PngLocations.Qitaf;
    } else if (item.product.productType.code === "VCH"){
      logo = vchartwork == "Y" ? PngLocations.cashbackcardNew : PngLocations.cashbackcard;
    } 
    // else {
    //   logo = PngLocations.worldelite01;
    // }
    return logo;
  },

  getCreditcardStatus: (code) => {
    switch (code) {
      case "ALL":
        return i18n.t("MyAccounts:filter.allnew");
      case "U":
        return i18n.t("MyAccounts:filter.unbilled");
      case "L":
        return i18n.t("MyAccounts:filter.billed");
      case "P":
        return i18n.t("MyAccounts:filter.pending");
    }
  },
  spinnerEvent: (callback) => {
    return new Promise((resolve, reject) => {
      if (Platform.OS === "ios") {
        setTimeout(() => {
          callback();
          // console.log('Inside SetTimeOut')
          resolve(true);
        }, 1000);
      } else {
        callback();
        resolve(true);
      }
    });
  },
  delayEvent: (callback, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        callback();
        // console.log('Inside SetTimeOut')
        resolve(true);
      }, timeout);
    });
  },

  getSegmentMapping: () => {
    let loginData = store.getState().commonReducer.loginData;

    // let isStaff = loginData.userLoginProfile.isStaff;
    let kycbanner = loginData.userLoginProfile?.kycbanner;

    let segment = loginData.userLoginProfile?.segment;

    let stfacc = "";
    if (kycbanner != "" && kycbanner != null && kycbanner != undefined) {
      try {
        stfacc = kycbanner.slice(30, 31);
      } catch (e) {
        stfacc = "";
      }
    } else {
      stfacc = "";
    }

    let isStaff = "";
    if (stfacc === "S") {
      isStaff = "true";
    } else {
      isStaff = "false";
    }

    if (segment !== null && segment !== "" && segment !== undefined) {
      segment = segment;
    } else {
      segment = "PREMIER";
    }

    var value = "";
    if (segment?.toUpperCase() == "PREMIER") {
      value = "G";
    } else if (segment?.toUpperCase() == "ADVANCE") {
      value = "Z";
    } else if (segment?.toUpperCase() == "PRIVATE") {
      value = "P";
    } else if (segment?.toUpperCase() == "RUWAD") {
      value = "R";
    } else if (segment?.toUpperCase() == "MASS") {
      value = "R";
    } else {
      value = "R";
    }
    if (isStaff === "true") {
      value = value + "1";
    } else {
      value = value + "0";
    }
    return value;
  },

  getSegmentCode: () => {
    let loginData = store.getState().commonReducer.loginData;

    let segment = loginData.userLoginProfile.segment;

    if (segment !== null && segment !== "" && segment !== undefined) {
      segment = segment;
    } else {
      segment = "PREMIER";
    }

    var value = "";
    if (segment?.toUpperCase() == "PREMIER") {
      value = "G";
    } else if (segment?.toUpperCase() == "ADVANCE") {
      value = "Z";
    } else if (segment?.toUpperCase() == "PRIVATE") {
      value = "P";
    } else if (segment?.toUpperCase() == "RUWAD") {
      value = "R";
    } else if (segment?.toUpperCase() == "MASS") {
      value = "R";
    } else {
      value = "R";
    }
    return value;
  },
  getDateTimeNow: () => {
    var dte = new Date();
    var d = dte.getDate();
    var m = dte.getMonth();
    var y = dte.getYear();
    var h = dte.getHours();
    var mm = dte.getMinutes();
    var s = dte.getSeconds();
    if (d < 10) d = "0" + d;

    m = m + 1;
    if (m < 10) m = "0" + m;
    else m = m + "";

    y = y + 1900;

    var formatdate = y + "-" + m + "-" + d + "T" + h + ":" + mm + ":" + s;
    return formatdate;
  },

  getUMCStatusName: (status) => {
    var statusname = i18n.t("Umlaty:Umlaty.success.inact");
    switch (status) {
      case "20":
        statusname = i18n.t("Umlaty:Umlaty.success.cardunder");
        break;
      case "30":
        statusname = i18n.t("Umlaty:Umlaty.success.pendingactivation");
        break;
      case "06":
        statusname = i18n.t("Umlaty:Umlaty.success.cardblocktemp");
        break;
      case "00":
        statusname = i18n.t("Umlaty:Umlaty.success.act");
        break;

      default:
        statusname = i18n.t("Umlaty:Umlaty.success.inact");
    }
    return statusname;
  },
  customDateFormater: (param1, param2) => {
    if (!param1) {
      return ""; // Return an empty string if the date is undefined or empty
    }
    var dateval = param1.substring(0, 10);
    var retDate = "";
    var mon = "";
    var ter = "";
    if ("YYYY-MM-DD" == param2) {
      var arr = dateval.split("-");
      retDate = arr[2] + "/" + arr[1] + "/" + arr[0];
    }
    return retDate;
  },
  getDateYearMonthDate: () => {
    var dte = new Date();
    var d = dte.getDate();
    var m = dte.getMonth();
    var y = dte.getYear();

    if (d < 10) d = "0" + d;

    m = m + 1;
    if (m < 10) m = "0" + m;
    else m = m + "";

    y = y + 1900;

    var formatdate = y + "-" + m + "-" + d;
    return formatdate;
  },
  getSegmentCodeV2: (segment) => {
    var value = "";
    if (segment?.toUpperCase() == "PREMIER") {
      value = "G";
    } else if (segment?.toUpperCase() == "ADVANCE") {
      value = "Z";
    } else if (segment?.toUpperCase() == "PRIVATE") {
      value = "P";
    } else if (segment?.toUpperCase() == "RUWAD") {
      value = "R";
    } else if (segment?.toUpperCase() == "MASS") {
      value = "R";
    } else if (segment?.toUpperCase() == "RETAIL") {
      value = "R";
    } else {
      // value = "R";
      value = "G";
    }
    console.log("segment...", segment);
    return value;
  },
  getSegmentColorsAndImage: (arg) => {
    let obj = {
      png: "",
      dashboardHeader: "",
      color: "",
      logo: "",
      gradient: "",
    };
    switch (arg) {
      case "G": //PREMIER - Blue - Venetian Red
        obj.png = PngLocations.menuHeader2;
        obj.dashboardHeader = PngLocations.DashboardHeader2;
        obj.color = "#5e0014";
        obj.logo = PngLocations.premier_new;
        obj.gradient = "rgba(115, 0, 20, 1)";

        break;

      case "Z": //ADVANCE - Brown
        obj.png = PngLocations.menuHeader2;
        obj.dashboardHeader = PngLocations.DashboardHeader2;
        obj.color = "#5e0014";
        obj.logo = PngLocations.advance_new;
        obj.gradient = "rgba(255,255,255,0.25)";

        break;

      case "R": //RUWAD/MASS/RETAIL - gray
        obj.png = PngLocations.menuHeader1;
        obj.dashboardHeader = PngLocations.DashboardHeader1;
        obj.color = "#7c7c7c"; //gray
        obj.logo = PngLocations.other_new;
        obj.gradient = "rgba(255,255,255,0.165)";
        break;

      case "P": //PRIVATE - gray
        obj.png = PngLocations.Header4;
        obj.dashboardHeader = PngLocations.DashboardHeader3;
        obj.color = "#2b2a2a";
        // obj.png = PngLocations.Header1;
        // obj.color = "#35444f"; //gray
        obj.logo = PngLocations.private_new;
        obj.gradient = "rgba(255,255,255,0.22)";

        break;

      ////

      default:
        obj.png = PngLocations.menuHeader1;
        obj.dashboardHeader = PngLocations.DashboardHeader1;
        obj.color = "#7c7c7c";
        obj.logo = PngLocations.premier_new;
        obj.gradient = "rgba(255,255,255,0.22)";
    }

    return obj;
  },
  convertNumbers2English: (string) => {
    return string
      .replace(/[\u0660-\u0669]/g, function (c) {
        //for numbers
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(/[\u06f0-\u06f9]/g, function (c) {
        //for numbers
        return c.charCodeAt(0) - 0x06f0;
      })
      .replace(/[\u066b]/g, function (c) {
        // for dot
        return ".";
      });
  },
  getApplePayWalletAddCardName: (item) => {
    if (item.acctStatus == "1") {
      if (item.product.productType.categorycode == "CCA") {
        var accountNumberMasked = item.accountNumberMasked;
        return (accountNumberMasked = accountNumberMasked.replace(/-/g, " "));
      }
    }

    if (item.cardType == "O" || item.cardType == "U") {
      if (item.madaCard == "mada") {
        return item.accountnumber.replace(/-/g, " ");
      }
    }
  },

  getExpiryDate: (data) => {
    var expirydate;
    //console.log("data---->", data);
    if (data.madaCard == "mada") {
      expirydate = data.expdate;
      var expdate = "";
      if (expirydate) {
        var yrval = expirydate.substring(2, 4);
        var monval = expirydate.substring(5, 7);
        expdate = monval + "" + yrval;
      }
      return expdate;
    } else {
      expirydate = data.expirydate;
      var expdate = "";
      if (expirydate) {
        var yrval = expirydate.substring(2, 4);
        var monval = expirydate.substring(5, 7);
        var expdate = monval + "" + yrval;
      }
      return expdate;
    }
  },

  getCardHolderName: (data) => {
    if (data.madaCard == "mada") {
      return store.getState().commonReducer.loginData?.userLoginProfile?.userProfile?.firstName || '';
    } else {
      return data.cardholdername;
    }
  },

  getCreditCardLogo: (productType) => {
    let vchartwork = store.getState().commonReducer.loginData.vchartworkenabled;
    console.log("vchartwork--->>", vchartwork);
    switch (productType) {
        case "MAW":
            return PngLocations.CC_MASTERCARD_WORLD;
        case "MCT":
            return PngLocations.CC_MASTERCARD_TITANIUM;
        case "MFP":
            return PngLocations.CC_MASTER_PLATINUM_FURSAN;
        case "MGT":
            return PngLocations.CC_MASTERCARD_PLATINUM;
        case "MPA":
            return PngLocations.CC_MC_PREMIER_CREDIT;
        case "MQP":
            return PngLocations.CC_MASTERCARD_QITAF_PLATINUM;
        case "VEG":
            return PngLocations.CC_VISA_SIGNATURE_EK;
        case "VAG":
            return PngLocations.CC_VISA_SIGNATURE;
        case "VGT":
            return PngLocations.CC_VISA_PLATINUM;
        case "VPT":
            return PngLocations.CC_VISA_PLATINUM_VPT;
        case "VTA":
            return PngLocations.CC_VISA_ADVANCE_PLATINUM;
        case "VCT":
            return PngLocations.CC_VISA_CLASSIC;
	      case "VCH":
            return vchartwork == "Y" ? PngLocations.CC_CASHBACKNew : PngLocations.CC_CASHBACK;
        default:
            return "";
    }
  },

getPushNotificationMenuDetails : (value) => {
  let isMatchFound = false
  let menuList = ["My_PRD", "My_DIG_DOC", "NEW_SAV", "NEW_CURR", "NEW_AIC", "NEW_WAF",
                  "NEW_REL_DET", "ACC_INFO", "BAK_ESTAE", "ACC_CUST", "BILL_PAY", "MAKE_TRANS", 
                  "ADD_BENE", "TRANS_HIST", "MAN_ONLINE", "MAN_QUICK", "TRANS_INST", "IPO", 
                  "CARD_SERV", "AQSAT", "SUPP_CARD", "ISSUE_VIRT", "UML_CAD", "ICSABB", 
                  "UPDATE_CONTACT", "ABS_REG", "SIM_REG", "CHN_USER", "LOG_DSK", "LOG_TFID", 
                  "LOG_MPIN", "FAQ", "MESSAGE","SAB_DASHBD","SAB_STORE","SAB_NEWCC","SAB_NEWHF","SAB_FINTOPUP"]

  let menuData = Object.values(menuList)
      menuData.forEach(item => {
        if (item === value) {
          isMatchFound = true;
          }})
  return isMatchFound
},


  porfolioColor: (index) => {
    if (index % 2 == 0) {
      return 'white'
     } else {
      return '#f6f7fb'
    }
  },
  getCheckSumHash: async function (plainText) {
    let checkType="sha512"; //put sha512 for sha512 hansing
    let hashing = "";
    let PlatformCheck = Platform.OS === 'ios' ? NativeModules.RNPinningSsl.Sha512(plainText) : sha512(plainText)
    if(checkType == "sha512"){
      await PlatformCheck.then( hash => {
        console.log("hash com 4", hash)

        //SERVER CHECK FAILED FIXED
        while(hash.length < 128){
          hash ="0"+hash;
        }
        hashing= hash;
      });
      return hashing;
    }else{
      hashing = CryptoJS.MD5(plainText);
      return hashing;
    };
  },

  resetSummaryApi: () =>{
    store.dispatch(setPerformanceApiStatus({
      apiEndPoint: 'summary',
      apiStatusDetails: {
        status: 'idle',
        required: true,
      },
    }))
  },

  getDateTimeFormat: (value) => {
    var formatdate = moment(value).format('Do MMMM YYYY, h:mm a');
    return formatdate;
  },

  getGVStatusName: (status) => {
    var statusname = i18n.t("GlobalView:field.closed");
    switch (status) {
      case "1":
        statusname =i18n.t("Umlaty:Umlaty.success.act");
        break;
      case "2":
        statusname = i18n.t("Dashboard:landing.dormant");
        break;
      case "3":
        statusname = i18n.t("Dashboard:landing.unclaim");
        break;
      case "4":
        statusname = i18n.t("GlobalView:field.closing");
        break;
      case "5":
         statusname = i18n.t("GlobalView:field.closed");
         break;

      default:
        statusname = i18n.t("GlobalView:field.closed");
    }
    return statusname;
  },

  getGVBGColor: (theme , status) => {
    var bgcolor = theme.inActiveBackground;
    switch (status) {
      case "1":
        bgcolor = theme.labelSuccess;
        break;
      case "2":
        bgcolor = theme.pendingColor;
        break;
      case "3":
        bgcolor = theme.inActiveBackground;
        break;
      case "4":
        bgcolor = theme.inActiveBackground;
        break;
      case "5":
        bgcolor = theme.inActiveBackground;
         break;

      default:
        bgcolor = theme.inActiveBackground;
    }
    return bgcolor;
  },

  getGVTextColor: (theme , status) => {
    var textcolor = theme.tabActive;
    switch (status) {
      case "1":
        textcolor = theme.labelSuccessText;
        break;
      case "2":
        textcolor = theme.goldColor;
        break;
      case "3":
        textcolor = theme.tabActive;
        break;
      case "4":
        textcolor = theme.tabActive;
        break;
      case "5":
        textcolor = theme.tabActive;
         break;

      default:
        textcolor = theme.tabActive;
    }
    return textcolor;
  },
  // for DropdownDescription
  CommondropdownDecodeFun:(array , value)=> {
    console.log("array>>>>>!23",array)
  
      let idType =array
      // Iterate over the idType array
      for (let i = 0; i < idType.length; i++) {
        if (idType[i].paramCode === value) {
          return idType[i].paramDescription;
        }
      }
      return value;
    },
  getCountry : (code) => {
    switch (code) {
      case "AE":
        return I18nManager.isRTL ? "الإمارات العربية المتحدة" : "United Arab Emirates";
      case "AU":
        return I18nManager.isRTL ? "استراليا" : "Australia";
      case "BH":
        return I18nManager.isRTL ? "البحرين" : "Bahrain";
      case "BM":
        return I18nManager.isRTL ? "برمودا" : "Bermuda";
      case "CA":
        return I18nManager.isRTL ? "كندا" : "Canada";
      case "CN":
        return I18nManager.isRTL ? "الصين" : "China";
      case "EG":
        return I18nManager.isRTL ? "مصر" : "Egypt";
      case "FR":
        return I18nManager.isRTL ? "فرنسا" : "France";
      case "GB":
        return I18nManager.isRTL ? "المملكة المتحدة" : "United Kingdom"; //**
      case "GR":
        return I18nManager.isRTL ? "اليونان" : "Greece";
      case "HK":
        return I18nManager.isRTL ? "هونغ كونغ" : "Hong Kong";
      case "ID":
        return I18nManager.isRTL ? "اندونيسيا" : "Indonesia";
      case "IN":
        return I18nManager.isRTL ? "الهند" : "India";
      case "J3":
        return I18nManager.isRTL ? "جزر القنال، جيرسي" : "Jersey";
      case "JE":
        return I18nManager.isRTL ? "جزر القنال، جيرسي" : "Jersey";
      case "LK":
        return I18nManager.isRTL ? "سريلانكا" : "Sri Lanka";
      case "MT":
        return I18nManager.isRTL ? "مالطة" : "Malta";
      case "MX":
        return I18nManager.isRTL ? "المكسيك" : "Mexico";
      case "MY":
        return I18nManager.isRTL ? "ماليزيا" : "Malaysia";
      case "NZ":
        return I18nManager.isRTL ? "نيوزلندا" : "New Zealand";
      case "OM":
        return I18nManager.isRTL ? "عمان" : "Oman";
      case "PH":
        return I18nManager.isRTL ? "الفلبين" : "Philippines";
      case "QA":
        return I18nManager.isRTL ? "قطر" : "Qatar";
      case "SG":
        return I18nManager.isRTL ? "سنغافورة" : "Singapore";
      case "TW":
        return I18nManager.isRTL ? "تايوان" : "Taiwan";
      case "UK":
        return I18nManager.isRTL ? "المملكة المتحدة" : "United Kingdom";
      case "US":
        return I18nManager.isRTL ? "الولايات المتحده الاميركية" : "United States";
      case "VN":
        return I18nManager.isRTL ? "فيتنام" : "Vietnam";
      default:
        return null
    }
  },

  resetMoicountApi: () =>{
    store.dispatch(setPerformanceApiStatus({
      apiEndPoint: 'moicount',
      apiStatusDetails: {
        status: 'idle',
        required: true,
      },
    }))
  },

  getNewDateYearMonthDate: () => {
    const currentMoment = moment();
    const gregorianMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const gregorianMonthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

    returnvalue = `${currentMoment.format('DD')} ${I18nManager.isRTL ? gregorianMonthsAr[currentMoment.month()] : gregorianMonths[currentMoment.month()]} ${currentMoment.format('YYYY')}`;
    // console.log("currentMoment.............", returnvalue);
    return returnvalue;

  },
  resetsadadAgregatorApi: () =>{
    store.dispatch(setPerformanceApiStatus({
      apiEndPoint: 'sadadAgregator',
      apiStatusDetails: {
        status: 'idle',
        required: true,
      },
    }))
 },

  isWhitelisted :(userKey)=> {

    let loginData = store.getState().commonReducer?.loginData;

   let apiKeys = {
    p1whitelisting: loginData.p1whitelisting,
    p2whitelisting: loginData.p2whitelisting,
    p3whitelisting: loginData.p3whitelisting,
    p4whitelisting: loginData.p4whitelisting,
    // p1whitelisting: "Y~SSO",
    // p2whitelisting: "N~CHG_PASS",
    // p3whitelisting: "N~SAD_AGG",
    // p4whitelisting: "N~SPLIT_PAY",
  };

    try {
      const selectedKey = userKey.toUpperCase();
      
      const matchingKey = Object.keys(apiKeys).find((key) => {
        return apiKeys[key].endsWith(`~${selectedKey}`);
      });
  
      if (matchingKey) {
        const value = apiKeys[matchingKey].split('~')[0];
        return value === 'Y';
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking key:', error);
      return false;
    }
  },
  getSabPayCards : (productType) => {
    let vchartwork = store.getState().commonReducer.loginData.vchartworkenabled;
    console.log("vchartwork--->>", vchartwork);
    switch (productType) {
      case "VPT":
        return PngLocations.PDR_VP;
      case "VCH":
        return vchartwork == "Y" ? PngLocations.CC_CASHBACKNew : PngLocations.CC_CASHBACK;
      case "VCS":
        return PngLocations.PDR_VCL;
      case "VAG":
        return PngLocations.CC_VISA_SIGNATURE;
      case "VEG":
        return PngLocations.CC_VISA_SIGNATURE_EK;
      //Visa Debit
      case "ADV":
        return PngLocations.Advance;
      case "PRM":
        return PngLocations.Premier;
      case "PBN":
        return PngLocations.PrivateBanking;
      case "RWD":
        return PngLocations.Ruawd;
      case "MAS":
        return PngLocations.Mass;
      case "PMC":
        return PngLocations.UmlatyCardNew;
      case "PPC":
        return PngLocations.PPC_card;
      case "MGT":
        return PngLocations.CC_MASTERCARD_PLATINUM;
      case "MPA":
        return PngLocations.CC_MC_PREMIER_CREDIT;
      case "MPT":
        return PngLocations.MP_Elite; //SABB_World
      case "MCB":
        return PngLocations.MC_Business; //missing
      case "MCT":
        return PngLocations.CC_MASTERCARD_TITANIUM;
      case "MAW":
        return PngLocations.CC_MASTERCARD_WORLD;
      case "MFP":
        return PngLocations.CC_MASTER_PLATINUM_FURSAN;
      case "MQP":
        return PngLocations.CC_MASTERCARD_QITAF_PLATINUM;
      case "VLL":
          return PngLocations.PDR_VLL;
      default:
        return PngLocations.CC_VISA_SIGNATURE;
    }
  },

  getSDKError : (error)=>{
    let errordesc ;

    if(error === "SDK_NOT_INITIALIZED" || error === "SDK not initialized"){
      errordesc = i18n.t("SabPay:Container.sdknot")
    }
    else if(error === "DEVICE_NOT_REGISTERED"){
      errordesc = i18n.t("SabPay:Container.notregistered")
    }
    else if(error === "INVALID_CARD_ID"){
      errordesc = i18n.t("SabPay:Container.invalidcard")
    }
    else if(error === "USER_AUTHENTICATION_TIMEOUT"){
      errordesc = i18n.t("SabPay:Container.timeout")
    }
    else if(error === "DEVICE_LOCK_NOT_SET"){
      errordesc = i18n.t("SabPay:Container.devicelock")
    }
    else if(error === "CARD_ALREADY_PROVISIONED"){
      errordesc = i18n.t("SabPay:Container.Note5")
    }
    else if(error === "INVALID_CARD_DETAILS"){
      errordesc = i18n.t("SabPay:Container.InvalidCardDetails")
    }
    else if(error === "SYSTEM_ERROR"){
      errordesc = i18n.t("SabPay:Container.systemerror")
    }
    else if(error === "CARD_VERIFICATION_FAILED"){
      errordesc = i18n.t("SabPay:Container.verify")
    }
    else if(error === "CARD_NOT_ELIGIBLE"){
      errordesc = i18n.t("SabPay:Container.notEligible")
    }
    else if(error === "CARD_NOT_SELECTED_FOR_PAYMENT"){
      errordesc = i18n.t("SabPay:Container.cardnotselected")
    }
    else if(error === "CARD_SUSPENDED"){
      errordesc = i18n.t("SabPay:Container.suspended")
    }
    else if(error === "DEVICE_LOCKED"){
      errordesc = i18n.t("SabPay:Container.systemerror")
    }
    else if(error === "DEVICE_ROOTED"){
      errordesc = i18n.t("SabPay:Container.rooted")
    }
    else if(error === "APP_HOOKED"){
      errordesc = i18n.t("SabPay:Container.hooked")
    }
    else if(error === "NFC_NOT_SUPPORTED"){
      errordesc = i18n.t("SabPay:Container.nfcnot")
    }
    else if(error === "INVALID_OTP"){
      errordesc = i18n.t("SabPay:Container.invalidOTP")
    }
    else if(error === "PAYMENT_ABORTED"){
      errordesc = i18n.t("SabPay:Container.systemerror")
    }
    else if(error === "TOKEN_REQUIRES_REPLENISH"){
      errordesc = i18n.t("SabPay:Container.tokenreplenish")
    }
    else if(error === "CONNECTION_UNAVAILABLE"){
      errordesc = i18n.t("Login:Login.failure.network")
    }
    else{
      errordesc =  i18n.t("SabPay:Container.systemerror") //default
    }
    return errordesc;
  },
  getDateTimePay: (value) => {
    const formattedDate = moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('DD/MM/YYYY'); // , h:mm a'
    return formattedDate;
  }
};

export default CommonHelper;
