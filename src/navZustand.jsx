import { create } from "zustand";

export const useNav = create((set) => ({
  navOptions: "home",
  goToIntroduction: () => set((state) => ({ navOption: "introduction" })),
  goToDeviceUse: () => set((state) => ({ navOption: "deviceUse" })),
  goToStatistics: () => set((state) => ({ navOption: "statistics" })),
  goToDocumentation: () => set((state) => ({ navOption: "documentation" })),
  goToHome: () => set((state) => ({ navOption: "home" })),
  goToClients: () => set((state) => ({ navOption: "clients" })),
  goToTests: () => set((state) => ({ navOption: "tests" })),
  goToApps: () => set((state) => ({ navOption: "apps" })),
  goToUserStatistics: () => set((state) => ({ navOption: "userStatistics" })),
  goToJornadas: () => set((state) => ({ navOption: "jornadas" })),
}));
