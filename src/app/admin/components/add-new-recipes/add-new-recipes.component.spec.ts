import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRecipesComponent } from './add-new-recipes.component';

describe('AddNewRecipesComponent', () => {
  let component: AddNewRecipesComponent;
  let fixture: ComponentFixture<AddNewRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewRecipesComponent]
    });
    fixture = TestBed.createComponent(AddNewRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
