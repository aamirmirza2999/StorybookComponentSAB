import React from 'react';
import { actuatedNormalize } from './PixelScaling';
import { useTheme } from "../constants/Theme/ThemeProvider";
import { AddBene, BackArrowNew, ChangeLang,ChangeLangDark, CloseIconNew,LiveChat,AccountAction,RightArrow ,InfoIconRed,WhiteInfo,
  BlackArrow,Close,SearchIcon,NotificationIcon,AvatarIconblack,HelpIcon,SearchIconDark,
  NotificationIconDark,AvatarIconDark} from './SvgLocations';



const SvgIconList = ({ icon, width, height  ,transform}) => {
  const { theme, toggleTheme,isDarkMode } = useTheme();

  switch (icon) {
    case 'backIcon':
      return (
        <BackArrowNew
          width={width}
          height={height}
          transform={transform}
        />
      );
      case 'closeIcon':
        return (
          <CloseIconNew
            width={width}
            height={height}
          />
        );
      case 'AddBene':
        return (
          <AddBene
            width={width}
            height={height}
          />
        );
        case 'Iconright':
          return (
            <RightArrow
              width={width}
              height={height}
            />
          );
      case 'ChangeLang':
        return (
          isDarkMode?
          <ChangeLangDark
          width={width}
          height={height}/>
          :

          <ChangeLang
            width={width}
            height={height}
          />
        );
        case 'AccountAction':
          return (
            <AccountAction
              width={width}
              height={height}

            />
          );
          case 'InfoIconRed':
          return (
            <InfoIconRed
              width={width}
              height={height}

            />
          );
          case 'LiveChat':
          return (
            <LiveChat
              width={width}
              height={height}

            />
          );
          case 'WhiteInfo':
          return (
            <WhiteInfo
              width={width}
              height={height}

            />
          );
          case 'BlackArrow':
          return (
            <BlackArrow
              width={width}
              height={height}

            />
          );
          case 'BlackClose':
          return (
            <Close
              width={width}
              height={height}

            />
          );
          case 'SearchIcon':
            return (
              isDarkMode?
              <SearchIconDark
                width={width}
                height={height}
  
              />
              :
              <SearchIcon
              width={width}
              height={height}

            />

            );
            case 'NotificationIcon':
              return (
                isDarkMode?
                <NotificationIconDark
                width={width}
                height={height}
                />
                :
                <NotificationIcon
                  width={width}
                  height={height}
    
                />
              );
              case 'AvatarIconblack':
                return (
                  isDarkMode?
                  <AvatarIconDark
                  width={width}
                  height={height}
                  />
                  :

                  <AvatarIconblack
                    width={width}
                    height={height}
      
                  />
                );
                case 'HelpIcon':
                  return (
                    <HelpIcon
                      width={width}
                      height={height}
        
                    />
                  );
    default:
      return null;
  }
};

export default SvgIconList;
