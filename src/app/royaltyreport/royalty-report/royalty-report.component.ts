import { Component, OnInit } from "@angular/core";
import { RoyaltyReportService } from "../services/royaltyreport.service";
import { ContentDialogService } from "src/app/content-dialog/content-dialog.service";

@Component({
    selector: 'royalty-report',
    templateUrl: './royalty-report.component.html',
    styleUrls: ['./royalty-report.component.css']
})
export class RoyaltyReportComponent implements OnInit {
    royaltyDistributions: any[] = [];
    payoutDates: any[] = [];

    constructor(private royaltyReportService: RoyaltyReportService,
        private contentDialogService: ContentDialogService){
    }

    ngOnInit(): void {        
        this.getRoyaltyPayoutDates();
    }

    onPayoutDateChanged(event: any):void {
        console.log(event.target.value);
        this.getPayoutRoyalties(event.target.value);
    };

    getRoyaltyPayoutDates(){
        this.royaltyReportService.getRoyaltyPayoutDates()?.subscribe({
            next: (result: any) => {
              console.log(result);              
              this.payoutDates = result;
              for(let i=0;i<this.payoutDates.length; i++){                
                this.payoutDates[i] = new Date(this.payoutDates[i]).toDateString();  
                console.log(this.payoutDates[i]);            
              }
              const distinctDates = [... new Set(this.payoutDates)];
              console.log(distinctDates);
              this.payoutDates = [...distinctDates];              
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete') 
        });
    }

    getPayoutRoyalties(payoutDate: any){
        this.royaltyReportService.getRoyaltyPayouts(payoutDate)?.subscribe({
            next: (result: any) => {
              console.log(result);              
              this.royaltyDistributions = result;
              this.royaltyDistributions.forEach(rd => {
                rd["payoutDate"] = rd.royaltyDistributionDetails[0].payoutDate;
              });
              console.log(this.royaltyDistributions);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete') 
        });
    }

    showReferrals(content: any){
        console.log(content);
        this.contentDialogService.okThis(content,  () => {
                console.log(`Ok Clicked`);  
          });
    }

    print(){
        window.print();
    }
}