function get(req, res) {
    const resObj = {
        data: {
            uptime: process.uptime(),
            message: "Server REFORMS is running"
        }
}
    res.status(200).json(resObj);
}

function post(req, res) {
    const body = req.body;
    //console.log(body.message);
    const resObj = {
        message: "Server REFORMS is running",
        data: body,
    };
    res.status(200).json(resObj);   
    
}

const healthController = {
    get,
    post,
};

export default healthController;