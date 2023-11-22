import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { DeleteComponent } from "./delete/delete.component";
import { EditComponent } from "./edit/edit.component";
import { UsersComponent } from "./users.component";
import { ShowComponent } from "./show/show.component";

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
        path: "edit/:id",
        component: EditComponent,
        data: {
          title: "Edit User"
        }
      },
      {
        path: "delete/:id",
        component: DeleteComponent,
        data: {
          title: "Delete User"
        }
      },
      {
        path: "show/:id",
        component: ShowComponent,
        data: {
          title: "Show User"
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
