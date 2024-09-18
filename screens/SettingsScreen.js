import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker'; 
import { Ionicons } from '@expo/vector-icons'; 
import { toggleDarkMode, toggleNotifications, setLanguage } from '../store/settings';

function SettingsScreen() {
  const dispatch = useDispatch();
  const { isDarkMode, isNotificationsEnabled, language } = useSelector((state) => state.settings);

  const handleToggleDarkMode = () => dispatch(toggleDarkMode());
  const handleToggleNotifications = () => dispatch(toggleNotifications());
  const handleLanguageChange = (lang) => dispatch(setLanguage(lang));

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Cài đặt</Text>

      <View style={styles.settingItem}>
        <Ionicons name="moon-outline" size={24} color={isDarkMode ? '#f5dd4b' : '#000'} />
        <Text style={[styles.settingLabel, { color: isDarkMode ? '#fff' : '#000' }]}>Chế độ tối</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleDarkMode}
          value={isDarkMode}
        />
      </View>

      <View style={styles.settingItem}>
        <Ionicons name="language-outline" size={24} color={isDarkMode ? '#f5dd4b' : '#000'} />
        <Text style={[styles.settingLabel, { color: isDarkMode ? '#fff' : '#000' }]}>Ngôn ngữ</Text>
        <Picker
          selectedValue={language}
          style={{ height: 50, width: 150, color: isDarkMode ? '#fff' : '#000' }}
          onValueChange={handleLanguageChange}
        >
          <Picker.Item label="Tiếng Việt" value="vi" />
          <Picker.Item label="English" value="en" />
        </Picker>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  version: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default SettingsScreen;
