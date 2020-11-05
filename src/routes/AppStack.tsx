import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

import CadastraReceita from '../pages/CadastraReceita';
import CadastraIngrediente from '../pages/CadastraIngrediente';
import CadastraEmbalagem from '../pages/CadastraEmbalagem';
import EditaReceita from '../pages/EditaReceita';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Tab" component={TabNavigation} />
                <Screen name="EditaReceita" component={EditaReceita} />
                <Screen name="CadastraReceita" component={CadastraReceita} />
                <Screen name="CadastraIngrediente" component={CadastraIngrediente} />
                <Screen name="CadastraEmbalagem" component={CadastraEmbalagem} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;