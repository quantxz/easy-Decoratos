"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const express_1 = require("express");
const Route = (path, method) => {
    return (descriptor) => {
        const router = (0, express_1.Router)();
        const originalMethod = descriptor.value;
        router[method.toLowerCase()](path, async (req, res, next) => {
            try {
                await originalMethod.call(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
        return descriptor;
    };
};
exports.Route = Route;
//# sourceMappingURL=Route.js.map