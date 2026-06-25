//import module in type: module in the packge.json to use the new format instead of const express = require('express)
import express from 'express';

const app = express();

const PORT = process.env.PORT || 5003; //choose port from env or use default

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
})