import { AppRegistry } from "react-native"
import App from "@/app/app"

AppRegistry.registerComponent("App", () => App)
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
})
