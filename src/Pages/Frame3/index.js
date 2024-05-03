import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Frame2 from '../Frame2'
export default function Frame3() {

  const navegar=useNavigation()


  function voltar(){
    navegar.navigate('Frame2')

  }
  return (
    <View style={styles.container}>
      <View>

          <View style={styles.caixa1}>

            <View style={{width:300,height:300, backgroundColor:'#DD3431',borderRadius:200,justifyContent:'center',alignItems:'center'}}>

              <View style={{width:250,height:250, backgroundColor:'#A42A2A',borderRadius:200,justifyContent:'center',alignItems:'center'}}>

                        <View style={{width:200,height:200, backgroundColor:'#832020',borderRadius:200,justifyContent:'center',alignItems:'center'}}>
                          <View style={{width:30,height:100, backgroundColor:'#fff', borderTopLeftRadius:20,borderTopRightRadius:20}} ></View>
                          <View style={{width:30,height:30, backgroundColor:'#fff', marginTop:10,borderRadius:50}}></View>
                        </View>

              </View>

            </View>
          </View>
    

      <View style={styles.caixa2}>
        <Text style={styles.textu}> Vazamento detectado !!!</Text>
      </View>

      <View style={styles.caixa3}>
        <TouchableOpacity style={styles.botão} onPress={(voltar)}>
          <Text>desligar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CA2929',
    alignItems: 'center',
    
  },
  caixa1:{
    justifyContent:'center',
    alignItems:'center', 
    
    marginTop:100,
  },
  caixa2:{
    justifyContent:'center',
    alignItems:'center', 
    borderBottomWidth:3,
    borderColor:'#fff',
    marginTop:50,
    width:380,
    
  },
  caixa3:{
    justifyContent:'center',
    alignItems:'center', 
    marginTop:120,

  },
  botão:{
    width:250,
    height:50,
    backgroundColor:'#AA2323',
    borderWidth:0.5,
    borderColor:'#fff',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'

  },
  textu:{
    fontSize:30,
    color:'#fff',
  },
});
