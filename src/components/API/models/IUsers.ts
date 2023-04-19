export interface IUsers {
  profile: {
    firstName: string;
  };
  education: {
    loanRepayment: string;
  };
  id: number;

  userName: string;

  orgName: string;

  phoneNumber: string;
  email: string;
  createdAt: string;
  firstName: string;
  gender: string;
  bvn: string;
  lastName: string;
  accountBalance: string;

  lastActiveDate: string;
  //address: Address;
  //company: Company;
}

export interface profile {
  firstName: string;
  gender: string;
  bvn: string;
  lastName: string;

  phoneNumber: string;
  avatar: string;
  address: string;
  currency: string;
}
export interface education {
  loanRepayment: string;
}
//export interface Address {
//street: string;
//suite: string;
//city: string;
//zipcode: string;
//geo: Geo;
//}
//export interface Geo {
//lat: string;
//lng: string;
//}
//export interface Company {
//name: string;
//catchPhrase: string;
//bs: string;
//}
