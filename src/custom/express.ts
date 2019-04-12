
import { obj, ValidatorMap } from '../validators/Object';
import { ResultFor } from '../types';

export function getRouteHandler<Request, Response, K extends keyof Request> (source: K, required: boolean = true)
{
  return function<T extends object = any> (validators: ValidatorMap<T>, onFailure: (result: ResultFor<T>, request: Request, response: Response, next: () => void) => void)
  {
    const validator = obj<T>().json().eval(required).props(validators);

    return async (request: Request, response: Response, next: () => void) =>
    {
      const [pass, result, failures] = await validator.runAsTuple(request[source]);
      
      if (!pass && failures !== undefined)
      {
        onFailure(failures, request, response, next);
      }
      else
      {
        next();
      }
    };
  }
}
