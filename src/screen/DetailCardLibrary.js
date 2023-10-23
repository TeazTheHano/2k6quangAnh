import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import Card from "../screenComponent/Card";
import Card_1 from "../screenComponent/Card_1";
import { useNavigation } from "@react-navigation/native";

const DetailCardLibrary = () => {
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
              marginHorizontal: 20,
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
              fontWeight: "400",
              marginLeft: 20,
              marginTop: 30,
            }}
          >
            Language
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              /ENGLISH
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ alignSelf: "center", marginTop: 40 }}>
        <Card_1 />
      </View>
    </View>
  );
};

export default DetailCardLibrary;

const styles = StyleSheet.create({});
