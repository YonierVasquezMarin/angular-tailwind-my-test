import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // data for pipes
  today: number = Date.now();
  money: number = 10.5;
  mynumber: number = 33.45;
  messages: any[] = ['m1', 'm2'];
  messageMapping: { [k: string]: string } = { '=0': 'No messages.', '=1': 'One message.', '=2': 'Two messages.', 'other': '# messages.' };
  trafficLight: number = 1;
  trafficLightMapping : { [k: string]: string } = { '=1': 'Speed up', '=2': 'Keep', '=3': 'Stop' };
  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  myName: string = 'Yonier';
  batteryLevel: number = 0.75;
  myTitle: string = 'tHIs is mIXeD CaSe';

  // data for my own pipes
  myGender: string = 'M';

  constructor(
    public router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tailwind & Angular');
  }

}
