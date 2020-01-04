import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../core/http.service';
import { TeamMember } from '../team-member';
import * as _ from 'lodash';

@Component({
  selector: 'app-update-team-member-modal',
  templateUrl: './update-team-member-modal.component.html',
  styleUrls: ['./update-team-member-modal.component.css']
})
export class UpdateTeamMemberModalComponent implements OnInit {
  @ViewChild('updateTeamMemberForm') form: NgForm;
  memberId: string;
  constructor(
    private dialogRef: MatDialogRef<UpdateTeamMemberModalComponent>,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) private data: TeamMember
  ) { }
  ngOnInit() {
    this.dialogRef.updateSize('600px', 'auto');
    this.dialogRef.disableClose = true;
    const existingMemberData = _.cloneDeep(this.data);
    delete existingMemberData.memberId;
    setTimeout(() => {
      this.form.setValue(existingMemberData);
    }, 100);

  }

  saveMemberAndClose(updateTeamMemberForm: NgForm) {
    const newTeamMember = updateTeamMemberForm.form.value;
    newTeamMember.memberId = this.data.memberId;
    this.httpService.updateTeamMember(newTeamMember)
      .subscribe(data => {
        this.dialogRef.close(true);
      });
  }

  deleteTeamMember() {
    this.httpService.deleteTeamMember(this.data.memberId)
      .subscribe(data => {
        this.dialogRef.close(true);
      });
  }


  closeDialog() {

    this.dialogRef.close(false);
  }

}
