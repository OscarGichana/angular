import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularpipeComponent } from './angularpipe.component';

describe('AngularpipeComponent', () => {
  let component: AngularpipeComponent;
  let fixture: ComponentFixture<AngularpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
