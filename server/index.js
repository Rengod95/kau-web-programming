const express = require('./config/express');

const port = 3001;
express().listen(port, ()=>console.log("서버 개방됨"));