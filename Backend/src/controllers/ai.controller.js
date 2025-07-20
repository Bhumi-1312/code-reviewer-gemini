// video c----
// const { response } = require("../app");
// const aiService=require("../services/ai.service");
// module.exports.getResponse=async(req,res)=>{
//     const prompt=req.query.prompt;
//     if(!prompt){
//         return res.status(400).send("Prompt is required");
//     }
//     const reponse=await aiService(prompt);
//     res.send(response);
// }

//generated one----
const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    if (!code) {
        return res.status(400).send("Prompt is required");
    }
    const response = await aiService(code);  // fix typo here: reponse -> response
    res.send(response);  // fix variable used in res.send
};
