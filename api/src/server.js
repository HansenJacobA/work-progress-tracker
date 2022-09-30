import express from 'express'
import pkg from 'body-parser'
const { json, urlencoded } = pkg
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from 'dotenv'
import eventRouter from './resources/entry/entry.router.js'
import topicRouter from './resources/topic/topic.router.js'

dotenv.config()

const { SERVER_PORT } = process.env

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/entry', eventRouter)
app.use('/api/topic', topicRouter)

export const start = async () => {
    try {
        app.listen(SERVER_PORT, () => {
            console.log(`REST API on http://localhost:${SERVER_PORT}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}
