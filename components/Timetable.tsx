import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {DrawerActions} from "@react-navigation/native";

const Timetable = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hueglot</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Timetable;