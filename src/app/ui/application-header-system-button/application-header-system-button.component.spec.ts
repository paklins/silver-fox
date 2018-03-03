import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationHeaderSystemButtonComponent } from './application-header-system-button.component';

describe('ApplicationHeaderSystemButtonComponent', () => {
  let component: ApplicationHeaderSystemButtonComponent;
  let fixture: ComponentFixture<ApplicationHeaderSystemButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationHeaderSystemButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationHeaderSystemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
