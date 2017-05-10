
export default {
  entry: 'dist_package/esm/plugins/bootstrap/index.js',
  dest: '.tmp/single-angular-modal.bootstrap.umd.js',
  format: 'umd',
  moduleName: 'angular2Modal.plugins.bootstrap',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    'single-angular-modal': 'angular2Modal',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/PromiseObservable': 'Rx',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx'
  }
}