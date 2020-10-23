const clientId = "xrxinjwucvs83rf1b6lxq758yslj3c";
let theme = Blockly.Theme.defineTheme( "ChatBlocks", {
	// "base": oldTheme,
	"blockStyles": {
		"colour_blocks": {
			"colourPrimary": "#CF63CF",
			"colourSecondary": "#C94FC9",
			"colourTertiary": "#BD42BD"
		},
		"list_blocks": {
			"colourPrimary": "#9966FF",
			"colourSecondary": "#855CD6",
			"colourTertiary": "#774DCB"
		},
		"logic_blocks": {
			"colourPrimary": "#4C97FF",
			"colourSecondary": "#4280D7",
			"colourTertiary": "#3373CC"
		},
		"loop_blocks": {
			"colourPrimary": "#0fBD8C",
			"colourSecondary": "#0DA57A",
			"colourTertiary": "#0B8E69"
		},
		"math_blocks": {
			"colourPrimary": "#59C059",
			"colourSecondary": "#46B946",
			"colourTertiary": "#389438"
		},
		"procedure_blocks": {
			"colourPrimary": "#FF6680",
			"colourSecondary": "#FF4D6A",
			"colourTertiary": "#FF3355"
		},
		"text_blocks": {
			"colourPrimary": "#ffa600",
			"colourSecondary": "#E6AC00",
			"colourTertiary": "#CC9900"
		},
		"variable_blocks": {
			"colourPrimary": "#FF8C1A",
			"colourSecondary": "#FF8000",
			"colourTertiary": "#DB6E00"
		},
		"variable_dynamic_blocks": {
			"colourPrimary": "#FF8C1A",
			"colourSecondary": "#FF8000",
			"colourTertiary": "#DB6E00"
		},
		"hat_blocks": {
			"colourPrimary": "#4C97FF",
			"colourSecondary": "#4280D7",
			"colourTertiary": "#3373CC",
			"hat": "cap"
		}
	},
	"categoryStyles": {
		"colour_category": {
			"colour": "#CF63CF"
		},
		"list_category": {
			"colour": "#9966FF"
		},
		"logic_category": {
			"colour": "#4C97FF"
		},
		"loop_category": {
			"colour": "#0fBD8C"
		},
		"math_category": {
			"colour": "#59C059"
		},
		"procedure_category": {
			"colour": "#FF6680"
		},
		"text_category": {
			"colour": "#ffa600"
		},
		"variable_category": {
			"colour": "#FF8C1A"
		},
		"variable_dynamic_category": {
			"colour": "#FF8C1A"
		},
		"time_category": {
			"colour": "#1AF9FF"
		},
		"sound_category": {
			"colour": "#008080"
		}
	},
	"componentStyles": {
		"workspaceBackgroundColour": "#1e1e1e",
		"toolboxBackgroundColour": "#333",
		"toolboxForegroundColour": "#fff",
		"flyoutBackgroundColour": "#252526",
		"flyoutForegroundColour": "#ccc",
		"flyoutOpacity": 1,
		"scrollbarColour": "#797979",
		"insertionMarkerColour": "#fff",
		"insertionMarkerOpacity": 0.3,
		"scrollbarOpacity": 0.4,
		"cursorColour": "#d0d0d0"
	},
	"fontStyle": {
		"family": "Fredoka One, sans-serif",
		"weight": "normal",
		"size": 14
	},
});

var workspace = Blockly.inject( "blocklyDiv", {
	toolbox: document.getElementById( "toolbox" ),
	toolboxPosition: "end",
	grid: {
		spacing: 20,
		length: 3,
		colour: '#333',
		snap: true
	},
	zoom: {
		controls: true,
		wheel: true,
		scaleSpeed: 1.1,
	},
	theme: theme,
	oneBasedIndex: false,
} );

let theCode = "";

