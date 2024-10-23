import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('new_chat') popover: PopoverController;
  segment = "chats";
  chats: string = "chats";
  open_new_chat= false;
  //faz com que os dados sejam vistos em tempo real
  //usando por enquanto o array 
  users = [{
    id: 1, name: "a", photo: "https://ionicframework.com/docs/img/demos/avatar.svg"
  }];
  chatRooms = [{
    id: 1, name: "a", photo: "https://ionicframework.com/docs/img/demos/avatar.svg"
  }];

  constructor(private router: Router) {}

  onSegmentChange(event: any){
    console.log(event);
  }

  NewChat(){
    this.open_new_chat=true;
  }

  onWillDismiss(event: any){

  }

  cancel(){
    this.modal.dismiss();
    this.open_new_chat=false;
  }

  startChat(item){

  }

  getChat(item){
    this.router.navigate(['/', 'home', 'chat', item?.id ]);
  }
}
