import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSidebarComponent } from './application-sidebar.component';

describe('ApplicationSidebarComponent', () => {
  let component: ApplicationSidebarComponent;
  let fixture: ComponentFixture<ApplicationSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
