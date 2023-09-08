"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const express_1 = require("express");
require("reflect-metadata");
const Route = (path, method, middlaware) => {
    return (descriptor) => {
        const router = (0, express_1.Router)();
        const originalMethod = descriptor.value;
        if (middlaware) {
            router[method.toLowerCase()](path, middlaware, async (req, res, next) => {
                try {
                    await originalMethod.call(req, res, next);
                }
                catch (error) {
                    next(error);
                }
            });
        }
        else {
            router[method.toLowerCase()](path, async (req, res, next) => {
                try {
                    await originalMethod.call(req, res, next);
                }
                catch (error) {
                    next(error);
                }
            });
        }
        return descriptor;
    };
};
exports.Route = Route;
//# sourceMappingURL=Route.js.map