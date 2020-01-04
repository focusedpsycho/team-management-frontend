import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamMemberModalComponent } from './update-team-member-modal.component';

describe('UpdateTeamMemberModalComponent', () => {
  let component: UpdateTeamMemberModalComponent;
  let fixture: ComponentFixture<UpdateTeamMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeamMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeamMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
