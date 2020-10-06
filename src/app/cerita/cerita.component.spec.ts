import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeritaComponent } from './cerita.component';

describe('CeritaComponent', () => {
  let component: CeritaComponent;
  let fixture: ComponentFixture<CeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeritaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
