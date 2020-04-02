import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryComponent } from './registry/registry.component';
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ReportComponent } from './report/report.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueComponent } from './issue/issue.component';
import { AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from 'src/app/services/country.service';
import { ImagedropDirective } from './directives/imagedrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    ErrorComponent,
    NavigationComponent,
    FooterComponent,
    ReportComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    IssueComponent,
    ImagedropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
