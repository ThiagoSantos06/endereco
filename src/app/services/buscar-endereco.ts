import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class EnderecoService {
    private apiUrl = 'https://cep.awesomeapi.com.br/json/';

    constructor(private http: HttpClient) { }

    buscarEnderecoPorCep(cep: string): Observable<any> {
        return this.http.get(`${this.apiUrl}${cep}`);
    }
}