import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card_1 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("LearnDetailLibrary")}>
      <View
        style={{
          width: 226,
          height: 36,
          backgroundColor: "#4F4F4F",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <View
          style={{ flexDirection: "row", marginBottom: 10, marginLeft: 20 }}
        >
          <Text style={{ fontSize: 10, color: "white", fontWeight: "900" }}>
            5 desks:
          </Text>

          <Text style={{ color: "#86DFD0", fontSize: 10, marginLeft: 10 }}>
            100 cards
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 366,
          height: 104,
          backgroundColor: "#3C3C3C",
          marginTop: 25,
          borderRadius: 20,
        }}
      >
        <View style={{ width: "100%", marginTop: 20, marginLeft: 20 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "900" }}>
            English Phrasal verb B1 level 1
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 20,
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="users" size={14} color="gray" />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 5 }}>
                  Public
                </Text>
              </View>
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
};

export default Card_1;

const styles = StyleSheet.create({});
