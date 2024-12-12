import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString()); // Evaluate the input
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const renderButton = (value) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input || "0"}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {["7", "8", "9", "/"].map(renderButton)}
        {["4", "5", "6", "*"].map(renderButton)}
        {["1", "2", "3", "-"].map(renderButton)}
        {["C", "0", "=", "+"].map(renderButton)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    padding: 16,
  },
  display: {
    backgroundColor: "#e1e1e1",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    alignItems: "flex-end",
  },
  inputText: {
    fontSize: 32,
    color: "#333",
  },
  resultText: {
    fontSize: 24,
    color: "#888",
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007AFF",
    width: "22%",
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: "1%",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default CalculatorApp;
