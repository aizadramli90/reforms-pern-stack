import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }


    const token = bearerToken.split(" ")[1];

    console.log(token);
    

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    };

    //check token validity
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid token"
            });
        };
    
    /* console.log(`decoded: ${JSON.stringify(decoded, null, 2)}`); */
    req.userId = decoded.user_id;
    req.userEmail = decoded.email;
    req.is_admin = decoded.is_admin;
    next();

    });


};

export default isAuth;