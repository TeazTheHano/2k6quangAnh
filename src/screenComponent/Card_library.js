import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card_library = () => {
  const navigation = useNavigation();
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
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate("DetailCardLibrary")}
        style={{ marginLeft: 10 }}
      >
        <View
          style={{
            width: 147,
            height: 36,
            backgroundColor: "#FFC800",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={{ fontSize: 10, color: "gray", fontWeight: "900" }}>
              5 desks:
            </Text>
            <Text style={{ color: "#A4A2A2", fontSize: 10, marginLeft: 5 }}>
              100 cards
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 248,
            height: 120,
            backgroundColor: "#FFF5D1",
            marginTop: 25,
            borderRadius: 20,
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                fontWeight: "900",
                width: 212,
              }}
            >
              English Phrasal verb B1 level 1
            </Text>
            <View
              style={{
                width: 212,
                height: 24,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 12, color: "gray" }}>
                Language/English
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../storages/avt1.png")} />
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 8, fontWeight: "300", color: "white" }}
                  >
                    quanganh06
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image source={require("../storages/stargold.png")} />
                    <Text style={{ color: "gray", fontSize: 10 }}>(09)</Text>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                  }}
                >
                  <Text style={{ fontSize: 10, color: "gray" }}>06</Text>
                  <Text
                    style={{ fontSize: 10, color: "gray", marginHorizontal: 5 }}
                  >
                    Saved
                  </Text>
                  <Ionicons name="bookmark-outline" size={16} color="gray" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default Card_library;

const styles = StyleSheet.create({});
