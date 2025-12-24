import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFindOutMore } from './btn-find-out-more';

describe('BtnFindOutMore', () => {
  let component: BtnFindOutMore;
  let fixture: ComponentFixture<BtnFindOutMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFindOutMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFindOutMore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
