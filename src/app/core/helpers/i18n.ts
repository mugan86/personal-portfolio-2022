import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import merge from 'deepmerge'; // need install dependencies with npm i deepmerge

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient, private prefix: string = 'app') {}
  public getTranslation(lang: string): any {
    return this.http.get(
      './assets/data/i18n/' + this.prefix + '/' + lang + '.json'
    );
  }
}

export class MultiTranslateHttpLoader implements TranslateLoader{
  constructor(private http: HttpClient, private resources: String[]) {}
  getTranslation(lang: string) {
    const requests = this.resources.map((resource) => {
      const path = './assets/data/i18n/' + resource + '/' + lang + '.json';
      return this.http.get(path).pipe(
        catchError((res) => {
          console.error(
            'Something went wrong for the following translation file:',
            path
          );
          console.error(res.message);
          return of({});
        })
      );
    });
    return forkJoin(requests).pipe(map((response) => merge.all(response)));
  }
}