import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service"
import { RoyaltyDistribution, iRoyaltyDistribution } from "../models/royaltydistribution.model";

@Injectable({
    providedIn: 'root'
})
export class RoyaltyDistributionService {
    constructor(private http: HttpClient,
        private authService: AuthService){}

    getRoyaltyDistribution() {
        console.log(this.authService.loggedInUserInstituteId);
        if(this.authService.loggedInUserInstituteId !== undefined){
            return this.http.get(`http://localhost:5032/api/RoyaltyDistribution?instituteId=${this.authService.loggedInUserInstituteId}`);
        }
        return undefined;
    }

    distributeRoyalty(royaltyDistributions: iRoyaltyDistribution[]){
        console.log(royaltyDistributions);
        return this.http.post(`http://localhost:5032/api/RoyaltyDistribution`, royaltyDistributions);
    }
}