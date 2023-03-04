const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({path: "config/.env"})

const port = process.env.PORT | 3690 

const server = app.listen(3690,()=>{
    console.log(`app is working on port ${port}`)
})
