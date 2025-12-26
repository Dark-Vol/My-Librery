import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAboutBooks } from './input-about-books';

describe('InputAboutBooks', () => {
  let component: InputAboutBooks;
  let fixture: ComponentFixture<InputAboutBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAboutBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAboutBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
