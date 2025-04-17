

const scriptsInEvents = {

	async Ejogo_Event19_Act2(runtime, localVars)
	{
		let vida = runtime.globalVars.vida;
		
		vida --;
		
		runtime.globalVars.vida = vida;
		
		if(vida <=0){
		console.log("Game Over");
		runtime.goToLayout("Game Over")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
