import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListLibrary = () => {
  const navigation = useNavigation();
  const cardcontent = [
    {
      id: 1,
      title: "Athlete",
      content:
        "A person who participates in sports and games, often competing in events.",
    },
    {
      id: 2,
      title: "Match",
      content: "A competition between two individuals or teams in a sport.",
    },
    {
      id: 3,
      title: "Score",
      content: "The points earned by a team or player during a game or match.",
    },
    {
      id: 4,
      title: "Referee",
      content:
        "An official who enforces the rules in a sports event and makes decisions.",
    },
  ];
  return (
    <View style={{ height: "100%" }}>
      <Image
        source={require("../storages/onboarding/onboarding1.png")}
        style={{
          position: "absolute",
          height: 149,
          backgroundColor: "black",
          width: "100%",
        }}
      />

      <View
        style={{
          height: 149,
          backgroundColor: "rgba(107, 97, 168, 0.82)",
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
            marginTop: 20,
            width: 305,
          }}
        >
          English Phrasal verb B1 level 1/ Level 1a
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <View
          style={{ marginTop: 10, marginHorizontal: 30, paddingBottom: 20 }}
        >
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
                marginLeft: 100,
              }}
            >
              <Text style={{ fontSize: 14, color: "gray" }}>06</Text>
              <Text
                style={{ fontSize: 14, color: "gray", marginHorizontal: 5 }}
              >
                Saved
              </Text>
              <Ionicons name="bookmark-outline" size={24} color="gray" />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 30,
          marginTop: 35,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#8E83E0" }}>
            Flashcard:
          </Text>

          <Text style={{ fontWeight: "400", color: "gray", marginLeft: 10 }}>
            25 cards
          </Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "700", color: "#8E83E0" }}>
          Choose
        </Text>
      </View>
      <View>
        {cardcontent.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                width: "90%",
                borderWidth: 1,
                height: 42,
                justifyContent: "center",
                borderRadius: 10,
                marginTop: 20,
                marginHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 15,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  {data.title}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      width: 176,
                      height: 20,
                      fontSize: 16,
                      textAlign: "center",
                      marginRight: 20,
                      color: "#A4A4A4",
                    }}
                  >
                    {data.content}
                  </Text>
                  <Feather name="edit-3" size={24} color="#A4A4A4" />
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#8E83E0",
          height: 83,
          width: "100%",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Add to</Text>
      </View>
    </View>
  );
};

export default ListLibrary;

const styles = StyleSheet.create({});
