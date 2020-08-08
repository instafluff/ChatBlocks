'use strict';

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
		<script src="https://cdn.jsdelivr.net/npm/comfy.js@latest/dist/comfy.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/mathjs@7.1.0/dist/math.min.js"></script>
	</head>
	<body>
		<script type="text/javascript">
		try {
			math.createUnit('tbsp', {definition: '1 tablespoon', aliases: ["tbspoon"]});
			math.createUnit('tsp', {definition: '1 teaspoon', aliases: ["tspoon"]});

			let user = undefined, command = undefined, flags = {}, extra = {};
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
			${code}
			ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
				if( onCommandHandlers[ command ] ) {
					onCommandHandlers[ command ]( user, message, flags, extra );
				}
			};
			ComfyJS.onChat = ( user, message, flags, self, extra ) => {
				if( self ) { return; }
				onChatHandlers.forEach( x => {
					x( user, message, flags, self, extra );
				});
			};
			ComfyJS.onWhisper = ( user, message, flags, self, extra ) => {
				if( self ) { return; }
				onWhisperHandlers.forEach( x => {
					x( user, message, flags, self, extra );
				});
			};
			ComfyJS.onHosted = ( user, viewers, autohost, extra ) => {
				onHostHandlers.forEach( x => {
					x( user, viewers, autohost, extra );
				});
			};
			ComfyJS.onRaid = ( user, viewers, extra ) => {
				onRaidHandlers.forEach( x => {
					x( user, viewers, extra );
				});
			};
			ComfyJS.onCheer = ( user, message, bits, flags, extra ) => {
				onCheerHandlers.forEach( x => {
					x( user, message, bits, flags, extra );
				});
			};
			ComfyJS.onSub = ( user, message, subTierInfo, extra ) => {
				onSubHandlers.forEach( x => {
					x( user, message, subTierInfo, extra );
				});
			};
			ComfyJS.onResub = ( user, message, streakMonths, cumulativeMonths, subTierInfo, extra ) => {
				onResubHandlers.forEach( x => {
					x( user, message, streakMonths, cumulativeMonths, subTierInfo, extra );
				});
			};
			ComfyJS.onSubGift = ( gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra ) => {
				onSubGiftHandlers.forEach( x => {
					x( gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra );
				});
			};
			ComfyJS.onSubMysteryGift = ( gifterUser, numberOfSubs, senderCount, subTierInfo, extra ) => {
				onSubGiftBatchHandlers.forEach( x => {
					x( gifterUser, numberOfSubs, senderCount, subTierInfo, extra );
				});
			};
			ComfyJS.onGiftSubContinue = ( user, sender, extra ) => {
				onGiftSubContinueHandlers.forEach( x => {
					x( user, sender, extra );
				});
			};
			ComfyJS.Init( "${window.localStorage.getItem( "channel" ) || ComfyTwitch.User}", "oauth:${ComfyTwitch.Token}" );
		}
		catch( error ) {
			window.alert( "ERROR: " + error.message );
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
	  this.setHelpUrl("./Help/twitch.html#say");
	}
};

Blockly.JavaScript["twitch_say"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `ComfyJS.Say( ${value_value} );`;
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
	  this.setHelpUrl("./Help/twitch.html#whisper");
	}
};

Blockly.JavaScript["twitch_whisper"] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `ComfyJS.Whisper( ${value_value}, ${value_name} );`;
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
	  this.setHelpUrl("./Help/twitch.html#oncommand");
	}
};

Blockly.JavaScript["twitch_oncommand"] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onCommandHandlers[ ${value_name} ] = async ( user, message, flags, extra ) => {\n${statements_input}\n};\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onchat");
	}
};

