import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTitleBooks } from './input-title-books';

describe('InputTitleBooks', () => {
  let component: InputTitleBooks;
  let fixture: ComponentFixture<InputTitleBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTitleBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTitleBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
