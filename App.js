import { StyleSheet, Text, View } from 'react-native';

//importando navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


//importando as paginas

import Frame0 from './src/Pages/Frame0'
import Frame1 from './src/Pages/Frame1';
import Frame2 from './src/Pages/Frame2';
import Frame3 from './src/Pages/Frame3';



const Stake = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stake.Navigator>

        <Stake.Screen
          name='Frame0'
          component={Frame0}
          options={{headerShown:false}}
          />

          <Stake.Screen
          name='Frame1'
          component={Frame1}
          options={{headerShown:false}}
          />

          <Stake.Screen
          name='Frame2'
          component={Frame2}
          options={{headerShown:false}}
          />

          <Stake.Screen
          name='Frame3'
          component={Frame3}
          options={{headerShown:false}}
          />

         
      </Stake.Navigator>

    </NavigationContainer>
  );
}


