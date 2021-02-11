import { Injectable } from "@angular/core";
import { promise } from "protractor";
import { resolve } from "url";

@Injectable({providedIn: 'root'})
export class AuthService {
    private isAuth = false;

    login() {
        this.isAuth = true;
    }

    logout() {
        this.isAuth = false;
    }

    isAuthenticated(): Promise<boolean> {
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise( resolve => {
            setTimeout( () => {
                resolve(this.isAuth);
            }, 1000);
        });
    }
}