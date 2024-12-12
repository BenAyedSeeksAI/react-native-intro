import React from "react";
import { StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// comp
import Counter from "./components/counter";
import LoginApp from "./components/login";
import CalculatorApp from "./components/CalculatorApp";
const counterName = "counter";
const loginName = "login";
const calculatorName = "calculator";

const Tab = createBottomTabNavigator();
const options = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    let rn = route.name;

    if (rn == counterName) {
      iconName = focused ? "home" : "home-outline";
    } else if (rn == calculatorName) {
      iconName = focused ? "calculator" : "calculator-outline";
    } else {
      iconName = focused ? "list" : "list-outline";
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});
export default function App() {
  return (
    <Tab.Navigator initialRouteName={counterName} screenOptions={options}>
      <Tab.Screen name={counterName} component={Counter} />
      <Tab.Screen name={loginName} component={LoginApp} />
      <Tab.Screen name={calculatorName} component={CalculatorApp} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
});
