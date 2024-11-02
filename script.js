"use strict";
// Включение строгого режима для улучшения качества кода

// Фиксированные курсы валют относительно рубля на 03.11.2024
const exchangeRates = {
    "RUB": 1,
    // Российский рубль - базовая валюта

    "AUD": 64.1488,
    // Австралийский доллар

    "AZN": 57.3823,
    // Азербайджанский манат

    "AMD": 0.251956,   // 25.1956 за 100 драм = 0.251956 за 1 драм
    // Армянский драм

    "BYN": 29.3798,
    // Белорусский рубль

    "BGN": 54.2906,
    // Болгарский лев

    "BRL": 16.7987,
    // Бразильский реал

    "HUF": 0.259572,   // 25.9572 за 100 форинтов = 0.259572 за 1 форинт
    // Венгерский форинт

    "KRW": 0.0707242,  // 70.7242 за 1000 вон = 0.0707242 за 1 вон
    // Вон Республики Корея

    "VND": 0.004024,   // 40.2400 за 10000 донгов = 0.004024 за 1 донг
    // Вьетнамский донг

    "HKD": 12.5644,
    // Гонконгский доллар

    "GEL": 35.7797,
    // Грузинский лари

    "DKK": 14.2409,
    // Датская крона

    "AED": 26.5623,
    // Дирхам ОАЭ

    "USD": 97.5499,
    // Доллар США

    "EUR": 106.1426,
    // Евро

    "EGP": 1.99242,    // 19.9242 за 10 фунтов = 1.99242 за 1 фунт
    // Египетский фунт

    "INR": 1.16008,    // 11.6008 за 10 рупий = 1.16008 за 1 рупию
    // Индийская рупия

    "IDR": 0.00621139, // 62.1139 за 10000 рупий = 0.00621139 за 1 рупию
    // Индонезийская рупия

    "KZT": 0.199852,   // 19.9852 за 100 тенге = 0.199852 за 1 тенге
    // Казахстанский тенге

    "CAD": 70.0186,
    // Канадский доллар

    "QAR": 26.7994,
    // Катарский риал

    "KGS": 1.13695,     // 11.3695 за 10 сомов = 1.13695 за 1 сом
    // Киргизский сом

    "CNY": 13.6731,
    // Китайский юань

    "MDL": 5.44698,     // 54.4698 за 10 леев = 5.44698 за 1 леев
    // Молдавский леев

    "NZD": 58.2275,
    // Новозеландский доллар

    "TMT": 27.8714,
    // Новый туркменский манат

    "NOK": 8.87818,     // 88.7818 за 10 крон = 8.87818 за 1 крону
    // Норвежская крона

    "PLN": 24.3516,
    // Польский злотый

    "RON": 21.2926,
    // Румынский лей

    "XDR": 129.8662,
    // СДР (специальные права заимствования)

    "RSD": 0.906332,    // 90.6332 за 100 динаров = 0.906332 за 1 динар
    // Сербский динар

    "SGD": 73.7283,
    // Сингапурский доллар

    "TJS": 9.16125,     // 91.6125 за 10 сомони = 9.16125 за 1 сомони
    // Таджикский сомони

    "THB": 2.88013,     // 28.8013 за 10 батов = 2.88013 за 1 бат
    // Таиландский бат

    "TRY": 2.84781,     // 28.4781 за 10 лир = 2.84781 за 1 лиру
    // Турецкая лира

    "UZS": 0.0763296,   // 76.3296 за 10000 сумов = 0.0763296 за 1 сум
    // Узбекский сум

    "UAH": 2.36660,     // 23.6660 за 10 гривен = 2.36660 за 1 гривну
    // Украинская гривна

    "GBP": 125.4102,
    // Фунт стерлингов Соединенного королевства

    "CZK": 4.19029,     // 41.9029 за 10 крон = 4.19029 за 1 крону
    // Чешская крона

    "SEK": 9.14465,     // 91.4465 за 10 крон = 9.14465 за 1 крону
    // Шведская крона

    "CHF": 112.3847,
    // Швейцарский франк

    "ZAR": 5.52459,     // 55.2459 за 10 рандов = 5.52459 за 1 ранд
    // Южноафриканский ранд

    "JPY": 0.639671     // 63.9671 за 100 иен = 0.639671 за 1 иену
    // Японская иена
};

