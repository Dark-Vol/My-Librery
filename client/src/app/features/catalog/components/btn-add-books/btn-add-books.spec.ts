import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddBooks } from './btn-add-books';

describe('BtnAddBooks', () => {
  let component: BtnAddBooks;
  let fixture: ComponentFixture<BtnAddBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnAddBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
