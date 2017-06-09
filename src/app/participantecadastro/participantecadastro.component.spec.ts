import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantecadastroComponent } from './participantecadastro.component';

describe('ParticipantecadastroComponent', () => {
  let component: ParticipantecadastroComponent;
  let fixture: ComponentFixture<ParticipantecadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantecadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantecadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
