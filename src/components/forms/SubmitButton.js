import React from "react";
import { useFormikContext } from "formik";

//import Button from "../Button";

function SubmitButton({ title }) {
  //const { handleSubmit } = useFormikContext();

  return(
    <button type="submit">{title}</button>
  )
   
}

export default SubmitButton;

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: colors.purple['600'],
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 15,
//     width: "100%",
//     marginVertical: 10,
//   },
//   text: {
//     color: colors.white,
//     fontSize: 18,
//     textTransform: "uppercase",
//     fontWeight: "bold",
//   },
// });