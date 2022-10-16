'use strict'


function bot() {
    let mainSelect;
    let selectItem;
    let menu = "Hello! I am SimpleBot.\nI can talk to you, play parrot or test your knowledge.\n1. talk with me\n2. play parrot \n3. pass the interview"

    selectMenu();
    function selectMenu() {
        let fromUser;
        do{
            fromUser = prompt(menu, 'please input your selection');
        }while ( (fromUser !== "1") && (fromUser !== "2") && (fromUser !== "3"));
        switch(fromUser) {
            case "1": taklFunc();
                break;
            case "2": parrot();
                break;
            case "3": interview();
                break;
            default : selectMenu();
    } 
    }
    // TALKFUNC
    function taklFunc(toUser = 'I want to talk with you! Type something.') {
        // debugger;
        let backToMainMenu = false;
        let fromUser = prompt(toUser);

        if (typeof(Number(fromUser)) === 'number' && Number(fromUser) === Number(fromUser)) {
            
            if(fromUser === null) {
                backToMainMenu = true;
            } else {
                fromUser = prompt('it`s your age?');
                if(fromUser === null) {
                    backToMainMenu = true;
                }else {
                    backToMainMenu = false;
                }
            }

        } else if(fromUser.length < 4) {
            taklFunc('too short message');
            // backToMainMenu = true;
        }

        if(backToMainMenu) {
            selectMenu();
            return;
        } else{
            taklFunc('what you\'ll say next');
        }

    }
    // PARROT
    function parrot(message, times) {
        message = String(prompt('What do you want me to repeat?'));
        times = Number(prompt(`How many times do you want me to repeat '${message.toUpperCase()}'?`));
        for(let i = 0; i < 1; i += 1) {
            for(let j = 0; j < times; j += 1) {
                alert(message);
            }
        }
        let tryAgain = confirm('Done! Do you want to try again?');
        if(tryAgain === true) {
            parrot();
        } else {
            bot();
        }
    }

    // INTERVIEW

    function interview() {
        let result = 0;
        let q1 = prompt('How many days are in a year?');
        if (q1 === '365' || q1 === '') {
            result += 1;
        }
        let q2 = prompt('How many planets in our Solar System?');
        if (q2 === '8' || q2 === 'eight' || q2 === 'Eight') {
            result += 1;
        }
    
        let q3 = prompt('What is the capital of Canada?');
        if (q3 === 'Ottawa' || q3 === 'ottawa') {
            result += 1;
        }
    
        let q4 = prompt('What planet is closest to the sun?');
        if (q4 === 'mercury' || q4 === 'Mercury') {
            result += 1;
        }
    
        let q5 = prompt('Which programming language is the oldest?');
        if (q5 === 'Fortran' || q5 === 'fortran') {
            result += 1;
        }
        if (result === 0) {
            alert('level: noob \n right answers: 0');
            let tryAgain = confirm('Do you want to try again?');
            if (tryAgain === true) {
                interview();
            } else {
                bot();
            }
        } else if (result === 1) {
            alert('level: newbie \n right answers: 1');
            let tryAgain = confirm('Do you want to try again?');
            if (tryAgain === true) {
                interview();
            } else {
                bot();
            }
        } else if (result === 2) {
            alert('level: average \nright answers: 2');
            let tryAgain = confirm('Do you want to try again?');
            if (tryAgain === true) {
                interview();
            } else {
                bot();
            }
        } else if (result === 3) {
            alert('level: smarty \nright answers: 3');
            let tryAgain = confirm('Do you want to try again?');
            if (tryAgain === true) {
                interview();
            } else {
                bot();
            }
        } else if (result === 4) {
            alert('level: genius \nright answers: 4');
            let tryAgain = confirm('Do you want to try again?');
            if (tryAgain === true) {
                interview();
            } else {
                bot();
            }
        } else if (result === 5) {
            alert('level: cheater \nright answers: 5');
            let tryAgain = confirm('Do you want to try again?');
            if (tryAgain === true) {
                interview();
            } else {
                bot();
            }
        }
    
    }

}
bot();