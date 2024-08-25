import { NextUIProvider } from "@nextui-org/system";
import { Portfolio } from "./portfolio";

export function App() {
  return (
    <div>
      <NextUIProvider>
        <Portfolio />
      </NextUIProvider>
    </div>
  )
}
