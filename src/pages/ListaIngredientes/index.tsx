import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Item from '../../components/Item'
import BotaoCadastro from '../../components/BotaoCadastro';
import api from '../../services/api'

import styles from './styles';

function ListaIngredientes() {
    const [lista, setLista] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        listaIngredientes();
        
        setRefreshing(false);
    }, []);

    const listaIngredientes = (() => {
        api.get('ingrediente').then(response => {
            setLista(response.data['content'])
        })
    })

    let itemExemplo: { id:number, nome: string, preco: number, quantidade: number, unidadeMedida: string, para: string};

    useEffect(() => {
        listaIngredientes();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={lista}
                renderItem={({ item } : {item : typeof itemExemplo} ) => (
                    <Item id={item.id} nome={item.nome} preco={item.preco} quantidade={item.quantidade} unidadeMedida={item.unidadeMedida} para="Detalhe Ingrediente"/>
                )}
                onRefresh={() => onRefresh()}
  	            refreshing={refreshing}
            />

            <BotaoCadastro para='Cadastra Ingrediente' />
        </View>
    );
}

export default ListaIngredientes;