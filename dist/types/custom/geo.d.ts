import { Value } from '../types';
import { ValidatorObject } from '../validators/Object';
export declare type GeoInput = {
    lat: number;
    lng: number;
};
export declare type GeoOutput = {
    type: 'Point';
    coordinates: [number, number];
};
export declare function geo(required: Value<boolean>): ValidatorObject<GeoOutput>;
