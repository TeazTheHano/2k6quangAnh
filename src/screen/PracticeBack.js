import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PracticeBack = () => {
  const navigation = useNavigation();
  const rec = [
    {
      id: 1,
      img: require("../storages/contentcard/rec1.png"),
    },
    {
      id: 1,
      img: require("../storages/contentcard/rec2.png"),
    },
    {
      id: 1,
      img: require("../storages/contentcard/rec2.png"),
    },
    {
      id: 1,
      img: require("../storages/contentcard/rec2.png"),
    },
    {
      id: 1,
      img: require("../storages/contentcard/rec2.png"),
    },
    {
      id: 1,
      img: require("../storages/contentcard/rec2.png"),
    },
    {
      id: 1,
      img: require("../storages/contentcard/rec2.png"),
    },
  ];
  return (
    <View>
      <View
        style={{
          marginBottom: 30,
          height: 100,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 60,
          }}
        >
          <Ionicons
            name="close"
            size={40}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Octicons name="sync" size={24} color="black" />
              <Text style={{ fontWeight: "600", marginLeft: 10 }}>
                Review: <Text style={{ color: "red" }}>1</Text>/7
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              {rec.map((data, index) => {
                return <Image key={index} source={data.img} />;
              })}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 802,
          backgroundColor: "#FFC800",
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 142,
            backgroundColor: "black",
            position: "absolute",
            width: "100%",
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Image source={require("../storages/contentcard/emoji.png")} />
          <Image source={require("../storages/contentcard/emoji2.png")} />
          <Image source={require("../storages/contentcard/emoji4.png")} />
          <Image source={require("../storages/contentcard/emoji3.png")} />
          <AntDesign name="right" size={40} color="#86DFD0" />
        </View>
        <View
          style={{
            borderWidth: 5,
            width: 368,
            height: 520,
            borderRadius: 20,
            borderColor: "#86DFD0",
            marginVertical: 70,
            backgroundColor: "black",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 305,
              height: 72,
              backgroundColor: "white",
              borderRadius: 50,
              position: "absolute",
              top: -40,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#DA2900",
                  width: 14,
                  height: 14,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: "gray", fontSize: 10, marginVertical: 3 }}>
                Again
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>0</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#6DC394",
                  width: 14,
                  height: 14,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: "gray", fontSize: 10, marginVertical: 3 }}>
                Hard
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>0</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#2D81FF",
                  width: 14,
                  height: 14,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: "gray", fontSize: 10, marginVertical: 3 }}>
                Good
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>0</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#FFC800",
                  width: 14,
                  height: 14,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: "gray", fontSize: 10, marginVertical: 3 }}>
                Easy
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>0</Text>
            </View>
          </View>
          <Text
            style={{
              textDecorationLine: "underline",
              marginTop: 50,
              fontSize: 20,
              fontWeight: "600",
              color: "#86DFD0",
              marginBottom: 20,
            }}
          >
            Backside
          </Text>
          <Image
            source={require("../storages/contentcard/emojiback/img1.png")}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: "600",
              color: "#86DFD0",
              textAlign: "center",
              width: 270,
            }}
          >
            A person who participates in sports and games, often competing in
            events.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.replace("PracticeFront")}
            style={{
              width: 77,
              height: 77,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              borderWidth: 3,
              position: "absolute",
              bottom: -40,
              borderColor: "#86DFD0",
            }}
          >
            <Octicons name="sync" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PracticeBack;

const styles = StyleSheet.create({});
