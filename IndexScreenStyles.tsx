import { StyleSheet,Dimensions } from "react-native";

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerImage: {
    width: 65,
    height: 65,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 1, // Unterhalb des Sliders
  },
  uiContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    
  },
  upper: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    margin:30
  },
  lower: {
    height: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smallButton: {
    paddingHorizontal: 15,
    width: 250,
    height: 60,
    borderRadius: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonLabel: {
    fontWeight: "bold",
    fontSize: 19,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
  },
  slider: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 250,
    height:height,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    backgroundColor: "hsl(0, 0%, 85%)",
    zIndex: 3, // Oberhalb des Overlays
  },
  sliderContent: {
    
  },
  iconButton: {
    borderRadius: 90,
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  locationButton:{
    borderRadius: 90,
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:'flex-end',
    marginRight:30,
    marginTop:30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  accountSection:{
    backgroundColor:'white',
    height:100,
    width:'100%',
    alignSelf:'center',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    flexDirection:'row',
    alignItems:'center',
  },
  
  userName:{
    color:'black',
    fontWeight:'bold',
    fontSize:17,
    
  },
  userInfo:{
    color:'orange',
    fontSize:15,
    fontWeight:'bold',
  },
  optionRowSection:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:30
  },
  option:{
    backgroundColor:'white',
    height:405,
    width:'100%',
    borderRadius:10,
    marginTop:5
  },
  optionLabel:{
    fontSize:17,
    marginLeft:10,
    fontStyle:'italic'
  },
  signSection:{
    backgroundColor:'white',
    width:'100%',
    height:height,
    borderRadius:10,
    marginTop:5
  },
});

export default styles;
