import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Inicio } from "../screens/Inicio";
import { CadastroUsuario } from "../screens/CadastroUsuario"

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="Inicio" 
        component={Inicio} 
      />

      <Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
      />
    </Navigator>
  );
}
