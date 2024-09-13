import { NextUIProvider } from "@nextui-org/system";
import { Portfolio } from "./portfolio";

import global_en from "./translations/en/global.json"
import global_pt from "./translations/pt/global.json"
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {escapeValue: true},
  lng: "pt",
  resources: {
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    }
  }
})

export function App() {
  return (
    <div>
      <NextUIProvider>
        <I18nextProvider i18n={i18next}>
          <Portfolio />
        </I18nextProvider>
      </NextUIProvider>
    </div>
  )
}
