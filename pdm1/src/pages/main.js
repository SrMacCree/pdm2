import React, { Component } from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';



export default class Main extends Component {
    static navigationOptions =  {
        header: null
    }

    render() {
        return (
            <View> 
                <TouchableOpacity style={styles.productButton}>
                    <Text style={styles.productButtonText} onPress={() => {
                        this.props.navigation.navigate('Cadastro')    
                        }} >Cadastrar Novo Medicamento</Text>
                </TouchableOpacity>
            </View> 
        )
    }
}
 
  
const styles = StyleSheet.create({
 
    productButton: { 
        margin: 20, 
        height: 42, 
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#057764",
        backgroundColor: "transparent" ,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#057764",
        fontWeight: "bold"
    },
    
});