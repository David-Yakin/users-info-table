export default class User {
    constructor({
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    }) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = new Address(address);
        this.company = new Company(company);
    }
}

class Address {
    constructor({
        street,
        suite,
        city,
        zipcode,
        geo
    }) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Company {
    constructor({
        name,
        catchPhrase,
        bs
    }) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}