import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'

import logoImg from '../../assets/images/logo.png'


function Login() {
    return (
        <View style={styles.container}>
                
            <Image source={logoImg} style={styles.logoContainer} />
            
            <View style={styles.loginContainer}>
                <Text>Login</Text>
                <Text>Utilize seus dados de e-mail institucional {'\n'}
                    para ter acesso à plataforma.  </Text>

            
                <TextInput
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />
                <TextInput
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />

                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>

            </View>
            

            <Text style={styles.helpContainer}>
                Problemas com seus dados de login? {'\n'}
                Entre em contato com a Seção Técnica de {'\n'}
                Informática (STI) de sua unidade.
            </Text>

        </View>

    );
}

export default Login