import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { ThanksComponent } from "./components/thanks/thanks.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: MainComponent},
    {path: 'thanks', component: ThanksComponent},
    {path: '**', redirectTo: '/home'},
];

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[ RouterModule ]
})

export class AppRoutingModule {}