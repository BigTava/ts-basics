let x_04: Record<string, string | number | boolean | Function> = {
  name: "Wruce Bayne",
};
x_04.number = 1234;
x_04.active = true;
x_04.log = () => console.log("awesome!");

////////////////////

type ContactStatus_04 = "active" | "inactive" | "new";

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact_04 {
  id: number;
  name: string;
  status: ContactStatus_04;
  address: Address;
  email: string;
}

interface Query_04<TProp> {
  sort?: "asc" | "desc";
  matches(val: TProp): boolean;
}

/*
type ContactQuery = Partial<
  Pick<Record<keyof Contact_04, Query>, "id" | "name">
>
*/

type ContactQuery = {
  [TProp in keyof Contact_04]?: Query_04<Contact_04[TProp]>;
};

type RequiredContactQuery = Required<ContactQuery>;

function searchContacts_04(contacts: Contact_04[], query: ContactQuery) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact_04)[]) {
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

const filteredContacts_04 = searchContacts_04(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
  }
);
