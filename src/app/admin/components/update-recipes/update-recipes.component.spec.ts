import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecipesComponent } from './update-recipes.component';

describe('UpdateRecipesComponent', () => {
  let component: UpdateRecipesComponent;
  let fixture: ComponentFixture<UpdateRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRecipesComponent]
    });
    fixture = TestBed.createComponent(UpdateRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
