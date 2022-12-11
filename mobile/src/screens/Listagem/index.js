import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Avatar, Button, Header, Icon, ListItem } from 'react-native-elements';

import axios from 'axios';

import { styles } from './styles';


export function Listagem( {route, navigation }) {
  const [getData, setData] = useState([]);
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    
    async function resgatarDados(){
      const result = await axios(
        'http://professornilson.com/testeservico/clientes',
      )
      
      setData(result.data);
    
    }

    resgatarDados();
  
  })

  

  const renderImage = () => {
    const Images = [
      { image: 'https://i.pinimg.com/originals/bf/6b/28/bf6b28ff2ec9d0f59eb3084fe265c6e1.jpg' },
      { image: 'https://i.pinimg.com/736x/ec/40/cf/ec40cfe9de19156e0af4dd425ca80d45.jpg' },
      { image: 'https://static.wikia.nocookie.net/naruto/images/9/9e/RockLee.png/revision/latest/scale-to-width-down/640?cb=20140728162107&path-prefix=pt-br' }
    ];
    const randomImageIndex = Math.floor(Math.random() * Images.length);
    return Images[randomImageIndex].image;
  };
  
  
  
  const getUserData = ({ item: user }) => (
    <ListItem 
      bottomDivider
      onPress={
        ()=>navigation.navigate('Contatos', {
            nome: user.nome, 
            telefone: user.telefone, 
            email: user.email, 
            cpf: user.cpf, 
            id: user.id, 
            alterar:true
        })}
    >
      <Avatar source={{uri:renderImage()}}/>
      <ListItem.Content>
        <ListItem.Title>{user.nome}</ListItem.Title>
        <ListItem.Subtitle>{user.telefone}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
        <Header
            centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", fontSize: 24 } }}
            rightComponent={
            <Button 
                icon={
                    <Icon 
                        name="add" 
                        size={20} 
                        color="white" 
                        
                    />}
                onPress={()=>navigation.navigate('Contatos')}
            />
            }
        />

        <FlatList
            keyExtractor={(user) => user.id.toString()}
            data={getData}
            renderItem={getUserData}
        />
    </View>
  );
}