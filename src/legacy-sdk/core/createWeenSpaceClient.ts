import jwtDecode from "jwt-decode";

import { createApolloClient } from "../apollo";
import { DEVELOPMENT_MODE, WINDOW_EXISTS } from "../constants";
import { isInternalToken } from "../helpers";
import { auth } from "./auth";
import { getState, type State } from "./state";
import { createStorage, storage } from "./storage";
import { type JWTToken, type WeenSpaceClient, type WeenSpaceClientOpts } from "./types";
import { user } from "./user";

export const createWeenSpaceClient = ({
  apiUrl,
  channel,
  opts = {},
}: WeenSpaceClientOpts): WeenSpaceClient => {
  let _channel = channel;
  const { autologin = true, fetchOpts } = opts;

  const setChannel = (channel: string): string => {
    _channel = channel;

    return _channel;
  };

  createStorage(autologin);

  const apolloClient = createApolloClient(apiUrl, autologin, fetchOpts);
  const authSDK = auth({ apolloClient });
  const userSDK = user({ apolloClient, channel: _channel });

  const refreshToken = storage.getRefreshToken();

  if (autologin && refreshToken) {
    const owner = jwtDecode<JWTToken>(refreshToken).owner;

    if (isInternalToken(owner)) {
      authSDK.refreshToken(true);
    } else {
      authSDK.refreshExternalToken(true);
    }
  }

  const client = {
    auth: authSDK,
    user: userSDK,
    config: { channel: _channel, setChannel, autologin },
    _internal: { apolloClient },
    getState: (): State => getState(apolloClient),
  };

  if (DEVELOPMENT_MODE && WINDOW_EXISTS) {
    (window as any).__WEENSPACE_CLIENT__ = client;
  }

  return client;
};
