import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import AppIntroSlider from "react-native-app-intro-slider";
import RootStack from "./src/router/RootStack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const slides = [
  {
    id: 1,
    title: "Ghi chú",
    img: require("./src/storages/onboarding/onboarding1.png"),
    content:
      "Ghi chú, take note lại tất cả những kiến thức muốn ghi nhớ của riêng bạn",
    color: "#F16A4B",
  },
  {
    id: 2,
    title: "Học tập",
    img: require("./src/storages/onboarding/onboarding2.png"),
    content:
      "Nhắc nhở lặp lại, tự kiểm tra và theo dõi tiến độ, kết quả học tập.",
    color: "#F16A4B",
  },
  {
    id: 3,
    title: "Học tập, ghi nhớ dễ dàng hơn mỗi ngày với Flashcard",
    img: require("./src/storages/onboarding/onboarding3.png"),
    color: "#FFFFFF",
  },
];

export default function App() {
  const [showHomePage, setshowHomePage] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const appIntroSliderRef = useRef(null);

  const RenderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Image
          source={item.img}
          style={{
            width: 371,
            height: 300,
            alignSelf: "center",
            marginTop: "50%",
          }}
        />
        <Text
          style={{
            marginTop: 90,
            paddingBottom: 5,
            fontSize: 32,
            color: item.color,
            alignSelf: "center",
            fontWeight: "700",
            width: 300,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: 345,
            color: "#C6C6C6",
            fontSize: 18,
            alignSelf: "center",
            fontWeight: "400",
            marginTop: 13,
          }}
        >
          {item.content}
        </Text>
      </View>
    );
  };
  const handelNext = () => {
    if (appIntroSliderRef.current) {
      appIntroSliderRef.current.goToSlide(
        appIntroSliderRef.current.state.activeIndex + 1
      );
    }
  };

  const onDone = () => {
    setshowHomePage(true);
  };

  const renderNextButton = () => {
    return (
      <TouchableOpacity
        onPress={handelNext}
        style={{
          position: "relative",
          bottom: 50,
          right: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "#86DFD0",
            width: 108,
            height: 50,
            borderRadius: 40,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", marginRight: 10 }}>
            Tiếp
          </Text>
          <AntDesign name="arrowright" size={20} color="black" />
        </View>
      </TouchableOpacity>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={onDone}
        style={{
          position: "relative",
          bottom: 50,
          right: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "#86DFD0",
            width: 108,
            height: 50,
            borderRadius: 40,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", marginRight: 10 }}>
            Bắt đầu
          </Text>
          <AntDesign name="arrowright" size={20} color="black" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      {showHomePage ? (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <RootStack />
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          ref={appIntroSliderRef}
          showDoneButton={true}
          renderNextButton={renderNextButton}
          renderDoneButton={renderDoneButton}
          activeIndex={currentPage}
          activeDotStyle={{
            width: 0,
          }}
          dotStyle={{
            width: 0,
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCircle: {
    width: 41,
    height: 41,
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  skip: {
    alignItems: "flex-end",
    marginRight: "5%",
  },
});
