import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAtletaComponent } from './info-atleta.component';

describe('InfoAtletaComponent', () => {
  let component: InfoAtletaComponent;
  let fixture: ComponentFixture<InfoAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
