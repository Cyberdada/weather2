export interface LocationBase {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}
export interface LocationSearch extends LocationBase {
  id: number;
  url: string;
}

export interface LocationCurrent extends LocationBase {
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
