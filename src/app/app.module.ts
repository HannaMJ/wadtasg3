import { AvatarModule } from "ng2-avatar";
import { AttendanceService } from "./attendance.service";
import "zone.js/dist/zone-mix";
import "reflect-metadata";
import "../polyfills";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from './core/core.module';
import { CommonModule }   from '@angular/common';
import { Router } from '@angular/router';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from './core/auth.service';
import { environment } from '../environments/environment';

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { ElectronService } from "./providers/electron.service";
import { WebviewDirective } from "./directives/webview.directive";

// import { Environment } from "../environments/environment.local";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
//import { PageNotFoundComponent }   from './not-found.component';

// AngularFire2
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CONF_LOCAL } from "../environments/environment.local";

// These are some bootstrap3 JS stuff
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { AlertModule } from "ngx-bootstrap";

import { TestComponent } from "./components/test/test.component";
import { GroupsComponent } from "./components/groups/groups.component";
import { AttendancesComponent } from "./components/attendances/attendances.component";
import { AttendanceSingleViewComponent } from "./components/attendance-single-view/attendance-single-view.component";
import { AttendancesLecturerViewComponent } from "./components/attendances-lecturer-view/attendances-lecturer-view.component";
import { ListModulesComponent } from "./components/list-modules/list-modules.component";
import { ListGlComponent } from "./components/list-gl/list-gl.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBh42V4VVm_BOEhvtWfvDBNNuHdlwgAppU",
    authDomain: "wadt-a3-izzan-raihana.firebaseapp.com",
    databaseURL: "https://wadt-a3-izzan-raihana.firebaseio.com",
    projectId: "wadt-a3-izzan-raihana",
    storageBucket: "wadt-a3-izzan-raihana.appspot.com",
    messagingSenderId: "641704138863"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    TestComponent,
    GroupsComponent,
    AttendancesComponent,
    AttendanceSingleViewComponent,
    AttendancesLecturerViewComponent,
    ListModulesComponent,
    ListGlComponent,
    UserProfileComponent,
    LoginComponent,
    //PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
     CoreModule,
     CommonModule,
     AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
     AngularFireAuthModule,
     AngularFireDatabaseModule,


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(CONF_LOCAL.firebase),
    AngularFirestoreModule.enablePersistence(),
    AvatarModule.forRoot()
  ],
  providers: [ElectronService, AttendanceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