Blockly.JavaScript["twitch_onchat"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onChatHandlers.push( async ( user, message, flags, self, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onwhisper");
	}
};

Blockly.JavaScript["twitch_onwhisper"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onWhisperHandlers.push( async ( user, message, flags, self, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onhost");
	}
};

Blockly.JavaScript["twitch_onhost"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onHostHandlers.push( async ( user, viewers, autohost, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onraid");
	}
};

Blockly.JavaScript["twitch_onraid"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onRaidHandlers.push( async ( user, viewers, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#oncheer");
	}
};

Blockly.JavaScript["twitch_oncheer"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onCheerHandlers.push( async ( user, message, bits, flags, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onsub");
	}
};

Blockly.JavaScript["twitch_onsub"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onSubHandlers.push( async ( user, message, subTierInfo, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onresub");
	}
};

Blockly.JavaScript["twitch_onresub"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onResubHandlers.push( async ( user, message, streakMonths, cumulativeMonths, subTierInfo, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onsubgift");
	}
};

Blockly.JavaScript["twitch_onsubgift"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onSubGiftHandlers.push( async ( gifter, streakMonths, user, gifterCount, subTierInfo, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#onbatchsubgift");
	}
};

Blockly.JavaScript["twitch_onbatchsubgift"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onSubGiftBatchHandlers.push( async ( gifter, numberOfSubs, gifterCount, subTierInfo, extra ) => {\n${statements_input}\n} );\n`;
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
	  this.setHelpUrl("./Help/twitch.html#ongiftsubcontinue");
	}
};

Blockly.JavaScript["twitch_ongiftsubcontinue"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onGiftSubContinueHandlers.push( async ( user, gifter, extra ) => {\n${statements_input}\n} );\n`;
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
  	this.setHelpUrl("./Help/twitch.html#message");
    }
};

Blockly.JavaScript[ "twitch_message" ] = function( block ) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `message`;
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
  	this.setHelpUrl("./Help/twitch.html#user");
    }
};

Blockly.JavaScript["twitch_user"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `user`;
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
  	this.setHelpUrl("./Help/twitch.html#user_id");
    }
};

Blockly.JavaScript["twitch_user_id"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(extra.userId)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["twitch_user_teams"] = {
	init: function() {
		this.jsonInit({
		"type": "twitch_user_teams",
		"message0": "get teams of userid %1",
		"args0": [
			{
				"type": "input_value",
				"name": "USER-ID",
				"check": "String",
				"align": "RIGHT"
			}
		],
		"output": "Array",
		"inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
		});
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("./Help/twitch.html#user_teams");
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

Blockly.Blocks["twitch_reward_id"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "reward ID",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(230);
  	this.setTooltip("");
  	this.setHelpUrl("./Help/twitch.html#reward_id");
    }
};

Blockly.JavaScript["twitch_reward_id"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( extra.customRewardId )`;
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
  	this.setHelpUrl("./Help/twitch.html#viewer_count");
    }
};

Blockly.JavaScript["twitch_viewer_count"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( viewers )`;
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
  	this.setHelpUrl("./Help/twitch.html#bits_count");
    }
};

Blockly.JavaScript["twitch_bits_count"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( bits )`;
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
  	this.setHelpUrl("./Help/twitch.html#gifter");
    }
};

Blockly.JavaScript["twitch_gifter"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( gifter )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_sub_prime");
    }
};

Blockly.JavaScript["twitch_is_sub_prime"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( subTierInfo && subTierInfo.prime )`;
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
  	this.setHelpUrl("./Help/twitch.html#sub_tier");
    }
};

Blockly.JavaScript["twitch_sub_tier"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( subTierInfo.plan === "1000" ? 1 : ( subTierInfo.plan === "2000" ? 2 : 3 ) )`;
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
  	this.setHelpUrl("./Help/twitch.html#sub_months");
    }
};

Blockly.JavaScript["twitch_sub_months"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( cumulativeMonths )`;
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
  	this.setHelpUrl("./Help/twitch.html#sub_stream");
    }
};

Blockly.JavaScript["twitch_sub_streak"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( streakMonths )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_broadcaster");
    }
};

Blockly.JavaScript["twitch_is_broadcaster"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.broadcaster )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_mod");
    }
};

Blockly.JavaScript["twitch_is_mod"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.mod )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_vip");
    }
};

