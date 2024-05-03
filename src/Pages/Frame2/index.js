
import { StyleSheet, Text, View, Image, StatusBar, ToucchableOpacity, TouchableOpacity } from 'react-native';

export default function Frame2() {


  return (
    <View style={styles.container} >
     
      <View style={styles.part1}>
        <View >
          <Image
          source={require('../../Image/safe.png')}
          />
        </View>
      </View>
      
      <View style={styles.part2}>

      <TouchableOpacity style={styles.caixa}>
      <Text style={{fontSize:18}}> Nenhum vazamento de gás detectado</Text>
      </TouchableOpacity>
     
        
      <View>
          <Image
          source={require('../../Image/grafico.png')}
          style={{height:200,width:500,justifyContent:'center'}}
          />
        </View>

        
      </View>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignContent:'center',
  },
  part1:{
    height:400,
    backgroundColor: '#688DEC',
    alignItems: 'center',
    justifyContent: 'center',

  },
  part2:{
    height:550,
    backgroundColor: '#080744',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa:{
    width:400,
    height:70,
    backgroundColor:'#fff', 
    alignItems:'center',
    borderRadius:50,
    marginBottom:100,
    justifyContent:'center'
  },
  
});
