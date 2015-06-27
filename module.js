/* modulejs - v0.0.0 - 2015-06-27
 * Copyright (c) 2015 Renaud Fontana <sirgzu@hotmail.com>
 * Licensed MIT */
modulejs = function(){
	var moduleLoader = {moduleMap: {}};
	moduleLoader.register = function(name, module){
		if (!this.moduleMap.hasOwnProperty(name))
			Object.defineProperty(this.moduleMap, name, {value: module(), enumerable: true});
	}
	return Object.freeze(moduleLoader);
}