import { NextFunction, Request, Response, Router } from "express";
import userRoute from "./user.middleware";

const indexRoute = Router();

indexRoute.get('', (_request: Request, response: Response, _next: NextFunction) => {
    response.render("home", {
        username: "martinxt"
    });
});

indexRoute.get('/login', (_request: Request, response: Response, _next: NextFunction) => {
    response.render("login", {
        error: undefined
    });
});

indexRoute.use('/user', userRoute);

export default indexRoute;