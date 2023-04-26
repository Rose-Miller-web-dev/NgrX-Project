import { StoreModule } from '@ngrx/store';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from "./components/register/register.component";
import { AppRoutingModule } from "../app-routing.module";
import { reducers } from './store/reducers';

const routes: Routes = [
    {
      path: 'register',
      component: RegisterComponent
    }
  ];

@NgModule({
    imports: [CommonModule,
        AppRoutingModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers)],
    declarations: [
        RegisterComponent
    ]
})

export class AuthModule {

}