let userSurname,
    userName, nameFather,
    dayBirth, monthBirth, yearBirth,
    gender, country, choice, city, choice1, street, numberHouse, retirement;
while (true) {
    userSurname = prompt('Введите вашу фамилию');
    if (Number(userSurname) !== 0) break;
}
while (true) {
    userName = prompt('Введите имя');
    if (Number(userName) !== 0) break;
}
while (true) {
    nameFather = prompt('Введите отчество');
    if (Number(nameFather) !== 0) break;
}
while (true) {
    yearBirth = prompt('Введите год рождения');
    if (Number(yearBirth) !== 0) break;
}
if (yearBirth % 4 === 0 && yearBirth % 100 !== 0 || yearBirth % 400 === 0) {
    while (true) {
        monthBirth = prompt('Введите месяц рождения');
        if (monthBirth < 13 || monthBirth < 1) break;
    }
    if (Number(monthBirth) === 1 || Number(monthBirth) === 3 || Number(monthBirth) === 5 || Number(monthBirth) === 7 ||
        Number(monthBirth) === 8 || Number(monthBirth) === 10 || Number(monthBirth) === 12) {
        while (true) {
            dayBirth = prompt('Введите день рождения');
            if (dayBirth < 32 || dayBirth < 1) break;
        }
    }
    if (Number(monthBirth) === 2) {
        while (true) {
            dayBirth = prompt('Введите день рождения');
            if (dayBirth < 30 || dayBirth < 1) break;
        }
    }
    if (Number(monthBirth) === 4 || Number(monthBirth) === 6 || Number(monthBirth) === 9 || Number(monthBirth) === 11) {
        while (true) {
            dayBirth = prompt('Введите день рождения');
            if (dayBirth < 31 || dayBirth < 1) break;
        }
    }
}
else {
    while (true) {
        monthBirth = prompt('Введите месяц рождения');
        if (monthBirth < 13 || monthBirth < 1) break;
    }
    if (Number(monthBirth) === 1 || Number(monthBirth) === 3 || Number(monthBirth) === 5 || Number(monthBirth) === 7 ||
        Number(monthBirth) === 8 || Number(monthBirth) === 10 || Number(monthBirth) === 12) {
        while (true) {
            dayBirth = prompt('Введите день рождения');
            if (dayBirth < 32 || dayBirth < 1) break;
        }
    }
    else if (Number(monthBirth) === 2) {
        while (true) {
            dayBirth = prompt('Введите день рождения');
            if (dayBirth < 29 || dayBirth < 1) break;
        }
    }
    else if (Number(monthBirth) === 4 || Number(monthBirth) === 6 || Number(monthBirth) === 9 || Number(monthBirth) === 11) {
        while (true) {
            dayBirth = prompt('Введите день рождения');
            if (dayBirth < 31 || dayBirth < 1) break;
        }
    }
}
while (true) {
    gender = prompt('Введите цифру пола: 1 - мужской, 2 - женский');
    if (Number(gender) !== 0) break;
}
while (true) {
    country = prompt('Введите страну проживания');
    if (Number(country) !== 0) break;
}
while (true) {
    choice = prompt('Укажите цифру типа населённого пункта: 1 - Город, 2 - Село, 3 - Деревня');
    if (Number(choice) !== 0) break;
}
if (Number(choice) === 1) {
    choice = 'г.';
}
if (Number(choice) === 2) {
    choice = 'сел.';
}
if (Number(choice) === 3) {
    choice = 'дер.';
}
while (true) {
    city = prompt('Введите город');
    if (Number(city) !== 0) break;
}
while (true) {
    choice1 = prompt('Укажите цифру типа улицы: 1 - Улица, 2 - Переулок, 3 - Бульвар, 4 - Проспект');
    if (Number(choice1) !== 0) break;
}
if (Number(choice1) === 1) {
    choice1 = 'ул.';
}
if (Number(choice1) === 2) {
    choice1 = 'пер.';
}
if (Number(choice1) === 3) {
    choice1 = 'бул.';
}
if (Number(choice1) === 4) {
    choice1 = 'просп.';
}
while (true) {
    street = prompt('Введите улицу');
    if (Number(street) !== 0) break;
}
while (true) {
    numberHouse = prompt('Введите номер дома');
    if (Number(numberHouse) !== 0) break;
}

if (Number(gender) === 1) {
    if (2017 - Number(yearBirth) > 59) {
        retirement = 'Да';
    }
    else {
        retirement = 'Нет';
    }
}
if (Number(gender) === 2) {
    if (2017 - Number(yearBirth) > 54) {
        retirement = 'Да';
    }
    else {
        retirement = 'Нет';
    }
}
if (Number(monthBirth) === 1) {
    monthBirth = 'января';
}
if (Number(monthBirth) === 2) {
    monthBirth = 'февраля';
}
if (Number(monthBirth) === 3) {
    monthBirth = 'марта';
}
if (Number(monthBirth) === 4) {
    monthBirth = 'апреля';
}
if (Number(monthBirth) === 5) {
    monthBirth = 'мая';
}
if (Number(monthBirth) === 6) {
    monthBirth = 'июня';
}
if (Number(monthBirth) === 7) {
    monthBirth = 'июля';
}
if (Number(monthBirth) === 8) {
    monthBirth = 'августа';
}
if (Number(monthBirth) === 9) {
    monthBirth = 'сентября';
}
if (Number(monthBirth) === 10) {
    monthBirth = 'октября';
}
if (Number(monthBirth) === 11) {
    monthBirth = 'ноября';
}
if (Number(monthBirth) === 12) {
    monthBirth = 'декабря';
}
if (Number(gender) === 1) {
    gender = 'мужской';
}
if (Number(gender) === 2) {
    gender = 'женский';
}
alert(`
ФИО: ${userSurname} ${userName} ${nameFather}
Дата рождения: ${dayBirth} ${monthBirth} ${yearBirth}
Пол: ${gender}
Адрес: ${country}, ${choice} ${city}, ${choice1} ${street}, д. ${numberHouse}
На пенсии: ${retirement}
`);

