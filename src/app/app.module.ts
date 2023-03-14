import { UserProfileModule } from './userProfile/userProfile.module';
import { UserSettingsModule } from './userSettings/userSetting.module';
import { EditArticleModule } from './editArticle/createArticle.module';
import { ArticleModule } from './article/article.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { AuthInterceptor } from './shared/services/authInterceptor.service';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { environment } from 'src/environments/environment';
import { PersistanceService } from './shared/services/persistance.service';

import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { CreateArticleModule } from './createArticle/createArticle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    TopBarModule,
    UserProfileModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    StoreRouterConnectingModule.forRoot(),
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    UserSettingsModule,
  ],
  providers: [
    PersistanceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
