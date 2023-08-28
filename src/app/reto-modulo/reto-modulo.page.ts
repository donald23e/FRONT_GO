import { Component, OnInit } from '@angular/core';
import { Health, HealthDataType  } from '@awesome-cordova-plugins/health/ngx';
@Component({
  selector: 'app-reto-modulo',
  templateUrl: './reto-modulo.page.html',
  styleUrls: ['./reto-modulo.page.scss'],
})
export class RetoModuloPage implements OnInit {
  stepCount: number;
  constructor(private health: Health) {

   }

  ngOnInit() {
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date();

    this.health.query({
      startDate: startDate,
      endDate: endDate,
      dataType: 'step_count'
    })
      .then((data) => {
        if (data.length > 0) {
          // Access the step count value
          this.stepCount = parseFloat(data[0].value);
        } else {
          console.log('No step count data available.');
        }
      })
      .catch((err) => {
        console.error('Error retrieving step count:', err);
      });
  }

}
