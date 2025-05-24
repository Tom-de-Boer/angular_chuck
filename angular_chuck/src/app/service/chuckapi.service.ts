import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ChuckapiService {
  private http = inject(HttpClient);

  public getJoke(){
    return this.http.get<{value: string}>('https://api.chucknorris.io/jokes/random');
  }
}
