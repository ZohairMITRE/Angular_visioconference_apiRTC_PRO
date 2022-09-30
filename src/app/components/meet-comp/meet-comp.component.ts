import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meet-comp',
  templateUrl: './meet-comp.component.html',
  styleUrls: ['./meet-comp.component.css']
})
export class MeetCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    window.open("http://meet.google.com/new", "_blank");
  }

  planifier_reunion() {
    window.open("https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=fr&pli=1", "_blank");
  }
  
  acceder_reunion(){
    let meet_key=this.onSubmit2; 
    window.open("https://meet.google.com/"+meet_key+"?authuser=0","_blank");
  }

  onSubmit2(event: any) {
    console.log(event.target.player.value);
    return event.target.player.value;
 }
}
