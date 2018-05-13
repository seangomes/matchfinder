import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { LoaderService } from '../../../core/providers/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  private loaderSubscription : ISubscription;

  private loader: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.getLoader().subscribe((loader:any) => {
      this.loader = loader;
    });
  }


  ngOnDestroy(): void {
    if(this.loaderSubscription !== undefined) {
      this.loaderSubscription.unsubscribe();
    }
  }

}
