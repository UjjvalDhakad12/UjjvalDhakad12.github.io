const questions = [
    // गणित (Mathematics)
    { question: "10 + 5 = ?", options: ["15", "12", "10", "14"], correctAnswer: "15" },
    { question: "25 - 8 = ?", options: ["16", "15", "14", "17"], correctAnswer: "17" },
    { question: "6 × 7 = ?", options: ["42", "36", "48", "50"], correctAnswer: "42" },
    { question: "56 ÷ 7 = ?", options: ["8", "7", "9", "6"], correctAnswer: "8" },
    { question: "15 + 10 × 2 = ?", options: ["35", "45", "50", "40"], correctAnswer: "35" },
    { question: "36 ÷ 4 = ?", options: ["9", "7", "8", "10"], correctAnswer: "9" },
    { question: "12 + 15 = ?", options: ["27", "26", "28", "25"], correctAnswer: "27" },
    { question: "9 × 8 = ?", options: ["72", "68", "80", "76"], correctAnswer: "72" },
    { question: "100 ÷ 5 = ?", options: ["25", "20", "30", "35"], correctAnswer: "20" },
    { question: "50 - 18 = ?", options: ["32", "34", "35", "30"], correctAnswer: "32" },

    { question: "10 + 10 = ?", options: ["20", "25", "15", "10"], correctAnswer: "20" },
    { question: "12 × 9 = ?", options: ["108", "98", "100", "110"], correctAnswer: "108" },
    { question: "180 ÷ 9 = ?", options: ["20", "18", "16", "22"], correctAnswer: "20" },
    { question: "25 × 4 = ?", options: ["100", "105", "110", "120"], correctAnswer: "100" },
    { question: "250 ÷ 5 = ?", options: ["50", "45", "55", "60"], correctAnswer: "50" },
    { question: "15 + 25 = ?", options: ["40", "35", "45", "50"], correctAnswer: "40" },
    { question: "3 × 6 = ?", options: ["18", "16", "15", "20"], correctAnswer: "18" },
    { question: "50 ÷ 10 = ?", options: ["5", "6", "4", "7"], correctAnswer: "5" },

    // विज्ञान (Science)
    { question: "पानी का रासायनिक सूत्र क्या है?", options: ["H2O", "CO2", "O2", "N2"], correctAnswer: "H2O" },
    { question: "ह्यूमन बॉडी में कितनी हड्डियाँ होती हैं?", options: ["206", "210", "208", "220"], correctAnswer: "206" },
    { question: "सूर्य किस तत्व से बना है?", options: ["हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन", "हीलियम"], correctAnswer: "हाइड्रोजन" },
    { question: "हवा में किस गैस की अधिकता होती है?", options: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"], correctAnswer: "नाइट्रोजन" },
    { question: "सबसे हल्का तत्व कौन सा है?", options: ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"], correctAnswer: "हाइड्रोजन" },
    { question: "प्रकाश की गति कितनी होती है?", options: ["300,000 किलोमीटर प्रति सेकंड", "200,000 किलोमीटर प्रति सेकंड", "100,000 किलोमीटर प्रति सेकंड", "150,000 किलोमीटर प्रति सेकंड"], correctAnswer: "300,000 किलोमीटर प्रति सेकंड" },
    { question: "हमारा सौरमंडल कितने ग्रहों से बना है?", options: ["8", "9", "7", "10"], correctAnswer: "8" },
    { question: "हवा का दबाव किसके कारण होता है?", options: ["वजन", "ऊंचाई", "गुरुत्वाकर्षण", "ध्रुवीय बल"], correctAnswer: "वजन" },
    { question: "मानव शरीर में सबसे बड़ा अंग कौन सा है?", options: ["त्वचा", "ह्रदय", "जिगर", "मस्तिष्क"], correctAnswer: "त्वचा" },
    { question: "पृथ्वी का किस रूप में तापमान बढ़ता है?", options: ["ग्लोबल वॉर्मिंग", "ध्रुवीय बर्फ", "सूर्य की गर्मी", "चंद्रमाँ"], correctAnswer: "ग्लोबल वॉर्मिंग" },

    { question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", options: ["बृहस्पति", "मंगल", "शनि", "यूरेनस"], correctAnswer: "बृहस्पति" },
    { question: "विज्ञान में pH का क्या मतलब है?", options: ["हाइड्रोजन आयन की सांद्रता", "विज्ञान के अंश", "प्राकृतिक शक्ति", "सूर्य का तापमान"], correctAnswer: "हाइड्रोजन आयन की सांद्रता" },
    { question: "प्रकाश का सबसे तेज़ रूप कौन सा है?", options: ["पराबैंगनी", "इन्फ्रारेड", "रोशनी", "क्षेत्रीय"], correctAnswer: "पराबैंगनी" },

    // सामान्य ज्ञान (General Knowledge)
    { question: "भारत का राष्ट्रीय पक्षी क्या है?", options: ["मोर", "बुलबुल", "मुर्गा", "कबूतर"], correctAnswer: "मोर" },
    { question: "भारत की स्वतंत्रता संग्राम की शुरुआत कब हुई थी?", options: ["1857", "1920", "1942", "1947"], correctAnswer: "1857" },
    { question: "भारतीय संविधान में कितने अनुच्छेद हैं?", options: ["395", "400", "405", "370"], correctAnswer: "395" },
    { question: "भारत में सबसे लंबी नदी कौन सी है?", options: ["गंगा", "यमुन", "नर्मदा", "सिन्धु"], correctAnswer: "गंगा" },
    { question: "'तिरंगा' किसे कहा जाता है?", options: ["राष्ट्रीय ध्वज", "राष्ट्रीय गीत", "राष्ट्रीय फूल", "राष्ट्रीय पर्व"], correctAnswer: "राष्ट्रीय ध्वज" },
    { question: "भारत का पहला उपग्रह क्या था?", options: ["आर्यभट्ट", "रोहिणी", "चंद्रयान-1", "मंगलयान"], correctAnswer: "आर्यभट्ट" },
    { question: "'गांधीजी' का असली नाम क्या था?", options: ["मोहनदास करमचंद गांधी", "महात्मा गांधी", "गांधीजी", "पं नेहरू"], correctAnswer: "मोहनदास करमचंद गांधी" },
    { question: "भारत के पहले प्रधानमंत्री कौन थे?", options: ["पंडित नेहरू", "महात्मा गांधी", "इंदिरा गांधी", "राजीव गांधी"], correctAnswer: "पंडित नेहरू" },
    { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["पैसिफिक", "अटलांटिक", "भारतीय", "आर्कटिक"], correctAnswer: "पैसिफिक" },
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
    { question: "विश्व का सबसे बड़ा देश कौन सा है?", options: ["रूस", "अमेरिका", "चीन", "कनाडा"], correctAnswer: "रूस" },
    { question: "भारत का राष्ट्रीय गीत कौन सा है?", options: ["वन्दे मातरम्", "जन गण मन", "माँ तुझे सलाम", "सारे जहां से अच्छा"], correctAnswer: "वन्दे मातरम्" },
    { question: "प्रथम विश्व युद्ध कब हुआ था?", options: ["1914-1918", "1900-1910", "1920-1930", "1939-1945"], correctAnswer: "1914-1918" },
    { question: "भारत में सबसे बड़ी अदालत कहाँ है?", options: ["नई दिल्ली", "मुंबई", "कोलकाता", "चंडीगढ़"], correctAnswer: "नई दिल्ली" }
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
        if (score > 75) {
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
