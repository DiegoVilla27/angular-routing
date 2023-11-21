import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UsersComponent } from "./users.component";
import { ActivatedRoute, RouterModule } from "@angular/router";

describe("UsersComponent", () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
