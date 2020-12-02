import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { ProjectsComponent } from "./pages/projects/projects.component";

const app_routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
