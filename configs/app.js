//Levantar servidor HTTP (express)
//ESModules 
'use strict'

//Importaciones
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { config } from "dotenv"
import userRoutes from '../src/user/user.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import bookRoutes from '../src/book/book.routes.js'

//Configuraciones
const app = express()
config();
const port = process.env.PORT || 3056

//Configuración del servidor
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use(userRoutes)
app.use('/category', categoryRoutes)
app.use('/book', bookRoutes)

//Levantar el servidor
export const initServer = () => {
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}