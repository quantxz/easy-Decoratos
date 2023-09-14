import { ExpressType, ServerPortType } from '../types/serverTypes';

/**
 * 
 * @param Server - pass the app class
 * @param Port - pass on which port you want the server to run on
 * @type ServerPortType — number or string
 * @returns 
 */

export const ServerStarter = (Server: ExpressType, Port: ServerPortType): ClassDecorator => {
    return (): any => {
        //Criando uma nova instancia do server
        const appInstance: ExpressType = new Server().server;
        //executando o server
        appInstance.listen(Port, () => {
            console.log(`server running in the port ${Port}`)
        })
    };
}  