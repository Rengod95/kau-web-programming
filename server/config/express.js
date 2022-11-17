const express = require('express');
const cors = require('cors');

module.exports = function () {
    const app = express();

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(cors());
    // app.use(express.static(process.cwd() + '/public'));

    /* App (Android, iOS) */
    // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
    require('../src/app/User/userRoute')(app);
    // require('../src/app/Board/boardRoute')(app);

    return app;
};