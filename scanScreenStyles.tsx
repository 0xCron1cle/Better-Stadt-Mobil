import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  scanContainer: {
    height: height,
    width: "100%",
    backgroundColor: "hsl(0, 0%, 85%)",
  },
  header: {
    height: 125,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  goBackButton: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  captureButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
  captureText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },


});

export default styles;