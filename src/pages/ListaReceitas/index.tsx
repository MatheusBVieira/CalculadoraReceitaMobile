import React, { useState, useEffect }  from 'react';
import { View, FlatList } from 'react-native';

import ItemReceita from '../../components/ItemReceita';
import BotaoCadastro from '../../components/BotaoCadastro';
import api from '../../services/api'

import styles from './styles';

function ListaReceitas() {
    const [lista, setLista] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        listaReceita();
        
        setRefreshing(false);
    }, []);

    const listaReceita = (() => {
        api.get('receita').then(response => {
            setLista(response.data['content'])
        })
    })

    let itemExemplo: { 
        id: number;
        nome: string;
        ingredientes: Array<string>;
        quantidadeProduzida: number;
        precoIngredientes: number;
        precoEmbalagem : number;
        precoTotal: number;
        precoTotalPorUnidade: number;
        embalagem: string;
    };

    useEffect(() => {
        listaReceita();
    }, [])

    return (
        <View style={styles.container}>
           <FlatList
                data={lista}
                renderItem={({ item } : {item : typeof itemExemplo} ) => (
                    <ItemReceita 
                        id={item.id}
                        nome={item.nome} 
                        ingredientes={item.ingredientes} 
                        quantidadeProduzida={item.quantidadeProduzida}
                        precoIngredientes={item.precoIngredientes}
                        precoEmbalagem={item.precoEmbalagem}
                        precoTotal={item.precoTotal}
                        precoTotalPorUnidade={item.precoTotalPorUnidade}
                        embalagem={item.embalagem}
                    />
                )}
                onRefresh={() => onRefresh()}
  	            refreshing={refreshing}
            />

            <BotaoCadastro para='Cadastra Receita' />
        </View>
    );
}

export default ListaReceitas;