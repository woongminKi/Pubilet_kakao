import create from "zustand";
import useGoogleSheets from 'use-google-sheets';

const useStore = create((set) => ({
  lat: null,
  lng: null,
  status: null,
  toiletStorage: null,
  setLat: () => set((state) => ({ lat: state.lat })),
  setLng: () => set((state) => ({ lng: state.lng })),
  setStatus: () => set((state) => ({ status: state.status })),
  setToiletStorage: () => set((state) => ({ toiletStorage: state.toiletStorage})),

  getLocation: () => {
    if (!navigator.geolocation) {
      set(() => ({
        status: "Geolocation is not supported by your browser",
      }));
    } else {
      set(() => ({ status: "Locating..." }));

      navigator.geolocation.getCurrentPosition(
        (position) => {
          set(() => ({ status: null }));
          set(() => ({ lat: position.coords.latitude }));
          set(() => ({ lng: position.coords.longitude }));
        },
        () => {
          set(() => ({ status: "Unable to retrieve your loaction" }));
        }
      );
    }
  },
}));

export const useExportGss = (() => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const arrayGssData = Array.from(data);

  return arrayGssData;
});

export default useStore;
