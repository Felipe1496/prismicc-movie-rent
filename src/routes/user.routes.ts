import { CreateUserController } from "./../modules/users/useCases/createUser/CreateUserController";
import { Router } from "express";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.get("/", getAllUsersController.handle);

userRoutes.post("/", createUserController.handle);

export { userRoutes };
