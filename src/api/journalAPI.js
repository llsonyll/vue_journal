import axios from "axios";

const url = "https://journal-vue-6ea25-default-rtdb.firebaseio.com";

const journalApi = axios.create({
  baseURL: url,
});

export default journalApi;
