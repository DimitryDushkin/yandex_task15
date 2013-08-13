'use strict';


function questionnaireCtrl($scope) {


    function init() {
      // load previous answers
      if (supports_html5_storage()) {
        if (localStorage['questions']) {
          var qa = JSON.parse(localStorage['questions']);

          angular.forEach($scope.questions, function(v, k) {
            v['answer'] = qa[k]['answer'];
          });

        }
        
      }
    }


    $scope.send_questionnaire = function() {
      // 1. Validate form
      // some ajax request to send data from $scope.questions
    }

    $scope.$watch("questions", function() {
      var number_of_filled_questions = 0;
      angular.forEach($scope.questions, function (v, k) {
        if (v.answer) {
          number_of_filled_questions++;
        }
      });
      var pb_width = number_of_filled_questions/$scope.questions.length * 100;
      $('.qa_progress-bar').width(pb_width + '%');

      if (pb_width == 100) {
        $('.form_filled').fadeIn();
      } else {
        $('.form_filled').fadeOut();
      }

      // Now store answer
      localStorage['questions'] = JSON.stringify($scope.questions);


    }, true);
    

    $scope.questions = [{
        name: 'Год рождения.',
        input_type: 'text',
        input_name: 'bd_year',
        answer: ''
      }, {
        name: 'Город, в котором вы живёте.',
        input_type: 'text',
        input_name: 'city',
        answer: ''
      },
      {
        name: "Вуз, факультет, специальность, кафедра.",
        input_type: 'textarea',
        input_name: 'univercity',
        answer: ''
      }, {
        name: "Год окончания вуза.",
        input_type: 'text',
        input_name: 'univer_year',
        answer: ''
      }, {
        name: "Чего вы ожидаете от участия в Школе?",
        input_type: 'textarea',
        input_name: 'expectation',
        answer: ''
      }, {
        name: "Откуда вы о нас узнали?",
        input_type: 'textarea',
        input_name: 'where-know',
        answer: ''
      }, {
        name: "Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?",
        input_type: 'text',
        input_name: 'time-to-learn',
        answer: ''
      }, {
        name: "Расскажите о вашем опыте разработки. Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка.",
        input_type: 'textarea',
        input_name: 'experiance',
        answer: ''
      }, {
        name: "Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.",
        input_type: 'textarea',
        input_name: 'work-experiance',
        answer: ''
      }, {
        name: "Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.",
        input_type: 'textarea',
        input_name: 'progs',
        answer: ''
      }, {
        name: "Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?",
        input_type: 'textarea',
        input_name: 'shell-use',
        answer: ''
      }, {
        name: '<p>Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:</p><p>4! + 0! + 5! + 8! + 5! = 40585</p><p><strong>В качестве ответа на вопрос пришлите ссылку на \
                <a href="http://jsfiddle.net/" class="b-link" target="_blank">http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на \
                <a href="https://github.com/" class="b-link" target="_blank">https://github.com/</a>.\
              </strong></p>',
        input_type: 'textarea',
        input_name: 'task1',
        answer: ''
      }, {
        name: '<p>Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить .</p><p><strong>Задание</strong></p><p><strong>Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.</strong></p><p><strong>Полное условие задачи доступно на</strong></p><p><strong><a href="https://github.com/yandex-shri/introtask-space" class="b-link" target="_blank">https://github.com/yandex-shri/introtask-space</a>.\
              </strong></p><p><strong>В качестве ответа на вопрос пришлите ссылку на \
                <a href="http://jsfiddle.net/" class="b-link" target="_blank">http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на \
                <a href="https://github.com/" class="b-link" target="_blank">https://github.com/</a>.\
              </strong></p>',
        input_type: 'textarea',
        input_name: 'task2',
        answer: ''
      }, {
        name: '<p>Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:</p><ul><li><p><strong>проверка полноты и правильности заполнения полей (где это возможно);</strong></p></li><li><p><strong>возможность свернуть и развернуть разделы (аккордеон);</strong></p></li><li><p><strong>индикатор заполнения анкеты;</strong></p></li><li><p><strong>что-нибудь ещё.</strong></p></li></ul><p><strong>Подумайте над тем, как эти данные будут отправляться на сервер.</strong></p><p><strong>Будет плюсом, если вы сверстаете страницу, используя БЭМ.</strong></p><p><strong>Дополнительные задания</strong></p><p><strong>1. Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.</strong></p><p><strong>2. Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.</strong></p><p><strong>Разработку необходимо вести на \
                <a href="https://github.com/" class="b-link" target="_blank">https://github.com/</a>. В качестве ответа на вопрос пришлите ссылку на проект.\
              </strong></p>',
        input_type: 'textarea',
        input_name: 'task3',
        answer: ''
      }
    ];

    $scope.showDetails = false;
    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    }


    init();
}




function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
