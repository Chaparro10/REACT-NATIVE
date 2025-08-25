import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <View style={styles.containerButton}>
          <FAB
          label="-1"
          onPress={() => setCount(count - 1)}
          onLongPress={() => setCount(count - 5)}
          position="left"
        />

        <FAB
          label="+1"
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(count + 5)}
          position="right"
        />
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
    // borderWidth: 1,//border solid 1px red
    // borderColor: "red",
    // borderStyle: "solid",
  },
  textHuge: {
    fontSize: 120,
    fontWeight: "300",
    marginBottom: 100,
  },
});
