"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = require("cors");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.server.use(express_1.default.json());
        this.server.use((0, cors_1.default)());
    }
    routes() {
        this.server.use(routes_1.default);
    }
}
exports.default = new App().server;
//# sourceMappingURL=test.js.map