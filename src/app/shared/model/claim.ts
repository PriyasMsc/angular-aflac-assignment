export interface claimsData {
  id: number;
  patientDetails: {
    firstName: string;
    lastName: string;
  };
  claimDetails: {
    claimNumber: string;
    dateSubmitted: Date;
    claimStatus: string;
  };
}
