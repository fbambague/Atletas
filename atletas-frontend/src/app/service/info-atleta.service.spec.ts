import { TestBed } from '@angular/core/testing';

import { InfoAtletaService } from './info-atleta.service';

describe('InfoAtletaService', () => {
  let service: InfoAtletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAtletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
