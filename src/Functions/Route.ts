import { Router } from "express";
import 'reflect-metadata';

/**
 * 
 * @param method - HTTP method
 * @param middlaware - optional middlaware like a AuthMiddlaware 
 * @returns 
 */

export const Route = (path: string, method: string, middlaware?: any): any => {
  return (descriptor: PropertyDescriptor) => {
    const router: Router & any = Router();

    const originalMethod = descriptor.value;

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
