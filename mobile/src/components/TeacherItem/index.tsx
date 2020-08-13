import React from "react";
import { View, Text, Image } from "react-native";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/mrrioja.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Luiz Rioja</Text>
          <Text style={styles.subject}>Educação Física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Aficionado por esportes e competições
        {"\n"}
        {"\n"}
        Apaixonado por natação e futebol.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{"   "}
          <Text style={styles.priceValue}>R$ 70,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
