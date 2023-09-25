import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  activeContainer: string;

  showCreateContainer() {
    this.activeContainer = 'create';
    this.isVisible$.next(true);
  }

  showEditContainer() {
    this.activeContainer = 'edit';
    this.isVisible$.next(true);
  }

  showDeleteContainer() {
    this.activeContainer = 'delete';
    this.isVisible$.next(true);
  }

  closeContainer() {
    this.isVisible$.next(false);
  }
  
  open(){
    this.isVisible$.next(true)
  }
  
  close(){
    this.isVisible$.next(false)
  }
}
