import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStartReading } from './btn-start-reading';

describe('BtnStartReading', () => {
  let component: BtnStartReading;
  let fixture: ComponentFixture<BtnStartReading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnStartReading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnStartReading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
