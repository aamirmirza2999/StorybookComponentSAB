import React from 'react';
import { actuatedNormalize } from './PixelScaling';
import { useTheme } from "../constants/Theme/ThemeProvider";
import { AddBene, BackArrowNew, ChangeLang,ChangeLangDark, CloseIconNew,LiveChat,AccountAction,RightArrow ,InfoIconRed,WhiteInfo,
  BlackArrow,WhiteArrow,Close,SearchIcon,NotificationIcon,AvatarIconblack,HelpIcon,SearchIconDark,
  AvatarIconDark, AccountActionDark, Home, HomeDark, DarkIconList,Blockcard,Blockgenericred,BlackRightarrow,Lightmyacounts,Lightright, Whitecard, Whiterightarrow} from './SvgLocations';



const SvgIconList = ({ icon, width, height  ,transform,fill}) => {
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
            transform={transform}
          />
        );
      case 'AddBene':
        return (
          <AddBene
            width={width}
            height={height}
            transform={transform}
          />
        );
        case 'Iconright':
          return (
            <RightArrow
              width={width}
              height={height}
              transform={transform}
            />
          );
      case 'ChangeLang':
        return (
          isDarkMode?
          <ChangeLangDark
          width={width}
          height={height}
          transform={transform}/>
          :

          <ChangeLang
            width={width}
            height={height}
            transform={transform}
          />
        );
        case 'AccountAction':
          return (
            isDarkMode?<AccountActionDark
            width={24}
            height={24}
            transform={transform}
            />:
            <AccountAction
              width={width}
              height={height}
              transform={transform}

            />
          );
          case 'InfoIconRed':
          return (
            <InfoIconRed
              width={width}
              height={height}
              transform={transform}

            />
          );
          case 'Home':
            return (
              isDarkMode?<DarkIconList
              width={width}
              height={height}
              transform={transform}
              />:
              <Home
                width={width}
                height={height}
                transform={transform}
  
              />
            );
          case 'LiveChat':
          return (
            <LiveChat
              width={width}
              height={height}
              transform={transform}

            />
          );
          case 'WhiteInfo':
          return (
            <WhiteInfo
              width={width}
              height={height}
              transform={transform}

            />
          );
          case 'BlackArrow':
          return (
            isDarkMode?
            <WhiteArrow
            width={width}
            height={height}
            transform={transform}
            />:
            <BlackArrow
              width={width}
              height={height}
              transform={transform}

            />
          );
          case 'BlackClose':
          return (
            isDarkMode?
            <CloseIconNew
            width={width}
            height={height}
            transform={transform}
          />:
            <Close
              width={width}
              height={height}
              transform={transform}

            />
          );
          case 'SearchIcon':
            return (
              isDarkMode?
              <SearchIconDark
                width={width}
                height={height}
                transform={transform}
  
              />
              :
              <SearchIcon
              width={width}
              height={height}
              transform={transform}

            />

            );
            case 'NotificationIcon':
              return (
               
                <NotificationIcon
                  width={width}
                  height={height}
                  fill={fill}
                  transform={transform}
    
                />
              );
              case 'AvatarIconblack':
                return (
                  isDarkMode?
                  <AvatarIconDark
                  width={width}
                  height={height}
                  transform={transform}
                  />
                  :

                  <AvatarIconblack
                    width={width}
                    height={height}
                    transform={transform}
      
                  />
                );
                case 'HelpIcon':
                  return (
                    <HelpIcon
                      width={width}
                      height={height}
                      transform={transform}
        
                    />
                  );

                case 'BlockCard':
                  return (
                    <Blockcard
                      width={width}
                      height={height}     
                      transform={transform}   
                    />
                  );
                case 'Whitecard':
                  return (
                    <Whitecard
                      width={width}
                      height={height}  
                      transform={transform}      
                    />
                  );
                case 'Blockgenericred':
                  return (
                    <Blockgenericred
                      width={width}
                      height={height}
                      transform={transform}
                    />
                  );
                case 'BlackRightarrow':
                  return (
                    <BlackRightarrow
                      width={width}
                      height={height}
                      transform={transform}
                    />
                  );
                case 'Lightmyacounts':
                  return (
                    <Lightmyacounts
                      width={width}
                      height={height}
                      transform={transform}
                    />
                  );
                case 'Lightright':
                  return (
                    <Lightright
                      width={width}
                      height={height}
                      transform={transform}
                    />
                  );
                
    default:
      return null;
  }
};

export default SvgIconList;
