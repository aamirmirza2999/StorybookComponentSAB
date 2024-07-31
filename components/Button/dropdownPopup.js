import React, { Component, createRef } from 'react';
import {
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet,
  I18nManager,
  FlatList,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../constants/Fonts';
import TextComponent from './TextComponent';
//import SearchBarComponent from '../../components/common/SearchBarComponent';
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '../../constants/PixelScaling';
import RBSheet from "react-native-raw-bottom-sheet";


let IosSpecific = Platform.OS === 'ios' ?0 : 0;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height - IosSpecific;
const firstOff =
    Number(deviceHeight / 2 + deviceHeight / 43) ;
const margin = Number(firstOff / 4.25);
let IosSpecific1 =
    Platform.OS === 'ios' ? 70 : 70;
const deviceHeight1 =
    (Dimensions.get('window').height ) * 0.7 - IosSpecific1;

class dropdownPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      searchText:'',
      searchResult:undefined
    };
  }
  componentDidMount() {


    this.RBSheetModal?.open();
    this.setState({
      searchResult : this.props.options
    })
  }

  filterCallBack = (value) => {

    let sourceSearchList = this.props.options

    if (value != undefined || value != '') {
      let result = [];
      for (let i = 0; i < sourceSearchList.length; i++) {
        if (
            sourceSearchList[i].label.toLowerCase().indexOf(value.toLowerCase()) !== -1
        ) {
          result.push(sourceSearchList[i]);
        }
      }

      sourceSearchList = result;
    }

    this.setState({
      searchText : value,
      searchResult : sourceSearchList
    })
  };

  render() {
    console.log("Select Popup Options>>>>",this.props)
    return (
        <>

          <RBSheet
              ref={(ref) => {
                this.RBSheetModal = ref;
              }}
              height={deviceHeight - actuatedNormalize(170)}
              minClosingHeight={0}
              animationType={"slide"}
              openDuration={500} closeDuration={250}
              
              dragFromTopOnly={true}
              closeOnDragDown={true}
              closeOnPressMask={true}
              closeOnPressBack={true}
              onClose={() => {
                this.props.handleClose()
              }}
              customStyles={{
                container: {
                  width: deviceWidth,
                  backgroundColor:"#ffffff",
                  borderTopLeftRadius: actuatedNormalize(20),
                  borderTopRightRadius: actuatedNormalize(20),
                },
                wrapper: {
                  backgroundColor:this.props.blurfalse?"transparent": "rgba(38, 58, 82, 0.7)",
                },
                draggableIcon: {
                  backgroundColor: "#eaeaea",
                  borderRadius: 5,
                  height: 4,
                  width: actuatedNormalize(42),
                  marginTop: actuatedNormalize(15),
                },
              }}>
            <ScrollView bounces={true} style={{}}>
              <View style={{ flex: 1 ,
                paddingBottom:actuatedNormalize(50)
                }}>
                <View
                    style={{
                      flex: 1,
                      backgroundColor: "#ffffff",
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      borderTopLeftRadius: actuatedNormalize(15),
                      borderTopRightRadius: actuatedNormalize(15),
                      paddingHorizontal:actuatedNormalize(25)
                    }}>

                  <View style={{ marginTop: actuatedNormalize(46) }}>
                    <TextComponent
                        style={{
                          fontSize: actuatedNormalize(18),
                          lineHeight: actuatedNormalize(24),
                          fontFamily: Fonts.Bold,
                          color: "#000000",
                          textTransform:"capitalize"


                         
                        }}>
                      {this.props.header}
                    </TextComponent>
                  </View>
                  {/* {this.props.options.length > 5 ?
                      <View style={styles.subContainer}>
                        <SearchBarComponent
                            filterTextSty={{
                              ...Platform.select({
                                ios: {
                                 
                                },
                                android: {
                                //  top: I18nManager.isRTL ? actuatedNormalize(-1) : null,
                                },
                              })
                            }}
                            placeholderStyles={{
                              ...Platform.select({
                                ios: {
                                  top: I18nManager.isRTL ? actuatedNormalize(1) : null,
                                  // padding: I18nManager.isRTL ? actuatedNormalize(20) : null
                                },
                                android: {
                                //  top:  null,
                                },
                              })
                            }}
                            placeholder={this.props.placeholder}
                            value={this.state.searchText}
                            onChangeText={(value) => this.filterCallBack(value)}
                            isFilterRequired={false}
                            //isClear={state.formElements.searchText.value===""? null:true}
                            /// allClear={()=>allClear('searchText')}
                        />
                      </View>
                      : null } */}
                  <View style={{ marginTop:this.props.options.length > 5 ?actuatedNormalize(26): actuatedNormalize(15), borderTopWidth: 1,
                    borderTopColor: "rgba(118, 118, 118, 0.25)",width:"100%"}}>
                    <FlatList
                        data={this.state.searchResult}
                        contentContainerStyle={{
                          backgroundColor: "#ffffff",
                          paddingBottom: actuatedNormalize(50),
                        }}
                       
                        renderItem={({ item }) => {
                          return (
                              <TouchableOpacity style={[styles.optionsContainer,{borderBottomColor:"rgba(118, 118, 118, 0.25)"},this.props.customOptionContainer]}    
                                                onPress={()=>this.props.onPress(item.value,item)}
                              >
                                <View style={styles.optionsSecond}>
                                    <TextComponent>{item.label}</TextComponent>
                                  {/* <Highlighter
                                      highlightStyle={{backgroundColor:'#d0d5e6'}}
                                      searchWords={[this.state.searchText]}
                                      textToHighlight={item.label}
                                      style={[styles.bankNameTxt,{color:this.props.theme.blackColor},this.props.textstyle]}
                                      autoEscape={true} // If data contains special character app crash issue fix
                                  /> */}

                                </View>

                              </TouchableOpacity>
                              //  <TouchableOpacity
                              //   style={styles.optionsContainer}
                              //   onPress={()=>this.props.onPress(item.value)}
                              // >
                              //    <View style={styles.optionsSecond}>
                              // <Highlighter
                              //        highlightStyle={{backgroundColor:'#d0d5e6'}}
                              //           searchWords={[this.state.searchText]}
                              //           textToHighlight={item.label}
                              //           style={[styles.bankNameTxt,{color:this.props.theme.menuTextColor}]}
                              //    />
                              //     </View>
                              //   </TouchableOpacity>
                              // <TouchableOpacity
                          );
                        }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </RBSheet>

        </>
    );
  }
}
const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: Fonts.Regular,
  },
  errorstyle: {
    color: 'red',
  },
  //   subContainer: {
  //     flex: 1,
  //     paddingTop: actuatedNormalize(81),
  //     marginHorizontal: actuatedNormalize(15),
  //   },
  // optionsContainer: {
  //   flexDirection: 'row',
  //   width: deviceWidth,
  //   //height: 55,
  //   borderBottomWidth: 0.5,
  //   borderColor: '#b3b1b3',

  //   paddingVertical: actuatedNormalize(10),
  // },
  optionsContainer: {
    flexDirection: 'row',
    width: '100%',
    //height: 55,
    borderBottomWidth: 1,
    // borderColor: '#b3b1b3',
    // marginTop: actuatedNormalize(10),
    minHeight: actuatedNormalize(51),
    alignItems:'center'
    // paddingBottom:20
  },
  optionsFirst: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsSecond: {
    width: I18nManager.isRTL ? '70%' : '80%',

    justifyContent: 'center',
  },
  optionsThird: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: actuatedNormalize(10),
  },
  bankNameTxt: {
    fontSize: actuatedNormalize(16),
    color: '#1D262C',
    fontFamily: Fonts.Regular,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: Platform.OS === "ios" && I18nManager.isRTL ? actuatedNormalize(30) : null,

  },
  inputBoxContainer: {
    marginTop: actuatedNormalize(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: actuatedNormalize(15),
    // paddingLeft:13,
    // paddingTop:13,
    // paddingBottom:10,
    // height: 48,
    width: '95%',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    marginBottom: actuatedNormalize(10),
  },
  textInput: {
    color: '#878787',
    fontSize: actuatedNormalize(16),
  },
  subContainer: {
    flex: 1,
    //backgroundColor:'red',
    width: deviceWidth - 45,
    marginTop: actuatedNormalize(20),
    //marginLeft:actuatedNormalize(20)
    // marginHorizontal: actuatedNormalize(15),
  },
  svgTrans: {
    marginTop: 15,
    marginRight: 15,
    transform: [
      {
        scaleX: I18nManager.isRTL ? -1 : 1,
      },
    ],
  },
});

export default dropdownPopup;