import { useContext } from "react";

import { type WeenSpaceClient } from "../../core/types";
import { WeenSpaceContext } from "../components/WeenSpaceProvider";

const CreateWeenSpaceHook = <T extends keyof WeenSpaceClient>(key: T): WeenSpaceClient[T] => {
  const weenspaceClient = useContext(WeenSpaceContext);

  if (!weenspaceClient) {
    throw new Error(
      "Could not find weenspace's apollo client in the context. Did you forget to wrap the root component in a <WeenSpaceProvider>?",
    );
  }

  const getHookData = (): WeenSpaceClient[T] => {
    return weenspaceClient[key];
  };

  return getHookData();
};

export const hookFactory =
  <T extends keyof WeenSpaceClient>(query: T) =>
  (): WeenSpaceClient[T] =>
    CreateWeenSpaceHook(query);
