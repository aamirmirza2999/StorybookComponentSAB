import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { globalStyles } from '../../constants/GlobalStyles';
import { useTheme } from "../../constants/Theme/ThemeProvider";

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { title: 'Item 1', text: 'Text 1' },
  { title: 'Item 2', text: 'Text 2' },
  { title: 'Item 3', text: 'Text 3' },
  { title: 'Item 4', text: 'Text 4' },
  { title: 'Item 5', text: 'Text 5' },
];

const subdata = [
    { title: 'Item 1', text: 'Text 1' },
    { title: 'Item 2', text: 'Text 2' },
    { title: 'Item 3', text: 'Text 3' },
   
  ];

const Paginator = () => {
    const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text> */}
    </View>
  );

  return (
    <>
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        dotStyle={[globalStyles.activeDot,{color: theme.primaryblack}]}
        inactiveDotStyle={[globalStyles.inactiveDot,{color: theme.primaryblack}]}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        containerStyle={globalStyles.paginationContainer}
      />
    </View>
    <View style={styles.container}>
      <Carousel
        data={subdata}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={subdata.length}
        activeDotIndex={activeIndex}
        dotStyle={[globalStyles.subactiveDot,{color: theme.primaryred}]}
        inactiveDotStyle={[globalStyles.subinactiveDot,{color: theme.primaryblack}]}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        containerStyle={globalStyles.paginationContainer}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  // },
  // itemContainer: {
  //   backgroundColor: 'lightgray',
  //   borderRadius: 8,
  //   height: 20,
  //   padding: 50,
  //   marginLeft: 25,
  //   marginRight: 25,
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
  // text: {
  //   fontSize: 16,
  // },
 
  
});

export default Paginator;
