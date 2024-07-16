import React, { useRef,useEffect } from 'react';
import { View, Text, Button, StyleSheet ,ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { actuatedNormalize } from '../../constants/PixelScaling';

const BottomSheetComponent = (props) => {
  const refRBSheet = useRef();
  useEffect(() => {
    if(props.Show){
      refRBSheet.current.open()
    }
  }, [props.Show]);

  const panelHide = () => {

    props.bottomReached();

  };

  return (
   
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        draggable={true}
        dragOnContent={true}
        //useNativeDriver={true}
        //height={300}
        onClose={panelHide}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          container: {
            borderTopLeftRadius: actuatedNormalize(10),
            borderTopRightRadius: actuatedNormalize(10),
          },
          draggableIcon: {
            backgroundColor: '#eaeaea',
            width: actuatedNormalize(42),
          },
        }}
        
      >
        <View style={styles.sheetContent}>
         <ScrollView contentContainerStyle={{paddingBottom:actuatedNormalize(50)}}>
          {props.BottomSheetContent}
          </ScrollView>
        </View>
      </RBSheet>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center'
  },

});

export default BottomSheetComponent;