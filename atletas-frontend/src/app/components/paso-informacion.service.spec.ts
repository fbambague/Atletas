import { TestBed } from '@angular/core/testing';

import { PasoInformacionService } from './paso-informacion.service';

describe('PasoInformacionService', () => {
  let service: PasoInformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasoInformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
