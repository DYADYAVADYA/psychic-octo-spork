import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const NavBar = () => {
    let navigation = useNavigation()
    return (
        <View style={{width:'100%',height:130,paddingLeft:20,justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>{
                navigation.dispatch(DrawerActions.openDrawer())
            } }>
               <Icon name={'bars'} size={25} color={'#000099'}/>
            </TouchableOpacity>
        </View>
    );
};

export default NavBar;