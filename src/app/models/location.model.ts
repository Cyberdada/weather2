// Weather Service has a lookup function that can be called
// in case user does not remember the whole name of the place,
// also usable in cases when there are several places that carry the
// same name.
// I did not get around to implementing that search function...
// but that is the reason we have Location base, and then two different
// Location interfaces. (the location in current call differs from the
// loication structure in the search response. )

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
