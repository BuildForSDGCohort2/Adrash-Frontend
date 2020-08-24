import { createContext } from "react";

// @ts-ignore
export const SocketIOContext = createContext<SocketIOClient.Socket>(undefined);

// export const SocketIOContext = createContext(undefined);