import React, { useState, createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
interface GlobalContextData {
  roomData: {
    day: string;
    sala_id: number;
  };
  setRoomData: (data: any) => void;
  refresh: boolean;
  setRefresh: (data: boolean) => void;
  handleLogout: () => void;
  user: UserProps;
  setUser: (data: UserProps) => void;
}

interface RoomDataProps {
  day: string;
  sala_id: number;
}

interface UserProps {
  email: string;
}

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [roomData, setRoomData] = useState<RoomDataProps>({
    day: new Date().getDate().toString(),
    sala_id: 0
  });

  const [user, setUser] = useState<UserProps>({
    email: ''
  })

  const [refresh, setRefresh] = useState(false);

  const router = useRouter();



  async function handleLogout() {
    router.push('/');
  }

  useEffect(() => {
    const { 'token': token } = parseCookies();
    const { 'role': role } = parseCookies();
    
    if (token) {
      if (role === 'Cliente') {
        router.push('/cliente/agendamento')
      }
      if (role === 'Administrador') {
        router.push('/admin/agenda/home')
      }
    }

  }, [])

  const data = {
    roomData,
    setRoomData,
    refresh, setRefresh,
    handleLogout,
    user, setUser
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
