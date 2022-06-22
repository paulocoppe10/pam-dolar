import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
	
	const [dolar, setDolar] = useState(0);
	const [API, setAPI] = useState(0);
	
	async function loadingAPI() {
        const response = await Api.get('json/last/USD-BRL');
        setAPI(response.data.USDBRL);
    }
	
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
		  
	  <TouchableOpacity style={styles.textobotao}
		  onPress={loadingAPI}>
	  	<Text style={styles.textoBotao} 
			onPress={loadingAPI}>Consulta</Text>
	  </TouchableOpacity>
		  
		  <Dolar data={API}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
