import React, { useState, useRef } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import {
  Image,
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

import styles from './carScreenStyles';

export default function CarScreen() {
  const router = useRouter();
  return (
    <View style={styles.carContainer}>
      <View style={styles.header}>
        <View style={styles.handleBar} />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Entypo name="cross" size={32} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.carImageContainer}>
        <Image
          source={{ uri: 'https://hannover.stadtmobil.de/media/_processed_/f/c/csm_eeef1cdd31e097be4014f27b9613900bc3d1b24b_b0a9008374.jpg' }}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
      <View style={styles.licensePlateContainer}>
        <Text style={styles.licensePlateLabel}>H-SH574</Text>
      </View>

      <View style={styles.carStatus}>
        <Text style={styles.statusLabel}>Verfügbar</Text>
      </View>

      <Text style={styles.carName}>Ford Puma</Text>
      <Text style={styles.carPrice}>2,20 € pro Stunde</Text>
      <Text style={styles.carType}>C - Kleiner Comfortabler</Text>
      
      <MaterialCommunityIcons name="gas-station-outline" size={28} color="black" style={{ marginLeft: 30, marginTop: 5 }} />
      <View style={styles.progressWrapper}>
        <Progress.Bar
          progress={1 / 2}
          width={350}
          height={15}
          borderColor="black"
          color="white"
          style={styles.fuelLevel}
          borderRadius={20}
        />
        <Text style={styles.fuelLevelLabel}>50%</Text>
      </View>
      <Text style={styles.carInfo}>
        5 Türen, 5 Sitze, Schaltwagen, Tempomat, Benziner, Bluetooth, USB-Anschluss, Apple CarPlay
      </Text>

      <TouchableOpacity style={styles.bookNowButton} onPress={() => router.back()}>
        <Text style={styles.bookNowLabel}>JETZT BUCHEN</Text>
      </TouchableOpacity>









    </View>
  );
}