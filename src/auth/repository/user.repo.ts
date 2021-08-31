import { Any, EntityRepository, Repository } from "typeorm"
import { User } from "../entity/user.entity";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import * as EmailValidator from "email-validator";
import bcrypt from "bcrypt";




@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async fetchUser(req: any, res: Response) {
        try {
            let data = await this.createQueryBuilder("user").select().getMany();
            res.send(data);
        }
        catch (error) {
            res.send(error);
        }
    }

    async fetchUserDetail(req: Request, res: Response) {
        const { id } = req.body;

        try {
            // Traditional way
            // let data = await this.find()
            // res.send(data);

            //! CreateQueryBuilder

            let data = await this.createQueryBuilder("user").select().where("user.id = :query", { query: id }).getMany();
            res.send(data);

        } catch (error) {
            res.send(error);
        }
    }

    // Create a new user
    async signUp(req: Request, res: Response) {
        const { username, useremail, userpassword } = req.body;

        try {
            let validate = await EmailValidator.validate(useremail);

            if (!validate) {
                res.status(203).send({
                    authentication: false,
                    data: "Invalid Email!"

                });
            } else {

                let emailExists = (await this.createQueryBuilder("user").where(
                    "user.useremail = :query", { query: useremail }
                ).getCount()) > 0;

                if (emailExists) {
                    res.status(201).send({
                        authentication: false,
                        data: "Email is already taken!"
                    });
                } else {
                    const salt = await bcrypt.genSalt(10);
                    bcrypt.hash(userpassword, salt, async (error, data) => {
                        if (error) {
                            res.status(500).send({
                                authentication: false,
                                data: error
                            });
                        }
                        else {
                            let user = new User();
                            user.username = username;
                            user.userpassword = data;
                            user.useremail = useremail;

                            await this.save(user);

                            let userId = this.createQueryBuilder("user").where("user.useremail = :query", { query: useremail }).getOne();

                            let findUser = await this.createQueryBuilder("user").
                                select(["user.id", "user.username", "user.useremail"]).where("user.useremail = :query", { query: useremail }).getOne();


                            var token = jwt.sign({ id: userId }, "myKey", {
                                expiresIn: "24h"
                            });

                            res.status(200).send({
                                meta: {
                                    authentication: true,
                                    "message": "User Registered"
                                },
                                data: {
                                    "access_token": token,
                                    "token_type": "Bearer",
                                    "data": findUser
                                },
                            })
                        }
                    });
                }
            }

        }
        catch (error) {
            res.send(error);
        }
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.body;

        try {
            let deleteData = await this.createQueryBuilder("user").where("id = :query", { query: id }).delete().execute();

            return res.send(deleteData);
        }
        catch (error) {
            res.send(error);
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id, username, useremail } = req.body;

        try {
            let updateData = await this.createQueryBuilder("user").update(User).set({
                username: username,
            }).where("id = :id", { id: id }).execute();

            return res.send(updateData);
        }
        catch (error) {
            res.send(error);
        }
    }

    async forgotPasswordUser(req: Request, res: Response) {
        const { id, useremail, userpassword } = req.body;

        try {
            let updateData = await this.createQueryBuilder("user").update(User).set({
                userpassword: userpassword,
            }).where("useremail = :useremail", { useremail: useremail }).execute();

            return res.send(updateData);
        }
        catch (error) {
            res.send(error);
        }
    }

    async signIn(req: Request, res: Response) {
        const { useremail, userpassword } = req.body;

        let validate = await EmailValidator.validate(useremail)
        if (!validate) {
             res.status(204).send({
                    authentication: false,
                    "message": "User not found"
            });
        } else {
            let findUserFromDb = await this.createQueryBuilder("user").
                select("user.userpassword").where("user.useremail = :query", { query: useremail }).getOne();


            let userId = this.createQueryBuilder("user").where("user.useremail = :query", { query: useremail }).getOne();

            let findUser = await this.createQueryBuilder("user").
                select(["user.id", "user.username", "user.useremail"]).where("user.useremail = :query", { query: useremail }).getOne();



            await bcrypt.compare(
                userpassword,
                findUserFromDb?.userpassword as string,
                (error, result) => {
                    if (error) {
                      return  res.status(500).send({
                            authentication: false,
                            "message": "Authentication Error"
                        });
                    }
                    if (!result) {
                        return res.status(500).send({
                            authentication: false,
                            "message": "Authentication Error"
                        });
                    }
                    if (result) {

                        var token = jwt.sign({
                            id: userId
                        }, "myKey", {
                            expiresIn: "24h"
                        });

                        res.status(200).send({
                            meta: {
                                authentication: true,
                                "message": "Authenticated"
                            },
                            data: {
                                "access_token": token,
                                "token_type": "Bearer",
                                "data": findUser
                            },
                        })

                    }
                }
            )
        }

    }

    // Get user data
    // async fetchUser(req: any, res: Response) {
    //     const Btoken = req.headers["authorization"];
    //     if (typeof Btoken !== undefined) {
    //         req.token = Btoken;
    //         jwt.verify(req.token, "myKey", async (error: any, authData: any) => {
    //             if (error) {
    //                 res.send(error);
    //             } else {
    //                 let data = await this.createQueryBuilder("user").select().getOne();
    //                 res.send(data);
    //             }
    //         });
    //     }
    // }


}