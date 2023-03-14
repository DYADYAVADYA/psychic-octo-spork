import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
import {createDrawerNavigator, DrawerToggleButton} from "@react-navigation/drawer";
import {DrawerRoutes} from "../types/types";
import Timetable from "./Timetable";
import {NavigationContainer, DrawerActions, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import NavBar from "./NavBar";
import CustomDrawerContent from "../custom/CustomDrawerContent";
const Drawer = createDrawerNavigator()
const Main = () => {
    //
    let navigation = useNavigation()
    navigation.addListener('beforeRemove',function (e){
        e.preventDefault()
    })
    // @ts-ignore
    return (
        <Drawer.Navigator drawerContent={(props)=><CustomDrawerContent {...props}/>} screenOptions={{
            header:()=><NavBar/>
        }}>
            <Drawer.Screen name={DrawerRoutes.TIMETABLE} component={Timetable} options={{

                drawerLabelStyle:{
                    fontFamily:'Avenir',
                    textTransform:'uppercase',
                    color:'#fff'
                },

                drawerItemStyle:{
                    display:'flex',
                    backgroundColor:'hsl(360,50%,50%)',
                    

                    // flexDirection:'row',
                    // justifyContent:'center',
                },

            }}
            />
        </Drawer.Navigator>
    );
};

export default Main;