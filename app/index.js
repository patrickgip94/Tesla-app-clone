// UTILITIES
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

// ICON
import { FontAwesome } from "@expo/vector-icons";

// COMPONENT
import menuOptions from "../assets/menuOptions";
import MenuOption from "../component/MenuOption";
import Controls from "../component/Controls";
import car from "../assets/images/car.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <FontAwesome
            name="battery-4"
            size={24}
            color="green"
            style={{ marginBottom: 5 }}
          />
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain" />

      {/* <Controls /> */}

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
