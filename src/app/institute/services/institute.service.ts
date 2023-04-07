import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class InstituteService {
    constructor(private http: HttpClient) {
    }

    getInstitute(id: number){
        return this.http.get(`http://localhost:5032/api/Institute/${id}`);
    }
}