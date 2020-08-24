import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetwebscrapingComponent } from './getwebscraping.component';

describe('GetwebscrapingComponent', () => {
  let component: GetwebscrapingComponent;
  let fixture: ComponentFixture<GetwebscrapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetwebscrapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetwebscrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
