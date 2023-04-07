export interface iRoyaltyDistributionDetails {
    id: number;
    royaltyLevelDetailId: number;
    userId: number;
    firstName: string;
    lastName: string;
    royaltyAmount: number;
    payoutFlag: boolean;
    payoutDate: Date;
}

export interface iRoyaltyDistribution {
    id: number;
    admissionId: number;
    dateOfAdmission: Date;
    userId: number;
    firstName: string;
    lastName: string;
    dateOfExecution: Date;
    royaltyDistributionDetails: iRoyaltyDistributionDetails[]
}

export class RoyaltyDistribution implements iRoyaltyDistribution {
    public id: number;
    public admissionId: number;
    public dateOfAdmission: Date;
    public userId: number;
    public firstName: string = '';
    public lastName: string = '';
    public dateOfExecution: Date = new Date();
    public royaltyDistributionDetails: iRoyaltyDistributionDetails[];

    constructor(
        id: number, 
        admissionId: number,
        dateOfAdmission: Date, 
        userId: number, 
        firstName: string, 
        lastName: string,
        dateOfExecution: Date,
        royaltyDistributionDetails:any){
            this.id = id;
            this.admissionId = admissionId;
            this.dateOfAdmission = dateOfAdmission;
            this.userId = userId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateOfExecution = dateOfExecution;
            this.royaltyDistributionDetails = royaltyDistributionDetails;
    }
}
