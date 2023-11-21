import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    data: {
      title: "Users"
    },
    children: [
      {
        path: "create",
        component: CreateComponent,
        data: {
          title: "Create User"
        }
      },
      {
        path: "edit",
        component: EditComponent,
        data: {
          title: "Edit User"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
