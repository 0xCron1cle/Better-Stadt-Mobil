import React, { useState, useRef } from "react";
import { useRouter } from 'expo-router';
import {
  Image,
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,

} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';




import styles from './IndexScreenStyles';


interface MarkerType {
  id: number;
  latitude: number;
  longitude: number;
}

export default function HomeScreen() {
  const router = useRouter();



  const [isOpen, setIsOpen] = useState<boolean>(false);
  const slideAnim = useRef<Animated.Value>(new Animated.Value(-370)).current;
  const overlayOpacity = useRef<Animated.Value>(new Animated.Value(0)).current;

  const toggleSlider = () => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? -300 : -5,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(overlayOpacity, {
      toValue: isOpen ? 0 : 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };

  const markers: MarkerType[] = [
    { id: 0, latitude: 52.40177464290168, longitude: 9.77636921619658 },
  ];

  return (

    <TouchableWithoutFeedback onPress={() => { if (isOpen) toggleSlider(); }}>
      <View style={styles.container}>

        <MapView
          style={styles.map}
          region={{
            latitude: 52.40110465652344,
            longitude: 9.77720360356611,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          userInterfaceStyle="light"
          showsUserLocation
          userLocationPriority="high"
          showsMyLocationButton
          showsBuildings={false}
          pitchEnabled={false}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude + 0.000022,
                longitude: marker.longitude - 0.000012,
              }}
              pinColor="white"
            >
              <TouchableOpacity onPress={() => router.push('/carScreen')}>
                <Image
                  source={require("../assets/images/stadtflitzer-pin-shadow-light.png")}
                  style={styles.markerImage}
                />
              </TouchableOpacity>
            </Marker>
          ))}
        </MapView>
        <Animated.View
          style={[styles.slider, { transform: [{ translateX: slideAnim }] }]}
          onStartShouldSetResponder={() => true}
          pointerEvents="auto"
        >
          <View style={styles.sliderContent}>
            <View style={styles.accountSection}>

              <FontAwesome6 name="user-circle" size={38} color="black" style={{ marginLeft: 15, marginTop: 20 }} />
              <View style={{ marginLeft: 10, marginTop: 20 }}>
                <Text style={styles.userName}>YORDAN</Text>
                <Text style={styles.userInfo}>My Account</Text>
              </View>

            </View>
            <View style={styles.option}>
              <View style={styles.optionRowSection}>
                <Entypo name="wallet" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>Wallet</Text>
              </View>
              <View style={styles.optionRowSection}>
                <Entypo name="calendar" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>My Rides</Text>
              </View>
              <View style={styles.optionRowSection}>
                <Entypo name="briefcase" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>My Receipts</Text>
              </View>
              <View style={styles.optionRowSection}>
                <Entypo name="price-tag" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>Prices</Text>
              </View>
              <View style={styles.optionRowSection}>
                <Entypo name="help-with-circle" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>Support</Text>
              </View>
              <View style={styles.optionRowSection}>
                <Entypo name="info-with-circle" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>Info</Text>
              </View>
            </View>
            <View style={styles.signSection}>
              <View style={styles.optionRowSection}>
                <FontAwesome name="power-off" size={32} color="black" style={{ marginLeft: 15 }} />
                <Text style={styles.optionLabel}>Log out</Text>
              </View>
            </View>




          </View>
        </Animated.View>


        {isOpen && (
          <Animated.View
            style={[styles.overlay, { opacity: overlayOpacity }]}
            pointerEvents="none"
          />
        )}

        <View style={styles.uiContainer}>
          <View style={styles.upper}>

            <TouchableOpacity style={styles.iconButton} onPress={toggleSlider}>
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>



            <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/allCarsScreen')}>
              <FontAwesome5 name="car" size={30} color="black" />
            </TouchableOpacity>




          </View>

          <TouchableOpacity style={styles.locationButton}>
            <MaterialIcons name="my-location" size={30} color="black" />
          </TouchableOpacity>



          <View style={styles.lower}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => router.push('/scanScreen')}>

              <Text style={styles.buttonLabel}>Scanne Kennzeichen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
