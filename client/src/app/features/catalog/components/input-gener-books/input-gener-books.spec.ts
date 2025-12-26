import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGenerBooks } from './input-gener-books';

describe('InputGenerBooks', () => {
  let component: InputGenerBooks;
  let fixture: ComponentFixture<InputGenerBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGenerBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGenerBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