// Список стран для флагов (код ISO 3166-1 alpha-2)
const Country_List = {
    "RUB": "ru",
    // Российский рубль - Россия

    "AUD": "au",
    // Австралийский доллар - Австралия

    "AZN": "az",
    // Азербайджанский манат - Азербайджан

    "AMD": "am",
    // Армянский драм - Армения

    "BYN": "by",
    // Белорусский рубль - Беларусь

    "BGN": "bg",
    // Болгарский лев - Болгария

    "BRL": "br",
    // Бразильский реал - Бразилия

    "HUF": "hu",
    // Венгерский форинт - Венгрия

    "KRW": "kr",
    // Вон Республики Корея - Южная Корея

    "VND": "vn",
    // Вьетнамский донг - Вьетнам

    "HKD": "hk",
    // Гонконгский доллар - Гонконг

    "GEL": "ge",
    // Грузинский лари - Грузия

    "DKK": "dk",
    // Датская крона - Дания

    "AED": "ae",
    // Дирхам ОАЭ - Объединенные Арабские Эмираты

    "USD": "us",
    // Доллар США - США

    "EUR": "eu",
    // Евро - Европейский союз

    "EGP": "eg",
    // Египетский фунт - Египет

    "INR": "in",
    // Индийская рупия - Индия

    "IDR": "id",
    // Индонезийская рупия - Индонезия

    "KZT": "kz",
    // Казахстанский тенге - Казахстан

    "CAD": "ca",
    // Канадский доллар - Канада

    "QAR": "qa",
    // Катарский риал - Катар

    "KGS": "kg",
    // Киргизский сом - Киргизия

    "CNY": "cn",
    // Китайский юань - Китай

    "MDL": "md",
    // Молдавский леев - Молдова

    "NZD": "nz",
    // Новозеландский доллар - Новая Зеландия

    "TMT": "tm",
    // Новый туркменский манат - Туркмения

    "NOK": "no",
    // Норвежская крона - Норвегия

    "PLN": "pl",
    // Польский злотый - Польша

    "RON": "ro",
    // Румынский лей - Румыния

    "XDR": "xx", // Специальный код, можно использовать нейтральный флаг или заменить
    // Специальные права заимствования

    "RSD": "rs",
    // Сербский динар - Сербия

    "SGD": "sg",
    // Сингапурский доллар - Сингапур

    "TJS": "tj",
    // Таджикский сомони - Таджикистан

    "THB": "th",
    // Таиландский бат - Таиланд

    "TRY": "tr",
    // Турецкая лира - Турция

    "UZS": "uz",
    // Узбекский сум - Узбекистан

    "UAH": "ua",
    // Украинская гривна - Украина

    "GBP": "gb",
    // Фунт стерлингов Соединенного королевства - Великобритания

    "CZK": "cz",
    // Чешская крона - Чехия

    "SEK": "se",
    // Шведская крона - Швеция

    "CHF": "ch",
    // Швейцарский франк - Швейцария

    "ZAR": "za",
    // Южноафриканский ранд - Южная Африка

    "JPY": "jp"
    // Японская иена - Япония
};

// Получение элементов DOM по их ID и классам
const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");
const getBtn = document.querySelector("button");
const exIcon = document.querySelector(".reverse");
const amountEl = document.getElementById("amount");
const exRateTxt = document.querySelector(".result");
const fromFlag = document.getElementById("from-flag");
const toFlag = document.getElementById("to-flag");

