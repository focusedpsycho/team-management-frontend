import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { AddTeamMemberModalComponent } from './add-team-member-modal/add-team-member-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UpdateTeamMemberModalComponent } from './update-team-member-modal/update-team-member-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    MembersListComponent
  ],
  declarations: [MembersListComponent, AddTeamMemberModalComponent, UpdateTeamMemberModalComponent],
  entryComponents: [AddTeamMemberModalComponent, UpdateTeamMemberModalComponent]
})
export class TeamModule { }
