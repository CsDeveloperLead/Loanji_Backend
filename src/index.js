import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/index.js'
import axios from 'axios'

dotenv.config({
    path: './.env'
})


connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("ERROR", error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`)
            setInterval(async () => {
                try {
                    const response = await axios.get('https://loanji-backend.onrender.com/health')
                    console.log(response.data)
                } catch (error) {
                    console.error('Health check failed:', error)
                }
            }, 10000)
            // 10 * 60 * 1000
        })
    })
    .catch((error) => {
        console.error("ERROR While connecting to Database: ", error)
    })