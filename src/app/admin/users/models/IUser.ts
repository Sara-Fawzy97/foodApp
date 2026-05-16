export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  imagePath: string;
  country: string;
  group: {
    id: string;
    name: string;
    creationDate: string;
    modificationDate: string;
  };
  creationDate: string;
  modificationDate: string;
}
