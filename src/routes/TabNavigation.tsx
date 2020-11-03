import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListaReceitas from '../pages/ListaReceitas';
import ListaIngredientes from '../pages/ListaIngredientes';
import ListaEmbalagens from '../pages/ListaEmbalagens';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Receitas" component={ListaReceitas} />
      <Tab.Screen name="Ingredientes" component={ListaIngredientes} />
      <Tab.Screen name="Embalagens" component={ListaEmbalagens} />
    </Tab.Navigator>
  );
}

export default MyTabs;