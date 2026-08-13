import React from "react";

import { type WeenSpaceClient } from "../../core";

export const WeenSpaceContext = React.createContext<WeenSpaceClient | null>(null);

export const WeenSpaceProvider: React.FC<React.PropsWithChildren<{ client: WeenSpaceClient }>> = ({
  client,
  children,
}) => {
  const [context, setContext] = React.useState<WeenSpaceClient>(client);

  React.useEffect(() => {
    setContext(client);
  }, [client]);

  if (context) {
    return <WeenSpaceContext.Provider value={context}>{children}</WeenSpaceContext.Provider>;
  }

  return null;
};
