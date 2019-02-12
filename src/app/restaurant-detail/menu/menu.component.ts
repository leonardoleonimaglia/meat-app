import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from '../../restaurants/restaurants.service'
import { MenuItem } from '../menu-item/menu-item.model'

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let restaurantId: string = this.route.parent.snapshot.params['id']
    this.menu = this.restaurantsService.restaurantMenu(restaurantId)
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
