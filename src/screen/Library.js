import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { Image } from "react-native";
import Card_library from "../screenComponent/Card_library";
import CardLanguage from "../screenComponent/CardLanguage";
import CardScience from "../screenComponent/CardScience";

const Library = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../storages/onboarding/onboarding1.png")}
          style={{ position: "absolute", height: 178, alignItems: "center" }}
        />

        <View
          style={{
            height: 178,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 25,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 50,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 28,
                fontWeight: "900",
              }}
            >
              Library
            </Text>
            <Feather name="bell" size={30} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Image source={require("../storages/filter.png")} />
            <View
              style={{
                width: 327,
                height: 48,
                borderColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: 2,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 25,
              }}
            >
              <AntDesign
                name="search1"
                size={20}
                color="black"
                style={{ paddingHorizontal: 15 }}
              />
              <TextInput placeholder="Tìm kiếm" />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../storages/crown.png")} />
            <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "600" }}>
              Top Rated Set
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", marginRight: 10 }}>More</Text>
            <AntDesign name="right" size={20} color="gray" />
          </View>
        </View>
      </View>
      <ScrollView horizontal style={{ marginTop: 30, marginLeft: 20 }}>
        <Card_library />
      </ScrollView>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="globe" size={24} color="black" />
            <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "600" }}>
              Language
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", marginRight: 10 }}>More</Text>
            <AntDesign name="right" size={20} color="gray" />
          </View>
        </View>
      </View>
      <ScrollView horizontal style={{ marginTop: 30, marginLeft: 20 }}>
        <CardLanguage />
      </ScrollView>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="test-tube" size={24} color="black" />
            <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "600" }}>
              Science
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", marginRight: 10 }}>More</Text>
            <AntDesign name="right" size={20} color="gray" />
          </View>
        </View>
      </View>
      <ScrollView horizontal style={{ marginTop: 30, marginLeft: 20 }}>
        <CardScience />
      </ScrollView>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({});
