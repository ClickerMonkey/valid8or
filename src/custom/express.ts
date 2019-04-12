
import { obj, ValidatorMap } from '../validators/Object';
import { ResultFor } from '../types';

export function getRouteHandler<Request, Response> (source: keyof Request, onFailure: (result: ResultFor<object>, request: Request, response: Response, next: () => void) => void)
{
  return function<T extends object = any> (validators: ValidatorMap<T>)
  {
    const validator = obj<T>().json().required().props(validators);

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
