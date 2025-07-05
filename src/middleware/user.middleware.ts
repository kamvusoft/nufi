import { NextFunction, Request, Response, Router } from 'express';
import { CreateUserSchema } from '../dto/user-dto';
import { registerUser } from '../service/user.service';
const userRoute = Router();

userRoute.post('/login', (request: Request, response: Response, _next: NextFunction) => {
    console.log(request.body);
    response.send("User registered");
});

userRoute.post('/register', (request: Request, response: Response, _next: NextFunction) => {
    console.log(request.body);
    const { success, error } = CreateUserSchema.safeParse(request.body);
    if(success) {
        registerUser(request.body).then(user => {
            response.render('home', {
                username: user.username
            })
        });
    }
    else {
        response.render('login', {
            error: error?.errors
                    .map((t) => ({
                        path: t.path[0] ?? '',
                        message: t.message
                    }))
        })
    }
});

export default userRoute;