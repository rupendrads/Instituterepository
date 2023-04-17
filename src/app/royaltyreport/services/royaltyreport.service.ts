import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service"

@Injectable({
    providedIn: 'root'
})
export class RoyaltyReportService {
    constructor(private http: HttpClient,
        private authService: AuthService){}

    getRoyaltyPayoutDates(){
        if(this.authService.loggedInUserInstituteId !== undefined){
            return this.http.get(`http://localhost:5032/api/RoyaltyReport/dates?instituteId=${this.authService.loggedInUserInstituteId}`);
        }
        return undefined;
    }

    getRoyaltyPayouts() {
        console.log(this.authService.loggedInUserInstituteId);
        if(this.authService.loggedInUserInstituteId !== undefined){
            return this.http.get(`http://localhost:5032/api/RoyaltyReport?instituteId=${this.authService.loggedInUserInstituteId}`);
        }
        return undefined;
    }
}