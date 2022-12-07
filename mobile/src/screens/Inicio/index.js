import React from 'react';
import { KeyboardAvoidingView, Platform, View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';



import { styles } from './styles';

export function Inicio({ navigation }) {
  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={30}
    >
        <ScrollView>
        <View style={[styles.imagem, {alignItems:'center'}]}>
            <Avatar
                rounded
                source={{
                    uri: "https://static.wikia.nocookie.net/naruto/images/9/9e/RockLee.png/revision/latest/scale-to-width-down/640?cb=20140728162107&path-prefix=pt-br",
                }}
                size='xlarge'
            />
            <Text style={styles.subtitle}>Bem vindo!!</Text>
        </View>
        

        <View style={styles.formStyle}>
            <Input 
                label="Login" 
                placeholder="Login"
                containerStyle={styles.inputContainerStyle} 
                />
            <Input
                secureTextEntry={true}
                label="Senha"
                placeholder="Senha" 
                containerStyle={styles.inputContainerStyle}
                />
            
        </View>
        
        <View >
            <Button 
                title="Entrar"
                buttonStyle={styles.button}
            />
            <Button 
                title="Cadastrar-se"
                onPress={()=>navigation.navigate('CadastroUsuario')}
                buttonStyle={[styles.button,{backgroundColor:'red'}]}
            />
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}