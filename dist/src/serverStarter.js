"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerStarter = void 0;
const ServerStarter = (Server, Port) => {
    return () => {
        const appInstance = new Server().server;
        appInstance.listen(Port, () => {
            console.log(`server running in the port ${Port}`);
        });
    };
};
exports.ServerStarter = ServerStarter;
//# sourceMappingURL=serverStarter.js.map