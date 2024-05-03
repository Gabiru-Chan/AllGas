import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function Frame1() {
  return (
    <View style={styles.container}>
      <View style={styles.visual}> 
      <Image
        source ={require('../../Image/buxa.png')}
        style={{width:210,height:210, borderRadius:100,}}
      />
      </View>
      <Text style={ styles.texto}>Gas Guardian</Text>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080744',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  visual:{
    height: 250,
    width: 250,
    backgroundColor:'#0C88FC',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:200,
  },
  texto:{
    marginTop:20,
    fontSize:25,
    color: '#fff',
    
  }

});
