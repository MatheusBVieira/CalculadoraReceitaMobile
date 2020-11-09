import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

import CadastraReceita from '../pages/CadastraReceita';
import CadastraIngrediente from '../pages/CadastraIngrediente';
import CadastraEmbalagem from '../pages/CadastraEmbalagem';
import EditaReceita from '../pages/EditaReceita';
import EditaIngrediente from '../pages/EditaIngrediente';
import EditaEmbalagem from '../pages/EditaEmbalagem';
import DetalheReceita from '../pages/DetalheReceita';
import DetalheIngrediente from '../pages/DetalheIngrediente';
import DetalheEmbalagem from '../pages/DetalheEmbalagem';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: true  }} initialRouteName='Listagem Estoque'>
                <Screen name="Listagem Estoque" component={TabNavigation} />
                <Screen name="Detalhe Receita" component={DetalheReceita} />
                <Screen name="Edita Receita" component={EditaReceita} />
                <Screen name="Cadastra Receita" component={CadastraReceita} />
                <Screen name="Detalhe Ingrediente" component={DetalheIngrediente} />
                <Screen name="Edita Ingrediente" component={EditaIngrediente} />
                <Screen name="Cadastra Ingrediente" component={CadastraIngrediente} />
                <Screen name="Detalhe Embalagem" component={DetalheEmbalagem} />
                <Screen name="Edita Embalagem" component={EditaEmbalagem} />
                <Screen name="Cadastra Embalagem" component={CadastraEmbalagem} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;