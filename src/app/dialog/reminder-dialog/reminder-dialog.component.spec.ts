import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReminderDialogComponent } from './reminder-dialog.component';

describe('CreateReminderDialogComponent', () => {
  let component: CreateReminderDialogComponent;
  let fixture: ComponentFixture<CreateReminderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReminderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReminderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
