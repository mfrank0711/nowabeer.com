// output: random gif or answer
function random_answer(langdata, twitter = false) {
    var currentdate = new Date();
    $.getJSON("/js/weights.json", function (calc) {
        if (calc[currentdate.getDay()][currentdate.getHours()] >= 0.5) {
            var status = true;
        } else {
            var status = false;
        }
        answer = langdata["Answers"][status][Math.floor(
            Math.random() * Object.keys(langdata["Answers"][status])
            .length)];

        if (answer.includes("https://")) {
            document.getElementById("answer").innerHTML = '<img src="' +
                answer + '" class="responsive-img">';
        } else {
            document.getElementById("answer").innerHTML =
                '<p id="answer-text" style="font-size: 32px">' + answer +
                '</p>';
        }
        if (twitter) {
            tweet(langdata);
        }
    });
}

function tweet(langdata) {
    $.ajax({
        type: "GET",
        url: "../php/tweet.php",
        data: {
            loc: (navigator.language || navigator.userLanguage),
            q: langdata.Header,
            a: answer
        }
    });
}

// retry button
function retry() {
    $("#answer").fadeOut();
    $("#buttons").fadeOut();
    $(".progress").fadeIn(function () {
        init();
    });
}

// load language with fallback
function loadlanguage() {
    var lang = "./locale/en-US.json";
    $.ajax({
        url: "../locale/" + (navigator.language || navigator.userLanguage) + ".json",
        success: function (data) {
    
            lang = "./locale/" + (navigator.language || navigator.userLanguage) + ".json";
        },
        error: function (data) {
            lang = "./locale/en-US.json";
        }
    });
    return lang;
}