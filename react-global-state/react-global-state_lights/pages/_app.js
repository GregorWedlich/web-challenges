import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: true },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: true },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: true },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: true },
  ]);

  // Function to toggle the state of a light
  function toggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function turnAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function turnAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  // Check if all lights are off
  const allLightsOff = lights.every((light) => !light.isOn);

  // Alternative: Check if all lights are on
  //  const allLightsOff = !lights.some(light => light.isOn);

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
