import { Injectable } from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class RouteReuseService extends RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void { }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
  shouldReuseRoute(curr: ActivatedRouteSnapshot, future: ActivatedRouteSnapshot): boolean {
    // TODO: read route data to figure out what to reuse, the pages that are troublesome are /**/details
    // if data contains "resuse: never" make a check on id values, if changed, return false

    if (future.routeConfig === curr.routeConfig) {
      if (future.data && future.data.reuse === 'never') {
        // check id, if the same, reuse, else reload
        return curr.paramMap.get('id') === future.paramMap.get('id');

      }

    }

    // make the usual chek
    return future.routeConfig === curr.routeConfig;
  }
}
