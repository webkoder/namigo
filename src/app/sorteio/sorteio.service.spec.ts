import { TestBed, inject } from '@angular/core/testing';

import { SorteioService } from './sorteio.service';

describe('SorteioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SorteioService]
    });
  });

  it('should ...', inject([SorteioService], (service: SorteioService) => {
    expect(service).toBeTruthy();
  }));
});
