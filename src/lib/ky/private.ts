import { ky as publicKy } from "@/lib/ky/public";

import { getSession, updateSession } from "@/actions/auth";
import { auth } from "@/auth";
import { isServer } from "@tanstack/react-query";
import { type BeforeRetryState } from "ky";

export const ky = publicKy.extend({
  headers: {
    Authorization: `Bearer ${(isServer ? await auth() : await getSession())?.user.at}`,
  },

  hooks: {
    beforeRequest: [],

    beforeRetry: [
      async ({ error }: BeforeRetryState) => {
        if ("statusCode" in error && error.statusCode === 401) {
          await updateSession({});
        }
      },
    ],

    beforeError: [
      async (error) => {
        if (error.response.status === 401) await updateSession({});
        return error;
      },
    ],
  },
});
