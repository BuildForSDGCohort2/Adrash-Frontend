import { useContext, useEffect, useRef, useState } from "react";
import { SocketIOContext } from "./context";

export const useSocket = (
  eventKey?: string,
  callback?: (...args: any) => void
) => {
  const socket = useContext(SocketIOContext);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const socketHandlerRef = useRef(function() {
    if (callbackRef.current) {
        // @ts-ignore
      callbackRef.current.apply(this, arguments);
    }
  });

  const subscribe = () => {
    if (eventKey) {
      // @ts-ignore
      socket.on(eventKey, socketHandlerRef.current);
    }
  };

  const unsubscribe = () => {
    if (eventKey) {
        // @ts-ignore
      socket.removeListener(eventKey, socketHandlerRef.current);
    }
  };

  useEffect(() => {
    subscribe();

    return unsubscribe;
  }, [eventKey]);

  return { socket, unsubscribe, subscribe };
};

export const useLastMessage = (eventKey: string) => {
  const socket = useContext(SocketIOContext);
  const [data, setData] = useState();

  const subscribe = () => {
    if (eventKey) {
        // @ts-ignore
      socket.on(eventKey, setData);
    }
  };

  const unsubscribe = () => {
    if (eventKey) {
        // @ts-ignore
      socket.removeListener(eventKey, setData);
    }
  };

  useEffect(() => {
    subscribe();

    return unsubscribe;
  }, [eventKey]);

  return { data, socket, unsubscribe, subscribe };
};