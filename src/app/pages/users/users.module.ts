import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

@NgModule({
  declarations: [UsersComponent, CreateComponent, EditComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