function codeUpdateHandler( event ) {
	var code = Blockly.JavaScript.workspaceToCode( workspace );
	theCode =
`<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/comfy.js@1.1.2/dist/comfy.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/mathjs@7.1.0/dist/math.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/moment@2.27.0/moment.min.js"></script>
	</head>
	<body>
		<script type="text/javascript">
		try {
			String.prototype.replaceAll=String.prototype.replaceAll?String.prototype.replaceAll:(arg1, arg2)=>{
				return this.split(arg1).join(arg2)
			}
			math.createUnit('tbsp', {definition: '1 tablespoon', aliases: ["tbspoon"]});
			math.createUnit('tsp', {definition: '1 teaspoon', aliases: ["tspoon"]});

			let cb_channel_id = undefined, cb_channel_username = undefined, cb_channel_display_name = undefined, cb_channel_description = undefined, cb_channel_profile_image = undefined;
			let cb_user = undefined, cb_command = undefined, cb_reward = undefined, cb_cost = undefined, cb_flags = {}, cb_extra = {};
			let onCommandHandlers = {};
			let onChatHandlers = [];
			let onWhisperHandlers = [];
			let onHostHandlers = [];
			let onRaidHandlers = [];
			let onCheerHandlers = [];
			let onSubHandlers = [];
			let onResubHandlers = [];
			let onSubGiftHandlers = [];
			let onSubGiftBatchHandlers = [];
			let onGiftSubContinueHandlers = [];
			let onRewardHandlers = [];
			let onConnectedHandlers = [];

			${code}

			ComfyJS.onCommand = ( cb_user, cb_command, cb_message, cb_flags, cb_extra ) => {
				if( onCommandHandlers[ cb_command ] ) {
					onCommandHandlers[ cb_command ]( cb_user, cb_message, cb_flags, cb_extra );
				}
			};
			ComfyJS.onChat = ( cb_user, cb_message, cb_flags, cb_self, cb_extra ) => {
				if( cb_self ) { return; }
				onChatHandlers.forEach( x => {
					x( cb_user, cb_message, cb_flags, cb_self, cb_extra );
				});
			};
			ComfyJS.onWhisper = ( cb_user, cb_message, cb_flags, cb_self, cb_extra ) => {
				if( cb_self ) { return; }
				onWhisperHandlers.forEach( x => {
					x( cb_user, cb_message, cb_flags, cb_self, cb_extra );
				});
			};
			ComfyJS.onHosted = ( cb_user, cb_viewers, cb_autohost, cb_extra ) => {
				onHostHandlers.forEach( x => {
					x( cb_user, cb_viewers, cb_autohost, cb_extra );
				});
			};
			ComfyJS.onRaid = ( cb_user, cb_viewers, cb_extra ) => {
				onRaidHandlers.forEach( x => {
					x( cb_user, cb_viewers, cb_extra );
				});
			};
			ComfyJS.onCheer = ( cb_user, cb_message, cb_bits, cb_flags, cb_extra ) => {
				onCheerHandlers.forEach( x => {
					x( cb_user, cb_message, cb_bits, cb_flags, cb_extra );
				});
			};
			ComfyJS.onSub = ( cb_user, cb_message, cb_subTierInfo, cb_extra ) => {
				onSubHandlers.forEach( x => {
					x( cb_user, cb_message, cb_subTierInfo, cb_extra );
				});
			};
			ComfyJS.onResub = ( cb_user, cb_message, cb_streakMonths, cb_cumulativeMonths, cb_subTierInfo, cb_extra ) => {
				onResubHandlers.forEach( x => {
					x( cb_user, cb_message, cb_streakMonths, cb_cumulativeMonths, cb_subTierInfo, cb_extra );
				});
			};
			ComfyJS.onSubGift = ( cb_gifterUser, cb_streakMonths, cb_recipientUser, cb_senderCount, cb_subTierInfo, cb_extra ) => {
				onSubGiftHandlers.forEach( x => {
					x( cb_gifterUser, cb_streakMonths, cb_recipientUser, cb_senderCount, cb_subTierInfo, cb_extra );
				});
			};
			ComfyJS.onSubMysteryGift = ( cb_gifterUser, cb_numberOfSubs, cb_senderCount, cb_subTierInfo, cb_extra ) => {
				onSubGiftBatchHandlers.forEach( x => {
					x( cb_gifterUser, cb_numberOfSubs, cb_senderCount, cb_subTierInfo, cb_extra );
				});
			};
			ComfyJS.onGiftSubContinue = ( cb_user, cb_sender, cb_extra ) => {
				onGiftSubContinueHandlers.forEach( x => {
					x( cb_user, cb_sender, cb_extra );
				});
			};
			ComfyJS.onReward = ( cb_user, cb_reward, cb_cost, cb_message, cb_extra ) => {
				onRewardHandlers.forEach( x => {
					x( cb_user, cb_reward, cb_cost, cb_message, cb_extra );
				});
			};
			ComfyJS.onConnected = ( address, port, isFirstConnect ) => {
				onConnectedHandlers.forEach( x => {
					x( address, port, isFirstConnect );
				});
			};

			ComfyJS.Init( "${window.localStorage.getItem( "channel" ) || ComfyTwitch.User}", "oauth:${ComfyTwitch.Token}" );
			fetch( "https://api.twitch.tv/helix/users?login=${window.localStorage.getItem( "channel" ) || ComfyTwitch.User}", {
				headers: {
					"Client-ID": "${clientId}",
					"Authorization": "Bearer ${ComfyTwitch.Token}"
				}
			} )
			.then( r => r.json() )
			.then( r => {
				cb_channel_id = r.data[ 0 ].id;
				cb_channel_username = r.data[ 0 ].login;
				cb_channel_display_name = r.data[ 0 ].display_name;
				cb_channel_description = r.data[ 0 ].description;
				cb_channel_profile_image = r.data[ 0 ].profile_image_url;
			});
		}
		catch( error ) {
			window.alert( "ERROR: " + error.message );
		}

		function playSound( url, vol ) { 
			return new Promise( ( resolve, reject ) => { 
				let a = new Audio( url ); 
				a.volume = vol; 
				a.onended = function () { resolve(); }
				a.play(); 
			}); 
		}

		function wait( time ) {
			return new Promise( ( resolve ) => {
				setTimeout( resolve, time );
			});
		}
		</script>
	</body>
</html>`;

	let xml = Blockly.Xml.workspaceToDom( Blockly.getMainWorkspace() );
	window.localStorage.setItem( "ChatBlocks", Blockly.Xml.domToText( xml ) );
}

