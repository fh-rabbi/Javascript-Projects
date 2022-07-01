const deleteBtn = document.querySelector('.delete');
const createBtn = document.querySelector('.create');
const noteCreator = document.querySelector('.note-creator');
const textBox = document.querySelector('#text');

createBtn.addEventListener("click", ()=>{
  noteCreator.style.display = 'block';
});

document.querySelector('.xmark').addEventListener("click", ()=>{
  noteCreator.style.display = 'none';
});

document.querySelector('.check').addEventListener("click", ()=>{
  createNote(textBox.value);
});

function createNote(text){
  const stickyNotes = document.querySelector('.sticky-notes');
  if(text != ''){
  let note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `<p class="note-text">${text}</p>`;
  note.style.transform= `rotate(${transform()})`;
  note.style.background = colors();
  textBox.value = '';
  note.addEventListener("dblclick", ()=>{
    note.remove();
    saveNote();
  });
  stickyNotes.appendChild(note);
  saveNote();
  // Logic to delete all notes:
   let hasNote = true;
   deleteBtn.addEventListener("click", ()=>{
    if(hasNote){
    note.remove();
    saveNote();
    hasNote = false;
    }
    else{
      alert('You haven\'t any note!');
    }
   });
   // Logic to delete all notes:
  }
  else{
    document.body.style.overflow = 'hidden';
    document.querySelector('.popup-container').style.opacity = 1;
    document.querySelector('.popup-container').style.pointerEvents = 'visible';
    document.querySelector('#close').addEventListener("click", ()=>{
      document.querySelector('.popup-container').style.opacity = 0;
      document.querySelector('.popup-container').style.pointerEvents = 'none';
      document.body.style.overflow = 'auto';
    });
  }
}

function transform(){
  let value = ['2deg','-2deg','3deg','-3deg','2deg','-3deg','-4deg','4deg'];
  value = value[Math.trunc(Math.random()*value.length)];
  return value;
}

function colors(){
  let colors = ['#711A75','#E7AB79','#1A4D2E','#FF9F29','#243A73','#3DB2FF','#006E7F','#980F5A'];
  colors = colors[Math.trunc(Math.random()*colors.length)];
  return colors;
}

// Save all notes in localStorage:
function saveNote(){
  const noteText = document.querySelectorAll('.note p');
  let stickyNotes = [];
  noteText.forEach(note => {
    stickyNotes.push(note.innerHTML);
  });
  localStorage.setItem('stickyNotes',JSON.stringify(stickyNotes));
}

{
  let get_notes = JSON.parse(localStorage.getItem('stickyNotes'));
  if(get_notes.length > 0){
    get_notes.forEach(note=>{
      createNote(note);
    });
  }
}
