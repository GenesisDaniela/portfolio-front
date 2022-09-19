import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:"inicio", component:WelcomeComponent,
  },{path:"", component:WelcomeComponent},
  {path:"project/:idProject", component:ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
