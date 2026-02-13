import { createContext, useContext, useState } from "react";

type DockVariant = "light" | "dark";

interface DockVariantCtx {
  variant: DockVariant;
  setVariant: (v: DockVariant) => void;
}

const DockVariantContext = createContext<DockVariantCtx>({
  variant: "light",
  setVariant: () => {},
});

export function DockVariantProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<DockVariant>("light");
  return (
    <DockVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </DockVariantContext.Provider>
  );
}

export function useDockVariant() {
  return useContext(DockVariantContext);
}
