// export const mutations = (/*state*/) => {};

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  const toModifyIndex = state.entries.findIndex(
    (entries) => entries.id === entry.id
  );
  state.entries[toModifyIndex] = entry;
};

export const addEntry = (state, entry) => {
  state.entries.push(entry);
};

export const removeEntry = (state, entryId) => {
  state.isLoading = true;
  state.entries = state.entries.filter((ent) => ent.id !== entryId);
  state.isLoading = false;
};
