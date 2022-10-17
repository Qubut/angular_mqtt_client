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
  data = new Observable<IMqttMessage>()
  _subscription= new Subscription()
  constructor(private _topicMqttService: TopicsMqttService) {}

  ngOnInit(): void {
  this.data =  this._topicMqttService.topic(this.topic)
}

}
