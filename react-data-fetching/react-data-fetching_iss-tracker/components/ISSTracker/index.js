import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    // If something goes wrong, we throw an error
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status; // Add status to the error object
    throw error;
  }

  return res.json();
};

export default function ISSTracker() {
  // use SWR to fetch the ISS position
  const { data, isLoading, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  // assign default values to longitude and latitude if data is undefined
  // we use the nullish coalescing operator (??) to assign default values
  const longitude = data?.longitude ?? 0;
  const latitude = data?.latitude ?? 0;

  /*
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
*/

  if (error) {
    return <div>Erro when loading ISS-Position: {error.message}</div>;
  }

  // If the data is not yet loaded, we show a loading message
  return (
    <main>
      {isLoading ? (
        <div>Loading postion ISS-Position...</div>
      ) : (
        <>
          <Map longitude={longitude} latitude={latitude} />
          <Controls
            longitude={longitude}
            latitude={latitude}
            onRefresh={() => mutate()}
          />
        </>
      )}
    </main>
  );
}
