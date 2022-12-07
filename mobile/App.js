import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primeiro teste no expo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

