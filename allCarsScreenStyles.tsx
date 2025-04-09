import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    allCarsContainer: {
        height: height,
        width: "100%",
        backgroundColor: "hsl(0, 0%, 85%)",
    },
    header: {
        height: 75,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:30
    },
    button: {
        height: 45,
        width: 45,
        borderRadius: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black",
    },
    carContainer:{
        height: 325,
        width: "90%",
        backgroundColor:'white',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5, 
        
    },
    statusContainer:{
        position: "absolute",
        top: 15,
        right: 10,
        height: 35,
        width: 110,
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    locationButton:{
        position: "absolute",
        top: 10,
        left: 10,
        height: 50,
        width: 50,
        backgroundColor: "white",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    statusLabel:{
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
    },
    carImage:{
        width: "100%",
        height: "75%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    carName:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 10,
        marginLeft: 10,
    },
    carType:{
        fontSize: 18,
        color: "hsl(0, 0%, 30%)",
        fontStyle: "italic",
        marginLeft: 10,
    },
    carPrice:{
        fontSize: 18,
        color: "hsl(0, 0%, 15%)",
        marginLeft: 10,
    },
    scrollView:{
        paddingBottom:10,
        width: "100%",
        height: "100%",
        
    },
});

export default styles;