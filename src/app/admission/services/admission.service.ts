import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admission } from "../models/admission.model";

@Injectable({
    providedIn: 'root'
})
export class AdmissionService {
    constructor(private http: HttpClient){}

    addAadmission(admission: Admission) {   
        console.log(admission);
        return this.http.post("http://localhost:5032/api/admission", admission);     
    }
}