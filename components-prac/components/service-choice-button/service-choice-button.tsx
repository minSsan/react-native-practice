import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ChoiceButtonProps } from "./service-choice-button.props";

export const ServiceChoiceButton = (props: ChoiceButtonProps) => {
  const { title, subtitle } = props;
  return (
    <Pressable style={styles.container}>
      {/* title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.titleImage}
          source={require("../../assets/images/left-arrow.png")}
        />
      </View>

      {/* subtitle */}
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* image */}
      <Image
        style={styles.image}
        source={
          title === "펫시팅"
            ? require("../../assets/images/service_petsitting.png")
            : title === "훈련"
                ? require("../../assets/images/service_training.png")
                : ""
        }
      />
    </Pressable>
  );
};
