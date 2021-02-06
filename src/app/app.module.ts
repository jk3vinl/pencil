import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";

import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaintComponent } from './paint/paint.component';
import { FabricCanvasComponent } from './paint/fabric-canvas/fabric-canvas.component';
import { GraphicalToolbarComponent } from './paint/toolbar/toolbar.component';
import { ColourPaletteComponent } from './paint/toolbar/colour-palette/colour-palette.component';
import { ThicknessSliderComponent } from './paint/toolbar/thickness-slider/thickness-slider.component';
import { InputsModule,SliderModule } from '@progress/kendo-angular-inputs';
import { EventHandlerService } from './paint/event-handler.service';
import { FabricShapeService } from './paint/shape.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    PaintComponent,
    FabricCanvasComponent,
    GraphicalToolbarComponent,
    ColourPaletteComponent,
    ThicknessSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    InputsModule,
    SliderModule,
  ],
  providers: [AuthService,EventHandlerService, FabricShapeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
