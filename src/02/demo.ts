let x: number;
let y: string;
let z: boolean;
let a: Date;
let b: string[];

b = "Hello" as any;
/*b = 1234;*/

enum ContactStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

/*
Difference between classes and interfaces is that interface strictly exist
to provide type information to typescript
*/
interface Contact extends Address {
  id: number;
  name: ContactName;
  birthdate?: Date;
  status: ContactStatus;
}

interface Address {
  line1: any;
  line2: any;
}

let primaryContact: Contact = {
  id: 1,
  name: "Tigao",
  birthdate: new Date(),
  line1: "",
  line2: "",
  status: ContactStatus.Active,
};

// this is a type alias
type ContactName = string;

function clone<T>(source: T): T {
  return Object.apply({}, source);
}

const cloneContact = clone(primaryContact);
