import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.scss"
})
export class EditComponent {
  id: string = "";

  constructor(private _aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._aRoute.params.subscribe((params: Params) => (this.id = params["id"]));
  }
}
