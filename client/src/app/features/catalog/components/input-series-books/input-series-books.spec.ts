import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSeriesBooks } from './input-series-books';

describe('InputSeriesBooks', () => {
  let component: InputSeriesBooks;
  let fixture: ComponentFixture<InputSeriesBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSeriesBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSeriesBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
