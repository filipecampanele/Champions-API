import { Request, Response } from "express";
import * as service from "../services/players-service";

export const getPlayer = async (_req: Request, res: Response) => {
  const response = await service.getPlayerService();
  res.status(response.statusCode).json(response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await service.getPlayerByIdService(id);
  res.status(response.statusCode).json(response.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const response = await service.createPlayerService(req.body);
  res.status(response.statusCode).json(response.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await service.deletePlayerService(id);
  res.status(response.statusCode).json(response.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await service.updatePlayerService(id, req.body.statistics);
  res.status(response.statusCode).json(response.body);
};
