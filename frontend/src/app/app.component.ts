import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ApiService } from './services/api.service';

interface Store {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  form: FormGroup;
  nameToUpdate: string;
  stores: Store[] = [];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({ storeName: null });
    this.showStore();
  }

  createStore() {
    const { storeName } = this.form.value;

    const store = {
      name: storeName
    };

    this.apiService.create(store)
      .subscribe((response: Store[]) => {
        this.stores = response
        console.log('[create]', this.stores);
        this.form.reset();
      },
        err => {
          console.error('[create]', err);
        }
      );
  }

  showStore() {
    this.apiService.show()
      .subscribe((response: Store[]) => {
        this.stores = response['store'];
        console.log('[show]', this.stores);
        this.form.reset();
      },
        err => {
          console.error('[show]', err);
        }
      );
  }

  updateStore(store: Store) {
    const { id, name } = store;

    console.log('store', id, name, this.nameToUpdate);

    this.apiService.update(id, this.nameToUpdate)
      .subscribe((response: Store[]) => {
        this.stores = response
        console.log('[update]', this.stores);
        this.form.reset();
      },
        err => {
          console.error('[update]', err);
        }
      );
  }

  destroyStore(id) {
    this.apiService.destroy(id)
      .subscribe((response: Store[]) => {
        this.stores = response
        console.log('[destroy]', this.stores);
        this.form.reset();
      },
        err => {
          console.error('[destroy]', err);
        }
      );
  }

  changed(e) {
    const newStoreName = e.target.value;

    this.nameToUpdate = newStoreName
  }
}
