import React, { useState, createContext, useContext } from 'react';

interface GlobalContextData {
  roomData: {
    day: string;
    sala_id: number;
  };
  setRoomData: (data: any) => void;
  refresh: boolean;
  setRefresh: (data: boolean) => void;
}

interface RoomDataProps {
  day: string;
  sala_id: number;
}

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [roomData, setRoomData] = useState<RoomDataProps>({
    day: new Date().getDate().toString(),
    sala_id: 0
  });

  const [refresh, setRefresh] = useState(false);


  const data = {
    roomData,
    setRoomData,
    refresh, setRefresh
  }

  return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(GlobalContext);
};
