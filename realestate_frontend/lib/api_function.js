import axios from "axios";

export const sendUser = async (data) => {
  axios
    .post("/api/createUser", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => console.log("SUccess"));
};
