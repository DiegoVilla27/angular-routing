import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrl: "./delete.component.scss"
})
export class DeleteComponent {
  id: string = "";

  constructor(private _aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._aRoute.params.subscribe((params: Params) => (this.id = params["id"]));
  }
}
