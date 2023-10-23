import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailCard")}>
      <View
        style={{
          width: 226,
          height: 36,
          backgroundColor: "#4F4F4F",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontSize: 10, color: "white" }}>3 desks:</Text>
          <Image
            style={{ marginHorizontal: 15 }}
            source={require("../storages/circle.png")}
          />
          <Text style={{ color: "#A4A2A2", fontSize: 10 }}>
            <Text style={{ color: "#86DFD0" }}>12</Text>/30
            <Text style={{ color: "#86DFD0" }}>cards memorized</Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 366,
          height: 124,
          backgroundColor: "#3C3C3C",
          marginTop: 25,
          borderRadius: 20,
        }}
      >
        <View style={{ width: "100%", marginTop: 10, marginLeft: 20 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "900" }}>
            B1 Vocabularies
          </Text>
          <View
            style={{
              width: 195,
              height: 24,
              borderRadius: 10,
              backgroundColor: "#86DFD0",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>
              <Text style={{ fontWeight: "700" }}>10 cards</Text> need to repeat
              today
            </Text>
          </View>
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

export default Card;

const styles = StyleSheet.create({});
