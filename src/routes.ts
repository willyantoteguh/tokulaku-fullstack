import Router from "express";
import { AuthController } from "./auth/auth_controller";

const router = Router();

router.get("/api/user", AuthController.fetchUser);
router.post("/api/user/signup", AuthController.signUp);
router.post("/api/user/signin", AuthController.signIn);
router.get("/api/user/detail", AuthController.fetchUserDetail);
router.delete("/api/user/delete", AuthController.deleteUser);
router.put("/api/profile/edit", AuthController.updateUser);
router.put("/api/profile/edit/forgot", AuthController.forgotPasswordUser);


export { router };