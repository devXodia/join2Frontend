import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWidgetCard } from './big-widget-card';

describe('BigWidgetCard', () => {
  let component: BigWidgetCard;
  let fixture: ComponentFixture<BigWidgetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigWidgetCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigWidgetCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
