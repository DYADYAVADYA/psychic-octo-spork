import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {useActions} from "../hooks/useActions";
import {TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomDrawerContent = (props) => {
    let {logoutActionCreator} = useActions()
    return (
        <View style={{flex:1}}>
        <DrawerContentScrollView>
            <DrawerItemList {...props}>
            </DrawerItemList>
        </DrawerContentScrollView>
            <View style={{height:90,paddingLeft:30,justifyContent:'center',borderTopWidth:2,borderColor:'gray'}}>
            <TouchableOpacity onPress={e=>{
                console.log('lskfj')
                logoutActionCreator()
            }}>
                <Icon size={40} name={'logout'}/>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawerContent;