import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiodetalhesComponent } from './sorteiodetalhes.component';

describe('SorteiodetalhesComponent', () => {
  let component: SorteiodetalhesComponent;
  let fixture: ComponentFixture<SorteiodetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiodetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiodetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
