import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import AntDesign from '@expo/vector-icons/AntDesign';

import styles from './scanScreenStyles';
import { useRouter } from 'expo-router';

export default function ScanScreen() {
  const router = useRouter();
  return (
    <View style={styles.scanContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
