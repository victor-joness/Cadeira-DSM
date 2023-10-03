import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default StarRating = ({ estrelas }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= estrelas ? 'gold' : 'gray';
      stars.push(
        <Icon
          key={i}
          name="star"
          size={20}
          color={starColor}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.starRating}>
      {renderStars()}
      <Text style={styles.ratingText}>{"R: " + estrelas.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    color: 'gray',
  },
});