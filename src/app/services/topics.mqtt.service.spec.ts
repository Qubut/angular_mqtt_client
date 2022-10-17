import { TestBed } from '@angular/core/testing';

import { Topics.MqttService } from './topics.mqtt.service';

describe('Topics.MqttService', () => {
  let service: Topics.MqttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Topics.MqttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
