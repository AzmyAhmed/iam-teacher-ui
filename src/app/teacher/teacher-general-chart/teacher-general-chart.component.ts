import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-teacher-general-chart',

  templateUrl: './teacher-general-chart.component.html',
  styleUrl: './teacher-general-chart.component.css'
})
export class TeacherGeneralChartComponent {
  chart: any;
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;

  @Input() examsResult: any = [65, 59, 80, 81, 56, 55, 40];
  @Input() financeResult: any;
  @Input() attendanceResult: any;
  public data: any = {
    labels: ['JAN', 'FEB', 'MARS', 'APRIL', 'JUN', 'JULY', 'AUG', 'SEP', 'NOV', 'DEC'],
    datasets: [{
      label: 'My First Dataset',
      data: this.examsResult,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  public config: any = {
    type: 'bar',
    data: this.data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  public config2: any = {
    type: 'pie',
    data: this.data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  public config1: any = {
    type: 'polarArea',
    data: this.data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  public config3: any = {
    type: 'doughnut',
    data: this.data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  public config4: any = {
    type: 'line',
    data: this.data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {

    this.chart = new Chart('MyChart', this.config);
    this.chart1 = new Chart('MyChart1', this.config1);
    this.chart2 = new Chart('MyChart2', this.config2);
    this.chart3 = new Chart('MyChart3', this.config3);
    this.chart4 = new Chart('MyChart4', this.config4);

  }

}
