import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View, Image, Text } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';

import { styles } from './styles';

import axios from 'axios';

export function CadastroUsuario({ route, navigation }) {
  
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  useEffect(() => {
    if(route.params) {
      const { email } = route.params;
      const { senha } = route.params;
      
      setEmail(email);
      setSenha(senha);
    }
  }, [])
  
  async function cadastrar() {
    await axios.post('http://10.0.0.100:9090',{
      email: getEmail,
      senha: getSenha 
    })
    .then(() => {
      setEmail('')
      setSenha('')
      alert('Conta criada com sucesso');
    })
    .catch(error => console.log(error))
  }
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
              onChangeText={text=>setEmail(text)}
              value={getEmail}
            />
            
            <Input
              secureTextEntry={true}
              label='Senha'
              placeholder='Senha'
              containerStyle={styles.input}
              onChangeText={text=>setSenha(text)}
              value={getSenha}
            />
          </View>

        <View style={styles.buttonContainer}>
          <Button title='Salvar' buttonStyle={styles.button} onPress={()=>cadastrar()}
        />
        
        </View>
        </View>
          
        </ScrollView>
    </KeyboardAvoidingView>
  );
}