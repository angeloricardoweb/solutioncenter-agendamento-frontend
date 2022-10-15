import React, { useState, createContext, useContext } from 'react';

interface GlobalContextData {
  roomData: {
    day: string;
    sala_id: number;
  };
  setRoomData: (data: any) => void;
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


  const data = {
    roomData,
    setRoomData
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
