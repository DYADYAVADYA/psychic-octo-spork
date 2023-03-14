import { StatusBar } from 'expo-status-bar';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler'
import {createDrawerNavigator} from '@react-navigation/drawer'
let Drawer = createDrawerNavigator()
import {NavigationContainer} from "@react-navigation/native";
import Main from "./components/Main";
import LoginView from "./views/LoginView";
import NativeStack from "./navigation/NativeStack";
import {store} from "./store/store";
import {Provider} from "react-redux";
import MainLayout from "./MainLayout";
export default function App() {
  return (
      // <NavigationContainer>
      //   <Drawer.Navigator>
      //     {/*@ts-ignore*/}
      //       <Drawer.Screen name={'Hrin'} component={Main}/>
      //   </Drawer.Navigator>
      <Provider store={store}>
        <MainLayout/>
      </Provider>
      // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
