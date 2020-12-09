1. ContactsApp представляет собой SPA, реализующее список контактов в web интерфейсе.
2. Приложение написано на базе React JS + Redux.
3. Техническое описание страниц:
Название файла  | Содержание файла
----------------|----------------------
/login       | Страница логинизации. Логинизация выполнена локальна ввиду отсутствия такого функционала у API. 
                Проверка осуществляется путем сверки введенных пользователем значений со значениями, установленными локлаьно в приложении.
                email: 'example@example.com'
                password: 'qwerty'
/main        | Основная страница приложения.
                Функционал:
                1. Загрузка контактов с серверной API.
                2. Редактирование контактов.
                3. Удаление контактов.
                4. Добавление новых контактов.
                5. Поиск контактов по подстроке. 