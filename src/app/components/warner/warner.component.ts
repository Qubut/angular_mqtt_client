import { Component, OnInit } from '@angular/core';
import { IMqttMessage, MqttModule } from 'ngx-mqtt';
import { Observable, Subscription } from 'rxjs';
import { TopicsMqttService } from 'src/app/services/topics.mqtt.service';

@Component({
  selector: 'app-warner',
  templateUrl: './warner.component.html',
  styleUrls: ['./warner.component.css'],
})
export class WarnerComponent implements OnInit {
  topic = '/home/prototype';
  message = new Observable<IMqttMessage>();
  _subscription = new Subscription();
  constructor(private _topicMqttService: TopicsMqttService) {}

  ngOnInit(): void {
    this.message = this._topicMqttService.topic(this.topic);
  }
  parse(payload: any) {
    try {
      return JSON.parse(payload.toString());
    } catch (error) {
      console.log(error);
    }
  }
}
