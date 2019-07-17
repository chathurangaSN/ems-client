import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NewComponent } from './employee/new/new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateComponent } from './employee/update/update.component';
import { MoreComponent } from './employee/more/more.component';
import { DeleteComponent } from './employee/delete/delete.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  { path: 'employees', component: EmployeeComponent },
  { path: 'new', component: NewComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'more/:id', component: MoreComponent },
  { path: 'update/:id', component: UpdateComponent},
  { path: 'delete/:id', component: DeleteComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
