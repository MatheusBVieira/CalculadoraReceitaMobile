import React, { useState, useEffect } from 'react';
import { View, ScrollView, RefreshControl, FlatList,  } from 'react-native';

import styles from './styles';
import BotaoCadastro from '../../components/BotaoCadastro';
import api from '../../services/api'
import ItemEmbalagem from '../../components/ItemEmbalagem';



function ListaEmbalagens() {
    const [lista, setLista] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        listaEmbalagem();
        
        setRefreshing(false);
    }, []);

    const listaEmbalagem = (() => {
        api.get('embalagem').then(response => {
            setLista(response.data['content'])
        })
    })

    let itemExemplo: { id:number, nome: string, preco: number, quantidade: number};

    const Item = ({id, nome, preco, quantidade} : typeof itemExemplo) => (
        <ItemEmbalagem id={id} nome={nome} preco={preco} quantidade={quantidade} />
    );

    
    
    useEffect(() => {
        listaEmbalagem();
    }, [])


    return (
        <View style={styles.container}>
            <FlatList
                data={lista}
                renderItem={({ item } : {item : typeof itemExemplo} ) => (
                    <Item id={item.id} nome={item.nome} preco={item.preco} quantidade={item.quantidade} />
                )}
                onRefresh={() => onRefresh()}
  	            refreshing={refreshing}
            />

            <BotaoCadastro para='Cadastra Embalagem' />
        </View>
        // <ScrollView
        //     refreshControl={
        //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        //       }
        //     contentContainerStyle={{
        //         flex: 1,
        //         justifyContent: 'flex-start',
        //         alignItems: 'stretch',
        //     }}
        // >
        //     <View style={styles.container}>
        //     <View>
        //         {lista.map(function({nome, preco, quantidade}) {
        //             return <ItemEmbalagem titulo={nome} preco={preco} quantidade={quantidade} />;
        //             })}
        //     </View>

        //     <BotaoCadastro para='Cadastra Embalagem' />
        //     </View>
        // </ScrollView>
        
    );
}

export default ListaEmbalagens;