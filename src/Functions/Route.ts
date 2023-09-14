import { Router } from "express";
import 'reflect-metadata';
import { excludeTypes } from "src/types/serverTypes";

/**
 * 
 * @param method - HTTP method
 * @param middlaware - optional middlaware like a AuthMiddlaware (type Function)
 * @returns 
 */

export const Route = (path: string, method: string, middlaware?: (...params: Exclude<any, excludeTypes>) /* testar se tipagem esta dando certo */ => {}): MethodDecorator => {
  return (descriptor: PropertyDescriptor) => {
    //criando uma route Padrão
    const router: Router = Router();

    //guardando o metodo original e suas funções
    const originalMethod = descriptor.value;
    //checkando se foi passado um middlaware
    if (middlaware) {
      router[method.toLowerCase()](path, middlaware,  async (req: any, res: any, next: any) => {
        try {
          await originalMethod.call(req, res, next);

          /* como o original method não esta passando qual a instancia (Por exemplo Controller.index) o codigo é preciso passar no metodo; 
          na real isso esta passando agora eu tenho que criar uma route para colocar no App principal para que ele indetifique o metodo;
          um dos dois*/ 
        } catch (error) {
          next(error);
        }
      });
    } else {
      router[method.toLowerCase()](path, async (req: any, res: any, next: any) => {
        try {
          await originalMethod.call(req, res, next);
        } catch (error) {
          next(error);
        }
      });
    }

    return descriptor;
  };
};
