import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { Button, Header, Input,  } from 'react-native-elements';

import axios from 'axios';

import { styles } from './styles';

export function Contatos({ route, navigation }) {

  const [getId, setId] = useState();
  const [getNome, setNome] = useState();
  const [getCpf, setCpf] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getAlterar, setAlterar] = useState();

  useEffect(() => {
    if (route.params) {
        const { id } = route.params;
        const { nome } = route.params;
        const { cpf } = route.params;
        const { email } = route.params;
        const { telefone } = route.params;
        const { alterar } = route.params;
    
        setId(id);
        setNome(nome);
        setCpf(cpf);
        setEmail(email);
        setTelefone(telefone);
        setAlterar(alterar);
    }
  }, [])

  async function inserirDados() {
    const inserirContatoUrl = "http://professornilson.com/testeservico/clientes";

    await axios.post(inserirContatoUrl, {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
    })
    .then((response) => {
        setNome('');
        setEmail('');
        setTelefone('');
        alert('Adicionado com sucesso!');
    })
    .catch(error => console.log(error));
  }

  async function alterarDados() {
    const alterarContatoUrl = "http://professornilson.com/testeservico/clientes/" + getId;

    await axios.put(alterarContatoUrl, {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
    }).then(() => alert('Alterado com sucesso!'))
  }

  async function excluirDados() {
    const deletarContato = "http://professornilson.com/testeservico/clientes/" + getId

    await axios.delete(deletarContato)
    .then(function(response){
        setNome('');
        setEmail('');
        setTelefone('');
        alert('Excluído com sucesso!')
    })
    .catch(error => console.log(error))
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: "Contato",
            style: { color: "#fff", fontSize: 24 },
          }}
          leftComponent={
              <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/iconBack.png')}
                tintColor="white"
                
              />
          </TouchableOpacity>
            }
        />

        <View style={{ marginTop: 50 }}>
          <Input
            label="Nome"
            placeholder="Nome"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setNome(text)}
            value={getNome}
          />

          <Input
            label="Email"
            placeholder="Email"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setEmail(text)}
            value={getEmail}
          />

          <Input
            label="Telefone"
            placeholder="Telefone"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setTelefone(text)}
            value={getTelefone}
          />
        </View>
        {!getAlterar ? (
          <Button
            title="Salvar"
            buttonStyle={{ width: 290 }}
            onPress={() => inserirDados()}
          />
        ) : (
          <Button
            title="Alterar"
            buttonStyle={{ width: 290, marginTop:10 }}
            onPress={() => alterarDados()}
          />
        )}

        { getAlterar ? (
          <Button
          title="Excluir"
          buttonStyle={{ width: 290, marginTop: 10, backgroundColor: 'red' }}
          onPress={() => excluirDados()}
        />
        ) : (
          null
        )}
      </View>
    </ScrollView>
  );
}