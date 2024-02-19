import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ChatModule } from './chat/chat.module';
import { NavbarModule } from './navbar/navbar.module';
import { FeaturesComponent } from './features/features.component';
import { StoreModule } from '@ngrx/store';
import { clickContactReducer } from './chat/local-store/reducers/chat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { messageNotificationReducer } from './navbar/local-store/reducer/notification.reducer';
import { notificationReducer } from './notifications/local-store/reducer/notification.reducer';
import { NotificationEffects } from './notifications/local-store/effects/notification.effect';
import { BrowseModule } from './browse/browse.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [FeaturesComponent],
  providers: [NotificationEffects],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ChatModule,
    NavbarModule,
    BrowseModule,
    FontAwesomeModule,
    // NotificationsModule,
    // StoreModule.forRoot({
    //   clickContact: clickContactReducer,
    //   messageNotification: messageNotificationReducer,
    //   notificationState: notificationReducer,
    //   // notification: notificationReducer,
    // }),
    StoreModule.forFeature('clickContact', clickContactReducer),
    StoreModule.forFeature('messageNotification', messageNotificationReducer),
    StoreModule.forFeature('notificationState', notificationReducer),
    EffectsModule.forFeature([NotificationEffects]),
  ],
  
})
export class FeaturesModule {}
