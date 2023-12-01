import app from './app'
import 'dotenv/config'
import { connectDB } from './db/connection'

const PORT = process.env.SERVER_PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
