import React from "react";
// import { View, TextInput, StyleSheet } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

//import defaultStyles from "../config/styles";

// const container = {
//   // backgroundColor: defaultStyles.colors.gray['100'],
//   borderRadius: "10px",
//   flexDirection: "row",
//   padding: "15px",
//   marginVertical: "10px",
// };

function TextInput({ width = "100%", ...otherProps }) {
  return (
    // <div style={[styles.container, { width }]}>
    <div >
      <input type="text" {...otherProps}/>
      
      {/* <TextInput
        placeholderTextColor={defaultStyles.colors.gray['500']}
        style={defaultStyles.text}
        {...otherProps}
      /> */}
    </div>
  );
}



export default TextInput;