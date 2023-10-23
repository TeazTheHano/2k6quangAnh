import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardLanguage = () => {
  const card = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return card.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          width: 140,
          height: 99,
          backgroundColor: "rgba(134, 223, 208, 0.29)",
          borderRadius: 20,
          marginRight: 10,
        }}
      >
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>English</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image source={require("../storages/language/uk.png")} />
            <Text style={{ color: "gray" }}>30 sets</Text>
          </View>
        </View>
      </View>
    );
  });
};

export default CardLanguage;

const styles = StyleSheet.create({});
