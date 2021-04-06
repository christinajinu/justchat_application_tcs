import { Component, OnInit } from '@angular/core';
import {io } from 'socket.io-client';
import { FormsModule } from '@angular/forms';
import { Button } from 'selenium-webdriver';

const SOCKET_ENDPOINT = 'localhost:3000'

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
socket:any;
message: any;

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast',(data:string)=>{
      if(data){
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        document.getElementById('message-list')?.appendChild(element);
      }
    });
  }

  SendMessage(){
    this.socket.emit('message',this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'white';
    element.style.color = 'black';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   element.style.textAlign = 'right';
   document.getElementById('message-list')?.appendChild(element);
    this.message = '';
  }

}
