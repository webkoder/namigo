import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiolistaComponent } from './sorteiolista.component';

describe('SorteiolistaComponent', () => {
  let component: SorteiolistaComponent;
  let fixture: ComponentFixture<SorteiolistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiolistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
