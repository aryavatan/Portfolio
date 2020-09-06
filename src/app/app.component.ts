import { Component, OnDestroy, Inject} from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common'; 

export let browserRefresh = false;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
	title = 'Arya-Resume';

	subscription: Subscription;
    sidenavWidth: any;

	constructor(private router: Router, @Inject(DOCUMENT) document) {
		this.subscription = router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {  // START Navigation
                browserRefresh = !router.navigated;
                window.scrollTo(0, 0);
                this.enableActiveNavButton(false);
            }
            
            if (event instanceof NavigationEnd) {  // AFTER Navigation
                this.enableActiveNavButton(true);
            }
        });
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	openNav(){
		this.sidenavWidth = "220px";
	}

	closeNav(){
		this.sidenavWidth = 0;
    }
    
    // This method will enable the primary color of the nav buttons to indicate the active page
    // Alternatively, it will disable the primary color of all nav buttons
    enableActiveNavButton(enable) {
        if (enable) {
            let id = window.location.pathname.replace('/','');

            // Edge cases:
            id = id === 'projects/project-details' ? 'projects' : id;

            // "projects/project-details" = projects

            let navButton = document.getElementById(id ? id : 'home');
            navButton.setAttribute('class', 'selected');
        }
        else {
            const idList = ['home', 'about', 'experience', 'projects', 'contact'];
            idList.forEach((elementID) => {
                let navButton = document.getElementById(elementID);
                navButton.setAttribute('class', null);
            });
        }
    }

}
