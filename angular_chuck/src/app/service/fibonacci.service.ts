import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciService {

  constructor() { }

  public isFibonacci(N:number):boolean {
    if (N == 0 || N == 1) {
      return true;
    }

    let a = 0,
      b = 1,
      c;

    while (true) {
      c = a + b;
      a = b;
      b = c;

      if (c == N) {
        return true;
      } else if (c >= N) {
        return false;
      }
    }
  }
}
