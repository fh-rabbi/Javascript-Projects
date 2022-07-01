// const saveBtn = document.querySelector('.save');
// const trushBtn = document.querySelector('.trush');
const addNoteBtn = document.querySelector('.addNote');
// const textarea = document.querySelector('textarea');


// // // // // // // // 
addNoteBtn.addEventListener("click", ()=>{
  addNote();
});
// // // // // // // // 


// For add note:
function addNote(text=''){
  let div = document.createElement('div');
  div.classList.add('note');
  div.innerHTML = `
  <div class="note">
     <div class="note-header">
       <div class="tools">
         <i class="save fas fa-save"></i>
         <i class="trush fas fa-trash"></i>
       </div>
     </div>
     <div class="note-content">
       <textarea name="" id="" rows="8" cols="40">${text}</textarea>
     </div>
   </div>
  `;
  div.querySelector('.trush').addEventListener("click", ()=>{
    div.remove();
    saveNote();
  });
  div.querySelector('.save').addEventListener("click", ()=>{
    saveNote();
  });
  document.querySelector('.note-container').appendChild(div);
}

// For save notes:
function saveNote(){
  //const myNote = document.querySelectorAll('.note textarea');
  let notesArr = [];
  let allNotes = document.querySelectorAll('.note textarea');
  // console.log(allNotes);
  allNotes.forEach(note=>{
    notesArr.push(note.value);
  });
  if(notesArr.length == 0){
    localStorage.removeItem('note');
  }
  else{
    localStorage.setItem('note',JSON.stringify(notesArr));
  }
}
console.log(localStorage);

(function(){
  let data = localStorage.getItem('note');
  data = JSON.parse(data);
  if(data){
    data.forEach(note=>{
      addNote(note);
    });
  }
  else{
    addNote();
  }
})();
