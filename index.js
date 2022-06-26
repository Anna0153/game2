// ---- keydown, keyup, keypress

//При загрузке документа
document.addEventListener('DOMContentLoaded', () => {
    const gameboard = document.querySelector('.gameboard'); //Стыкуем в переменную элемент
    const score = document.querySelector('.header__score'); //Стыкуем в переменную элемент

    const generateEgg = () => {                           //Генерируем позицию элемента 
        const xPos = Math.round(Math.random() * 800 + 200); // Случайным образом вычисляем положение по координате x
        const yPos = Math.round(Math.random() * 400 + 200); // Случайным образом вычисляем положение по координате y
        const eggMaxSize = 70;      //Максимальный размер для "цели"
        const eggMinSize = 30;      //Минимальный размер для "цели"
        const eggSize = Math.round(Math.random() * (eggMaxSize - eggMinSize) + eggMinSize); //вычисляем размер "цели"
        const availableColor = ['tomato', 'yellow', 'white', 'pink', 'salmon', 'lightblue', 'lightgreen']; //набор возможных цветов
        const fillColor = availableColor[Math.round(Math.random() * (availableColor.length - 1))]; //выбираем цвет
/*
        const eggSvg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            style="position: fixed; z-index: 2; left: ${xPos}px; top: ${yPos}px;"
             x="0px" y="0px"
            width="${eggSize}px" height="${eggSize}px" 
            viewBox="0 0 540.016 540.016" style="enable-background:new 0 0 540.016 540.016;"
            xml:space="preserve">
            <g>
            <path fill="${fillColor}" d="M270.005,0c-7.05,0-13.911,0.851-20.6,2.355c-39.076,8.838-71.781,41.487-96.041,75.074
        c-12.809,17.729-23.268,35.71-31.071,50.563c-13.886,26.433-25.967,55.417-35.582,84.401
        c-15.086,45.472-24.058,90.936-24.058,126.518c0,31.721,7.209,61.512,20.159,87.945c33.079,67.533,103.63,113.158,187.192,113.158
        c18.464,0,36.279-2.246,53.213-6.443c70.699-17.535,125.675-69.451,145.804-137.113c5.403-18.17,8.341-37.455,8.341-57.533
        c0-58.27-23.972-143.031-59.646-210.927C392.601,80.196,340.006,0,270.005,0z M315.58,113.771
        c30.142-11.077,65.681,10.165,79.377,47.442c13.702,37.276,0.373,76.476-29.768,87.553c-30.142,11.077-65.68-10.166-79.377-47.442
        C272.116,164.046,285.439,124.848,315.58,113.771z M114.71,433.717c-5.171,0-10.214-0.635-15.159-1.609
        c-15.723-27.35-24.664-59.064-24.664-93.182c0-36.391,9.761-83.581,25.998-130.289c4.523-0.808,9.113-1.359,13.819-1.359
        c51.843,0,93.875,50.692,93.875,113.221C208.584,383.025,166.552,433.717,114.71,433.717z M164.312,93.146
        c-1.493-1.327-2.84-2.771-4.101-4.271c24.168-34.657,57.437-69.131,96.806-75.539c9.309,19.449,4.566,46.322-13.666,66.794
        C220.47,105.814,185.084,111.646,164.312,93.146z M285.011,393.412c-23.678-0.135-42.742-23.979-42.577-53.27
        c0.166-29.291,19.492-52.92,43.17-52.785c23.679,0.135,42.742,23.979,42.577,53.27
        C328.017,369.91,308.689,393.545,285.011,393.412z M458.023,390.326C439.627,455.561,386.854,505.67,318.8,522.041
        c-8.825-30.379-0.71-67.717,24.296-97.436C374.498,387.285,422.271,374.207,458.023,390.326z"/>
        </g>
        </svg>`;
*/
/*Генерируем "Цель" */
const eggSvg = `<svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="${eggSize}px" height="${eggSize}px"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
style="position: fixed; z-index: 2; left: ${xPos}px; top: ${yPos}px;"
>
<g>
<path d="M12,0C6.8911133,0,3,10,3,15.0043945C3,19.9643555,7.0375977,24,12,24s9-4.0356445,9-8.9956055   C21,10,17.1088867,0,12,0z" fill="#303C42"/>
<path d="M6.2749023,6.4512329l0.9682617-0.4087524l2.1777344,0.918457   c0.1240234,0.0517578,0.2641602,0.0517578,0.3881836,0l2.1811523-0.918457l2.1811523,0.918457   C14.2333984,6.9868164,14.2993164,7,14.3652344,7s0.1318359-0.0131836,0.1938477-0.0390625l2.1816406-0.918457l0.9873657,0.414978   c0.8895874,1.8167725,1.5801392,3.880127,1.954895,5.763855l-0.5623779,0.2362061l-2.1860352-0.918457   c-0.1240234-0.0517578-0.2636719-0.0517578-0.3876953,0l-2.1816406,0.918457l-2.1811523-0.918457   c-0.1240234-0.0517578-0.2636719-0.0517578-0.3876953,0l-2.1811523,0.918457l-2.1777368-0.918457   c-0.1240211-0.0517578-0.2646461-0.0522461-0.3886695,0.0004883l-2.1748047,0.9179688l-0.5571899-0.2349243   C4.6919556,10.3364258,5.383667,8.2698364,6.2749023,6.4512329z" fill="${fillColor}"/>
<path d="M12,1c1.6556396,0,3.4342651,1.4665527,4.9766235,4.0567627l-0.0420532-0.0177002   c-0.1240234-0.0517578-0.2636719-0.0517578-0.3876953,0l-2.1816406,0.918457l-2.1811523-0.918457   c-0.1240234-0.0517578-0.2636719-0.0517578-0.3876953,0l-2.1811523,0.918457l-2.1777368-0.918457   C7.3134766,4.9873047,7.1728516,4.9868164,7.0488281,5.0395508l-0.020813,0.0087891C8.5692749,2.4631348,10.3460693,1,12,1z" fill="#E82C2A"/>
<path d="M12,23c-2.633728,0-4.9671631-1.2842407-6.4257812-3.2530518l1.6689453-0.7044678l2.1777344,0.918457   c0.1240234,0.0517578,0.2641602,0.0517578,0.3881836,0l2.1811523-0.918457l2.1811523,0.918457   C14.2333984,19.9868164,14.2993164,20,14.3652344,20s0.1318359-0.0131836,0.1938477-0.0390625l2.1816406-0.918457   l1.6830444,0.7071533C16.9650269,21.7169189,14.6325073,23,12,23z" fill="${fillColor}"/>
<path d="M18.9804688,18.8987427l-2.0458984-0.8596802c-0.1240234-0.0517578-0.2636719-0.0517578-0.3876953,0   l-2.1816406,0.918457l-2.1811523-0.918457c-0.1240234-0.0517578-0.2636719-0.0517578-0.3876953,0l-2.1811523,0.918457   l-2.1777368-0.918457c-0.1240211-0.0517578-0.2646461-0.0522461-0.3886695,0.0004883l-2.0305786,0.8571167   C4.3720703,17.7435913,4,16.4172974,4,15.0043945c0-0.541626,0.0546265-1.1421509,0.1430664-1.7695312l0.5366211,0.2260742   c0.125,0.0517578,0.2646484,0.0522461,0.3886719-0.0004883l2.1748047-0.9179688l2.1777344,0.918457   c0.1240234,0.0517578,0.2641602,0.0517578,0.3881836,0l2.1811523-0.918457l2.1811523,0.918457   C14.2333984,13.4868164,14.2993164,13.5,14.3652344,13.5s0.1318359-0.0131836,0.1938477-0.0390625l2.1816406-0.918457   l2.1860352,0.918457c0.1240234,0.0517578,0.2636719,0.0517578,0.3876953,0l0.5422974-0.2278442   C19.9453735,13.861145,20,14.4622803,20,15.0043945C20,16.4182129,19.6273804,17.7451782,18.9804688,18.8987427z" fill="#E82C2A"/>
<path d="M19.1206055,12.4575195l0.5623779-0.2362061c-0.3747559-1.883728-1.0653076-3.9470825-1.954895-5.763855   l-0.9873657-0.414978l-0.293396,0.1235352c0.795105,2.0097046,1.3302612,4.0999756,1.4945679,5.7962646L19.1206055,12.4575195z" opacity="0.1"/><path d="M16.546875,5.0390625c0.1240234-0.0517578,0.2636719-0.0517578,0.3876953,0l0.0420532,0.0177002   c-0.9180298-1.541748-1.9200439-2.6741333-2.9297485-3.3473511c0.7577515,1.017395,1.4413452,2.2345581,2.0167847,3.5330811   L16.546875,5.0390625z" opacity="0.1"/><path d="M5.6593628,19.7109985l-0.085144,0.0359497C7.0328369,21.7157593,9.366272,23,12,23   c2.6325073,0,4.9650269-1.2830811,6.4237671-3.2503662l-1.6830444-0.7071533l-2.1816406,0.918457   C14.4970703,19.9868164,14.4311523,20,14.3652344,20s-0.1318359-0.0131836-0.1938477-0.0390625l-0.1428833-0.0601807   C12.8436279,20.5949097,11.4697266,21,10,21C8.3997803,21,6.9111328,20.5230713,5.6593628,19.7109985z" opacity="0.1"/><path d="M16.546875,18.0390625c0.1240234-0.0517578,0.2636719-0.0517578,0.3876953,0l2.0458984,0.8596802   C19.6273804,17.7451782,20,16.4182129,20,15.0043945c0-0.5421143-0.0546265-1.1432495-0.1432495-1.7713013l-0.5422974,0.2278442   c-0.1240234,0.0517578-0.2636719,0.0517578-0.3876953,0l-0.9301147-0.3907471   c-0.0162964,1.9892578-0.7659302,3.8032227-1.987854,5.1954346L16.546875,18.0390625z" opacity="0.1"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="4.1758218" x2="21.2095642" y1="8.6041164" y2="16.547081"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M12,0C6.8911133,0,3,10,3,15.0043945C3,19.9643555,7.0375977,24,12,24s9-4.0356445,9-8.9956055   C21,10,17.1088867,0,12,0z" fill="url(#SVGID_1_)"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/>
</svg>`;


        gameboard.innerHTML += eggSvg;  //добавляем "цель" на игровое поле (<div class="gameboard">)
    };

    const getCurrentScore = () => parseInt(score.textContent);  //Возвращает значение очков по запросу

    const checkScore = () => {                             //проверка текущего количества очков
        const currentScore = getCurrentScore();            //используем функцию, которая возвращает значение очков.

        if (currentScore == 20) {                           //Если количество очков равно 20
            const gameOverBoard = document.querySelector('.gameover-board'); //Подключаем блок по окончанию игры
            const closeButton = gameOverBoard.querySelector('.close');       //Подключаем кнопку закрытия
            const startAgain = gameOverBoard.querySelector(('.start-again')) //подключаем кнопку "запустить ещё раз"

            gameOverBoard.classList.add('gameover-board--shown');            //Подключаем класс, который показывает блок "игра окончена"
            closeButton.addEventListener('click', () => window.close());     //При нажатии на кнопку, которую связали с переменной closeButton  закрывается окно
            startAgain.addEventListener('click', () => location.reload());  // При нажатии кнопки, которая связанна с переменной startAgain - обновляется страница
        }
    }

    const incrementScore = () => {                            //функция, которая увеличивает очки
        score.textContent = getCurrentScore() + 1;
        checkScore();                                           //Запускается проверка, не достигли ли максимального кличества очков.
    };

    const increaseSizeOfTheDino = () => {                           //Создаем размер игрока (динозавра)
        const dino = document.querySelector('.dino');               //свящываем переменную dino с элементом .dino
        const prevHeight = getComputedStyle(dino).height;           //получаем высоту элемента с игроком (динозавром)
        const prevWidth = getComputedStyle(dino).width;             //получаем ширину элемента с игроком (динозавром)

        dino.style.height = `${prevHeight + (prevHeight * 0.05)}px;`; //увеличиваем высоту игрока (динозавра) на 5%
        dino.style.width = `${prevWidth + (prevWidth * 0.05)}px;`;    //увеличиваем ширину игрока (динозавра) на 5%
    };


    const isDinoReachedEgg = () => {                                   //функция, которая проверяет словил ли игрок (динозавр) цель (яйцо)
        const dino = document.querySelector('.dino');                   //связываем переменную dino и элемент .dino
        const egg = document.querySelector('svg');                      //связываем переменную egg и элемент svg

        const eggPosX = parseInt(getComputedStyle(egg).left);           //в переменную eggPosX помещаем текущую координату Х для цели (значение left)
        const eggPosY = parseInt(getComputedStyle(egg).top);            //в переменную eggPosY помещаем текущую координату Y для цели (значение top)
        const eggW = parseInt(getComputedStyle(egg).width);             //В переменную eggW помещаем значение ширины цели (яйца)
        const eggH = parseInt(getComputedStyle(egg).height);            //В переменную eggH помещаем значение ширины цели (яйца)
//получаем значения для динозавра
        const dinoPosX = parseInt(getComputedStyle(dino).left);       
        const dinoPosY = parseInt(getComputedStyle(dino).top);
        const dinoW = parseInt(getComputedStyle(dino).width);
        const dinoH = parseInt(getComputedStyle(dino).height);

        const isDinoOverEggOnXAxis = dinoPosX < eggPosX && dinoPosX + dinoW > eggPosX + eggW;  //определяем "словил" ли игрок (динозавр) цель (яйцо) по оси Х
        const isDinoOverEggOnYAxis = dinoPosY < eggPosY && dinoPosY + dinoH > eggPosY + eggH;  //определяем "словил" ли игрок (динозавр) цель (яйцо) по оси Y

        if (isDinoOverEggOnXAxis && isDinoOverEggOnYAxis) { //если игрок (динозавр) словил цель (яйцо) по обоим осям
            egg.remove();                                   //убирает яйцо (цель)
            generateEgg();                                  //генерируется яйцо (цель)
            incrementScore();                               //Запускается функция incrementScore(); , которая увеличивает значение на 1
            increaseSizeOfTheDino();                        //запускается функция increaseSizeOfTheDino();, которая увеличивает размер динозавра
        }

    };
    generateEgg();                                          //создается цель (яйцо) - в самом начале


    document.addEventListener('keydown', event => {           //Устанавливается "слушатель", который запускается при нажатии клавиши (событие keydown)
        const { key } = event;
        const dino = document.querySelector('.dino');           
        const step = 50;                                        //Устанавливается шаг перемещения игрока (динозавра)
        let oldPosition = '';

        switch (event.key) {                                    //оператор множественного выбора, в зависимости от
            case "ArrowDown":                           
                oldPosition = parseInt(getComputedStyle(dino).top);  //Вычисляем "прошлую позицию"
                dino.style.top = `${oldPosition + step}px`;         //изменяем позицию по вертикали - опускаем вниз (значение top)
                break;
            case "ArrowUp":
                oldPosition = parseInt(getComputedStyle(dino).top);  //Вычисляем "прошлую позицию"
                dino.style.top = `${oldPosition - step}px`;             //изменяем позицию по вертикали - поднимаем вниз (значение top)
                break;

            case "ArrowLeft":                                           
                oldPosition = parseInt(getComputedStyle(dino).left);   //Вычисляем "прошлую позицию"
                dino.style.left = `${oldPosition - step}px`;            //изменяем позицию по горизонталии - смещаем влево (значение left)
                break;

            case "ArrowRight":
                oldPosition = parseInt(getComputedStyle(dino).left);
                dino.style.left = `${oldPosition + step}px`;
                break;
        }

        isDinoReachedEgg();
    });


});
