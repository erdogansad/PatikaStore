import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductItem.style';

const ProductItem = ({item}) => {
  return (
    <View style={styles.product_container}>
      <Image style={styles.product_image} source={{uri: item.imgURL}} />
      <View style={styles.product_detail}>
        <Text style={styles.product_title}>{item.title}</Text>
        {!item.inStock && (
          <Text style={styles.product_out_of_stock}>STOKTA YOK</Text>
        )}
        <Text style={styles.product_price}>{item.price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
