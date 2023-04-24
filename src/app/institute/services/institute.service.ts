import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InstituteService {
    constructor(private http: HttpClient) {
    }

    getInstitute(id: number){
        return this.http.get(`${environment.host}/api/Institute/${id}`);
    }
}