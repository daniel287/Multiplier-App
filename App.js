import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import NumberParts from './components/Multiplier';
import Constants from 'expo-constants';

export default function App() {
return (
        <View>
    <NumberParts/>
    </View>
  );
}