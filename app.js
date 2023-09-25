  const addBtn = document.querySelector(".add");
  const main = document.querySelector(".main");


  const saveNotes = () => {
    // const notes = document.querySelector(" .note textarea");
    const notes = document.querySelectorAll(" .note textarea");
  console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

    localStorage.setItem("notes", JSON.stringify(data))


};



addBtn.addEventListener("click", function () {
   
        addNote();
    
  })

const addNote  = (text = "") => {
 const note = document.createElement("div");
 note.classList.add("note")
 note.innerHTML = `<div class="title"> 
 <div class="icon">
 <img src="save.svg"  class="save">
 <img src="delete.svg"  class="delete">
 </div>
 
 </div>
 
 </div>
 
 <textarea>${text}  </textarea>
</div>`



main.appendChild(note);
note.querySelector(".delete").addEventListener("click", function(){
    note.remove();
    saveNotes();
})

note.querySelector(".save").addEventListener("click", function(){
     saveNotes();

})
saveNotes();

}


(
    function() {
        const notes = JSON.parse(localStorage.getItem("notes"));
        notes.forEach(
            (note) => {
                addNote(note)
            }
        )
    }
) ()