import express from "express"
import "express-async-errors"

import { errorHandling } from "./middlewares/error-handling"
import { error } from "console"

const app = express()

app.use(express.json())

app.use(errorHandling)

export { app }