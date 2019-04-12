import { ValidatorMap } from '../validators/Object';
import { ResultFor } from '../types';
export declare function getRouteHandler<Request, Response, K extends keyof Request>(source: K, required?: boolean): <T extends object = any>(validators: ValidatorMap<T>, onFailure: (result: ResultFor<T>, request: Request, response: Response, next: () => void) => void) => (request: Request, response: Response, next: () => void) => Promise<void>;
