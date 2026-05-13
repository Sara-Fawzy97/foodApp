import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateRecipesComponent } from './add-update-recipes.component';

describe('AddUpdateRecipesComponent', () => {
  let component: AddUpdateRecipesComponent;
  let fixture: ComponentFixture<AddUpdateRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateRecipesComponent]
    });
    fixture = TestBed.createComponent(AddUpdateRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
