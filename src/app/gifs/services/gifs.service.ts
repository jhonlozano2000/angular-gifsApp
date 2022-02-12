import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key = 'pz2twAMBMU2yOYKWD4cp3RkqwOx1nfCg';
  private _historial: string[] = [];

  constructor(private Http: HttpClient){}

  get historial(){
    return [...this._historial];
  }
  
  buscarGifs(Query: string = ''){

    Query = Query.trim().toLocaleLowerCase();

    if(!this._historial.includes(Query)){
      this._historial.unshift(Query);
      this._historial = this._historial.splice(0, 10);
    }
    

    this.Http.get('https://api.giphy.com/v1/gifs/search?api_key=pz2twAMBMU2yOYKWD4cp3RkqwOx1nfCg&q=' + Query +'&limit=10')
      .subscribe( (resp: any) =>{
        console.log(resp.data)
      })
  }
}
