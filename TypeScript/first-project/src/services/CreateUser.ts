/**
 * Criar um usário: name, email, password
 */

 interface TechObject {
  stack: string;
  experience: number;
 }

 interface CreateUserData {
   name?: string;
   email: string;
   password: string;
   techs: Array<string | TechObject>;
   repositories?: string[]
 }

export default function userCreation( { name = '', email, password, techs, repositories = [] }: CreateUserData ) {
  
  const user = {
    name,
    email,
    password,
    techs,
    repositories
  };

  return user;

};

