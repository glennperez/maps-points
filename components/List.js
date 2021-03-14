import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Dimensions } from 'react-native';

export default ({ points, closeModal }) => {
    return(
        <>
            <View style={styles.list}>
                <FlatList 
                    data={points.map(p => p.name)}
                    renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button onPress={closeModal} title="Cerrar"></Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    list:{
        height: Dimensions.get('window').height - 250
    },
    item:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15
    },
    button:{
        paddingBottom: 15
    }
});