import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { TeamMember } from '../team-member';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTeamMemberModalComponent } from '../add-team-member-modal/add-team-member-modal.component';
import { UpdateTeamMemberModalComponent } from '../update-team-member-modal/update-team-member-modal.component';



@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'emailId', 'roleType'];
  dataSource: TeamMember[];
  totalTeamMembers = 0;
  pageSize = 8;
  pageIndex = 0;
  constructor(private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllTeamMembers();
  }

  getCurrentPageData(pageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.getAllTeamMembers();
  }

  getAllTeamMembers() {
    this.httpService.getAllTeamMembers(this.pageIndex * this.pageSize,
      (this.pageIndex + 1) * this.pageSize)
      .subscribe(
        data => {
          this.dataSource = data.response;
          this.totalTeamMembers = data.total;

        }
      );
  }

  addTeamMember(): void {
    const dialogRef = this.dialog.open(AddTeamMemberModalComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(addedNewMember => {
      if (addedNewMember) {
        this.getAllTeamMembers();
      }

    });
  }

  updateTeamMember(teamMember) {
    const dialogRef = this.dialog.open(UpdateTeamMemberModalComponent, {
      data: teamMember
    });

    dialogRef.afterClosed().subscribe(addedNewMember => {
      if (addedNewMember) {
        this.getAllTeamMembers();
      }

    });
  }

}