// Функция для заполнения селекторов валютами
function populateSelect() {
    console.log("Пополнение селекторов валют...");
    for (let cur in exchangeRates) {
        // Создание опции для селектора "Из"
        const optionFrom = document.createElement("option");
        optionFrom.value = cur;
        optionFrom.textContent = cur;
        fromCurrencySelect.appendChild(optionFrom);

        // Создание опции для селектора "В"
        const optionTo = document.createElement("option");
        optionTo.value = cur;
        optionTo.textContent = cur;
        toCurrencySelect.appendChild(optionTo);
    }

    // Установка значений по умолчанию
    fromCurrencySelect.value = "USD";
    toCurrencySelect.value = "RUB";
    console.log(`Установлено: Из - ${fromCurrencySelect.value}, В - ${toCurrencySelect.value}`);

    // Обновление флагов согласно выбранным валютам
    updateFlags();
}

// Функция для обновления изображений флагов
function updateFlags() {
    const fromCode = fromCurrencySelect.value;
    const toCode = toCurrencySelect.value;

    // Формирование URL для флагов
    const fromFlagSrc = `https://flagcdn.com/48x36/${Country_List[fromCode] || 'xx'}.png`;
    const toFlagSrc = `https://flagcdn.com/48x36/${Country_List[toCode] || 'xx'}.png`;

    // Обновление src и alt атрибутов изображений флагов
    fromFlag.src = fromFlagSrc;
    toFlag.src = toFlagSrc;
    fromFlag.alt = fromCode;
    toFlag.alt = toCode;

    console.log(`Флаги обновлены: Из - ${fromFlagSrc}, В - ${toFlagSrc}`);
}

// Функция для конвертации валют
function convertCurrency() {
    const amount = parseFloat(amountEl.value);
    // Проверка на корректность введенной суммы
    if (isNaN(amount) || amount < 0) {
        exRateTxt.textContent = "Пожалуйста, введите корректную сумму.";
        console.warn("Некорректная сумма:", amountEl.value);
        return;
    }

    // Получение курсов выбранных валют
    const fromRate = exchangeRates[fromCurrencySelect.value];
    const toRate = exchangeRates[toCurrencySelect.value];

    console.log(`Конвертация: ${amount} ${fromCurrencySelect.value} (курс: ${fromRate}) -> ${toCurrencySelect.value} (курс: ${toRate})`);

    // Конвертация через рубль
    const amountInRub = amount * fromRate;
    const convertedAmount = amountInRub / toRate;

    // Отображение результата конвертации
    exRateTxt.textContent = `${amount} ${fromCurrencySelect.value} = ${convertedAmount.toFixed(2)} ${toCurrencySelect.value}`;
    console.log(`Результат: ${exRateTxt.textContent}`);
}

// Функция для обмена выбранных валют местами
function reverseCurrencies() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
    console.log(`Валюты обменены: Из - ${fromCurrencySelect.value}, В - ${toCurrencySelect.value}`);

    // Обновление флагов и повторная конвертация после обмена
    updateFlags();
    convertCurrency();
}

// Добавление обработчиков событий

// Событие загрузки DOM
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM загружен. Инициализация...");
    populateSelect();
    convertCurrency();
});

// Обработчик клика по кнопке конвертации
getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Нажата кнопка 'Конвертировать'");
    convertCurrency();
});

// Обработчик клика по иконке обмена валют
exIcon.addEventListener("click", () => {
    console.log("Нажата иконка обмена валют");
    reverseCurrencies();
});

// Обработчик изменения селектора "Из"
fromCurrencySelect.addEventListener("change", () => {
    console.log(`Выбрана валюта 'Из': ${fromCurrencySelect.value}`);
    updateFlags();
    convertCurrency();
});

// Обработчик изменения селектора "В"
toCurrencySelect.addEventListener("change", () => {
    console.log(`Выбрана валюта 'В': ${toCurrencySelect.value}`);
    updateFlags();
    convertCurrency();
});

// Обработчик ввода суммы
amountEl.addEventListener("input", () => {
    console.log(`Введена сумма: ${amountEl.value}`);
    convertCurrency();
});
