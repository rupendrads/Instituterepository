import { Component, OnInit } from "@angular/core";
import { iRoyaltyDistribution, iRoyaltyDistributionDetails, RoyaltyDistribution } from "../../royaltydistribution/models/royaltydistribution.model";
import { RoyaltyPayoutService } from "../services/royaltypayout.service";

@Component({
    selector: 'new-royalty-payout',
    templateUrl: './new-royalty-payout.component.html',
    styleUrls: ['./new-royalty-payout.component.css']
})
export class RoyaltyPayoutComponent implements OnInit {
    royaltyDistributions: any[] = [];

    constructor(private royaltyPayoutService: RoyaltyPayoutService){}

    ngOnInit(): void {
        this.getRoyaltiesToPayout();
    } 

    getRoyaltiesToPayout(){
        this.royaltyPayoutService.getRoyaltyDistributions()?.subscribe({
            next: (result: any) => {
              console.log(result);              
              this.royaltyDistributions = result;
              this.royaltyDistributions.forEach(rd => {
                rd["isSelected"] =  false;
              })
              console.log(this.royaltyDistributions);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete') 
        });
    }

    payoutRoyalties(){
        console.log(this.royaltyDistributions);
        const selectedRoyaltyDistributions = this.royaltyDistributions.filter(rd => rd.isSelected == true);
        console.log(selectedRoyaltyDistributions);
        this.royaltyPayoutService.payoutRoyalties(selectedRoyaltyDistributions)?.subscribe({
            next: (result: any) => {
                console.log(result);
                this.getRoyaltiesToPayout();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete') 
        });
    }
}