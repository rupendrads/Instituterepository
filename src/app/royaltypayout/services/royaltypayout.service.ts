import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service"
import { iRoyaltyDistribution } from "../../royaltydistribution/models/royaltydistribution.model";

@Injectable({
    providedIn: 'root'
})
export class RoyaltyPayoutService {
    constructor(private http: HttpClient,
        private authService: AuthService){}

        getRoyaltyDistributions() {
            console.log(this.authService.loggedInUserInstituteId);
            if(this.authService.loggedInUserInstituteId !== undefined){
                return this.http.get(`http://localhost:5032/api/RoyaltyPayout?instituteId=${this.authService.loggedInUserInstituteId}`);
            }
            return undefined;
        }

        payoutRoyalties(royaltyDistributions: iRoyaltyDistribution[]) {
            console.log(this.authService.loggedInUserInstituteId);
            if(this.authService.loggedInUserInstituteId !== undefined){
                return this.http.post(`http://localhost:5032/api/RoyaltyPayout?instituteId=${this.authService.loggedInUserInstituteId}`, royaltyDistributions);
            }
            return undefined;
        }
}