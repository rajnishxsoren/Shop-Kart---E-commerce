import dotenv from 'dotenv';
import path from "path";

import express from "express";

dotenv.config();

import app from './app.js';
import dataBaseConnect from './config/db.js';

const PORT = process.env.PORT || 8000;

dataBaseConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
