import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LearnDetail = () => {
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
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: "#FFC800",
          flex: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../storages/onboarding/onboarding1.png")}
            style={{ position: "absolute", height: 149, alignItems: "center" }}
          />

          <View
            style={{
              height: 149,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
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
              B1 Vocabularies
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "900",
                }}
              >
                /Sport
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
            marginTop: 33,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PracticeFront")}
            style={{
              width: 166,
              height: 203,
              borderWidth: 2,
              borderRadius: 10,
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: 30,
                height: 30,
                backgroundColor: "#A84035",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
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
                07
              </Text>
            </View>
            <Text style={{ fontSize: 24, fontWeight: "900", marginTop: 10 }}>
              Review
            </Text>
            <Text style={{ fontSize: 10, color: "gray", fontWeight: "600" }}>
              07 cards to review today
            </Text>
            <Image
              source={require("../storages/contentcard/img1.png")}
              style={{
                width: 115,
                height: 115,
                position: "absolute",
                bottom: 0,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 166,
              height: 203,
              borderWidth: 2,
              borderRadius: 10,
              backgroundColor: "#A84035",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "900",
                marginTop: 40,
                color: "white",
              }}
            >
              Practice
            </Text>
            <Image
              source={require("../storages/contentcard/img2.png")}
              style={{ position: "absolute", bottom: 0 }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            marginTop: 30,
            borderRadius: 20,
            paddingBottom: 100,
          }}
        >
          <View style={{ marginHorizontal: 25, marginTop: 25 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Flashcard:
              </Text>
              <AntDesign
                name="checkcircle"
                size={15}
                color="black"
                style={{ marginLeft: 10, marginRight: 5 }}
              />
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                1/
                <Text style={{ fontWeight: "400", color: "gray" }}>
                  10 cards memoried
                </Text>
              </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Image
                source={require("../storages/contentcard/bar1.png")}
                style={{ width: "100%" }}
              />
            </View>
            <View>
              {cardcontent.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: "100%",
                      borderWidth: 1,
                      height: 42,
                      justifyContent: "center",
                      borderRadius: 10,
                      marginTop: 20,
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
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
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
              <View
                style={{
                  width: "100%",
                  borderWidth: 1,
                  height: 42,
                  justifyContent: "center",
                  borderRadius: 10,
                  marginTop: 20,
                  backgroundColor: "black",
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
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign name="checkcircle" size={20} color="white" />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "white",
                        marginLeft: 10,
                      }}
                    >
                      Training
                    </Text>
                  </View>

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
                      The process of preparing and practicing to improve skills
                      and fitness for a sport.
                    </Text>
                    <Feather name="edit-3" size={24} color="#A4A4A4" />
                  </View>
                </View>
              </View>
              {cardcontent.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: "100%",
                      borderWidth: 1,
                      height: 42,
                      justifyContent: "center",
                      borderRadius: 10,
                      marginTop: 20,
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
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
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
            <TouchableOpacity
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../storages/nav/add.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: "#FCFCFC",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LearnDetail;

const styles = StyleSheet.create({});
