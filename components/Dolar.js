import React, { useState } from 'react';
import { StyleSheet, Text} from 'react-native';

export default function Dolar(props) {
	return (
		<>
      <Text >{props.data.high}</Text>
		</>
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
