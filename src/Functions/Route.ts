import { Router } from "express";
import 'reflect-metadata';

/**
 * 
 * @param method - HTTP method
 * @param middlaware - optional middlaware like a AuthMiddlaware (Function)
 * @returns 
 */

export const Route = (path: string, method: string, middlaware?: () => {}): MethodDecorator => {
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
