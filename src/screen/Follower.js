import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Follower = () => {
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
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];
  return (
    <ScrollView style={{ height: 800 }}>
      {card.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              width: 368,
              height: 44,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 80,
              borderBottomWidth: 1,
              paddingBottom: 20,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather name="globe" size={15} color="gray" />
                  <Text style={{ fontSize: 12, color: "gray", marginLeft: 5 }}>
                    33 minutes ago
                  </Text>
                </View>
              </View>
            </View>

            <Feather name="user-minus" size={24} color="black" />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Follower;

const styles = StyleSheet.create({});
