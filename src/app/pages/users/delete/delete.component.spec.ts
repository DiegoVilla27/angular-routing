import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DeleteComponent } from "./delete.component";
import { ActivatedRoute, Params } from "@angular/router";

describe("DeleteComponent", () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  const fakeActivatedRoute = {
    params: {
      subscribe: (fn: (params: Params) => void) => fn({ id: 1 })
    }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
