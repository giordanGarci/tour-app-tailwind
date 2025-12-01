import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthGoogleService } from '../../authgoogle.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = {
    title: 'Default Title',
    subtitle: 'Default Subtitle'
  };

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authGoogleService: AuthGoogleService
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activateRoute.firstChild !== null),
        map(() => this.getPropsLayout())
      ).subscribe(props => {
        this.props = props;
      });
  }

  getPropsLayout(): LayoutProps {
    let childRoute = this.activateRoute.firstChild;
    while (childRoute?.firstChild) {
      childRoute = childRoute.firstChild;
    }
    return childRoute?.snapshot.data as LayoutProps || this.props;
  }

  logout() {
    this.authGoogleService.logout();
  }
}
