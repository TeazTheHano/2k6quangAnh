import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Card_library from "../screenComponent/Card_library";
import Card_1 from "../screenComponent/Card_1";

const Recently = () => {
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
  ];
  return (
    <ScrollView style={{ height: 700, marginTop: "10%" }}>
      {card.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              height: 239,
              borderTopWidth: 4,
              borderBottomWidth: 4,
              borderColor: "rgba(0, 0, 0, 0.1)",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 368,
                height: 44,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../storages/avt1.png")}
                style={{ width: 44, height: 44 }}
              />
              <View style={{ marginLeft: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "700" }}>
                    quanganh06
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: "#2D81FF", marginLeft: 10 }}
                  >
                    has public a new set in “English”
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather name="globe" size={15} color="gray" />
                  <Text style={{ fontSize: 12, color: "gray", marginLeft: 5 }}>
                    33 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginHorizontal: 30,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#2D81FF", fontWeight: "600" }}>
                Language | English
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Card_1 />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Recently;

const styles = StyleSheet.create({});
