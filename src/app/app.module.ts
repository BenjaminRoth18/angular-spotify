import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { PlaylistComponent } from './container/playlist/playlist.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ApiService } from './shared/services/api/api.service';
import { SpotifyService } from './shared/services/spotify/spotify.service';
import { StorageService } from './shared/services/storage/storage.service';
import { appReducers } from './store/app.store';
import { AuthEffects } from './store/auth/effects/auth.effects';
import { AuthStateService } from './store/auth/services/auth.state.service';
import { LayoutStateService } from './store/layout/services/layout.state.service';
import { PlaylistEffects } from './store/playlist/effects/playlist.effects';
import { PlaylistStateService } from './store/playlist/services/playlist.state.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PlaylistComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([AuthEffects, PlaylistEffects])
    ],
    providers: [
        ApiService,
        SpotifyService,
        StorageService,
        AuthStateService,
        PlaylistStateService,
        LayoutStateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
