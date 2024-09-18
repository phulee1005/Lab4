import React, { useLayoutEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const [searchTerm, setSearchTerm] = useState('');

  const displayedMeals = MEALS.filter((mealItem) => {
    const isInCategory = mealItem.categoryIds.indexOf(catId) >= 0;
    const matchesSearchTerm = mealItem.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isInCategory && matchesSearchTerm;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Nhập món ăn bạn muốn tìm..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
});
