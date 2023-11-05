import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  product_container: {
    flex: 1,
    padding: 10,
    margin: 5,
    gap: 10,
    borderRadius: 10,
    width: '45%',
    backgroundColor: '#eceff1',
  },
  product_detail: {
    flex: 1,
    justifyContent: 'between',
  },
  product_image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  product_title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    flexGrow: 1,
  },
  product_price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  product_out_of_stock: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
