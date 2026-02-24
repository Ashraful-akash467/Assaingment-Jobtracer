document.addEventListener("DOMContentLoaded", function () {


    
    
    var cards = document.querySelectorAll(".job-card");
    var filterBtns = document.querySelectorAll(".btn1");
    // var noJob = document.querySelector("");
    var noJob = document.querySelector(".no-job");

    var totalText = document.querySelector(".header-card:nth-child(1) p");
    var interviewText = document.querySelector(".header-card:nth-child(2) p");
    var rejectText = document.querySelector(".header-card:nth-child(3) p");
    var availableText = document.querySelector(".available p");

    var currentFilter = "all";

    cards.forEach(function (card) {

        card.dataset.status = "all";

        var statusBtn = card.querySelector(".button");

        // create delete 
          // create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "btn btn-error btn-sm";
        card.querySelector(".job-delate div:last-child").appendChild(deleteBtn);

        // DELETE BUTTON
         // DELETE 
        deleteBtn.addEventListener("click", function () {

            if (card.dataset.status == "interview" || card.dataset.status == "rejected") {

                card.dataset.status = "all";
                statusBtn.innerText = "Not Applied";

                // reset color to blue
                statusBtn.classList.remove("btn-success");
                statusBtn.classList.remove("btn-error");
                statusBtn.classList.add("bg-sky-500");

            } else {
                card.remove();
            }

            updateCount();
            showCards();
        });

        // INTERVIEW 
        card.querySelector(".button-group button:nth-child(1)")
            .addEventListener("click", function () {

                card.dataset.status = "interview";
                statusBtn.innerText = "Applied";

                // make green
                statusBtn.classList.remove("bg-sky-500");
                statusBtn.classList.remove("btn-error");
                statusBtn.classList.add("btn-success");

                updateCount();
                showCards();
            });

        // REJECT 
        card.querySelector(".button-group button:nth-child(2)")
            .addEventListener("click", function () {

                card.dataset.status = "rejected";
                statusBtn.innerText = "Rejected";

                //  red
                statusBtn.classList.remove("bg-sky-500");
                statusBtn.classList.remove("btn-success");
                statusBtn.classList.add("btn-error");

                updateCount();
                showCards();
            });
    });


    
    // FILTER 
    filterBtns.forEach(function (btn) {

    btn.addEventListener("click", function () {

        // remove blue from all buttons
        filterBtns.forEach(function (b) {
            b.classList.remove("bg-sky-500");
            b.classList.remove("text-white");
        });

        // make clicked button blue
        btn.classList.add("bg-sky-500");
        btn.classList.add("text-white");

        currentFilter = btn.innerText.toLowerCase();
        showCards();
    });
});


    

    function showCards() {
        var visible = 0;
        var allCards = document.querySelectorAll(".job-card");

        allCards.forEach(function (card) {

            if (currentFilter == "all") {
                card.style.display = "block";
                visible++;
            }
            else if (currentFilter == "interview") {
                if (card.dataset.status == "interview") {
                    card.style.display = "block";
                    visible++;
                } else {
                    card.style.display = "none";
                }
            }
            else if (currentFilter == "rejected") {
                if (card.dataset.status == "rejected") {
                    card.style.display = "block";
                    visible++;
                } else {
                    card.style.display = "none";
                }
            }
        });


        
        if (visible == 0) {
            noJob.style.display = "block";
        } else {
            noJob.style.display = "none";
        }
    }



    
    // filter button 
filterBtns[0].classList.add("bg-sky-500");
filterBtns[0].classList.add("text-white");
    // Update count
    function updateCount() {
    var allCards = document.querySelectorAll(".job-card");

    var total = allCards.length;
    var interview = 0;
    var rejected = 0;

    allCards.forEach(function (card) {
        if (card.dataset.status == "interview") interview++;
        if (card.dataset.status == "rejected") rejected++;
    });

    totalText.innerText = total;
    interviewText.innerText = interview;
    rejectText.innerText = rejected;
    availableText.innerText = total + " jobs";

    // 🔹 Make Interview count green
    if (interview > 0) {
        interviewText.classList.add("text-green-600");
    } else {
        interviewText.classList.remove("text-green-600");
    }

    // 🔹 Make Reject count 
    if (rejected > 0) {
        rejectText.classList.add("text-red-600");
    } else {
        rejectText.classList.remove("text-red-600");
    }
}

    noJob.style.display = "none";
    // default active = All
filterBtns[0].classList.add("bg-sky-500");
filterBtns[0].classList.add("text-white");
    updateCount();
});

















