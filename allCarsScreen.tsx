import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import AntDesign from '@expo/vector-icons/AntDesign';

import styles from './allCarsScreenStyles';
import { useRouter } from 'expo-router';


export default function allCarsScreen() {
    const router = useRouter();
    return (
        <View style={styles.allCarsContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Alle Autos</Text>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="filter" size={28} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.carContainer} onPress={() => router.push('/carScreen')}>

                    <Image
                        source={{ uri: 'https://hannover.stadtmobil.de/media/_processed_/f/c/csm_eeef1cdd31e097be4014f27b9613900bc3d1b24b_b0a9008374.jpg' }}
                        style={styles.carImage}
                    />
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusLabel}>Verfügbar</Text>
                    </View>
                    <TouchableOpacity style={styles.locationButton}>
                        <AntDesign name="enviromento" size={28} color="black" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.carName}>Ford Puma</Text>
                    </View>
                    <Text style={styles.carPrice}>2,20 € pro Stunde</Text>
                    <Text style={styles.carType}>C - Kleiner Komfortabler</Text>


                </TouchableOpacity>
                <View style={styles.carContainer}>

                    <Image
                        source={{ uri: 'https://hannover.stadtmobil.de/media/_processed_/d/f/csm_9d7f87abbe0259d10ec9d2ec34118c510be68dd4_e1a3c374bf.jpg' }}
                        style={styles.carImage}
                    />
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusLabel}>Verfügbar</Text>
                    </View>
                    <TouchableOpacity style={styles.locationButton}>
                        <AntDesign name="enviromento" size={28} color="black" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.carName}>Audi A3 Sportback</Text>
                    </View>
                    <Text style={styles.carPrice}>3,20 € pro Stunde</Text>
                    <Text style={styles.carType}>D - Komfort</Text>


                </View>
                <View style={styles.carContainer}{...{marginBottom:20}}>

                    <Image
                        source={{ uri: 'https://hannover.stadtmobil.de/media/_processed_/3/5/csm_2d3b5c64a427bb18f317e95e0d72cb0178f9e47b_636fe1152e.jpg' }}
                        style={styles.carImage}
                    />
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusLabel}>Verfügbar</Text>
                    </View>
                    <TouchableOpacity style={styles.locationButton}>
                        <AntDesign name="enviromento" size={28} color="black" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.carName}>Mercedes C-Klasse</Text>
                    </View>
                    <Text style={styles.carPrice}>3,20 € pro Stunde</Text>
                    <Text style={styles.carType}>D - Komfort</Text>


                </View>

        
            </ScrollView>

        </View>
    )
}