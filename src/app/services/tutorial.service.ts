import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})

export class TutorialService {
  private dbPath = '/tenants';

  tenantsRef: AngularFireList<Tutorial>;

  constructor(private db: AngularFireDatabase) {
    this.tenantsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tutorial> {
    return this.tenantsRef;
  }

  create(tutorial: Tutorial): any {
    return this.tenantsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tenantsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tenantsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tenantsRef.remove();
  }
}