import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsItemComponent } from './latest-news-item.component';

describe('LatestNewsItemComponent', () => {
  let component: LatestNewsItemComponent;
  let fixture: ComponentFixture<LatestNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
