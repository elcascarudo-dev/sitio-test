import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { PrincipalComponent } from './components/inicio/principal/principal.component';
import { CloudComponent } from './components/inicio/principal/cloud/cloud.component';
import { FontEndComponent } from './components/inicio/principal/font-end/font-end.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DockerComponent } from './components/inicio/principal/docker/docker.component';
import { GistComponent } from './components/github/gist/gist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PrincipalComponent,
    CloudComponent,
    FontEndComponent,
    FooterComponent,
    DockerComponent,
    GistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