Blockly.JavaScript["twitch_is_vip"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.vip )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_subscriber");
    }
};

Blockly.JavaScript["twitch_is_subscriber"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.subscriber )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_founder");
    }
};

Blockly.JavaScript["twitch_is_founder"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.founder )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_highlighted");
    }
};

Blockly.JavaScript["twitch_is_highlighted"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.highlighted )`;
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
  	this.setHelpUrl("./Help/twitch.html#is_reward");
    }
};

Blockly.JavaScript["twitch_is_reward"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `( flags.customReward )`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["text_replace"] = {
	init: function() {
		this.jsonInit({
		"type": "text_replace",
		"message0": "replace %1 with %2 in %3",
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
	  this.setHelpUrl("./Help/text/replace.html");
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
		"message0": "replaceAll %1 with %2 in %3",
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
	  this.setHelpUrl("./Help/text.html#replaceAll");
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
			"message0": "text %1 contains %2",
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
		this.setHelpUrl("./Help/text.html#contains");
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
			"message0": "count occurrences of %1 in %2",
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
		this.setHelpUrl("./Help/text.html#countAmount");
	}
};

Blockly.JavaScript[ "text_countAmount" ] = function(block) {
	var value_occuranceof = Blockly.JavaScript.valueToCode(block, "OCCURANCEOF", Blockly.JavaScript.ORDER_ATOMIC);
	var value_src = Blockly.JavaScript.valueToCode(block, "SOURCE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `( ${value_src}.match(new RegExp(${value_occuranceof}, "g")) || [] ).length`;
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
		"colour": 260,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(35);
	  this.setTooltip("");
	  this.setHelpUrl("./Help/utility.html#wait");
	}
};

Blockly.JavaScript["utility_wait"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `await wait( ${value_value} * 1000 );`;
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
		"colour": 260,
		"inputsInline": "true",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(35);
	  this.setTooltip("");
	  this.setHelpUrl("./Help/utility.html#ontimer");
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
	  this.setHelpUrl("./Help/utility.html#get_http");
	}
};

Blockly.JavaScript["utility_get_http"] = function(block) {
	var value_url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `await fetch( ${value_url}, {
		"headers": {
			"Accept": "text/plain"
		}
	} ).then( r => r.text() )`;
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
	  this.setHelpUrl("./Help/utility.html#post_http");
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
	}) )`;
	return code;
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
	  this.setHelpUrl("./Help/utility.html#console_log");
	}
};

Blockly.JavaScript["utility_console_log"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `console.log( ${value_value} );`;
	return code;
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
	  this.setHelpUrl("./Help/math.html#eval");
	}
};

Blockly.JavaScript["math_eval"] = function(block) {
	var value_exp = Blockly.JavaScript.valueToCode(block, "EXPRESSION", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `math.evaluate( ${value_exp} )`;
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
	  this.setHelpUrl("./Help/json.html#parse");
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
	  this.setHelpUrl("./Help/json.html#stringify");
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
	  this.setHelpUrl("./Help/json.html#setkey");
	}
};

Blockly.JavaScript[ "json_setkey" ] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var value_key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var value_json = Blockly.JavaScript.valueToCode(block, "JSON", Blockly.JavaScript.ORDER_ATOMIC);

	var code = `${value_json}[ ${value_key} ] = ${value_value};`;
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
		"output": "String",
		"inputsInline": true,
		// "previousStatement": null,
		// "nextStatement": null,
		"style": "list_blocks",
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setTooltip("");
	  this.setHelpUrl("./Help/json.html#getkey");
	}
};

Blockly.JavaScript[ "json_getkey" ] = function(block) {
	var value_key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
	var value_json = Blockly.JavaScript.valueToCode(block, "JSON", Blockly.JavaScript.ORDER_ATOMIC);

	var code = `${value_json}[ ${value_key} ]`;

	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks[ "json_create_with" ] = {
	init: function() {
    this.setHelpUrl("./Help/json.html#create_with");
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
