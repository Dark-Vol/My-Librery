import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFound } from './btn-found';

describe('BtnFound', () => {
  let component: BtnFound;
  let fixture: ComponentFixture<BtnFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
