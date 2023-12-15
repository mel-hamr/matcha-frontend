import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  getConversationMessages(cnvId: number) {
    const userID: number = sessionStorage.getItem('session')
      ? JSON.parse(sessionStorage.getItem('session') as string).user_id
      : 0;
    // console.log('id', cnvId);
    return this.http.get('http://localhost:3000/chat/messages', {
      params: {
        cnvId,
        userID,
      },
    });
  }
}
