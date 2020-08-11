import { StyleSheet } from "react-native";
import { Archivo_700Bold } from "@expo-google-fonts/archivo";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: "Poppins_400Regular",
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: "#9871F5",
  },

  buttonSecondary: {
    backgroundColor: "#04D361",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 280,
    marginTop: 30,
  },
});

export default styles;
