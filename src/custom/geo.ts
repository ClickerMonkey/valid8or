
import { Value } from '../types';
import { ValidatorObject, obj } from '../validators/Object';
import { float } from '../validators/Number';


export type GeoInput = {
  latitude: number;
  longitude: number;
};

export type GeoOutput = {
  type: 'Point',
  coordinates: [number, number]
};

export function geo(required: Value<boolean>): ValidatorObject<GeoOutput>
{
  return obj<GeoInput>().decodeComponent().json().eval(required).props({
    latitude: float()
      .required().message('Latitude is required')
      .between(-90, 90).message(v => `Latitude must be between -90 and 90 degrees: ${v}`),
    longitude: float()
      .required().message('Longitude is required')
      .between(-180, 180).message(v => `Longitude must be between -180 and 180 degrees: ${v}`)
  }).transform(({latitude, longitude}) => ({
    type: 'Point',
    coordinates: [longitude, latitude]
  }));
}
