import { ky } from "@/lib/ky/public";

import type {
  OAuthVerifyBody,
  OAuthVerifyResponse,
} from "@/services/auth/types";

export const postVerifyOAuthToken = async function (body: OAuthVerifyBody) {
  return await ky
    .post(`v1/api/oauth/${body.provider}/verify`, {
      json: {
        token: body.token,
      },
    })
    .json<OAuthVerifyResponse>();
};
