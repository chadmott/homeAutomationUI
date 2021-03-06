import { Component, Input } from '@angular/core';
import { Device } from './device';
@Component({
  selector: 'device-detail',
  template: `
  <div *ngIf="device">
    <h2>{{device.name}} details!</h2>
    <div><label>id: </label>{{device.nodeid}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="device.name" placeholder="name"/>
    </div>
  </div>`
})

export class DeviceDetailComponent {
    device: Device;
}