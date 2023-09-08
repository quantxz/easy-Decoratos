import { ExpressType, ServerPortType } from '../types/serverTypes';

/**
 * 
 * @param Server - pass the app class
 * @param Port - pass on which port you want the server to run on
 * @type ServerPortType — number or string
 * @returns 
 */

export const ServerStarter = (Server: ExpressType, Port: ServerPortType): any => {
    return (): any => {
        const appInstance: ExpressType = new Server().server;
        appInstance.listen(Port, () => {
            console.log(`server running in the port ${Port}`)
        })
    };
}  