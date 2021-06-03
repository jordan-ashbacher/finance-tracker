import { default as axios } from 'axios'
import { Router } from 'express'
require('dotenv').config()

const router = Router()

const db = process.env.MONGO_DB_URI

