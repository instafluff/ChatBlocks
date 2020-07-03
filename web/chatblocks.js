var workspace = Blockly.inject( "blocklyDiv", {
	toolbox: document.getElementById( "toolbox" )
} );

let theCode = "";

function myUpdateFunction( event ) {
	var code = Blockly.JavaScript.workspaceToCode( workspace );
	theCode =
`<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/comfy.js@latest/dist/comfy.min.js"></script>
	</head>
	<body>
		<script type="text/javascript">
		let onCommandHandlers = {};
		let onChatHandlers = [];
		${code}
		ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
			if( onCommandHandlers[ command ] ) {
				onCommandHandlers[ command ]( user, message, flags, extra );
			}
		};
		ComfyJS.onChat = ( user, message, flags, self, extra ) => {
			onChatHandlers.forEach( x => {
				x( user, message, flags, self, extra );
			});
		};
		ComfyJS.Init( "instafluff", "oauth:" );
		</script>
	</body>
</html>`;

	let xml = Blockly.Xml.workspaceToDom( Blockly.getMainWorkspace() );
	window.localStorage.setItem( "ChatBlocks", Blockly.Xml.domToText( xml ) );
}

window.onload = function() {
	workspace.addChangeListener( myUpdateFunction );
	let xmlText = window.localStorage.getItem( "ChatBlocks" );
	if( xmlText ) {
		let xml = Blockly.Xml.textToDom( xmlText );
		let workspace = Blockly.getMainWorkspace();
		workspace.clear();
		Blockly.Xml.domToWorkspace( xml, workspace );
	}
}

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
			"colourPrimary": "#FFBF00",
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
			"colour": "#FFBF00"
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
workspace.setTheme( theme );

let isCodeRunning = false;
document.getElementById( "run-code" ).addEventListener( "click", ( ev ) => {
	if( isCodeRunning ) {
		// Turn off the code
		document.getElementById( "workspace" ).classList.remove( "blocks-blocker" );
		document.getElementById( "run-code" ).classList.add( "btn-success" );
		document.getElementById( "run-code" ).classList.remove( "btn-danger" );
		document.getElementById( "run-code" ).innerText = "▷ Run Code";
		let sandbox = document.getElementById( "run-sandbox" );
		sandbox.innerHTML = "";
	}
	else {
		// Turn on the code
		document.getElementById( "workspace" ).classList.add( "blocks-blocker" );
		document.getElementById( "run-code" ).classList.add( "btn-danger" );
		document.getElementById( "run-code" ).classList.remove( "btn-success" );

		document.getElementById( "run-code" ).innerText = "■ Stop Code";
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

document.getElementById( "blocks-file-input" ).addEventListener( "change", async function () {
	const fileList = this.files;
	if( fileList.length > 0 ) {
		let xmlText = await fileList[ 0 ].text();
		let xml = Blockly.Xml.textToDom( xmlText );
		let workspace = Blockly.getMainWorkspace();
		workspace.clear();
		Blockly.Xml.domToWorkspace( xml, workspace );
	}
}, false );

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
		"message0": "Say %1",
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
	  this.setColour(260);
	  this.setTooltip("");
	  this.setHelpUrl("Test!");
	}
};

Blockly.JavaScript["twitch_say"] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	var code = `ComfyJS.Say( ${value_value} );`;
	return code;
};


Blockly.Blocks["twitch_oncommand"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_oncommand",
		"message0": "onCommand %1 %2",
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
	  this.setHelpUrl("Test!");
	}
};

Blockly.JavaScript["twitch_oncommand"] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onCommandHandlers[ ${value_name} ] = ( user, message, flags, extra ) => {\n${statements_input}\n};\n`;
	return code;
};

Blockly.Blocks["twitch_onchat"] = {
	init: function() {
	  this.jsonInit({
		"type": "twitch_onchat",
		"message0": "onChat %1",
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
	  this.setHelpUrl("Test!");
	}
};

Blockly.JavaScript["twitch_onchat"] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, "INPUT");
	// TODO: Assemble JavaScript into code variable.
	var code = `onChatHandlers.push( ( user, message, flags, self, extra ) => {\n${statements_input}\n} );\n`;
	return code;
};

Blockly.Blocks["twitch_message"] = {
    init: function() {
  	this.jsonInit({
  	  "type": "",
  	  "message0": "Message",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(260);
  	this.setTooltip("");
  	this.setHelpUrl("Test!");
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
  	  "message0": "User",
  	  "args0": [],
  	  "output": null,
  	  "colour": 260,
  	  "tooltip": "",
  	  "helpUrl": ""
  	});
  	this.setColour(260);
  	this.setTooltip("");
  	this.setHelpUrl("Test!");
    }
};

Blockly.JavaScript["twitch_user"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `user`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
