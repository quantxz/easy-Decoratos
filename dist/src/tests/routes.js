"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.get("/pz", () => {
    return "hello world";
});
exports.default = routes;
//# sourceMappingURL=routes.js.map