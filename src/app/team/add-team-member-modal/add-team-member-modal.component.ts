import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {HttpService} from '../../core/http.service';


@Component({
  selector: 'app-add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html',
  styleUrls: ['./add-team-member-modal.component.css']
})
export class AddTeamMemberModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddTeamMemberModalComponent>,
    private httpService: HttpService
  ) {}
  ngOnInit() {
    this.dialogRef.updateSize('600px', 'auto');
    this.dialogRef.disableClose = true;
  }

  saveMemberAndClose(addTeamMemberForm: NgForm) {
     const newTeamMember = addTeamMemberForm.form.value;
     this.httpService.addTeamMember(newTeamMember)
     .subscribe(data=>{
         this.dialogRef.close(true);
     })
  }


  closeDialog() {

    this.dialogRef.close(false);
  }
}
