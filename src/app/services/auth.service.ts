import { Injectable } from '@angular/core';
import { Usuario } from '../models/user.model';
import { IndexDBService } from './index-db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  indexDB = window.indexedDB;
  db: any;

  constructor(
    private _idb: IndexDBService
  ) {

  }

  login(user: Usuario) {
    this.logOut();
    const transaction = this._idb.db.transaction(["users"], "readonly");
    const objStore = transaction.objectStore("users");

    const response = objStore.get(user.user);
    console.log(response);

    if (user.recordar) {
      localStorage.setItem("mealDBUser", user.user + "");
    } else {
      sessionStorage.setItem("mealDBUser", user.user + "");
    }
  }

  signUp(user: Usuario) {
    const transaction = this._idb.db.transaction(["users"], "readwrite");
    const objStore = transaction.objectStore("users");
    const response = objStore.add(user);
    console.log(response);

    response.onerror = (e: any) => {
      console.error(e);
      return false;
    }
    response.onsuccess = (data: any) => {
      console.log(data);
      return true;
    }
  }

  logOut() {
    localStorage.removeItem("mealDBUser");
    sessionStorage.removeItem("mealDBUser");
  }
}
