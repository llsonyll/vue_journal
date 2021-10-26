// export const action = async (/*{ commit }*/) => {};
// import cloudinaryAPI from "../../../../api/cloudinary";
import journalApi from "../../../../api/journalAPI";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  if (!data) {
    commit("setEntries", []);
    return;
  }

  const entries = [];

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  await journalApi.put(`/entries/${entry.id}.json`, {
    date: entry.date,
    text: entry.text,
    picture: entry.picture

  });

  commit("updateEntry", entry);
};

export const saveEntry = async (/*{ commit }*/) => {};

export const createEntry = async ({ commit }, entry) => {
  const { data } = await journalApi.post("/entries.json", {
    date: entry.date,
    text: entry.text,
    picture: entry.picture
  });

  commit("addEntry", {
    id: data.name,
    ...entry,
  });

  return data.name;
};

export const removeEntry = async ({ commit }, entry) => {
  await journalApi.delete(`/entries/${entry.id}.json`);
  commit("removeEntry", entry.id);
};

// export const updateImage = async(file) => {
//   await cloudinaryAPI.post({
//     file: file,
    
//   });
// }