window.onload = function() {
	let xmlText = window.localStorage.getItem( "ChatBlocks" );
	if( !xmlText ) {
		// Set to starter code
		xmlText = `<xml xmlns="https://developers.google.com/blockly/xml"><block type="twitch_oncommand" id="}{*.Pt_K%W@.z2Oz9Pw[" x="50" y="30"><comment pinned="true" h="76" w="213">This is a chat command for !hello</comment><value name="NAME"><block type="text" id="I+^@dk%fot6s%bd:)PVA"><field name="TEXT">hello</field></block></value><statement name="INPUT"><block type="twitch_say" id=":{zmL!*DFr#)qu_%gMsE"><value name="VALUE"><block type="text_join" id=";=EGIB*_hm2s[bxj12?T"><mutation items="3"></mutation><value name="ADD0"><block type="text" id="dxe~r=H6rrDpmdQrXOy0"><field name="TEXT">Hi </field></block></value><value name="ADD1"><block type="twitch_user" id="#N5|Z.elI91R]}x4x(YX"></block></value><value name="ADD2"><block type="text" id="Yh@F\`.#mC!ee,(nlq#rt"><field name="TEXT">!</field></block></value></block></value></block></statement></block></xml>`;
	}
	let xml = Blockly.Xml.textToDom( xmlText );
	let workspace = Blockly.getMainWorkspace();
	workspace.clear();
	workspace.addChangeListener( codeUpdateHandler );
	Blockly.Xml.domToWorkspace( xml, workspace );
}

let isCodeRunning = false;
document.getElementById( "run-code" ).addEventListener( "click", ( ev ) => {
	if( isCodeRunning ) {
		// Turn off the code
		document.getElementById( "workspace" ).classList.remove( "blocks-blocker" );
		document.getElementById( "run-code" ).classList.add( "btn-success" );
		document.getElementById( "run-code" ).classList.remove( "btn-danger" );
		document.getElementById( "save-code" ).removeAttribute( "disabled" );
		document.getElementById( "load-code" ).removeAttribute( "disabled" );
		document.getElementById( "clear-code" ).removeAttribute( "disabled" );
		document.getElementById( "channel-name" ).removeAttribute( "disabled" );
		document.getElementById( "run-code" ).innerHTML = `<i class="fa fa-play"></i> Run Blocks`;
		let sandbox = document.getElementById( "run-sandbox" );
		sandbox.innerHTML = "";
	}
	else {
		// Turn on the code
		codeUpdateHandler();
		document.getElementById( "workspace" ).classList.add( "blocks-blocker" );
		document.getElementById( "run-code" ).classList.add( "btn-danger" );
		document.getElementById( "run-code" ).classList.remove( "btn-success" );
		document.getElementById( "save-code" ).setAttribute( "disabled", true );
		document.getElementById( "load-code" ).setAttribute( "disabled", true );
		document.getElementById( "clear-code" ).setAttribute( "disabled", true );
		document.getElementById( "channel-name" ).setAttribute( "disabled", true );

		document.getElementById( "run-code" ).innerHTML = `<i class="fa fa-stop"></i> Stop Blocks`;
		let sandbox = document.getElementById( "run-sandbox" );
		sandbox.innerHTML = "";
		let iframe = document.createElement( "iframe" );
		sandbox.appendChild( iframe );
		let idoc = iframe.contentWindow.document;
		idoc.open();
		idoc.write( theCode );
		idoc.close();
	}
	isCodeRunning = !isCodeRunning;
} );

document.getElementById( "save-code" ).addEventListener( "click", ( ev ) => {
	let xml = Blockly.Xml.workspaceToDom( Blockly.getMainWorkspace() );
	// TODO: default to username.blocks
	var xmlText = new XMLSerializer().serializeToString( xml );
	download( "chatbot.cbs", xmlText );
} );

document.getElementById( "load-code" ).addEventListener( "click", ( ev ) => {
	document.getElementById( "blocks-file-input" ).click();
} );

document.getElementById( "clear-code" ).addEventListener( "click", ( ev ) => {
	workspace.clear();
} );

document.getElementById( "blocks-file-input" ).addEventListener( "change", async function () {
	const fileList = this.files;
	if( fileList.length > 0 ) {
		let fileName = await fileList[ 0 ].name;
		let xmlText = await fileList[ 0 ].text();
		xmlStrToWorkspace(fileName, xmlText);
	}
}, false );

function xmlStrToWorkspace( fileName="chatblocks.cbs", xmlText ) {
	if (fileName.split(".")[ 1 ] == "cbs") {
		// Make blocks append, not overwrite
		let workspace = Blockly.getMainWorkspace();
		let loadingXml = Blockly.Xml.textToDom( xmlText );
		Blockly.Xml.appendDomToWorkspace( loadingXml, workspace );
	}
}

function download( filename, text ) {
	var element = document.createElement("a");
	element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

Blockly.Blocks["twitch_say"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_say",
		"message0": "say %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": "String",
			"align": "RIGHT"
		  }
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(290);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_say"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `ComfyJS.Say( ${value_value} );\n`;
	return code;
};

Blockly.Blocks["twitch_reply"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_reply",
		"message0": "reply %1",
		"args0": [
			{
				"type": "input_value",
				"name": "MESSAGE",
				"check": "String",
				"align": "RIGHT"
		  }
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(290);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_reply"] = function(block) {
	var value_msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);

	var code = `if( ${value_msg} ) { ComfyJS.Say( "@" + cb_extra.username + " " + ${value_msg} ); }`;
	return code;
};

Blockly.Blocks["twitch_whisper"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_whisper",
		"message0": "whisper to %1 message %2",
		"args0": [
		  {
			"type": "input_value",
			"name": "NAME",
			"check": "String",
			"align": "RIGHT"
		  },
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": "String",
			"align": "RIGHT"
		  }
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(290);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_whisper"] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `ComfyJS.Whisper( ${value_value}, ${value_name} );\n`;
	return code;
};

