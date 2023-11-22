import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrl: "./show.component.scss"
})
export class ShowComponent {
  id: string = "";

  constructor(private _aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._aRoute.params.subscribe((params: Params) => (this.id = params["id"]));
  }
}
