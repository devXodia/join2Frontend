import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWidgetCard } from './small-widget-card';

describe('SmallWidgetCard', () => {
  let component: SmallWidgetCard;
  let fixture: ComponentFixture<SmallWidgetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallWidgetCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallWidgetCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
