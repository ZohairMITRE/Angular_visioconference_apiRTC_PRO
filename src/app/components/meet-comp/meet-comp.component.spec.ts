import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetCompComponent } from './meet-comp.component';

describe('MeetCompComponent', () => {
  let component: MeetCompComponent;
  let fixture: ComponentFixture<MeetCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
