import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service"
import { iRoyaltyDistribution } from "../../royaltydistribution/models/royaltydistribution.model";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoyaltyPayoutService {
    constructor(private http: HttpClient,
        private authService: AuthService){}

        getRoyaltyDistributions() {
            console.log(this.authService.loggedInUserInstituteId);
            if(this.authService.loggedInUserInstituteId !== undefined){
                return this.http.get(`${environment.host}/api/RoyaltyPayout?instituteId=${this.authService.loggedInUserInstituteId}`);
            }
            return undefined;
        }

        payoutRoyalties(royaltyDistributions: iRoyaltyDistribution[]) {
            console.log(this.authService.loggedInUserInstituteId);
            if(this.authService.loggedInUserInstituteId !== undefined){
                return this.http.post(`${environment.host}/api/RoyaltyPayout?instituteId=${this.authService.loggedInUserInstituteId}`, royaltyDistributions);
            }
            return undefined;
        }
}