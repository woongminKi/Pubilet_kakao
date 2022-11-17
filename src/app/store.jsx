import create from "zustand";

const useStore = create((set) => ({
  lat: null,
  lng: null,
  status: null,
  setLat: () => set((state) => ({ lat: state.lat })),
  setLng: () => set((state) => ({ lng: state.lng })),
  setStatus: () => set((state) => ({ status: state.status })),

  getLocation: () => {
    if (!navigator.geolocation) {
      // setStatus("Geolocation is not supported by your browser");
      set(() => ({
        status: "Geolocation is not supported by your browser",
      }));
    } else {
      // setStatus("Locating...");
      set(() => ({ status: "Locating..." }));

      navigator.geolocation.getCurrentPosition(
        (position) => {
          // setStatus(null);
          set(() => ({ status: null }));
          // setLat(position.coords.latitude);
          set(() => ({ lat: position.coords.latitude }));
          // setLng(position.coords.longitude);
          set(() => ({ lng: position.coords.longitude }));
        },
        () => {
          // setStatus("Unable to retrieve your loaction");
          set(() => ({ status: "Unable to retrieve your loaction" }));
        }
      );
    }
  },
}));

export default useStore;
