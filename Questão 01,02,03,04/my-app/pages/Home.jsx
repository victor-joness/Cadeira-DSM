import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Button from "../Components/Button";

export default function Questao01() {
  let [cor, setCor] = useState("red");
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");

  let handleSubmit = () => {
    setCount(count + 1);
    if (cor === "red") {
      setCor("green");
    } else {
      setCor("red");
    }
  };

  let handleChange = (text) => {
    setName(text);
  };

  return (
    <View>
      <View>
        <Text style={styles.h1}>Questão 01</Text>
        <Text style={styles.button(cor)}>Texto que vai mudar a cor</Text>
        <Button title={"Mudar cor"} cor={cor} onPress={handleSubmit} />
      </View>
      <View>
        <Text style={styles.h1}>Questão 02</Text>
        <Text style={{ textAlign: "center" }}>
          {" "}
          Foi mudado de cor {count} vezes{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.h1}>Questão 03</Text>
        <View style={styles.containerQuadrado}>
          <View style={styles.quadrado}>
            <Text style={styles.centralizar}>Quadrado 1</Text>
          </View>
          <View style={styles.quadrado}>
            <Text style={styles.centralizar}>Quadrado 2</Text>
          </View>
          <View style={styles.quadrado}>
            <Text style={styles.centralizar}>Quadrado 3</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.h1}>Questão 04</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            onChangeText={handleChange}
            placeholder="Seu nome"
            value={name}
          />
        </View>
        <Text style={{marginTop: 10}}>O seu nome é : {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: (cor) => ({
    color: cor,
    textAlign: "center",
  }),
  h1: {
    fontSize: 20,
    textAlign: "center",
  },
  containerQuadrado: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  quadrado: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    margin: 10,
  },
  centralizar: {
    height: 100,
    textAlign: "center",
    marginTop: 40,
  },
  inputWrapper: {
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    height: 55,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    marginTop: 10,
  },
});
