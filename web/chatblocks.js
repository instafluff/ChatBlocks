var workspace = Blockly.inject( 'blocklyDiv', {
	toolbox: document.getElementById( 'toolbox' )
} );

function myUpdateFunction( event ) {
	var code = Blockly.JavaScript.workspaceToCode( workspace );
	var wrappedCode =
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
		ComfyJS.Init( "instafluff" );
		</script>
	</body>
</html>`;

	document.getElementById( 'textarea' ).value = wrappedCode;
}

workspace.addChangeListener( myUpdateFunction );

Blockly.Blocks['twitch_say'] = {
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

Blockly.JavaScript['twitch_say'] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `ComfyJS.Say( ${value_value} );`;
	return code;
};


Blockly.Blocks['twitch_oncommand'] = {
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

Blockly.JavaScript['twitch_oncommand'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_input = Blockly.JavaScript.statementToCode(block, 'INPUT');
	// TODO: Assemble JavaScript into code variable.
	var code = `onCommandHandlers[ ${value_name} ] = ( user, message, flags, extra ) => {\n${statements_input}\n};\n`;
	return code;
};

Blockly.Blocks['twitch_onchat'] = {
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

Blockly.JavaScript['twitch_onchat'] = function(block) {
	var statements_input = Blockly.JavaScript.statementToCode(block, 'INPUT');
	// TODO: Assemble JavaScript into code variable.
	var code = `onChatHandlers.push( ( user, message, flags, self, extra ) => {\n${statements_input}\n} );\n`;
	return code;
};

Blockly.Blocks['twitch_message'] = {
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

Blockly.JavaScript['twitch_message'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `message`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['twitch_user'] = {
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

Blockly.JavaScript['twitch_user'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `user`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

  Blockly.Blocks['broccoli_input'] = {
	init: function() {
	  this.jsonInit({
		"type": "",
		"message0": "Broccoli Data %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "NAME",
			"check": "String"
		  }
		],
		"output": null,
		"colour": 60,
		"tooltip": "",
		"helpUrl": ""
	  });
	  this.setColour(60);
	  this.setTooltip("");
	  this.setHelpUrl("Test!");
	}
  };

  Blockly.JavaScript['broccoli_input'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `data[ ${value_name} ]`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
  };
