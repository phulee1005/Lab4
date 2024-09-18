import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

const DUMMY_CATEGORIES = [
  { id: 'c1', title: 'Bữa sáng', color: '#f5428d' },
  { id: 'c2', title: 'Đồ ăn nhanh', color: '#f54242' },
  { id: 'c3', title: 'Món ngọt', color: '#f5a442' },
  { id: 'c4', title: 'Đồ ăn Hàn Quốc', color: '#f5d142' },
  { id: 'c5', title: 'Nước uống', color: '#368dff' },
  { id: 'c6', title: 'Cơm', color: '#41d95d' },
  { id: 'c7', title: 'Mì', color: '#9eecff' },
  { id: 'c8', title: 'Nước sốt', color: '#b9ffb0' },
];

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={DUMMY_CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});