import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-associated-devices',
  templateUrl: './associated-devices.component.html',
  styleUrls: ['./associated-devices.component.scss']
})
export class AssociatedDevicesComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dispositivos asociados');
  }

}
