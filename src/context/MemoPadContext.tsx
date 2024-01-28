/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useDebounce } from "@toss/react";
import { createContext, useContext, useEffect, useState } from "react";

import { useAuthState } from "./AuthContext";

interface State {
  memoPad: string;
  handleMemoPadChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MemoPadContext = createContext<State | null>(null);

// 1. 지우기는 같은 아이디를 가짐
// 2. 새로고침, 브라우저가 꺼지면 다른 아이디를 가짐
// 3. 글자를 치기 시작하면 메모가 생성됨
// 4. 그 이후에 계속 치면 업데이트가 되어야 함

const MemoPadProvider = ({ children }: React.PropsWithChildren) => {
  const { user } = useAuthState();
  const [isInit, setIsInit] = useState<boolean>(false);
  const [memoPad, setMemoPad] = useState<string>("");
  const [memoPadId, setMemoPadId] = useState<string | null>(null);

  const handleMemoPadChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setMemoPad(value);
  };

  // debounce 적용
  function updateMemoPad() {
    console.log(`update memo pad ${memoPadId}`);
    console.log(`content: `, memoPad);

    setIsInit(true);
  }

  const debouncedUpdateMemoPad = useDebounce(updateMemoPad, 500);

  useEffect(() => {
    if (!user) return;

    // NOTE: 아직 초기화 안됐고, 메모가 안 적혀 있으면 처음이라는 얘기이므로 업데이트를 하지 않음
    // NOTE: 이후에 초기화가 되었고, 아예 컨텐츠를 다 지우는 행위를 하면 업데이트를 함
    if (!isInit && !memoPad) return;

    debouncedUpdateMemoPad();
  }, [debouncedUpdateMemoPad, isInit, memoPad, user]);

  // memo 생성
  useEffect(() => {
    if (!user) return;
    console.log("메모 생성 id: 2");
    setMemoPadId("2");
  }, [user]);

  return (
    <MemoPadContext.Provider
      value={{
        memoPad,
        handleMemoPadChange,
      }}
    >
      {children}
    </MemoPadContext.Provider>
  );
};

export const useMemoPad = () => {
  const context = useContext(MemoPadContext);
  if (!context) {
    throw new Error("memoPadProvider is not found");
  }
  return context;
};

export default MemoPadProvider;
