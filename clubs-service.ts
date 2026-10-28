import { findAllClubs } from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubService = async () => {
  const data = await findAllClubs();

  return data.length !== 0 ? HttpResponse.ok(data) : HttpResponse.noContent();
};
