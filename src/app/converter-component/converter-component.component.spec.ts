import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponentComponent } from './converter-component.component';

describe('ConverterComponentComponent', () => {
  let component: ConverterComponentComponent;
  let fixture: ComponentFixture<ConverterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterComponentComponent]
    });
    fixture = TestBed.createComponent(ConverterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
