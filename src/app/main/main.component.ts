import { Component } from '@angular/core';
import {
  TotalSubscribersWidgetComponent
} from '../widgets/total-subscribers-widget/total-subscribers-widget.component';
import { AvgOpenRateWidgetComponent } from '../widgets/avg-open-rate-widget/avg-open-rate-widget.component';
import { AvgClickRateWidgetComponent } from '../widgets/avg-click-rate-widget/avg-click-rate-widget.component';
import { UniqueVisitorsWidgetComponent } from '../widgets/unique-visitors-widget/unique-visitors-widget.component';
import { TotalTasksWidgetComponent } from '../widgets/total-tasks-widget/total-tasks-widget.component';
import { TotalProjectsWidgetComponent } from '../widgets/total-projects-widget/total-projects-widget.component';
import { EventsWidgetComponent } from '../widgets/events-widget/events-widget.component';
import { TeamWidgetComponent } from '../widgets/team-widget/team-widget.component';
import { TasksInProgressWidgetComponent } from '../widgets/tasks-in-progress-widget/tasks-in-progress-widget.component';
import { TodosWidgetComponent } from '../widgets/todos-widget/todos-widget.component';

@Component({
  imports: [
    TotalSubscribersWidgetComponent,
    AvgOpenRateWidgetComponent,
    AvgClickRateWidgetComponent,
    UniqueVisitorsWidgetComponent,
    TotalTasksWidgetComponent,
    TotalProjectsWidgetComponent,
    EventsWidgetComponent,
    TeamWidgetComponent,
    TasksInProgressWidgetComponent,
    TodosWidgetComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
