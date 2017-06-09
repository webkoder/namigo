import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantelistaComponent } from './participantelista.component';

describe('ParticipantelistaComponent', () => {
  let component: ParticipantelistaComponent;
  let fixture: ComponentFixture<ParticipantelistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantelistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