Blockly.Blocks["twitch_oncommand"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_oncommand",
		"message0": "on command %1 %2",
		"args0": [
		  {
			"type": "input_value",
			"name": "NAME",
			"check": "String"
		  },
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_oncommand"] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onCommandHandlers[ ${value_name} ] = async ( cb_user, cb_message, cb_flags, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n};\n`;
	return code;
};

Blockly.Blocks["twitch_onchat"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onchat",
		"message0": "on chat %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onchat"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onChatHandlers.push( async ( cb_user, cb_message, cb_flags, cb_self, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onwhisper"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onwhisper",
		"message0": "on whisper %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onwhisper"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onWhisperHandlers.push( async ( cb_user, cb_message, cb_flags, cb_self, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onhost"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onhost",
		"message0": "on hosted %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onhost"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onHostHandlers.push( async ( cb_user, cb_viewers, cb_autohost, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onraid"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onraid",
		"message0": "on raid %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onraid"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onRaidHandlers.push( async ( cb_user, cb_viewers, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onreward"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onreward",
		"message0": "on channel point reward %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onreward"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onRewardHandlers.push( async ( cb_user, cb_reward, cb_cost, cb_message, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_oncheer"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_oncheer",
		"message0": "on bit cheer %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message, bits");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_oncheer"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onCheerHandlers.push( async ( cb_user, cb_message, cb_bits, cb_flags, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onsub"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onsub",
		"message0": "on new subscription %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onsub"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onSubHandlers.push( async ( cb_user, cb_message, cb_subTierInfo, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onresub"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onresub",
		"message0": "on subscription renewal %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onresub"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onResubHandlers.push( async ( cb_user, cb_message, cb_streakMonths, cb_cumulativeMonths, cb_subTierInfo, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onsubgift"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onsubgift",
		"message0": "on gift subscription per user %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onsubgift"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onSubGiftHandlers.push( async ( cb_gifter, cb_streakMonths, cb_user, cb_gifterCount, cb_subTierInfo, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onbatchsubgift"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onbatchsubgift",
		"message0": "on gift subscription event %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onbatchsubgift"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onSubGiftBatchHandlers.push( async ( cb_gifter, cb_numberOfSubs, cb_gifterCount, cb_subTierInfo, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_ongiftsubcontinue"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_ongiftsubcontinue",
		"message0": "on continue gift subscription %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_ongiftsubcontinue"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onGiftSubContinueHandlers.push( async ( cb_user, cb_gifter, cb_extra ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_onconnected"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onconnected",
		"message0": "on start %1",
		"args0": [
		  {
			"type": "input_statement",
			"name": "INPUT"
		  }
		],
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(260);
	  this.setTooltip("username, message");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_onconnected"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onConnectedHandlers.push( async ( address, port, isFirstConnect ) => {\ntry {\n${statements_input}\n} catch( cb_err ) {}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_message"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "chat message",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript[ "twitch_message" ] = function( block ) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `cb_message`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "username",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_user"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `cb_user`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user_id"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "user ID",
  	  "args0": [],
  	  "output": "String",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_user_id"] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `(cb_extra.userId)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user_teams"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_user_teams",
		"message0": "get list of teams for user ID %1",
		"args0": [
			{
				"type": "input_value",
				"name": "USER-ID",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"output": "Array",
		// "inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
		});
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_user_teams"] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, "USER-ID", Blockly.JavaScript.ORDER_ATOMIC);

  var code = `(( await fetch( \`https://api.twitch.tv/kraken/channels/\$\{${value_id}\}/teams\`, {
		method: "GET",
		headers: {
			'Accept': 'application/vnd.twitchtv.v5+json',
			'Client-ID': "${clientId}"
		}
	})
	.then(resp => resp.json()) ).teams.map(x => x.name))`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user_lookup_id"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_user_lookup_id",
		"message0": "get user ID for username %1",
		"args0": [
			{
				"type": "input_value",
				"name": "USER-NAME",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"output": "String",
		// "inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
		});
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_user_lookup_id"] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, "USER-NAME", Blockly.JavaScript.ORDER_ATOMIC);

  var code = `( ( await fetch( \`https://api.twitch.tv/helix/users?login=\$\{${value_id}\}\`, {
		method: "GET",
		headers: {
			'Authorization': 'Bearer ${ComfyTwitch.Token}',
			'Client-ID': "${clientId}"
		}
	})
	.then(resp => resp.json()) ).data[ 0 ].id )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user_lookup_channel"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_user_lookup_channel",
		"message0": "get list with stream info for user ID %1",
		"args0": [
			{
				"type": "input_value",
				"name": "USER-ID",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"output": "Array",
		// "inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
		});
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_user_lookup_channel"] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, "USER-ID", Blockly.JavaScript.ORDER_ATOMIC);

  var code = `Object.values( ( await fetch( \`https://api.twitch.tv/helix/channels?broadcaster_id=\$\{${value_id}\}\`, {
		method: "GET",
		headers: {
			'Authorization': 'Bearer ${ComfyTwitch.Token}',
			'Client-ID': "${clientId}"
		}
	})
	.then( resp => resp.json() ) ).data[ 0 ] )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user_follows_the_channel"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_user_follows_the_channel",
		"message0": "check if user ID %1 follows the channel",
		"args0": [
			{
				"type": "input_value",
				"name": "USER-ID",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"output": "Boolean",
		"inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
		});
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["twitch_user_follows_the_channel"] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, "USER-ID", Blockly.JavaScript.ORDER_ATOMIC);

  var code = `!!( await fetch( \`https://api.twitch.tv/helix/users/follows?to_id=\$\{cb_channel_id\}&from_id=\$\{${value_id}\}\`, {
		method: "GET",
		headers: {
			'Authorization': 'Bearer ${ComfyTwitch.Token}',
			'Client-ID': "${clientId}"
		}
	})
	.then( resp => resp.json() ) ).total`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_reward_name"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "channel point reward name",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_reward_name"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_reward )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_reward_id"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "channel point reward ID",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_reward_id"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_extra.customRewardId )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_reward_cost"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "channel point reward cost",
  	  "args0": [],
  	  "output": "Number",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_reward_cost"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_cost )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_viewer_count"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "number of viewers brought",
  	  "args0": [],
  	  "output": "Number",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_viewer_count"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_viewers )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_bits_count"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "amount of bits cheered",
  	  "args0": [],
  	  "output": "Number",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_bits_count"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_bits )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_gifter"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "subcription gifter username",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_gifter"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_gifter )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_sub_prime"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "subscription is Prime",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_sub_prime"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_subTierInfo && cb_subTierInfo.prime )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_sub_tier"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "subscription tier number",
  	  "args0": [],
  	  "output": "Number",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_sub_tier"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_subTierInfo.plan === "1000" ? 1 : ( cb_subTierInfo.plan === "2000" ? 2 : 3 ) )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_sub_months"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "total subscription months",
  	  "args0": [],
  	  "output": "Number",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_sub_months"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_cumulativeMonths )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_sub_streak"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "subscription month streak",
  	  "args0": [],
  	  "output": "Number",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_sub_streak"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_streakMonths )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_channel_id"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "current channel ID",
  	  "args0": [],
  	  "output": "String",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_channel_id"] = function(block) {
  var code = `(cb_channel_id)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_channel_username"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "current channel username",
  	  "args0": [],
  	  "output": "String",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_channel_username"] = function(block) {
  var code = `(cb_channel_username)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_channel_displayname"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "current channel display name",
  	  "args0": [],
  	  "output": "String",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_channel_displayname"] = function(block) {
  var code = `(cb_channel_display_name)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_channel_description"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "current channel description",
  	  "args0": [],
  	  "output": "String",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_channel_description"] = function(block) {
  var code = `(cb_channel_description)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_channel_profile_image"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "current channel profile image URL",
  	  "args0": [],
  	  "output": "String",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_channel_profile_image"] = function(block) {
  var code = `(cb_channel_profile_image)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_broadcaster"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "user is the broadcaster",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_broadcaster"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.broadcaster )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_mod"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "user is a moderator",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_mod"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.mod )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_vip"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "user is a VIP",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_vip"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.vip )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_subscriber"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "user is a subscriber",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_subscriber"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.subscriber )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_founder"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "user is a founder",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_founder"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.founder )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_highlighted"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "message is highlighted",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_highlighted"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.highlighted )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_is_reward"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "message is a channel point reward",
  	  "args0": [],
  	  "output": "Boolean",
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("https://www.instafluff.tv");
    }
};

Blockly.JavaScript["twitch_is_reward"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cb_flags.customReward )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "time_current" ] = {
	init: function() {
		this.jsonInit({
			"type": "time_current",
			"message0": "get current timestamp",
			"args0": [],
			"output": null,
			"colour": 182,
			"tooltip": "",
			"helpUrl": "http://www.instafluff.tv"
		})
	}
};

Blockly.JavaScript[ "time_current" ] = function(block) {
	var code = `moment( new Date())`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "time_current_unix" ] = {
	init: function() {
		this.jsonInit({
			"type": "time_current_unix",
			"message0": "get current timestamp (UNIX time)",
			"args0": [],
			"output": null,
			"colour": 182,
			"tooltip": "",
			"helpUrl": "http://www.instafluff.tv"
		})
	}
};

Blockly.JavaScript[ "time_current_unix" ] = function(block) {
	var code = `Date.now()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "time_nowto" ] = {
	init: function() {
		this.jsonInit({
			"type": "time_nowto",
			"message0": "get time from now to MM: %1 DD: %2 YYYY: %3",
			"args0": [
				{
					"type": "input_value",
					"name": "MM",
					"check": "Number",
					"align": "RIGHT"
				},
				{
					"type": "input_value",
					"name": "DD",
					"check": "Number",
					"align": "RIGHT"
				},
				{
					"type": "input_value",
					"name": "YYYY",
					"check": "Number",
					"align": "RIGHT"
				}
			],
			"output": null,
			"colour": 182,
			"tooltip": "",
			// "inputsInline": "true",
			"helpUrl": "http://www.instafluff.tv"
		})
	}
};

Blockly.JavaScript[ "time_nowto" ] = function(block) {
	let value_month = (parseInt(Blockly.JavaScript.valueToCode(block, "MM", Blockly.JavaScript.ORDER_ATOMIC) ) - 1) || new Date().getMonth();
	let value_day = Blockly.JavaScript.valueToCode(block, "DD", Blockly.JavaScript.ORDER_ATOMIC) || new Date().getDate();
	let value_year = Blockly.JavaScript.valueToCode(block, "YYYY", Blockly.JavaScript.ORDER_ATOMIC) || new Date().getFullYear();

	var code = `moment( new Date()).to( [${value_year}, ${value_month}, ${value_day}], true )`;
	return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.Blocks[ "sound_play" ] = {
	init: function() {
		this.jsonInit({
			"type": "sound_play",
			"message0": "play song from url %1 volume %2 \%",
			"args0": [
				{
					"type": "input_value",
					"name": "URL",
					"check": "String",
					"align": "RIGHT"
				},
				{
					"type": "field_slider",
					"name": "VOLUME",
					"value": 80
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "http://www.instafluff.tv"
		})
	}
}

Blockly.JavaScript[ "sound_play" ] = function(block) {
	var value_url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC) || '';
	var value_volume = block.getFieldValue("VOLUME");

	var code = `await playSound( ${value_url}, ${value_volume / 100} );\n`;
	return code;
}

Blockly.Blocks[ "sound_tts" ] = {
	init: function() {
		this.jsonInit({
			"type": "sound_tts",
			"message0": "text to speech %1",
			"args0": [
				{
					"type": "input_value",
					"name": "TEXT",
					"check": "String",
					"align": "RIGHT"
				},
			],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "http://www.instafluff.tv"
		})
	}
}

Blockly.JavaScript[ "sound_tts" ] = function(block) {
	var value_text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC) || '';

	var code = `window.speechSynthesis.speak( new SpeechSynthesisUtterance( ${value_text} ));\n`;
	return code;
}

Blockly.Blocks["text_replace"] = {
	init: function() {
		this.jsonInit({
		"type": "text_replace",
		"message0": "replace first %1 with %2 in text %3",
		"args0": [
		  {
				"type": "input_value",
				"name": "REPLACE",
				"check": "String",
				"align": "RIGHT"
			},
			{
				"type": "input_value",
				"name": "WITH",
				"check": "String",
				"align": "RIGHT"
			},
			{
				"type": "input_value",
				"name": "INPUT",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"inputsInline": "true",
		"output": "String",
		"tooltip": "",
		"helpUrl": "",
		"style": "text_blocks"
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["text_replace"] = function(block) {
	var value_replace = Blockly.JavaScript.valueToCode(block, "REPLACE", Blockly.JavaScript.ORDER_ATOMIC) || '';
	var value_with = Blockly.JavaScript.valueToCode(block, "WITH", Blockly.JavaScript.ORDER_ATOMIC) || '';
	var value_input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC) || '';

	var code = `${value_input}.replace(${value_replace}, ${value_with})`;

	return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.Blocks["text_replaceAll"] = {
	init: function() {
		this.jsonInit({
		"type": "text_replaceAll",
		"message0": "replace every %1 with %2 in text %3",
		"args0": [
		  {
				"type": "input_value",
				"name": "REPLACE",
				"check": "String",
				"align": "RIGHT"
			},
			{
				"type": "input_value",
				"name": "WITH",
				"check": "String",
				"align": "RIGHT"
			},
			{
				"type": "input_value",
				"name": "INPUT",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"inputsInline": "true",
		"output": "String",
		"tooltip": "",
		"helpUrl": "",
		"style": "text_blocks"
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["text_replaceAll"] = function(block) {
	var value_replace = Blockly.JavaScript.valueToCode(block, "REPLACE", Blockly.JavaScript.ORDER_ATOMIC) || '';
	var value_with = Blockly.JavaScript.valueToCode(block, "WITH", Blockly.JavaScript.ORDER_ATOMIC) || '';
	var value_input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC) || '';

	var code = `${value_input}.replaceAll(${value_replace}, ${value_with})`;

	return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.Blocks[ "text_contains" ] = {
	init: function() {
		this.jsonInit({
			"type": "text_contains",
			"message0": "check if text %1 contains %2",
			"args0": [
				{
					"type": "input_value",
					"name": "SOURCE",
					"check": "String",
					"align": "RIGHT"
				},
				{
					"type": "input_value",
					"name": "CONTAINS",
					"check": "String",
					"align": "RIGHT"
				}
			],
			"output": "Boolean",
			"style": "text_blocks",
			"inputsInline": true,
			"tooltip": "",
			"helpUrl": ""
		});
		this.setTooltip("");
		this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript[ "text_contains" ] = function(block) {
	var value_src = Blockly.JavaScript.valueToCode(block, "SOURCE", Blockly.JavaScript.ORDER_ATOMIC);
	var value_contains = Blockly.JavaScript.valueToCode(block, "CONTAINS", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `${value_src}.includes( ${value_contains} )`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "text_countAmount" ] = {
	init: function() {
		this.jsonInit({
			"type": "text_countAmount",
			"message0": "count occurrences of %1 in text %2",
			"args0": [
				{
					"type": "input_value",
					"name": "OCCURANCEOF",
					"check": "String",
					"align": "RIGHT"
				},
				{
					"type": "input_value",
					"name": "SOURCE",
					"check": "String",
					"align": "RIGHT"
				}
			],
			"output": "Number",
			"style": "text_blocks",
			"inputsInline": true,
			"tooltip": "",
			"helpUrl": ""
		});
		this.setTooltip("");
		this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript[ "text_countAmount" ] = function(block) {
	var value_occuranceof = Blockly.JavaScript.valueToCode(block, "OCCURANCEOF", Blockly.JavaScript.ORDER_ATOMIC);
	var value_src = Blockly.JavaScript.valueToCode(block, "SOURCE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `( ${value_src}.match(new RegExp(${value_occuranceof}, "g")) || [] ).length`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["text_encode_uri"] = {
	init: function() {
		this.jsonInit({
		"type": "text_encode_uri",
		"message0": "to URL %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "KEY",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		"colour": 35,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["text_encode_uri"] = function(block) {
	var key_value = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `encodeURI(${key_value})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["text_decode_uri"] = {
	init: function() {
		this.jsonInit({
		"type": "text_decode_uri",
		"message0": "from URL %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "KEY",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		"colour": 35,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["text_decode_uri"] = function(block) {
	var key_value = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `decodeURI(${key_value})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["text_encode_uri_component"] = {
	init: function() {
		this.jsonInit({
		"type": "text_encode_uri_component",
		"message0": "to URL component %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "KEY",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		"colour": 35,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["text_encode_uri_component"] = function(block) {
	var key_value = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `encodeURIComponent(${key_value})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["text_decode_uri_component"] = {
	init: function() {
		this.jsonInit({
		"type": "text_decode_uri",
		"message0": "from URL component %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "KEY",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		"colour": 35,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["text_decode_uri_component"] = function(block) {
	var key_value = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `decodeURIComponent(${key_value})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["utility_wait"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_wait",
		"message0": "wait for %1 seconds",
		"args0": [
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": "Number",
			"align": "RIGHT"
		  }
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 182,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_wait"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `await wait( ${value_value} * 1000 );\n`;
	return code;
};

Blockly.Blocks["utility_ontimer"] = {
	init: function() {
	  this.jsonInit({
		"type": "utility_ontimer",
		"message0": "at every %1 seconds",
		"args0": [{
			"type": "input_value",
			"name": "SECONDS",
			"check": "Number"
		}],
		"message1": "%1",
		"args1": [{
			"type": "input_statement",
			"name": "DO"
		}],
		"colour": 182,
		"inputsInline": "true",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_ontimer"] = function(block) {

	if ( block.getField('SECONDS') ) {
		let seconds = String(Number(block.getFieldValue('SECONDS')));
	} else {
		var seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '10';
	}
	let source = Blockly.JavaScript.statementToCode(block, 'DO');
	let code = '';

	code += 'setInterval( async ( ) => {\n';
	code += `${source}\n`;
	code += `}, ${seconds} * 1000);\n`;

	return code;
};

Blockly.Blocks["utility_get_http"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_get_http",
		"message0": "get from web URL %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "URL",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(35);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_get_http"] = function(block) {
	var value_url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `await (await fetch( ${value_url}, {
		"headers": {
			"Accept": "text/plain"
		}
	} )).text()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["utility_post_http"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_post_http",
		"message0": "send to web URL %1 message %2",
		"args0": [
		  {
			"type": "input_value",
			"name": "URL",
			"check": "String",
			"align": "RIGHT"
		  },
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	// "output": "String",
		"previousStatement": null,
		"nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(35);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_post_http"] = function(block) {
	var value_url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `( await fetch( ${value_url}, {
		"method": "POST",
		"headers": {
			"Content-Type": "application/json"
		},
		"body": ${value_value}
	}) );\n`;
	return code;
};

Blockly.Blocks["utility_post_http_get_rslt"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_post_http_get_rslt",
		"message0": "get data from data sent to web URL %1 message %2",
		"args0": [
		  {
			"type": "input_value",
			"name": "URL",
			"check": "String",
			"align": "RIGHT"
		  },
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(35);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_post_http_get_rslt"] = function(block) {
	var value_url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `await (await fetch( ${value_url}, {
		"method": "POST",
		"headers": {
			"Content-Type": "application/json"
		},
		"body": ${value_value}
	} )).text()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks["utility_console_log"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_console_log",
		"message0": "log to debug console %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": [ "String", "Array", "Number", "Json", "Boolean" ],
			"align": "RIGHT"
		  }
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(35);
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_console_log"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `console.log( ${value_value} );\n`;
	return code;
};

Blockly.Blocks["utility_save_data"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_save_data",
		"message0": "save to browser storage as %1 text %2",
		"args0": [
		  {
			  "type": "input_value",
			  "name": "KEY",
			  "check": "String",
			  "align": "RIGHT"
		  },
		  {
			"type": "input_value",
			"name": "VALUE",
			"check": "String",
			"align": "RIGHT"
		  }
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 35,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_save_data"] = function(block) {
	var key_value = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `window.localStorage.setItem( "cb_" + ${key_value}, ${value_value} );\n`;
	return code;
};

Blockly.Blocks["utility_load_data"] = {
	init: function() {
		this.jsonInit({
		"type": "utility_load_data",
		"message0": "load text from browser storage %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "KEY",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		"colour": 35,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["utility_load_data"] = function(block) {
	var key_value = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `window.localStorage.getItem( "cb_" + ${key_value} ) || ""`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["math_eval"] = {
	init: function() {
		this.jsonInit({
		"type": "math_eval",
		"message0": "evaluate %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "EXPRESSION",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		// "previousStatement": null,
		// "nextStatement": null,
		"style": "math_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript["math_eval"] = function(block) {
	var value_exp = Blockly.JavaScript.valueToCode(block, "EXPRESSION", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `( ${value_exp}.startsWith( "\\"" ) ? "" : math.evaluate( ${value_exp} ) )`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};


// TODO IMPLEMENT THE JSON EXPIRIMENTAL HERE

Blockly.Blocks[ "json_parse" ] = {
	init: function() {
		this.jsonInit({
		"type": "json_parse",
		"message0": "parse %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "PARSE",
			"check": "String",
			"align": "RIGHT"
		  }
		],
    "output": "Json",
		"style": "list_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
}

Blockly.JavaScript[ "json_parse" ] = function(block) {
	var value_parse = Blockly.JavaScript.valueToCode(block, "PARSE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `JSON.parse( ${value_parse} )`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "json_stringify" ] = {
	init: function() {
		this.jsonInit({
		"type": "json_stringify",
		"message0": "stringify %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "STRINGIFY",
			"check": "Json",
			"align": "RIGHT"
		  }
		],
    	"output": "String",
		"style": "list_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
}

Blockly.JavaScript[ "json_stringify" ] = function(block) {
	var value_stringify = Blockly.JavaScript.valueToCode(block, "STRINGIFY", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `JSON.stringify( ${value_stringify} )`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "json_setkey" ] = {
	init: function() {
		this.jsonInit({
		"type": "json_setkey",
		"message0": "set value: %1 at key: %2 in json: %3",
		"args0": [
			{
				"type": "input_value",
				"name": "VALUE",
				"check": ["String", "Number", "Array", "Json"],
				"align": "RIGHT"
			},
		  {
				"type": "input_value",
				"name": "KEY",
				"check": "String",
				"align": "RIGHT"
		  },
		  {
				"type": "input_value",
				"name": "JSON",
				"check": "Json",
				"align": "RIGHT"
		  }
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"style": "list_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript[ "json_setkey" ] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var value_key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var value_json = Blockly.JavaScript.valueToCode(block, "JSON", Blockly.JavaScript.ORDER_ATOMIC);

	var code = `${value_json}[ ${value_key} ] = ${value_value};\n`;
	return code;
};

Blockly.Blocks[ "json_getkey" ] = {
	init: function() {
		this.jsonInit({
		"type": "json_getkey",
		"message0": "get value at key: %1 from json: %2",
		"args0": [
		  {
			"type": "input_value",
			"name": "KEY",
			"check": "String",
			"align": "RIGHT"
		  },
		  {
			"type": "input_value",
			"name": "JSON",
			"check": "Json",
			"align": "RIGHT"
		  }
		],
		"output": null,
		"inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"style": "list_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript[ "json_getkey" ] = function(block) {
	var value_key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var value_json = Blockly.JavaScript.valueToCode(block, "JSON", Blockly.JavaScript.ORDER_ATOMIC);

	var code = `${value_json}[ ${value_key} ]`;

	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "json_getallkeys" ] = {
	init: function() {
		this.jsonInit({
		"type": "json_getallkeys",
		"message0": "get list of keys from json: %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "JSON",
			"check": "Json",
			"align": "RIGHT"
		  }
		],
		"output": "Array",
		// "inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"style": "list_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("https://www.instafluff.tv");
	}
};

Blockly.JavaScript[ "json_getallkeys" ] = function(block) {
	var value_json = Blockly.JavaScript.valueToCode(block, "JSON", Blockly.JavaScript.ORDER_ATOMIC);

	var code = `Object.keys( ${value_json} )`;

	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "json_create_with" ] = {
	init: function() {
    this.setHelpUrl("https://www.instafluff.tv");
    this.setStyle('list_blocks');
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'Json');
    this.setMutator(new Blockly.Mutator(['json_create_with_item']));
    this.setTooltip("");
	},

	mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
	},

	domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
	},

	decompose: function(workspace) {
    var containerBlock = workspace.newBlock('json_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('json_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
	},

	compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('KEY' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
			Blockly.Mutator.reconnect(connections[i], this, 'KEY' + i);
    }
	},

	saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
			var input = this.getInput('KEY' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },

	updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField("create empty json");
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('KEY' + i)) {
				let input = this.appendValueInput('KEY' + i).setAlign(Blockly.ALIGN_RIGHT);
				let input2 = this.appendValueInput('VALUE' + i).setAlign(Blockly.ALIGN_RIGHT);
				if (i == 0) { input.appendField("create json with"); }
				input.appendField('key')
				input2.appendField('value')
      }
    }
    // Remove deleted inputs.
    while (this.getInput('KEY' + i)) {
			this.removeInput('KEY' + i);
			this.removeInput('VALUE' + i);
      i++;
    }
  }
}

Blockly.JavaScript[ "json_create_with" ] = function(block) {
	let jsonObject = "{\n"
  for (var i = 0; i < block.itemCount_; i++) {
		let key = Blockly.JavaScript.valueToCode(block, 'KEY' + i, Blockly.JavaScript.ORDER_COMMA);
		let value = Blockly.JavaScript.valueToCode(block, 'VALUE' + i, Blockly.JavaScript.ORDER_COMMA);
		jsonObject += `${key}: ${value}, \n`
	}
	jsonObject += "}"
  var code = `${jsonObject}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['json_create_with_item'] = {
  init: function() {
    this.setStyle('list_blocks');
		this.appendDummyInput()
        .appendField("item");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks['json_create_with_container'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
        .appendField("json");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};
