/* eslint-disable check-file/no-index */
import { env as clientEnv } from "./client";
import { env as serverEnv } from "./server";

export const env = { ...clientEnv, ...serverEnv };
