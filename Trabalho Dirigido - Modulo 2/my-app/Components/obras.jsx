import { StyleSheet, Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import StarRating from "./StarRating";

export default function Obras({ autor, titulo, url, estrelas }) {
  return (
    <View style={styles.ObraContainer}>
      <View style={styles.ObraText}>
        <Icon name="user" size={20} color="#4287f5" />
        <Text style={styles.text}> Autor : {autor}</Text>
      </View>
      <View style={styles.ObraText}>
        <Icon name="book" size={20} color="#4287f5" />
        <Text style={styles.text}> Titulo : {titulo}</Text>
      </View>
      <View style={styles.ObraText}>
        <Icon name="link" size={20} color="#4287f5" />
        <Text style={styles.text}> Url : {url}</Text>
      </View>
      <View style={styles.textInput}>
        <Icon name="star" size={20} color="#4287f5" />
        <Text style={styles.text}>Estrelas :</Text>
        <StarRating estrelas={(estrelas/1000)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ObraContainer: {
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  ObraText: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    margin: 10,
  },
  text: {
    marginLeft: 10,
  },
});
