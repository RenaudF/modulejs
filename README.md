## Modulejs

Simple JS module loader that lets you inject dependencies where you might need them.

# Get started

    App = modulejs();

# Everything is a module

    App.register('fooFactory', function(){
        return function(){
            this.foo = 'bar';
        }
    });

    App.register('fooService', function(){
        return {
            foo: 'bar'
        };
    });

    App.register('fooController', function(){
        var fooFactory = App.moduleMap['fooFactory'];
        var fooService = App.moduleMap['fooService'];
        // ...
    })