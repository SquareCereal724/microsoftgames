/*╔═.♥.════════════════════════════════════════════════════╗
 	Manage MSN GDK Events and Callbacks
	
	BKOM STUDIOS
	2019-11-01
╚══════════════════════════════════════════════════════.♥.═╝*/

	//Valid that external js lib is loaded
	window.externalMSNAdWrapper = true;
	

	/*
	Events
		• Toggle your mute state when you receive a call to onReceivingMuteGame.  We have a global site wrapper mute button, this isn’t called during the video ad playback flow.
		• Toggle your pause state when you receive a call to onReceivingPauseGame.  We have a global site wrapper pause button, this isn’t called during the video ad playback flow.
		• You'll receive onReceivingPlayAd when we're about to show a video ad.  Pause the game, save the mute state to restore it after the ad, and mute.  If you’re level based we won’t call this at arbitrary points, only when you call completedLevel.
		• You'll receive onAdPlaybackCompleted when we're done with video ads.  Unpause the game and return to the previous mute state.
	*/

	//Unmute/Unpause Game by request from MSN GDK ad playback completed
	window.msnAdWrapper.onAdPlaybackCompleted = function() {
		c2_callFunction("CallBackOnAdPlaybackCompleted", []);
		window.outputConsole("onAdPlaybackCompleted");
	};

	//Pause Game by request from MSN GDK
	window.msnAdWrapper.onReceivingPauseGame = function() {
		c2_callFunction("CallBackOnReceivingPauseGame", []);
		window.outputConsole("onReceivingPauseGame");
	};

	//Mute Game by request from MSN GDK
	window.msnAdWrapper.onReceivingMuteGame = function() {
		c2_callFunction("CallBackOnReceivingMuteGame", []);
		window.outputConsole("onReceivingMuteGame");
	};

	//Request from MSN GDK on StartAdPlayback
	window.msnAdWrapper.onStartAdPlayback = function() {
		c2_callFunction("CallBackOnStartAdPlayback", []);
		window.outputConsole("onStartAdPlayback");
	};
	
	//Request from MSN GDK on receiving ad
	window.msnAdWrapper.onReceivingPlayAd = function() {
		c2_callFunction("CallBackOnReceivingPlayAd", []);
		window.outputConsole("onReceivingPlayAd");
	};

	//Request from MSN GDK on onReceivingReadyForComm
	window.msnAdWrapper.onReceivingReadyForComm = function() {
		c2_callFunction("CallBackOnReceivingReadyForComm", []);
		window.outputConsole("onReceivingReadyForComm");
	};

	
	//Emit MSN Ad ready for comm
	window.emitMSN_readyForComm = function() {
		if(window.msnAdWrapper){ window.msnAdWrapper.readyForComm(); }
		window.outputConsole("emitMSN_readyForComm");
	};

	//Emit MSN ad onQuitGame
	window.emitMSN_onQuitGame = function() {
		if(window.msnAdWrapper){ window.msnAdWrapper.onQuitGame(); }
		window.outputConsole("emitMSN_onQuitGame");
	};

	//Emit MSN ad GamePaused
	window.emitMSN_gamePaused = function(flag) {
		if(window.msnAdWrapper){ window.msnAdWrapper.gamePaused(flag); }
		window.outputConsole("emitMSN_gamePaused");
	};

	//Emit MSN ad gameStarted
	window.emitMSN_gameStarted = function() {
		if(window.msnAdWrapper){ window.msnAdWrapper.gameStarted(); }
		window.outputConsole("emitMSN_gameStarted");
	};

	//Emit MSN ad onCompletedLevel
	window.emitMSN_completedLevel = function(levelCompleted) {
		if(window.msnAdWrapper){ window.msnAdWrapper.completedLevel(levelCompleted); }
		window.outputConsole("emitMSN_completedLevel " + levelCompleted);
	};


	c2_callFunction("CallBackMSNAdWrapperJSLoaded", [true]);

	//Confirmation log
	window.outputConsole("◕‿◕ msn_ad_wrapper_util loaded!");
