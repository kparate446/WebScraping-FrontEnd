import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetwebscrapingsiteComponent } from './getwebscrapingsite.component';

describe('GetwebscrapingsiteComponent', () => {
  let component: GetwebscrapingsiteComponent;
  let fixture: ComponentFixture<GetwebscrapingsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetwebscrapingsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetwebscrapingsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
