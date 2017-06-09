import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiocadastroComponent } from './sorteiocadastro.component';

describe('SorteiocadastroComponent', () => {
  let component: SorteiocadastroComponent;
  let fixture: ComponentFixture<SorteiocadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiocadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
