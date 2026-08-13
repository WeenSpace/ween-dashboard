import { USER } from "../apollo/queries";
import { type UserQuery } from "../apollo/types";
import { type WeenSpaceClientInternals } from "./types";

export type State = UserQuery | null;

export const getState = (client: WeenSpaceClientInternals["apolloClient"]): State =>
  client.readQuery<UserQuery>({
    query: USER,
  });
