import React from 'react'
import { View, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

import styles from './styles'

import logoImg from '../../assets/images/logo.png'


function Login() {
    return (
        <KeyboardAvoidingView style={styles.background}>
            
                
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

                
                    <Text>
                        Problemas com seus dados de login? {'\n'}
                        Entre em contato com a Seção Técnica de {'\n'}
                        Informática (STI) de sua unidade.
                    </Text>
                    
                </View>

        </KeyboardAvoidingView>

    );
}

export default Login