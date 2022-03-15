import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexDBService {

  indexDB = window.indexedDB;
  db: any;

  constructor() {
    const indexDB = window.indexedDB;

    if (this.indexDB) {
      const request = indexDB.open("localMealDB", 1);

      request.onsuccess = () => {
        this.db = request.result;
        console.log("Base de datos abierta", this.db);
      }

      request.onupgradeneeded = () => {
        this.db = request.result;
        console.log("Base de datps creada", this.db);
        const objStore = this.db.createObjectStore("users", { keyPath: "user" });
      }

      request.onerror = (e) => {
        console.error(e);
      }
    } else {
      console.log("indexDB no es compatible con el navegador");
    }
  }
}
