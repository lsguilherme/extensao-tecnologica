import React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View, Image, Text } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';

import { styles } from './styles';

export function CadastroUsuario({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        <View 
        style={styles.container}>
          <Header
            centerComponent={{ text: "Usuário", style: styles.title}}
            leftComponent={
              <Button
              icon={
                <TouchableOpacity
                  onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../../assets/iconBack.png')}
                    tintColor="white" 
                    style={styles.icon} 
                  />
                </TouchableOpacity>
                } 
              />
            }
            />
           

          <View style={styles.inputContainer}> 
          
            <Input
              label='Email'
              placeholder='Email'
              containerStyle={styles.input}
            />
            
            <Input
              secureTextEntry={true}
              label='Senha'
              placeholder='Senha'
              containerStyle={styles.input}
            />
          </View>

        <View style={styles.buttonContainer}>
          <Button title='Salvar' buttonStyle={styles.button} onPress={()=>navigation.navigate("Inicio")}
        />
        
        </View>
        </View>
          
        </ScrollView>
    </KeyboardAvoidingView>
  );
}