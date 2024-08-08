import React from 'react';
import { actuatedNormalize } from './PixelScaling';
import { AddBene, BackArrowNew, ChangeLang, CloseIconNew,LiveChat,AccountAction,RightArrow ,InfoIconRed,WhiteInfo} from './SvgLocations';

const SvgIconList = ({ icon, width, height  ,transform}) => {
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
          <ChangeLang
          fill={"black"}
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
    default:
      return null;
  }
};

export default SvgIconList;
