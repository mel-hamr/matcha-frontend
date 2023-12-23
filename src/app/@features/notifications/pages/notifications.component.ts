import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as notificationActions from '../local-store/actions/notification.action';
import * as notificationsSelectors from '../local-store/selectors/notification.selector';
@Component({
  selector: 'matcha-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications = [];
  constructor(
    private store: Store<{
      // notificationState: any;
    }>,
  ) {}
  // notifications$ = this.store.select('notificationState');
  notificationState$ = this.store.select(
    notificationsSelectors.notificationState,
  );

  unreadNotificationCount$ = this.store.select(
    notificationsSelectors.unreadNotificationCountSelector,
  );

  notificationsLoading$ = this.store.select(
    notificationsSelectors.notificationsLoadingSelector,
  );

  notificationsLoaded$ = this.store.select(
    notificationsSelectors.notificationsLoadedSelector,
  );

  notificationsError$ = this.store.select(
    notificationsSelectors.notificationsErrorSelector,
  );

  ngOnInit(): void {
    this.store.dispatch(notificationActions.getNotification());

    this.notificationState$.subscribe({
      next: (notificationState: any) => {
        this.notifications = notificationState.notificationState;
      },
    });
  }
}
