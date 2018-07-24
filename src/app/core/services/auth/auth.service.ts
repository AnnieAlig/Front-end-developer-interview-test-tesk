import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {

  constructor(
  ) {}

  auth(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

}
