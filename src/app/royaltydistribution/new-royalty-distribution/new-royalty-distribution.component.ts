import { Component, OnInit } from "@angular/core";
import { iRoyaltyDistribution, iRoyaltyDistributionDetails, RoyaltyDistribution } from "../models/royaltydistribution.model";
import { RoyaltyDistributionService } from "../services/royaltydistribution.service"

@Component({
    selector: 'new-royalty-distribution',
    templateUrl: './new-royalty-distribution.component.html',
    styleUrls: ['./new-royalty-distribution.component.css']
})
export class RoyaltyDistributionComponent implements OnInit { 
    royaltyDistributions: any[] = [];

    constructor(private royaltyDistributionService: RoyaltyDistributionService){        
    }
    
    ngOnInit(): void {
        this.getRoyaltiesToDistribute();
    }

    getRoyaltiesToDistribute(){
        this.royaltyDistributionService.getRoyaltyDistribution()?.subscribe({
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

    distributeRoyalties(){
        console.log(this.royaltyDistributions);
        const selectedRoyaltyDistributions = this.royaltyDistributions.filter(rd => rd.isSelected == true);
        console.log(selectedRoyaltyDistributions);
        let royaltiesToDistribute:iRoyaltyDistribution[] = [];
        selectedRoyaltyDistributions.forEach(srd => {
            const royaltyDistributionDetails: iRoyaltyDistributionDetails[] = [];
            srd.royaltyDistributionDetails.forEach((rdd:any) => {
                royaltyDistributionDetails.push({
                    id: -1,
                    userId: rdd.userId,
                    royaltyLevelDetailId: rdd.royaltyLevelDetailId,
                    firstName: rdd.firstName,
                    lastName: rdd.lastName,
                    royaltyAmount: rdd.royaltyAmount,
                    payoutDate: rdd.payoutDate,
                    payoutFlag: rdd.payoutFlag
                });
            });
            royaltiesToDistribute.push(new RoyaltyDistribution(
                -1, srd.admissionId, srd.dateOfAdmission, srd.userId, 
                srd.firstName, srd.lastName, srd.dateOfExecution,
                royaltyDistributionDetails
            ));
        });
        console.log(royaltiesToDistribute);
        this.royaltyDistributionService.distributeRoyalty(royaltiesToDistribute).subscribe({
            next: (result: any) => {
                console.log(result);
                this.getRoyaltiesToDistribute();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete') 
        });        
    }
}