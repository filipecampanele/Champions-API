import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();

  return data.length !== 0 ? HttpResponse.ok(data) : HttpResponse.noContent();
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);

  return data ? HttpResponse.ok(data) : HttpResponse.noContent();
};

export const createPlayerService = async (player: PlayerModel) => {
  if (!player || Object.keys(player).length === 0) {
    return HttpResponse.badRequest();
  }

  await PlayerRepository.insertPlayer(player);
  return HttpResponse.created();
};

export const deletePlayerService = async (id: number) => {
  const deleted = await PlayerRepository.deleteOnePlayer(id);

  return deleted ? HttpResponse.ok({ message: "deleted" }) : HttpResponse.notFound();
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  if (!statistics || Object.keys(statistics).length === 0) {
    return HttpResponse.badRequest();
  }

  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

  return data ? HttpResponse.ok(data) : HttpResponse.notFound();
};
