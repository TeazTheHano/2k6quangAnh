import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Card_1 from "../screenComponent/Card_1";
import Card_library from "../screenComponent/Card_library";
import CardScience from "../screenComponent/CardScience";
import CardLanguage from "../screenComponent/CardLanguage";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();
  const card = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <View style={{ height: "100%", backgroundColor: 'white' }}>
      <Image
        source={require("../storages/onboarding/onboarding1.png")}
        style={{ position: "absolute", width: "100%", opacity: 0.2 }}
      />
      <View
        style={{
          height: 108,
          width: "100%",
          backgroundColor: "rgba(23, 86, 75, 0.9)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 40,
            paddingTop: 60,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "900",
            }}
          >
            quanganh06
          </Text>
          <Feather name="bell" size={30} color="white" />
        </View>
      </View>
      <ScrollView
        style={{
          height: 306,
        }}
      >

        <View
          style={{
            height: 77,
            backgroundColor: "#12453C",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image source={require("../storages/avt.png")} />
          <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
            2000 Follower
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              marginHorizontal: 20,
              fontWeight: "700",
            }}
          >
            0 Following
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(23, 86, 75, 0.9)",
            justifyContent: "space-around",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              height: 100,
              width: 126,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Feather
              name="paperclip"
              size={24}
              color="#1F6256"
              style={{ marginTop: 10 }}
            />
            <Text
              style={{ fontSize: 24, color: "#2D81FF", fontWeight: "900" }}
            >
              2350
            </Text>
            <Text
              style={{
                marginBottom: 10,
                color: "#2D81FF",
                fontWeight: "900",
                fontSize: 10,
              }}
            >
              CARDS
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: 126,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Feather
              name="bookmark"
              size={24}
              color="#1F6256"
              style={{ marginTop: 10 }}
            />
            <Text
              style={{ fontSize: 24, color: "#FF9600", fontWeight: "900" }}
            >
              450
            </Text>
            <Text
              style={{
                marginBottom: 10,
                color: "#FF9600",
                fontWeight: "900",
                fontSize: 10,
              }}
            >
              <Text style={{ color: "grey" }}>cards</Text> BE SAVED
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: 126,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Feather
              name="flag"
              size={24}
              color="#1F6256"
              style={{ marginTop: 10 }}
            />
            <Text style={{ fontSize: 24, color: "black", fontWeight: "900" }}>
              320
            </Text>
            <Text
              style={{
                marginBottom: 10,
                color: "black",
                fontWeight: "900",
                fontSize: 10,
              }}
            >
              REVIEWED
            </Text>
          </View>
        </View>
        <View>
          {card.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  marginTop: 10,
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
                        style={{
                          fontSize: 12,
                          color: "#2D81FF",
                          marginLeft: 10,
                        }}
                      >
                        has public a new set in “English”
                      </Text>
                    </View>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Feather name="globe" size={15} color="gray" />
                      <Text
                        style={{ fontSize: 12, color: "gray", marginLeft: 5 }}
                      >
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
          <View style={{ height: 208, backgroundColor: "#1F6256" }}>
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={require("../storages/crown.png")} />
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 10,
                      fontWeight: "600",
                    }}
                  >
                    Top Rated Set
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "gray", marginRight: 10 }}>More</Text>
                  <AntDesign name="right" size={20} color="gray" />
                </View>
              </View>
            </View>
            <ScrollView horizontal style={{ marginTop: 10, marginLeft: 20 }}>
              <Card_library />
            </ScrollView>
          </View>
          <View>
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
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 10,
                      fontWeight: "600",
                    }}
                  >
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
                  <MaterialCommunityIcons
                    name="test-tube"
                    size={24}
                    color="black"
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 10,
                      fontWeight: "600",
                    }}
                  >
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
