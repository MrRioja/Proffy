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

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: "#D4C2FF",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: "#04D351",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
