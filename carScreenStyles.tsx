
import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    carContainer: {
        height: height,
        width: "100%",
        backgroundColor: "hsl(0, 0%, 75%)",
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,

    },
    handleBar: {
        width: 50,
        height: 5,
        backgroundColor: "white",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 10
    },
    goBackButton: {
        height: 45,
        width: 45,
        borderRadius: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",

    },
    carImageContainer: {
        height: 220,
        width: "90%",
        borderColor: "white",
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 15,
    },
    licensePlateContainer: {
        position: "absolute",
        top: 80,
        left: 30,
        height: 35,
        width: 125,
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    carStatus: {
        position: "absolute",
        top: 80,
        right: 30,
        height: 35,
        width: 125,
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    licensePlateLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    statusLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
    },
    carName: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 5,
        marginLeft: 25,
    },
    carPrice:{
        fontSize: 18,
        color: 'hsl(0, 0%, 15%)',
        
        marginLeft: 25,
    },
    carType: {
        fontSize: 18,
        color: 'hsl(0, 0%, 30%)',
        fontStyle: "italic",
        marginLeft: 25,
    },
    fuelLevel: {
        alignSelf: 'center',
        marginTop: 3,
    },
    progressWrapper: {
        position: 'relative',
        width: 330,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    fuelLevelLabel: {
        position: 'absolute',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        top:5
    },
    carInfo: {
        fontSize: 16,
        color: 'hsl(0, 0%, 30%)',
        marginTop: 10,
        textAlign: 'center',
        fontStyle: "italic",
        width: "90%",
        alignSelf: 'center',
    },
    bookNowButton: {
        height: 50,
        width: "90%",
        backgroundColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 25,
        
    },
    bookNowLabel: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },





    carMainInfo: {},

});

export default styles;