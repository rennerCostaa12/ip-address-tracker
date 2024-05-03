import axios, { AxiosError } from "axios";

import { useEffect, useState } from "react";

import { TextInput } from "./components/TextInput";
import { MapTrack } from "./components/MapTrack";
import { CardInformations } from "./components/CardInformations";

function App() {
  const [informationsAddressTrack, setInformationsAddressTrack] = useState<
    AddressTrackProps | undefined
  >(undefined);
  const [ipAddres, setIpAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadBtn, setLoadBtn] = useState<boolean>(false);

  const getInformationsAddressTrack = async (ipAddress: string) => {
    try {
      setLoading(true);
      const responseInformationsAddress = await axios.get(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${
          import.meta.env.VITE_API_KEY_IPIFY
        }&ipAddress=${ipAddress}`
      );

      if (responseInformationsAddress.status) {
        setInformationsAddressTrack(responseInformationsAddress.data);
      }
    } catch (error) {
      const responseError = error as AxiosError<{ messages: string }>;
      alert(responseError.response?.data.messages);
    } finally {
      setLoading(false);
    }
  };

  const getIpUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.ipify.org?format=json");

      if (response.status) {
        const ipUser = response.data.ip;
        getInformationsAddressTrack(ipUser);
      }
    } catch (error) {
      const responseError = error as AxiosError<{ messages: string }>;
      alert(responseError.response?.data.messages);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchAddress = async () => {

    if(ipAddres.length <= 0){
      alert("Enther the IP Address");
      return
    }

    setLoadBtn(true);
    await getInformationsAddressTrack(ipAddres)
    setLoadBtn(false);
  };

  useEffect(() => {
    getIpUser();
  }, []);

  return (
    <main>
      <div className="w-full h-64 bg-bg-desktop-nav max-md:bg-bg-mobile-nav bg-cover bg-center bg-no-repeat flex flex-col gap-4 items-center px-4 pt-8">
        <h1 className="text-2xl font-bold text-white">IP Address Tracker</h1>

        <TextInput
          placeholder="Search for any IP address or domain"
          asButton
          onClick={handleSearchAddress}
          onChange={(event) => setIpAddress(event.target.value)}
          loading={loadBtn}
          onKeyDown={(event) => event.key === 'Enter' && handleSearchAddress()}
        />

        {!loading && informationsAddressTrack && (
          <CardInformations data={informationsAddressTrack} />
        )}
      </div>

      {!loading && informationsAddressTrack && (
        <MapTrack
          lat={informationsAddressTrack?.location.lat}
          lng={informationsAddressTrack?.location.lng}
        />
      )}
    </main>
  );
}

export default App;
