import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCeritaComponent } from './list-cerita.component';

describe('ListCeritaComponent', () => {
  let component: ListCeritaComponent;
  let fixture: ComponentFixture<ListCeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCeritaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
