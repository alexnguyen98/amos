import "dotenv/config"
import express from 'express'
import middlewares from './middlewares'
import apiRoutes from './api'
import {createConnection} from "typeorm";

const 
  app = express(),
  port = process.env.PORT,
  host = process.env.HOST

app.use(middlewares)
app.use('/api', apiRoutes)
app.listen(port, async() => { 
  try {
    await createConnection()
    console.log(`Server listenning on http://${host}:${port}`)
  } catch(err) {
    console.log(err)
  }
})