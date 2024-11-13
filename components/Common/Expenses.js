import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import { Content } from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import PngLocations from '../../constants/PngLocations';
import { globalStyles } from '../../constants/GlobalStyles';

const ExpenseComponent = (props) => {
  return (
    <View style = {[globalStyles.expensecontainer]}>
        <ImageBackground
            source={PngLocations.ExpensesImage} // replace with your image URL
            style={[globalStyles.expensebanner]}
        >
            <View style={[globalStyles.expensetextContainer]}>
                <View style={[globalStyles.expenseheadingContainer]}>
                   <Text style={[globalStyles.expenseheading]}>{props.myspendtext}</Text>
                   <Text style={[globalStyles.expensedot]}> • </Text>                    
                   <Text style={[globalStyles.expenseheading]}>{props.mysependdate}</Text>
                </View>
                <View style={[globalStyles.expenseamountContainer]}>
                    <Text style={[globalStyles.expenseamount]}>{props.expenseamount}</Text>
                    <Text style={[globalStyles.expensecurrency]}> SAR</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
    
  );
};



export default ExpenseComponent;
