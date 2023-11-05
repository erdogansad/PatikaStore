import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import products from './data/products.json';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import {StyleSheet} from 'react-native';

function App() {
  const renderItem = ({item}) => <ProductItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        columnWrapperStyle={styles.flatstyle}
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});

export default App;
