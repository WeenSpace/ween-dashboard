import { type DocumentNode, type QueryResult, useQuery } from "@apollo/client";
import { useContext } from "react";

import { WeenSpaceContext } from "../components/WeenSpaceProvider";

const CreateWeenSpaceStateHook = <TData, TVariables>(
  query: DocumentNode,
): QueryResult<TData, TVariables> => {
  const weenspaceClient = useContext(WeenSpaceContext);

  if (!weenspaceClient) {
    throw new Error(
      "Could not find weenspace's apollo client in the context. Did you forget to wrap the root component in a <WeenSpaceProvider>?",
    );
  }

  return useQuery<TData, TVariables>(query, {
    client: weenspaceClient._internal.apolloClient,
    fetchPolicy: "cache-only",
  });
};

export const hookStateFactory = <TData, TVariables>(
  query: DocumentNode,
): QueryResult<TData, TVariables> => CreateWeenSpaceStateHook<TData, TVariables>(query);
