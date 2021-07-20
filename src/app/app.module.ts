import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveProjectsComponent } from './archive-projects/archive-projects.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThemeCheckerComponent } from './theme-checker/theme-checker.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveProjectsComponent,
    HomeComponent,
    ProjectsComponent,
    ThemeCheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
