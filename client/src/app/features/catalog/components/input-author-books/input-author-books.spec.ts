import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthorBooks } from './input-author-books';

describe('InputAuthorBooks', () => {
  let component: InputAuthorBooks;
  let fixture: ComponentFixture<InputAuthorBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAuthorBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAuthorBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
