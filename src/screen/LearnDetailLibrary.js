import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LearnDetailLibrary = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../storages/onboarding/onboarding1.png")}
          style={{ position: "absolute", height: 149, alignItems: "center" }}
        />

        <View
          style={{
            height: 149,
            backgroundColor: "rgba(107, 97, 168, 0.82)",
            borderRadius: 25,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 30,
              marginTop: 42,
            }}
          >
            <AntDesign
              name="left"
              size={30}
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Feather name="bell" size={30} color="white" />
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "900",
              marginTop: 30,
              marginLeft: 30,
            }}
          >
            Set: English Phrasal verb B1 level 1
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 30 }}>
        <Text style={{ fontSize: 16, color: "#8E83E0", fontWeight: "700" }}>
          Created by
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../storages/avt1.png")}
              style={{ width: 44, height: 44 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  color: "gray",
                  marginBottom: 10,
                }}
              >
                quanganh06
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/stargold.png")}
                  style={{ width: 100, height: 15 }}
                />
                <Text style={{ color: "gray", fontSize: 14 }}>(98)</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginLeft: 20,
            }}
          >
            <Text style={{ fontSize: 14, color: "gray" }}>06</Text>
            <Text style={{ fontSize: 14, color: "gray", marginHorizontal: 5 }}>
              Saved
            </Text>
            <Ionicons name="bookmark-outline" size={24} color="gray" />
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 35 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Flashcard:</Text>

          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            4 desks/
            <Text style={{ fontWeight: "400", color: "gray" }}>100 cards</Text>
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListLibrary")}
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#D5CEFF",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Level 1a</Text>
              <Image
                source={require("../storages/card2.png")}
                style={{ marginVertical: 10 }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 12 }}>25 cards</Text>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "rgba(195, 187, 243, 0.64)",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginLeft: 45,
                  }}
                >
                  <Entypo name="plus" size={24} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListLibrary")}
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#D5CEFF",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Level 1b</Text>
              <Image
                source={require("../storages/card2.png")}
                style={{ marginVertical: 10 }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 12 }}>25 cards</Text>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "rgba(195, 187, 243, 0.64)",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginLeft: 45,
                  }}
                >
                  <Entypo name="plus" size={24} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ListLibrary")}
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#D5CEFF",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Level 1c</Text>
              <Image
                source={require("../storages/card2.png")}
                style={{ marginVertical: 10 }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 12 }}>25 cards</Text>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "rgba(195, 187, 243, 0.64)",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginLeft: 45,
                  }}
                >
                  <Entypo name="plus" size={24} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListLibrary")}
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#D5CEFF",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Level 1d</Text>
              <Image
                source={require("../storages/card2.png")}
                style={{ marginVertical: 10 }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 12 }}>25 cards</Text>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "rgba(195, 187, 243, 0.64)",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginLeft: 45,
                  }}
                >
                  <Entypo name="plus" size={24} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LearnDetailLibrary;

const styles = StyleSheet.create({});
