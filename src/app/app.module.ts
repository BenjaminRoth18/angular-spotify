import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { PlaylistComponent } from './container/playlist/playlist.component';
import { ApiService } from './shared/services/api/api.service';
import { SpotifyService } from './shared/services/spotify/spotify.service';
import { StorageService } from './shared/services/storage/storage.service';
import { appReducers } from './store/app.store';
import { LoginEffects } from './store/login/effects/login.effects';
import { LoginStateService } from './store/login/services/login.state.service';
import { PlaylistEffects } from './store/playlist/effects/playlist.effects';
import { PlaylistStateService } from './store/playlist/services/playlist.state.service';

@NgModule({
    declarations: [AppComponent, HeaderComponent, PlaylistComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([LoginEffects, PlaylistEffects])
    ],
    providers: [
        ApiService,
        SpotifyService,
        StorageService,
        LoginStateService,
        PlaylistStateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
