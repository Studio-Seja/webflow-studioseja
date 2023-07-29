console.clear();
/* globals
$
*/

const data = {
    months: {
        en: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ],
        local: [],
    },
    days: {
        en: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        ],
        local: [],
    }
};

data.months.local = [
    'Janvier', 'Février', 'Mars', 'Avril', 'May', 'Juin',
    'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];
data.days.local = [
    'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche',
];

if (data.months.local.length !== 12) {
    console.error('Months are incorrect! Check your script.')
}
if (data.days.local.length !== 7) {
    console.error('Days are incorrect! Check your script.')
}

const shortenDaysMonths = daymonth => daymonth.substring(0, 3);
const convertToLocal = (daydate, whatToConvert) => {
    whatToConvert.each(function() {
        const theObject = $(this);
        let text = theObject.text();

        if (daydate === 'm' || daydate === 'month' || daydate === 'months') {
            for (let i = 0; i < data.months.en.length; i++) {
                text = text.replace(data.months.en[i], data.months.local[i])
                text = text.replace(shortenDaysMonths(data.months.en[i]), shortenDaysMonths(data.months.local[i]))
                theObject.text(text)
            }
        } else if (daydate === 'd' || daydate === 'day' || daydate === 'days') {
            for (let i = 0; i < data.days.en.length; i++) {
                text = text.replace(data.days.en[i], data.days.local[i])
                text = text.replace(shortenDaysMonths(data.days.en[i]), shortenDaysMonths(data.days.local[i]))
                theObject.text(text)
            }
        }
    });
};


const allDates = $('.dateclass');
const allDays = $('.dayclass');

convertToLocal('m', allDates);
convertToLocal('d', allDays);

$(document).ready(function() {
    function formatTime(oldTime) {
        oldTime = oldTime.replace(":", " ")
        var arr = oldTime.split(" ")

        var ampm = arr[2].toLowerCase()
        var hour = 0

        if (arr[0] == 12) {
            if (ampm == "am") {
                hour = 0
            } else {
                hour = 12
            }
        } else {
            if (ampm == "pm") {
                hour = parseInt(arr[0]) + 12
            } else {
                hour = arr[0]
            }
        }
        return hour + ":" + arr[1]
    }

    // You can replace 'timetoformat' below by any class name you want to use on time elements in your design
    $('.timetoformat').each(function() {
        $(this).html(formatTime($(this).html()));
    });
});