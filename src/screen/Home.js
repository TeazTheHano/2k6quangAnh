import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import Card from "../screenComponent/Card";

const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 60,
            paddingBottom: 26,
            paddingHorizontal: 26,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image source={require("../storages/avt.png")} />
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#FFFFFF",
                  fontWeight: "700",
                  marginBottom: 5,
                }}
              >
                Hi Quang Anh
              </Text>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
                Let’s learn together!
              </Text>
            </View>
          </View>
          <Octicons
            name="bell"
            size={30}
            color="white"
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            marginTop: 4,
            color: "white",
            fontWeight: 600,
            marginLeft: 22,
          }}
        >
          Weekly progress
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View style={styles.group}>
            <Text style={styles.text}>M</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>T</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>W</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>TH</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>F</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>S</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>SU</Text>
            <Image
              style={styles.img}
              source={require("../storages/fire.png")}
            />
            <Text style={styles.textfire}>+10 ex</Text>
          </View>
        </View>
        <View
          style={{
            width: 240,
            height: 40,
            backgroundColor: "#F16A4B",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 31,
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "900" }}>
            Tap to recive +10 experience
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#2D81FF",
            height: 128,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <View style={{ width: "60%" }}>
            <Text style={{ fontSize: 16, color: "#FFC800" }}>Good Job</Text>
            <Text style={{ fontSize: 14, color: "white", width: "100%" }}>
              Practice 2 more days, you are going to reach your study plan.
            </Text>
          </View>
          <Image source={require("../storages/img1.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            paddingBottom: "14%",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <View style={{ width: 182, alignItems: "center" }}>
            <Text style={{ fontSize: 64, color: "#F16A4B" }}>30</Text>
            <Text style={{ color: "#A4A2A2", width: 108, textAlign: "center" }}>
              cards need to <Text style={{ color: "#F16A4B" }}>repeat</Text>{" "}
              today
            </Text>
          </View>
          <View style={{ width: 200, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "#A4A2A2" }}>
              <Text style={{ fontSize: 64, color: "#FF9600" }}>90</Text>/190{" "}
            </Text>
            <Text style={{ color: "#A4A2A2", width: 140, textAlign: "center" }}>
              90 cards <Text style={{ color: "#FF9600" }}>memorized</Text> for
              all time
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 53 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                Your Set
              </Text>
              <Text style={{ color: "#FFFFFF" }}>3 set</Text>
            </View>

            <View
              style={{
                width: 173,
                height: 58,
                backgroundColor: "white",
                borderRadius: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  width: 84,
                  height: 48,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Repeat today
                </Text>
              </View>
              <Text style={{ marginRight: 20 }}>All set</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            paddingBottom: 100,
            alignSelf: "center",
          }}
        >
          <Card />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "900",
    color: "#575757",
  },
  group: {
    alignItems: "center",
  },
  img: { marginTop: 10 },
  textfire: {
    color: "#FF9600",
    fontSize: 8,
    fontWeight: "900",
    marginTop: 7,
  },
});
