export interface User {
  firstName: string;
  lastName: string;
  image: string;
  id: number;
}

export interface UserFull extends User {
  age: number;

  company: {
    address: {
      address: string;
      postalCode: string;
      state: string;
      city: string;
    };
  };
}
