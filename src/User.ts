import faker from "faker";
import { Mappable } from "./CustomMap";

export const red = "red";

export class User implements Mappable {
  name: string;
  address: string;
  country: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    const {
      name: {firstName}, //added firstName to destructure
      address: { zipCode, country, latitude, longitude },
    } = faker;
    this.name = firstName();
    this.address = zipCode();
    this.country = country();
    this.location = {
      lat: parseFloat(latitude()),
      lng: parseFloat(longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Name: ${this.name}</h1>
        <h3>Address: ${this.address}</h3>
        <h3>Location: Lat(${this.location.lat}), Lng(${this.location.lng})</h3>
        <h3>Country: ${this.country}</h3>
      </div>
    `;
  }
}
