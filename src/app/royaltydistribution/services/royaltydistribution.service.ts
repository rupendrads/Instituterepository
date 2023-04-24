import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service"
import { iRoyaltyDistribution } from "../models/royaltydistribution.model";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoyaltyDistributionService {
    constructor(private http: HttpClient,
        private authService: AuthService){}

    getRoyaltyDistribution() {
        console.log(this.authService.loggedInUserInstituteId);
        if(this.authService.loggedInUserInstituteId !== undefined){
            return this.http.get(`${environment.host}/api/RoyaltyDistribution?instituteId=${this.authService.loggedInUserInstituteId}`);
        }
        return undefined;
    }

    distributeRoyalty(royaltyDistributions: iRoyaltyDistribution[]){
        console.log(royaltyDistributions);
        return this.http.post(`${environment.host}/api/RoyaltyDistribution`, royaltyDistributions);
    }
}