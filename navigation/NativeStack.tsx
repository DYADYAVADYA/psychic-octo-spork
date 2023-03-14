import { createStackNavigator } from '@react-navigation/stack';
import LoginView from "../views/LoginView";
import Main from "../components/Main";
import {NavigationContainer} from "@react-navigation/native";
import CreationAccountView from "../views/CreationAccountView";
import {Routes} from "../types/types";
import MainLayout from "../MainLayout";

const Stack = createStackNavigator();

function NativeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={Routes.LOGIN} component={LoginView} />
            <Stack.Screen name={Routes.CREATIONACCOUNT} component={CreationAccountView} />
            <Stack.Screen name={Routes.HOME} component={Main} options={{gestureEnabled:false}}/>
            <Stack.Screen name={'hz'} component={MainLayout} options={{gestureEnabled:false}}/>

        </Stack.Navigator>
    );
}
export default NativeStack