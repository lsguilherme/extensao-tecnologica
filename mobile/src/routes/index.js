import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Inicio } from "../screens/Inicio";
import { CadastroUsuario } from "../screens/CadastroUsuario"
import { Listagem } from "../screens/Listagem";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
      <Screen 
        name="Inicio" 
        component={Inicio} 
      />

      <Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
      />

      <Screen
        name="Listagem"
        component={Listagem}
      />
    </Navigator>
  );
}
