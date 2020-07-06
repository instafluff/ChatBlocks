// TODO: Implement Modal That says: "You can drop your .cbs file here"

let dropArea = document.getElementsByClassName( 'container' )[ 0 ];

;[ 'dragenter', 'dragover', 'dragleave', 'drop' ].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
})

;[ 'dragenter', 'dragover' ].forEach(eventName => {
  dropArea.addEventListener(eventName, blockEditor, false)
})
;[ 'dragleave', 'drop' ].forEach(eventName => {
  dropArea.addEventListener(eventName, unblockEditor, false)
})


dropArea.addEventListener('drop', handleDrop, false)


function handleDrop(e) {
  let dt = e.dataTransfer
  let file = dt.files[ 0 ]

  let Reader = new FileReader();
  Reader.onload = (readerEvt) => {
    xmlStrToWorkspace(undefined, readerEvt.target.result);
  }
  Reader.readAsText(file)
  
}


function blockEditor(e) {
  // TODO: Enable Modal
  document.getElementById( "workspace" ).classList.add( "blocks-blocker" );  
}
function unblockEditor(e) {
  // TODO: Disable Modal
  document.getElementById( "workspace" ).classList.remove( "blocks-blocker" );

}

function preventDefaults (e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}
