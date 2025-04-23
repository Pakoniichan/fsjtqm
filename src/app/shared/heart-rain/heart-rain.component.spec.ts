import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRainComponent } from './heart-rain.component';

describe('HeartRainComponent', () => {
  let component: HeartRainComponent;
  let fixture: ComponentFixture<HeartRainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeartRainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
