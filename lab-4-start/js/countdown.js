// STEP 1: Open the Lab 4 HTML page in a browser tab and open up the console.
console.log("Lab 4 has begun!");

// STEP 2a: Build an HTML element of your choice inside the HTML file for this lab to display the value of the variable i (the counter inside the loop below) as it counts down from 10 to 0.

// STEP 2b: create a constant to refer to the HTML element that you just created using querySelector().
const countdownDiv = document.querySelector("#countdown");

// The below for loop counts down every second from 10 to 0, using the setTimeout() function.
for (let i = 10; i >= 0; i --) {
		setTimeout(function() {
			// STEP 4: Build a switch statement to change the background color of the page to yellow (from 8-5), to orange (from 4-1), and finally to red (at 0).
            switch (i) {
            case 8:
            case 7:
            case 6:
            case 5:
                document.body.style.backgroundColor = "yellow";
                break;
            case 4:
            case 3:
            case 2:
            case 1:
                document.body.style.backgroundColor = "orange";
                break;
            case 0:
                document.body.style.backgroundColor = "red";
            }

            // STEP 3: Add a condition with an IF statement that checks if the variable i is equal to zero - and if it is, output "Blastoff" to the HTML element you created above, otherwise just output the value of i.
            if (i === 0) {
                countdownDiv.textContent = "Blastoff!";
            } else {
                countdownDiv.textContent = i;
            }
        }, 10000 - (1000 * i))
	};
    // STEP 5: Add some other feature to this page to make it more interactive or interesting!
	document.body.style.transition = "all 2s ease-in-out";