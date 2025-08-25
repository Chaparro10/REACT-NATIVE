import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface props {
  label: string;
  position?: 'left' | 'right';

  //methods
  onPress?: () => void;
  onLongPress?: () => void;
}
export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: props) {
  return (
    <View>
      <Pressable
        style={({pressed})=>[//detectar cuando este presionado
          styles.floatingButton,
        //   position == "left" ? styles.positionLeft : styles.positionRight,
          pressed ? {opacity:0.7}:{opacity:1}
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    padding: 20,
     borderRadius: 20,
    backgroundColor: "#65558F",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
     elevation: 3,
  },
});
