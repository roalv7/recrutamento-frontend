import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';

const routes: Routes = [

    {path: 'form', component: FormPageComponent},
    {path: 'thanksPage', component: ThanksPageComponent},
    {path: '', redirectTo: '/form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
