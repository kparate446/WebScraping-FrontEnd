import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwebscrapingComponent } from './addwebscraping.component';

describe('AddwebscrapingComponent', () => {
  let component: AddwebscrapingComponent;
  let fixture: ComponentFixture<AddwebscrapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwebscrapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwebscrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
