import { ValidatorMap } from '../validators/Object';
import { ResultFor } from '../types';
export declare function getRouteHandler<Request, Response>(source: keyof Request, onFailure: (result: ResultFor<object>, request: Request, response: Response, next: () => void) => void): <T extends object = any>(validators: ValidatorMap<T>) => (request: Request, response: Response, next: () => void) => Promise<void>;
