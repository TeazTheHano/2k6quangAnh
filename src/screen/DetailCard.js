import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require("../storages/onboarding/onboarding1.png")}
        style={{ position: "absolute", height: 247 }}
      />
      <View
        style={{
          height: 247,
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            height: 149,
            backgroundColor: "rgba(0, 0, 0, 0.78)",
            borderRadius: 25,
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
              fontWeight: "900",
              marginLeft: 20,
              marginTop: 30,
            }}
          >
            B1 Vocabularies
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
          <View style={{ width: 130, height: 99, alignItems: "center" }}>
            <Text
              style={{
                color: "#86DFD0",
                fontSize: 24,
                fontWeight: "900",
                marginTop: 15,
              }}
            >
              10
            </Text>
            <Image
              source={require("../storages/bar/bar1.png")}
              style={{ marginVertical: 5 }}
            />
            <Text
              style={{
                color: "gray",
                fontSize: 10,
                textAlign: "center",
                width: 106,
                height: 26,
              }}
            >
              cards of this set need to
              <Text style={{ color: "#86DFD0" }}> repeat today</Text>
            </Text>
          </View>
          <View style={{ width: 130, height: 99, alignItems: "center" }}>
            <Text
              style={{
                color: "#FF9600",
                fontSize: 24,
                fontWeight: "900",
                marginTop: 15,
              }}
            >
              12<Text style={{ color: "gray", fontSize: 16 }}>/30</Text>
            </Text>
            <Image
              source={require("../storages/bar/bar2.png")}
              style={{ marginVertical: 5 }}
            />
            <Text
              style={{
                color: "gray",
                fontSize: 10,
                textAlign: "center",
                width: 106,
                height: 26,
              }}
            >
              cards <Text style={{ color: "#FF9600" }}>memorized</Text> for all
              time
            </Text>
          </View>
          <View style={{ width: 130, height: 99, alignItems: "center" }}>
            <Text
              style={{
                color: "#86DFD0",
                fontSize: 24,
                fontWeight: "900",
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  color: "#FFC800",
                  fontSize: 24,
                  fontWeight: "900",
                  marginTop: 15,
                }}
              >
                1<Text style={{ color: "gray", fontSize: 16 }}>/3</Text>
              </Text>
            </Text>
            <Image
              source={require("../storages/bar/bar3.png")}
              style={{ marginVertical: 5 }}
            />
            <Text
              style={{
                color: "gray",
                fontSize: 10,
                textAlign: "center",
                width: 106,
                height: 26,
              }}
            >
              desks
              <Text style={{ color: "#FFC800" }}> completed</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 64 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LearnDetail")}
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#FFC800",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "#A84035",
                padding: 10,
                top: -8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  position: "absolute",
                  fontSize: 12,
                  textAlign: "center",
                  width: 30,
                  fontWeight: "900",
                }}
              >
                !07
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 25 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Sport</Text>
              <Image
                source={require("../storages/card.png")}
                style={{ marginVertical: 10 }}
              />
              <Image
                source={require("../storages/bar1.png")}
                style={{ marginBottom: 5 }}
              />
              <Text style={{ fontSize: 12 }}>1/10</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#FFC800",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "#A84035",
                padding: 10,
                top: -8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  position: "absolute",
                  fontSize: 12,
                  textAlign: "center",
                  width: 30,
                  fontWeight: "900",
                }}
              >
                !03
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 25 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Health</Text>
              <Image
                source={require("../storages/card.png")}
                style={{ marginVertical: 10 }}
              />
              <Image
                source={require("../storages/bar1.png")}
                style={{ marginBottom: 5 }}
              />
              <Text style={{ fontSize: 12 }}>1/10</Text>
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
            style={{
              width: 166,
              height: 203,
              backgroundColor: "#86DFD0",
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: 30,
                height: 30,
                position: "absolute",
                backgroundColor: "black",
                padding: 10,
                top: -8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="check"
                size={20}
                color="#86DFD0"
                style={{ position: "absolute", width: 20 }}
              />
            </View>
            <View style={{ alignItems: "center", marginTop: 25 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Laws</Text>
              <Image
                source={require("../storages/card1.png")}
                style={{ marginVertical: 10 }}
              />
              <Image
                source={require("../storages/bar2.png")}
                style={{ marginBottom: 5 }}
              />
              <Text style={{ fontSize: 12 }}>10/10</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateNewCard")}
            style={{
              width: 166,
              height: 203,
              borderColor: "#86DFD0",
              borderRadius: 9,
              alignItems: "center",
              borderWidth: 3,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  height: 31,
                  width: 139,
                  lineHeight: 20,
                  fontWeight: "600",
                  marginBottom: 20,
                  marginTop: 30,
                }}
              >
                Create a new desk
              </Text>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#86DFD0",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="plus" size={50} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({});
