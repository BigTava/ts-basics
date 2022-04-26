type ContactName03 = string;

type ContactStatus03 = "active" | "inactive" | "new";

type ContactBirthDate = Date | number | string;

interface Contact03 {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus03;
}

interface Address03 {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

type AddressableContact = Contact03 & Address03;

function getBirthDate(contact: Contact03) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

let primaryContact03: Contact03 = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active",
};

type ContactFields = keyof Contact03;

const field: ContactFields = "birthDate";

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}
interface ContactDeletedEvent extends ContactEvent {}

const value = getValue({ min: 1, max: 200 }, "min");

const myType = { min: 1, max: 200 };

function save(source: typeof myType) {}

type Awesome = Contact["name"];

interface ContactEvent {
  contactId: Contact03["id"];
}

interface ContactStatusChangedEvent extends ContactEvent {
  oldStatus: Contact03["status"];
  newStatus: Contact03["status"];
}

interface ContactEvents {
  deleted: ContactDeletedEvent;
  statusChanged: ContactStatusChangedEvent;
  // ... and so on
}

function handleEvent<T extends keyof ContactEvents>(
  eventName: T,
  handler: (evt: ContactEvents[T]) => void
) {
  if (eventName === "statusChanged") {
    handler({
      contactId: 1,
      oldStatus: "active",
      newStatus: "inactive",
    });
  }
}

handleEvent("statusChanged", (evt) => evt);

let x_03: any = { name: "Bruce Wayne" };
x_03.id = 1234;
x_03 = "banana";
x_03 = true;

let y_03: Record<string, string | number | boolean | Function> = {
  name: "Bruce Wayne",
};
y_03.number = 1234;
y_03.active = true;
y_03.log = () => console.log("awesome");

interface Query {
  sort?: "asc" | "desc";
  matches(val): boolean;
}

function searchContacts(
  contacts: Contact[],
  query: Record<keyof Contact03, Query>
) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact03)[]) {
      // get the query object for this property
      const propertyQuery = query[property];
      // check to see if it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts = searchContacts(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
  }
);
