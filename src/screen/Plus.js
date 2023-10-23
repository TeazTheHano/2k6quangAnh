import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Plus = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: "100%",
            backgroundColor: "black",
            borderRadius: 25,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 60,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 16, color: "#2D81FF" }}>Cancel</Text>
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              Create cards
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 16, color: "#2D81FF" }}>Done</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: "rgba(134, 223, 208, 0.65)",
              height: 480,
              marginTop: 50,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "900",
                marginTop: 20,
                marginLeft: 15,
              }}
            >
              Card 1
            </Text>
            <View
              style={{
                backgroundColor: "white",
                height: 82,
                borderRadius: 10,
                justifyContent: "center",
                marginTop: 10,
                marginHorizontal: 20,
              }}
            >
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: "#2D81FF", marginBottom: 10 }}>
                  Frontside
                </Text>
                <TextInput
                  placeholder="Max 100 characters"
                  style={{ fontWeight: "600", fontSize: 16 }}
                />
              </View>
            </View>
            <View
              style={{
                height: 307,
                borderRadius: 10,
                marginTop: 20,
                alignItems: "center",
                backgroundColor: "white",
                marginHorizontal: 20,
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#2D81FF" }}>Backside</Text>
                <TextInput
                  placeholder="Max 100 characters"
                  style={{ fontWeight: "600", fontSize: 16, marginVertical: 5 }}
                />
                <Text style={{ color: "#2D81FF", marginBottom: 5 }}>
                  Add photo
                </Text>
                <Image
                  source={require("../storages/contentcard/background.png")}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: 266,
              height: 48,
              backgroundColor: "rgba(134, 223, 208, 0.65)",
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 30,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 5 }}>
              Add another card
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Plus;

const styles = StyleSheet.create({});
