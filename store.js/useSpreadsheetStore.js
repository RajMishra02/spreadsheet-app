import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  cells: {},
  updateCell: (id, content) =>
    set((state) => ({
      cells: {
        ...state.cells,
        [id]: content,
      },
    })),
  clearAll: () => set({ cells: {} }),
}));

export default useSpreadsheetStore;
