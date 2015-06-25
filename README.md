## Modulejs

Simple JS module loader that lets you inject dependencies where you might need them.

# Get started

    App = modulejs();

# Everything is a module

    App.module('fooFactory', function(){
        return function(){
            this.foo = 'bar';
        }
    });

    App.module('fooService', function(){
        return {
            foo: 'bar'
        };
    });

    App.module('fooController', function(){
        var fooFactory = App.get('fooFactory');
        var fooService = App.get('fooService');
        // ...
    })