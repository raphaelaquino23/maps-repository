import faker, { address } from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    //Todo destructure
    // this.companyName = faker.company.companyName();
    // this.catchPhrase = faker.company.catchPhrase();
    // this.location = {
    //   lat: parseFloat(faker.address.latitude()),
    //   lng: parseFloat(faker.address.longitude())
    // };
    const {
      address: { latitude, longitude },
      company: { companyName, catchPhrase },
    } = faker;
    this.companyName = companyName();
    this.catchPhrase = catchPhrase();
    this.location = {
      lat: parseFloat(latitude()),
      lng: parseFloat(longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
