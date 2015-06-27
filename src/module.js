modulejs = function(){
	var moduleLoader = {moduleMap: {}};
	moduleLoader.register = function(name, module){
		if (!this.moduleMap.hasOwnProperty(name))
			Object.defineProperty(this.moduleMap, name, {value: module(), enumerable: true});
		else console.warn('module ['+name+'] is already registered.');
	}
	return Object.freeze(moduleLoader);
}