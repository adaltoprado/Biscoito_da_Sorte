import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {

  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [textPhrase, setTextPhrase] = useState('');

  let phrases = [
    '"Comece onde você está, use o que você tem e faça o que você pode." \n\nArthur Ashe',
    '"Seres humanos são como tapetes. Às vezes, precisam ser sacudidos." \n\nMario Sergio Cortella ',
    '"Não importa que você vá devagar, contanto que você não pare." \n\nConfúcio',
    '"A inspiração existe, porém temos que encontrá-la trabalhando." \n\nPablo Picasso',
    '"Coragem é saber o que não temer." \n\nPlatão',
    '"Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá." \nEllen Degeneres',
    '"Acredite em milagres, mas não dependa deles." \n\nImmanuel Kant'
  ];

  function cookieBreaker() {
    let randomNumber = Math.floor(Math.random() * phrases.length)
    setTextPhrase(phrases[randomNumber]);
    setImg(require('./assets/biscoitoAberto.png'));
  }

  function restart() {
    setImg(require('./assets/biscoito.png'));
    setTextPhrase('');
  }

  return (
    <View style={styles.container}>

      <Image source={img} style={styles.img} />

      <Text style={styles.textPhrase}>{textPhrase}</Text>

      <TouchableOpacity style={[styles.button, { borderWidth: 4 }]} onPress={cookieBreaker}>
        <View style={styles.buttonArea}>
          <Text style={[styles.text_button, { fontWeight: "bold" }]}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 15, borderColor: "blue" }]} onPress={restart}>
        <View style={styles.buttonArea}>
          <Text style={styles.text_button}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,

  },
  textPhrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    width: 230,
    height: 50,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_button: {
    fontSize: 17,
    fontWeight: "400",
  },
});

export default App;