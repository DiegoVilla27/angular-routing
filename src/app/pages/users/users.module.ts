import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreateComponent } from "./create/create.component";
import { DeleteComponent } from "./delete/delete.component";
import { EditComponent } from "./edit/edit.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { ShowComponent } from "./show/show.component";

@NgModule({
  declarations: [
    UsersComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent
  ],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
