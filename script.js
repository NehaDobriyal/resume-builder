function printpdf(){
    var nameInput = document.querySelector('.name');
    var userName = nameInput.value.trim();
    if (userName === '') {
        alert('Please enter your name before downloading.');
        return; 
    }
    var profilePictureInput = document.getElementById('profilePictureInput');
    if (!profilePictureInput.files.length) {
        alert('Please select a profile photo before downloading.');
        return;
    }
    var jobProfile = document.querySelector('.profile-info .post');
    if (jobProfile.textContent.trim() === 'YOUR JOB PROFILE'|| jobProfile.textContent.trim() === '') {
        alert('Please fill in your job profile before downloading.');
        return;
    }
    var eduEntries = document.querySelectorAll("#edu .edubox");
    var educationIncomplete = false;
    eduEntries.forEach(eduEntry => {
        var eduHead = eduEntry.querySelector('.edu-head').textContent.trim();
        var eduDetails = eduEntry.querySelector('div').textContent.trim();

        if (eduHead === 'YOUR DEGREE' || eduDetails === 'Studied AT - Year Of Passing - Marks Scored') {
            educationIncomplete = true;
        }
    });

    if (educationIncomplete) {
        alert('Please fill in all education entries before downloading.');
        return;
    }

    var content = document.getElementById("resume");
    html2pdf(content, {
    html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button => {
        button.classList.add("none");
    });
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
        input.classList.add("none");
    })
  
  allButtons.forEach(button => {
      button.classList.remove("none");
  })
  allInputCheckboxes.forEach(input => {
      input.classList.remove("none");
  })
    var profilePictureInput = document.getElementById('profilePictureInput');
        var profilePicture = document.getElementById('profilePicture');

        if (profilePictureInput.files.length > 0) {
            var selectedFile = profilePictureInput.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                profilePicture.src = e.target.result;
            };

            reader.readAsDataURL(selectedFile);
        }
  }
  function displayProfilePicture(input) {
    var profilePicture = document.getElementById('profilePicture');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            profilePicture.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

  function addedu() {
    const head = document.createElement('div');
    document.getElementById("edu").appendChild(head);
    head.innerHTML = ('<div class="edubox"><span><input type="checkbox" class="input-checkbox"></span><span class="educ-head" contenteditable="true">YOUR DEGREE</span><div ><span contenteditable="true">Studied AT</span> - <span contenteditable="true">Year Of Passing</span> - <span contenteditable="true">Marks Scored</span></div></div>');
    saveresume();
  }
  function removedu(event) {
    let val = 0;
    let empty = true;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  function addcourse() {
    const head = document.createElement('div');
    document.getElementById("course").appendChild(head);
    head.innerHTML = ('<div class="course"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">Add your course here</span></div>');
    saveresume();
  }
  
  function remcourse(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }



  function addtechskill() {
    const head = document.createElement('div');
    document.getElementById("techskills").appendChild(head);
    head.innerHTML = ('<div class="techskill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">Add your Tech skills here</span></div>');
    saveresume();
  }
  
  function remtechskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }

  function addsoftskill() {
    const head = document.createElement('div');
    document.getElementById("softskills").appendChild(head);
    head.innerHTML = ('<div class="softskill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">Add your Soft skills here</span></div>');
    saveresume();
  }
  
  function remsoftskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }

  function addAch() {
    const head = document.createElement('div');
    document.getElementById("achievement").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>');
    saveresume();
  }
  function remAch(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  
  function addInt() {
    const head = document.createElement('div');
    document.getElementById("interest").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>');
    saveresume();
  }
  function remInt(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  let maxNewSection = 0;
  function addsec() {
    if (maxNewSection < 1) {
        const head = document.createElement('div');
        document.getElementById("newsec").appendChild(head);
        if (maxNewSection === 0) {
            head.innerHTML = ('<div><br><span class="title" contenteditable="true">NEW SECTION</span><br><div contenteditable="true">This box is a part of New Section you can some content according to you, but try to stay within the limit and something under 300 characters including spaces and special characters, so use it efficiently. </div><span><input type="checkbox" class="input-checkbox"></span></div>');
        }
        else {
            head.innerHTML = ('<div><br><span class="title" contenteditable="true">NEW SECTION</span><br><div contenteditable="true">This box is a part of New Section you can some content according to you, but try to stay within the limit and something under 300 characters including spaces and special characters, so use it efficiently.</div><span><input type="checkbox" class="input-checkbox"></span></div>');
        }
  
        maxNewSection = maxNewSection + 1;
    }
    else {
        alert("Only 1 New Section can be added!")
  
    }
    saveresume();
  }
  function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                maxNewSection = maxNewSection - 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }

  function saveresume() {
    var sec = document.getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
  }