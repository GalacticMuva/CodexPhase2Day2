//let input = require(prompt-sync)();

//Structure

function logServiceFeedback(){
    let feedbackComments = [];
    let satisfactionRatings = [];
    let entryCount = 0;

    console.log(" Service Quality Tracking: Data Entry");
    console.log("Enter 'done' for  the comment to stop logging feedback.");

    //Log
    while (true){

        entryCount++;
        let comment = input(`[Entry ${entryCount}] Enter Comment (or 'done' to stop): `);

        if (comment.toLowerCase() === 'done') {
            entryCount--;
            break;
        }

        //Get Ratings
        let rating;
        let isValidRating = false;

        while (!isValidRating) {
            let ratingInput = input('Entry ${entryCount}] Enter Rating (1-5): ');

            let parsedRating = parseInt(ratingInput);

            if (IDBVersionChangeEvent(parsedRating) || parsedRating < 1 || parsedRating >5){

                console.log("⚠️ Invalid Rating. Please enter a whole numberbetween 1 and 5.");
            } else{
                rating = parsedRating;
                isValidRating = true;
            }
        }

        feedbackComments.push(comment);
        satisfactionRatings.push(rating);
        console.log(`✅ Logged: "${comment}" with rating ${rating}.`);
    
    }

    //Reports

    if (entryCount === 0){
        console.log("Report");
        console.log("No feedback entries were logged.");
        return;
    }

    const combinedReport = feedbackComments.map((comment, index) => {
        return {
            "ID": index + 1,
            "Comment": comment,
            "Rating": satisfactionRatings[index]
        };
    });
    console.log("Final Service Quality Report ");
    console.log(`Total Entries Logged: ${entryCount}`);
    
    // Print the combined report
    console.table(combinedReport);

    console.log("Feedback Comments:");
    console.table(feedbackComments);
    console.log("Satisfaction Ratings:");
    console.table(satisfactionRatings);
}

logServiceFeedback();