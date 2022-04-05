import {Component} from '@angular/core';
import {CONSTANTS} from '../../constants/constants';
import {ApiService} from '../../services/api.service';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //https://www.google.com/maps?z=12&t=m&q=loc:40.952266+29.090789
  //https://www.google.com/maps?z=12&t=m&q=loc:<lat>+<long>

  constants = CONSTANTS;

  stations;

  constructor(private apiService: ApiService, private loadingService: LoadingService) {
    this.getAllStations();
  }

  getAllStations() {
    this.loadingService.presentLoading(this.constants.loadingMessage).then(() => {
      this.apiService.get().then(res => {
        this.stations = res['dataList'];
        this.loadingService.dismissLoading();
      });
    });
  }

}
