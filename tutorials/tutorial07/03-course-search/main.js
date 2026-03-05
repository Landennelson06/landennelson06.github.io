let searchTerm = "";
let openOnly = false;
function isClassFull(course) {
    // Return true if course.Classification.Open === false
}
function doesTermMatch(course) {
    var termlower = searchTerm.toLowerCase();
    var instName = course["Instructors"].map((elem)=> elem["Name"])
    var instNameMatch = false;
    for (item in instName){
        if(item.toLowerCase().includes.termlower){
            instNameMatch = true;
        }
    }
    return course["Title"].toLowerCase().includes(termlower) || course["CRN"].toString().toLowerCase().includes(termlower) || course["Code"].toLowerCase().includes(termlower) || instNameMatch;
    // If searchTerm is empty, return true (show all courses)
    // Convert searchTerm to lowercase
    // Check if searchTerm appears in (all converted to lowercase):
    //   - course.Code
    //   - course.Title
    //   - course.CRN (convert to string first)
    //   - course.Instructors[].Name (use map to get all names, then join)
    // Use includes() for case-insensitive matching
    // Return true if searchTerm matches any of these fields
}
function dataToHTML(course) {
    // should return a formatted HTML card with the relevant course info
    // (using template literals). 
    console.log(course)
    var open = course.Classification.Open;
    return `<div">
        <h2>${course["Code"]}: ${course["Title"]}</h2>
        <p class="status ${open ? "open" : "closed"}">${open ? "Open, " + (course["EnrollmentMax"] - course["EnrollmentCurrent"]) + " seats available" 
            : "Closed, number on waitlist: " + course["WaitlistAvailable"]}</p>

        <p>
            ${course["Days"]} ${course["Location"]["FullLocation"]}, ${course["Hours"]} credit hour(s)
        </p>

        <p>
            ${course["Instructors"][0]["Name"]}
        </p>
    </div>`
}

function showMatchingCourses() {
    // 1. Get the .courses container element
    var courses = document.querySelector(".courses")
    // 2. Clear it
    courses.innerHTML = "";
    // 3. Start with courseList (from course-data.js)
    var filtered = courseList;
    if(searchTerm !== ""){
        // filtered = filtered.filter((elem) => elem["Title"].toLowerCase().includes(searchTerm.toLowerCase()));
        filtered = filtered.filter((elem) => doesTermMatch(elem));
    }
    if(openOnly){
        filtered = filtered.filter((elem) => elem['Classification']['Open'] == true)
    }

    for(item of filtered){
        courses.insertAdjacentHTML("beforeend",dataToHTML(item));
    }
    // 4. Apply the filters and store the matched courses in a variable
    // 5. If no courses match, display "No courses match your search." and return
    // 6. Output each course to the .courses container (forEach + insertAdjacentHTML)
}

function filterCourses() {
    searchTerm = document.querySelector("#search_term").value
    openOnly = document.querySelector("#is_open").checked;
    showMatchingCourses()
    // Update global variables (searchTerm and openOnly) by
    // reaching into the DOM and retrieving their values
    // Invoke the showMatchingCourses() function
}

// show all courses initially:
showMatchingCourses();