import { Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";

const HEADER_HEIGHT = 56;

export const AnimateOpacityScreen = ({ navigation, route }) => {
  const handleScroll = (event) => {
    // ? 스크롤을 헤더만큼 내릴 때 불투명도가 100%가 되게끔 설정
    // ? ex. 헤더 높이의 10%만큼 스크롤을 내림 -> 불투명도 10%
    const headerOpacity = Math.min(
      Math.max(event.nativeEvent.contentOffset.y, 0) / HEADER_HEIGHT,
      1.0
    );

    console.log(headerOpacity);

    navigation.setOptions({
      //   ...navigation.options,
      headerStyle: {
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
      },
    });
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView
        onScroll={(event) => handleScroll(event)}
        scrollEventThrottle={16}
        // contentInsetAdjustmentBehavior="never"
      >
        {new Array(20).fill(0).map(() => (
          <Text style={{ fontSize: 40 }}>Content</Text>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
