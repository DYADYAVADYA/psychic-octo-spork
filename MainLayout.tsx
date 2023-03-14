import React from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import Main from "./components/Main";
import NativeStack from "./navigation/NativeStack";
import {NavigationContainer, useNavigation} from "@react-navigation/native";

const MainLayout = () => {
    const state = useTypedSelector(state1 => state1.reducer)
    return (
        <NavigationContainer>
            {!state.user
                ? <NativeStack/>
                : <Main/>
            }
        </NavigationContainer>
    );
};

export default MainLayout;