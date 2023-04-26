import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoyaltyReportService {
    constructor(private http: HttpClient,
        private authService: AuthService){}

    getRoyaltyPayoutDates(){
        if(this.authService.loggedInUserInstituteId !== undefined){
            return this.http.get(`${environment.host}/api/RoyaltyReport/dates?instituteId=${this.authService.loggedInUserInstituteId}`);
        }
        return undefined;
    }

    getRoyaltyPayouts(payoutDate: any) {
        console.log(this.authService.loggedInUserInstituteId);
        if(this.authService.loggedInUserInstituteId !== undefined){
            return this.http.get(`${environment.host}/api/RoyaltyReport?instituteId=${this.authService.loggedInUserInstituteId}&payoutDate=${payoutDate}`);
        }
        return undefined;
    }
}