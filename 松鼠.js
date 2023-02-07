oS.Init({
	PName: [],
	ZName: [oZombie],
	PicArr: ["images/interface/background1.jpg", "images/interface/background1.jpg"],
	backgroundImage: "images/interface/background1.jpg",
	ShowScroll: false,
	CanSelectCard: 0,
	SunNum: 0,
	LevelName: "松鼠",
	LvlEName: "songshu",
	LargeWaveFlag: {
		9: $("imgFlag1")
	},
	StartGame: function() {
		StopMusic(), AllAudioStop();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		oS.InitLawnMower();
		CustomSpecial(oWallNut, 1, 1);
		CustomSpecial(oWallNut, 2, 1);
		CustomSpecial(oWallNut, 3, 1);
		CustomSpecial(oWallNut, 4, 1);
		CustomSpecial(oWallNut, 5, 1);
		CustomSpecial(oWallNut, 1, 2);
		CustomSpecial(oWallNut, 2, 2);
		CustomSpecial(oWallNut, 3, 2);
		CustomSpecial(oWallNut, 4, 2);
		CustomSpecial(oWallNut, 5, 2);
		CustomSpecial(oWallNut, 1, 3);
		CustomSpecial(oWallNut, 2, 3);
		CustomSpecial(oWallNut1, 3, 3);
		CustomSpecial(oWallNut, 4, 3);
		CustomSpecial(oWallNut, 5, 3);
		CustomSpecial(oWallNut, 1, 4);
		CustomSpecial(oWallNut, 2, 4);
		CustomSpecial(oWallNut, 3, 4);
		CustomSpecial(oWallNut, 4, 4);
		CustomSpecial(oWallNut1, 5, 4);
		CustomSpecial(oWallNut, 1, 5);
		CustomSpecial(oWallNut, 2, 5);
		CustomSpecial(oWallNut, 3, 5);
		CustomSpecial(oWallNut, 4, 5);
		CustomSpecial(oWallNut1, 5, 5);
		CustomSpecial(oWallNut, 1, 6);
		CustomSpecial(oWallNut, 2, 6);
		CustomSpecial(oWallNut1, 3, 6);
		CustomSpecial(oWallNut, 4, 6);
		CustomSpecial(oWallNut, 5, 6);
		CustomSpecial(oWallNut, 1, 7);
		CustomSpecial(oWallNut1, 2, 7);
		CustomSpecial(oWallNut, 3, 7);
		CustomSpecial(oWallNut, 4, 7);
		CustomSpecial(oWallNut, 5, 7);
		CustomSpecial(oWallNut1, 1, 8);
		CustomSpecial(oWallNut, 2, 8);
		CustomSpecial(oWallNut, 3, 8);
		CustomSpecial(oWallNut, 4, 8);
		CustomSpecial(oWallNut, 5, 8);
		CustomSpecial(oWallNut2, 1, 9);
		CustomSpecial(oWallNut, 2, 9);
		CustomSpecial(oWallNut, 3, 9);
		CustomSpecial(oWallNut1, 4, 9);
		CustomSpecial(oWallNut, 5, 9);
		PrepareGrowPlants(function() {
			BeginCool();
		})
	}, 
	LoadAccess: function(callback) {
			window.松鼠 = 7,
	(function() {
		if (window.松鼠 == 0) {
			oP.FlagToEnd()
		} else {
			oSym.addTask(100, arguments.callee, [])
		};
	})();
	callback();
}
}, {
	AZ: [
	],
	FlagNum: Infinity,
	FlagToSumNum: {
	},
	FlagToMonitor: {
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/interface/Shovel.png", "left:827px;top:425px;clip:rect(auto,auto,auto,auto)", EDAll, {
			onclick: function() {
				SelectModal(0)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:390px;left:836px", EDAll)
	}
});