import { Router } from "express";

/**
 * 
 * @param method - HTTP method  
 * @returns 
 */

export const Route = (path: string, method: string): any => {
  return (descriptor: PropertyDescriptor) => {
    const router: Router & any = Router();

    const originalMethod = descriptor.value;

    router[method.toLowerCase()](path, async (req: any, res: any, next: any) => {
      try {
        await originalMethod.call(req, res, next);
      } catch (error) {
        next(error);
      }
    });

    return descriptor;
  };
};
