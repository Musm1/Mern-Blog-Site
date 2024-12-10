// const express= require('express');
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB is successfully connected.");
})
.catch((err)=>{
    console.log(err)
});

const app= express();
const port= 3000;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}.`); 
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);