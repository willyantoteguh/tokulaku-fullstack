import { Request, Response } from "express";
import { getManager } from "typeorm";
import { UserRepository } from "./repository/user.repo";

export class AuthController {

    static async signUp(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.signUp(req, res);
    }

    static async signIn(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.signIn(req, res);
    }

    static async fetchUser(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.fetchUser(req, res);
    }

    static async fetchUserDetail(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.fetchUserDetail(req, res);
    }

    static async deleteUser(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.deleteUser(req, res);
    }

    static async updateUser(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.updateUser(req, res);
    }

    static async forgotPasswordUser(req: Request, res: Response) {

        let manager = getManager().getCustomRepository(UserRepository);
        await manager.forgotPasswordUser(req, res);
    }

}