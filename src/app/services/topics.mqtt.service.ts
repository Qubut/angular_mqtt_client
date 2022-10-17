import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicsMqttService {
  constructor(private _mqttService: MqttService) {}

  topic(topicName: string): Observable<IMqttMessage> {
    return this._mqttService.observe(topicName);
  }
}
