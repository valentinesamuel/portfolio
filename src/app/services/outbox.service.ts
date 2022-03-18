import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OutboxService {
  constructor(private http: HttpClient) { }
  sendMessage(message) {
    return this.http.post('https://portfoliodb-321f3-default-rtdb.firebaseio.com/messages.json', message).subscribe(data => {
      // console.log('Data sent.. Check DB!!')
    }, error => {
      console.log(error);

    });
  }
}