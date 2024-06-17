import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import { engine } from 'express-handlebars'

// Instancia servidor

const app = express()

// Logger para Servidor
app.use(morgan("dev"))
// middleware para subir archivos
app.use(fileUpload())
// middleware para aceptar json
app.use(express.json())
// Archivos estáticos
app.use(express.static('static'))
// Motor de vistas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.listen(3000, () => {console.log("App escuchando el puerto 3000")})