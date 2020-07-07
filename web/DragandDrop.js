// TODO: Implement Modal That says: "You can drop your .cbs file here"
const dropArea = document.getElementsByClassName( 'container' )[ 0 ];
const dropModal = document.getElementsByClassName( 'dropModal' )[ 0 ];

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
  dropModal.style.display = "block";
  document.getElementById( "workspace" ).classList.add( "blocks-blocker" );  
}
function unblockEditor(e) {
  // TODO: Disable Modal
  dropModal.style.display = "none";
  document.getElementById( "workspace" ).classList.remove( "blocks-blocker" );

}

function preventDefaults (e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}
