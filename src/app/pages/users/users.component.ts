import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.scss"
})
export class UsersComponent {
  constructor(
    private _router: Router,
    private _aRoute: ActivatedRoute
  ) {}

  goToRoute(nameRoute: string, id: number): void {
    this._router.navigate([nameRoute, id], { relativeTo: this._aRoute });
  }
}
