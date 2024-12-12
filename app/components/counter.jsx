import React, { useState } from "react";
import { FlatList, View, Button, StyleSheet, Text } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const data = [
    <Button
      style={styles.gridItem}
      title={"increment"}
      onPress={() => setCounter(counter + 1)}
    />,
    <Button
      style={styles.gridItem}
      title={"decrement"}
      onPress={() => setCounter(counter - 1)}
    />,
    <Button
      style={styles.gridItem}
      title="reset"
      onPress={() => setCounter(0)}
    />,
  ];
  const renderItem = ({ item }) => <View style={styles.gridItem}>{item}</View>;
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.text}>{counter}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} // Number of columns in the grid
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    borderColor: "black",
    width: "95%",
    margin: 10,
    padding: 10,
    fontWidth: 600,
    color: "black",
  },
  text: {
    textAlign: "center",
  },
  gridItem: {
    width: 130, // Adjust based on the number of items per row
    margin: "1%", // Add spacing between items
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
});
