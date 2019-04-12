
import { Value } from '../types';
import { ValidatorObject, obj } from '../validators/Object';
import { float } from '../validators/Number';


export type GeoInput = {
  lat: number;
  lng: number;
};

export type GeoOutput = {
  type: 'Point',
  coordinates: [number, number]
};

export function geo(required: Value<boolean>): ValidatorObject<GeoOutput>
{
  return obj<GeoInput>().json().eval(required).props({
    lat: float()
      .required().message('Latitude is required')
      .between(-90, 90).message(v => `Latitude must be between -90 and 90 degrees: ${v}`),
    lng: float()
      .required().message('Longitude is required')
      .between(-180, 180).message(v => `Longitude must be between -180 and 180 degrees: ${v}`)
  }).transform(({lat, lng}) => ({
    type: 'Point',
    coordinates: [lng, lat]
  }));
}
