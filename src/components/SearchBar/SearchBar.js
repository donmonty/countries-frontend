import React, { useState } from "react";
//import { StyleSheet, Image } from "react-native";
//import * as Yup from "yup";


import Form from '../forms/Form';
import FormField from '../forms/FormField';
import Dropdown from '../forms/Dropdown';

// const container = {
//   display: "flex",
//   padding: "10px",
  
// };

function SearchBar(props) {

  const handleSubmit = async ({ name, continent }) => {
    console.log('SUBMITED FORM VALUES:', { name, continent })
  }

  return (
    <div >
      {/* <Image style={styles.logo} source={require("../assets/logo-nubebar.png")} /> */}

      <Form
        initialValues={{ name: "", continent: "" }}
        onSubmit={handleSubmit}
      >
        <FormField
          name="name"
          placeholder="Enter a country name"
        />

        <Dropdown />
        
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}



export default SearchBar;