import { NextUIProvider } from "@nextui-org/system";
import { Portfolio } from "./portfolio";

import './config/i18n';

export function App() {
  return (
    <div>
      <NextUIProvider>
        <Portfolio />
      </NextUIProvider>
    </div>
  )
}
