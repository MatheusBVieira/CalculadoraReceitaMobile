import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListaReceitas from './src/pages/ListaReceitas';

export default function App() {
  return (
    <>
      <ListaReceitas />
      <StatusBar style="auto" />
    </>
  );
}
