import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

import CadastraReceita from '../pages/CadastraReceita';
import CadastraIngrediente from '../pages/CadastraIngrediente';
import CadastraEmbalagem from '../pages/CadastraEmbalagem';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: true }}>
                <Screen name="Tab" component={TabNavigation} />
                <Screen name="CadastraReceita" component={CadastraReceita} />
                <Screen name="CadastraIngrediente" component={CadastraIngrediente} />
                <Screen name="CadastraEmbalagem" component={CadastraEmbalagem} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;