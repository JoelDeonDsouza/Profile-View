import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
// import {Ionicons, MaterialIcons} from "@expo/vector-icons"

export default function App() {
  return (
    <div className="App">
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri:
                    "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg"
                }}
                style={styles.image}
                resizeMode="center"
              />
            </View>
          </View>
          <View style={styles.add}>
            <TouchableOpacity
              size={100}
              style={{ marginTop: 1, marginRight: 4, alignItems: "center" }}
            >
              ➕
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>Albina Progozug</Text>
            <Text style={styles.text1}>Bartender</Text>
          </View>

          <Text style={[styles.subText, styles.recent]}>Description</Text>

          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text style={styles.text}>
                  My name is Alex Drysdale and I am a Junior Web Developer for
                  Oswald Technologies. I am an accomplished coder and
                  programmer, and I enjoy using my skills to contribute to the
                  exciting technological advances that happen every day at
                  Oswald Tech.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View tyle={styles.statsBox}>
              <Text style={[styles.text, styles.subText1]}>Service Charge</Text>
              <Text style={[styles.text, { fontSize: 20, marginLeft: 50 }]}>
                € 20
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textFill} onPress={() => this.changeColor()}>
              Hire
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  subText: {
    fontSize: 12,
    color: "#AEB5Bc",
    textTransform: "uppercase",
    fontWeight: 500,
    marginLeft: 20
  },
  subText1: {
    fontSize: 12,
    color: "#AEB5Bc",
    textTransform: "uppercase",
    fontWeight: 500,
    marginLeft: 25
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  add: {
    backgroundColor: "#95CD41",
    position: "absolute",
    bottom: 350,
    right: 30,
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  info: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 18
  },
  text: {
    fontWeight: "250",
    fontSize: 15,
    color: "#41444B",
    alignItems: "center"
  },
  text1: {
    color: "#708090",
    size: 14
  },
  recent: {
    marginLeft: 85,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 1
  },
  button: {
    // flexDirection: "row",
    backgroundColor: "#95CD41",
    width: 60,
    padding: 5,
    borderRadius: 19,
    marginLeft: 110,
    marginTop: 10
  },
  textFill: {
    marginLeft: 10,
    color: "white",
    fontWeight: "600"
  }
});
