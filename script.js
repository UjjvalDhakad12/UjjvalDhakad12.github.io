const questions = [
    { question: "भारत की राजधानी क्या है?", options: ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"], correctAnswer: "दिल्ली" },
    { question: "हमारा राष्ट्रीय पक्षी कौन सा है?", options: ["मोर", "गोलाबि", "चमचम", "पक्षी"], correctAnswer: "मोर" },
    { question: "भारत का राष्ट्रीय फूल कौन सा है?", options: ["कमल", "गुलाब", "चमेली", "सूरजमुखी"], correctAnswer: "कमल" },
    { question: "भारत का राष्ट्रीय पशु कौन सा है?", options: ["बाघ", "हाथी", "गैंडा", "सिंह"], correctAnswer: "बाघ" },
    { question: "हमारा राष्ट्रीय ध्वज कौन सा है?", options: ["तिरंगा", "सिंह ध्वज", "पद्म ध्वज", "भारत ध्वज"], correctAnswer: "तिरंगा" },
    { question: "भारत के प्रधानमंत्री का नाम क्या है?", options: ["नरेन्द्र मोदी", "राजीव गांधी", "इंदिरा गांधी", "पंडित नेहरू"], correctAnswer: "नरेन्द्र मोदी" },
    { question: "महात्मा गांधी का असली नाम क्या था?", options: ["मोहनदास करमचंद गांधी", "रामचन्द्र गांधी", "राजीव गांधी", "गोपाल कृष्ण गांधी"], correctAnswer: "मोहनदास करमचंद गांधी" },
    { question: "भारत का सबसे बड़ा राज्य कौन सा है?", options: ["राजस्थान", "उत्तर प्रदेश", "मध्य प्रदेश", "बिहार"], correctAnswer: "राजस्थान" },
    { question: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?", options: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 नवंबर"], correctAnswer: "15 अगस्त" },
    { question: "महात्मा गांधी की जयंती कब मनाई जाती है?", options: ["2 अक्टूबर", "15 अगस्त", "14 नवंबर", "25 दिसंबर"], correctAnswer: "2 अक्टूबर" },
    { question: "भारत के राष्ट्रपति का नाम क्या है?", options: ["द्रौपदी मुर्मू", "रामनाथ कोविंद", "प्रणब मुखर्जी", "अब्दुल कलाम"], correctAnswer: "द्रौपदी मुर्मू" },
    {
        question: "6,72,120 ka hcf or lcm hoga",
        options: ["6,360", "20,564", "6,901", "non"],
        correctAnswer: "6,360"
    },
    {
        question: "HCF (306, 657) = 9 diya hai LCM (306, 657) gayt karo ",
        options: ["7902", "2845", "22235", "22338"],
        correctAnswer: "22338"
    },
    {
        question: "Ek do ghat bahupad gyat karo jiske shunyako ka yog and gunalphal -3 or 2 hai ",
        options: ["Earth", "Mars", ",5/2,-8/223/5", "5/2,-8/2,-14/2"],
        correctAnswer: "5/2,-8/2,-14/2"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2", "H2O", "CO2"],
        correctAnswer: "H2O"
    },
    {
        question: "8+9+1+20",
        options: ["0", "38", "6.8", "28"],
        correctAnswer: "38"
    },
    {
        question: "जल का ph मान कितना होता है",
        options: ["0", "7", "6.8", "3"],
        correctAnswer: "7"
    },
    {
        question: "sahi kon si hai",
        options: ["sapcae", "spaces", "sapce", "koi nahi"],
        correctAnswer: "spaces"
    },
    {
        question: "kon si sai hai",
        options: ["search", "serach", "raceh", "sreach"],
        correctAnswer: "search"
    },
    {
        question: "98-79+23-4",
        options: ["30", "73", "38", "28"],
        correctAnswer: "38"
    },
    {
        question: "mp ki rajdhani kya hai",
        options: ["bhopal", "indor", "pata nai", "guna"],
        correctAnswer: "bhopal"
    },
    { question: "वह कौन सा महीना है जिसमें गणेश चतुर्थी मनाई जाती है?", options: ["सितंबर", "अक्टूबर", "जुलाई", "मई"], correctAnswer: "सितंबर" },
    { question: "वह कौन सा पर्व है जो भारत में दीपों का पर्व कहलाता है?", options: ["दिवाली", "होली", "रक्षाबंधन", "ईद"], correctAnswer: "दिवाली" },
    { question: "भारत का सबसे लंबा नदी कौन सा है?", options: ["गंगा", "यमुन", "सिंधु", "नर्मदा"], correctAnswer: "गंगा" },
    { question: "भारत में कौन सा राष्ट्रीय पार्क सबसे बड़ा है?", options: ["मनोहर गढ़", "राजाजी नेशनल पार्क", "काजीरंगा नेशनल पार्क", "सेंचुरी"], correctAnswer: "काजीरंगा नेशनल पार्क" },
    { question: "नरेन्द्र मोदी किस पार्टी से संबंधित हैं?", options: ["भा.ज.पा", "कांग्रेस", "सपा", "बसपा"], correctAnswer: "भा.ज.पा" },
    { question: "हमारा राष्ट्रीय गीत कौन सा है?", options: ["वन्दे मातरम्", "जन गण मन", "हुम तुुम", "रघुपति राघव"], correctAnswer: "वन्दे मातरम्" },
    { question: "हमारा राष्ट्रीय चिन्ह कौन सा है?", options: ["सिंह स्तम्भ", "बाघ", "चमचम", "कोयल"], correctAnswer: "सिंह स्तम्भ" },
    { question: "भारत में सबसे बड़ा रेलवे स्टेशन कौन सा है?", options: ["दीनदयाल उपाध्याय", "नई दिल्ली", "हावड़ा", "मुंबई"], correctAnswer: "हावड़ा" },
    { question: "भारत में कौन सी भाषा सबसे अधिक बोली जाती है?", options: ["हिंदी", "बengाली", "मराठी", "उर्दू"], correctAnswer: "हिंदी" },
    { question: "भारत में एकता और विविधता का प्रतीक क्या है?", options: ["तिरंगा", "गंगा", "भारत माता", "हिन्दी"], correctAnswer: "भारत माता" },
    { question: "भारत का सबसे छोटा राज्य कौन सा है?", options: ["गोवा", "सिक्किम", "हिमाचल प्रदेश", "मणिपुर"], correctAnswer: "गोवा" },
    { question: "भारत में सबसे ऊंचा पर्वत कौन सा है?", options: ["माउंट एवरेस्ट", "कंचनजंगा", "नंदा देवी", "साधी"], correctAnswer: "माउंट एवरेस्ट" },
    { question: "भारत में किस दिन को गणतंत्र दिवस के रूप में मनाया जाता है?", options: ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "25 दिसम्बर"], correctAnswer: "26 जनवरी" },
    { question: "वह कौन सी नदी है जिसे 'पवित्र नदी' माना जाता है?", options: ["गंगा", "यमुन", "सिंधु", "नर्मदा"], correctAnswer: "गंगा" },
    { question: "भारत में सबसे प्रसिद्ध महल कौन सा है?", options: ["सिटी पैलेस", "लाल किला", "उम्मेद भवन", "जयगढ़ किला"], correctAnswer: "लाल किला" },
    { question: "कौन सा पक्षी रात में उड़ता है?", options: ["हाउल", "उल्लू", "मुर्गा", "कबूतर"], correctAnswer: "उल्लू" },
    { question: "भारत का राष्ट्रीय पशु कौन सा है?", options: ["बाघ", "हाथी", "गैंडा", "सिंह"], correctAnswer: "बाघ" },
    { question: "हिंदी का सबसे प्रसिद्ध कवि कौन था?", options: ["रामधारी सिंह दिनकर", "माखनलाल चतुर्वेदी", "रवींद्रनाथ ठाकुर", "सुमित्रानंदन पंत"], correctAnswer: "रामधारी सिंह दिनकर" },
    { question: "भारत का पहला उपग्रह क्या था?", options: ["आर्यभट्ट", "रोहिणी", "ध्रुव", "इंद्रा"], correctAnswer: "आर्यभट्ट" },
    { question: "स्वतंत्रता संग्राम में महात्मा गांधी का योगदान क्या था?", options: ["अहिंसा का प्रचार", "भारत छोड़ो आंदोलन", "नमक सत्याग्रह", "सबका सही उत्तर"], correctAnswer: "सबका सही उत्तर" }


];

let currentQuestionIndex = 0;
let score = 0; // Initialize score

function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = questionObj.options[index];
        option.classList.remove('disabled');
        option.disabled = false;
    });
    document.getElementById('result').innerText = "";
    document.getElementById('next').style.display = "none";
    document.getElementById('reset').style.display = "none";
}

function checkAnswer(button) {
    let options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        option.disabled = true;
    });

    let result = document.getElementById('result');
    const questionObj = questions[currentQuestionIndex];

    if (button.innerText === questionObj.correctAnswer) {
        result.innerText = "Correct!";
        result.style.color = "green";
        score++; // Increment the score
    } else {
        result.innerText = "Wrong! The correct answer is " + questionObj.correctAnswer;
        result.style.color = "red";
    }

    if (currentQuestionIndex < questions.length - 1) {
        document.getElementById('next').style.display = "block";
    } else {
        document.getElementById('reset').style.display = "block";
        // Display the final score
        result.innerText += " Your score is " + score + " out of " + questions.length + ".";

        // Check if score is greater than 38
        if (score > 35) {
            alert("Congratulations! You passed!");
        } else {
            alert("Sorry, You failed! Better luck next time.");
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0; // Reset the score
    loadQuestion();
}

// Initialize the first question when the page loads
loadQuestion();