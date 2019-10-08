import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaylistComponent } from './container/playlist/playlist.component';

const routes: Routes = [{ path: 'playlist', component: PlaylistComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
