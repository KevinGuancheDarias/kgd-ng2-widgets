import angular from 'rollup-plugin-angular';

export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/kgdng2widgets.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.kgdng2widgets',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/forms': 'ng.forms',
        '@angular/http': 'ng.http',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    },
    plugins: [
        angular()
    ]

}