import { Request, Response } from 'express';

import userCreation from './services/CreateUser';


export function helloWorld (request: Request, response: Response) {
  return response.json( { message: 'Hello World'} );
}

export function createUser (request: Request, response: Response) {

  const user = userCreation({
    name: "Adriano Souza",
    email: "silva.souza.adriano@gmail.com",
    password: "123456",
    techs: ["NodeJs", "ReactJs", "React Native",{
      stack: 'JavaScript',
      experience: 2
    }],
    repositories: ["nlw1-ecoleta", "bootcamp8-gostack-gobarber"]
  });

  return response.json( { user } );
}