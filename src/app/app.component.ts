import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivationEnd, Event, Router } from "@angular/router";
import { filter, map } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private _router: Router,
    private _title: Title
  ) {}

  ngOnInit(): void {
    this.changeTitleHead();
  }

  changeTitleHead(): void {
    this._router.events
      .pipe(
        filter(
          (res: Event): res is ActivationEnd => res instanceof ActivationEnd
        ),
        filter((res: ActivationEnd) => res.snapshot.firstChild === null),
        map((res: ActivationEnd) => res.snapshot.data["title"])
      )
      .subscribe((title: string) => this._title.setTitle(`Routing - ${title}`));
  }
}
