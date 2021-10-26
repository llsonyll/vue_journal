import axios from "axios";

const url =
  "https://api.cloudinary.com/v1_1/dr9htpiy2/image/upload";

const cloudinaryAPI = axios.create({
  baseURL: url,
});

export default cloudinaryAPI;
