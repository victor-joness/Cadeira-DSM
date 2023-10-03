import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import Obras from "../Components/obras";

export default function Home() {
  let [key, setkey] = useState("");
  let [obrasListagem, setObras] = useState([]);

  const requisição = (key) => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${key}}`)
      .then((response) => response.json())
      .then((data) => {
        setObras(data.hits);
      });
  };

  useEffect(() => {
    requisição(" ");
  }, []);

  const handleChange = (text) => {
    setkey(text);
  };

  const pesquisar = (text) => {
    requisição(text);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.container}
    >
      <Text style={styles.title}>Acervo de obras</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={handleChange}
          placeholder="Pesquisar"
          value={key}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.botaoPesquisar}
          onPress={() => pesquisar(key)}
        >
          <Text style={styles.textoBotao}>
            <Icon name="search" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subTitle}>Lista de obras</Text>
        {obrasListagem
          .filter(
            (obra) =>
              obra.author && obra.title && obra.url && obra.points !== null
          )
          .map((obra) => (
            <Obras
              key={obra.objectID}
              autor={obra.author}
              titulo={obra.title}
              url={obra.url}
              estrelas={obra.points}
            />
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginTop: 50,
  },
  subTitle: {
    color: "#fff",
    fontSize: 25,
    margin: 10,
    alignItems: "center",
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  input: {
    flex: 1,
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    backgroundColor: "white",
    color: "black",
  },
  botaoPesquisar: {
    backgroundColor: "#4287f5",
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textoBotao: {
    color: "white",
    fontSize: 18,
  },
});
