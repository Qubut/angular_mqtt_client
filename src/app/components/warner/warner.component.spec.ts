import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnerComponent } from './warner.component';

describe('WarnerComponent', () => {
  let component: WarnerComponent;
  let fixture: ComponentFixture<WarnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
