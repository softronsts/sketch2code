import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpropertiesComponent } from './docproperties.component';

describe('DocpropertiesComponent', () => {
  let component: DocpropertiesComponent;
  let fixture: ComponentFixture<DocpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocpropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
