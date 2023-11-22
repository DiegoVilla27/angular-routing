import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShowComponent } from "./show.component";
import { ActivatedRoute, Params } from "@angular/router";

describe("ShowComponent", () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;
  const fakeActivatedRoute = {
    params: {
      subscribe: (fn: (params: Params) => void) => fn({ id: 1 })
    }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
