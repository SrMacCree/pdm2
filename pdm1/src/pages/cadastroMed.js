import React, { Component } from 'react';
import {TextInput, TouchableOpacity, StyleSheet, View, Button} from 'react-native';


export default class Cadastro extends Component {
    static navigationOptions = { 
        title: "Cadastro de Medicamento"  
    };

    state = {
        nomeMedicamento: "",
        quantHoras: "",
        quantDias: "",
        finalidade: ""
    }

    render() {
        return (
            <View style={styles.all}>

                    <View style={styles.fundo} >
                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Nome do Medicamento'
                            onChangeText={(nome) => this.setState({ nomeMedicamento })}
                            value={this.state.nomeMedicamento}
                        />

                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Deve tomar de quantas em quantas horas?'
                            onChangeText={(quantHoras) => this.setState({ quantHoras })}
                            value={this.state.quantHoras}
                        />

                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Durante quantos dias?'
                            onChangeText={(quantDias) => this.setState({ quantDias })}
                            value={this.state.quantDias}
                        />

                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Para que serve o medicamento?'
                            onChangeText={(finalidade) => this.setState({ finalidade })}
                            value={this.state.finalidade}
                        />

                       
                    </View>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({

    input: {
        width: 280,
        height: 40,
        borderColor: 'black',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#DCDCDC', 
        marginTop: 25,
        margin: 30,
        marginBottom: 10   
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 15
    },

    all: {
        alignItems: 'center'
    }
})