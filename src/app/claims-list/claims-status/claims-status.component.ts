import { Component, ViewEncapsulation } from '@angular/core';
import { ClaimsStatusService } from './service/claims-status.service';
@Component({
  selector: 'app-claims-status',
  templateUrl: './claims-status.component.html',
  styleUrls: ['./claims-status.component.css'],
})
export class ClaimsStatusComponent {
  claimStatusList: any;
  constructor(private claimsStatusService: ClaimsStatusService) {}
  ngOnInit(): void {
    this.getClaimstatusList();
  }
  getClaimstatusList() {
    this.claimsStatusService.getClaimstatusList().subscribe((res: any) => {
      this.claimStatusList = res;
      console.log(this.claimStatusList[0].claimDetails);
    });
  }
}
