// Данные для каталога образовательных программ
const catalogData = [
    {
        id: 1,
        name: "IT и цифровые технологии",
        description: "Программы подготовки специалистов в области информационных технологий и цифровизации",
        subcategories: [
            {
                name: "Разработка программного обеспечения",
                programs: [
                    {
                        code: "09.02.07",
                        name: "Информационные системы и программирование",
                        level: "СПО",
                        qualification: "Техник-программист",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "09.005 «Разработка и сопровождение программного обеспечения и баз данных»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1781/",
                        positions: ["Программист", "Системный администратор", "Специалист по тестированию ПО"]
                    },
                    {
                        code: "09.03.04",
                        name: "Программная инженерия",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "09.005 «Разработка и сопровождение программного обеспечения и баз данных»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1781/",
                        positions: ["Инженер-программист", "Разработчик ПО", "Системный аналитик"]
                    }
                ]
            },
            {
                name: "Информационная безопасность",
                programs: [
                    {
                        code: "09.02.08",
                        name: "Прикладная информатика",
                        level: "СПО",
                        qualification: "Техник по информационным системам",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "09.006 «Обеспечение безопасности систем и средств информационно-коммуникационных технологий»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1782/",
                        positions: ["Специалист по ИБ", "Администратор безопасности", "Аналитик ИБ"]
                    },
                    {
                        code: "10.03.01",
                        name: "Информационная безопасность",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "10.001 «Обеспечение безопасности информационных систем»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1783/",
                        positions: ["Специалист по ИБ", "Инженер по ИБ", "Аудитор ИБ"]
                    }
                ]
            },
            {
                name: "Анализ данных",
                programs: [
                    {
                        code: "09.02.07",
                        name: "Информационные системы и программирование",
                        level: "СПО",
                        qualification: "Техник-программист",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "09.005 «Разработка и сопровождение программного обеспечения и баз данных»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1781/",
                        positions: ["Аналитик данных", "Специалист по БД", "BI-аналитик"]
                    },
                    {
                        code: "01.03.02",
                        name: "Прикладная математика и информатика",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "01.013 «Анализ данных и математическое моделирование»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1784/",
                        positions: ["Data Scientist", "Аналитик данных", "Математик-модельщик"]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Здравоохранение и биотехнологии",
        description: "Программы подготовки медицинских специалистов и биотехнологов",
        subcategories: [
            {
                name: "Лечебное дело",
                programs: [
                    {
                        code: "31.02.01",
                        name: "Лечебное дело",
                        level: "СПО",
                        qualification: "Фельдшер",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "31.001 «Оказание медицинской помощи»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1785/",
                        positions: ["Фельдшер скорой помощи", "Фельдшер отделения", "Медицинский работник"]
                    },
                    {
                        code: "31.05.01",
                        name: "Лечебное дело",
                        level: "ВО",
                        qualification: "Врач",
                        duration9: "6 лет",
                        duration11: "6 лет",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "31.001 «Оказание медицинской помощи»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsии-professionalnykh-standartov/1785/",
                        positions: ["Врач-терапевт", "Врач-специалист", "Медицинский консультант"]
                    }
                ]
            },
            {
                name: "Сестринское дело",
                programs: [
                    {
                        code: "31.02.03",
                        name: "Сестринское дело",
                        level: "СПО",
                        qualification: "Медицинская сестра",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "31.002 «Оказание сестринской помощи»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1786/",
                        positions: ["Медицинская сестра", "Старшая медсестра", "Медицинский работник"]
                    },
                    {
                        code: "31.05.02",
                        name: "Сестринство",
                        level: "ВО",
                        qualification: "Бакалавр сестринского дела",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "31.002 «Оказание сестринской помощи»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1786/",
                        positions: ["Сестра-исследователь", "Сестра-консультант", "Менеджер по сестринскому уходу"]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Энергетика и энергомашиностроение",
        description: "Программы подготовки специалистов в области энергетики и машиностроения",
        subcategories: [
            {
                name: "Электроэнергетика",
                programs: [
                    {
                        code: "13.02.01",
                        name: "Тепловые электрические станции",
                        level: "СПО",
                        qualification: "Техник",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "13.001 «Эксплуатация электрооборудования»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1787/",
                        positions: ["Электромонтер", "Техник-энергетик", "Оператор ЭС"]
                    },
                    {
                        code: "13.03.02",
                        name: "Электроэнергетика и электротехника",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "13.002 «Проектирование электрооборудования»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1788/",
                        positions: ["Инженер-электрик", "Электроэнергетик", "Проектировщик ЭО"]
                    }
                ]
            },
            {
                name: "Энергомашиностроение",
                programs: [
                    {
                        code: "13.02.11",
                        name: "Техническая эксплуатация и обслуживание электрического и электромеханического оборудования",
                        level: "СПО",
                        qualification: "Техник",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "13.003 «Ремонт и обслуживание оборудования»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1789/",
                        positions: ["Электромеханик", "Слесарь-ремонтник", "Техник по обслуживанию"]
                    },
                    {
                        code: "13.03.03",
                        name: "Энергетическое машиностроение",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "13.004 «Производство энергетического оборудования»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1790/",
                        positions: ["Инженер-энергомашиностроитель", "Конструктор", "Технолог"]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Транспорт и логистика",
        description: "Программы подготовки специалистов в области транспорта и логистики",
        subcategories: [
            {
                name: "Автомобильный транспорт",
                programs: [
                    {
                        code: "23.02.03",
                        name: "Техническое обслуживание и ремонт автомобильного транспорта",
                        level: "СПО",
                        qualification: "Техник",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "23.001 «Техническое обслуживание автотранспорта»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1791/",
                        positions: ["Автомеханик", "Мастер СТО", "Техник по ремонту"]
                    },
                    {
                        code: "23.03.03",
                        name: "Эксплуатация транспортно-технологических машин и комплексов",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "23.002 «Управление транспортными средствами»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1792/",
                        positions: ["Инженер по эксплуатации", "Технический директор", "Специалист по транспорту"]
                    }
                ]
            },
            {
                name: "Логистика",
                programs: [
                    {
                        code: "44.02.04",
                        name: "Социальная защита населения",
                        level: "СПО",
                        qualification: "Специалист по социальной работе",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "44.001 «Организация логистических процессов»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1793/",
                        positions: ["Логист", "Кладовщик", "Координатор доставки"]
                    },
                    {
                        code: "38.03.02",
                        name: "Менеджмент",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "38.003 «Управление логистическими процессами»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1794/",
                        positions: ["Менеджер по логистике", "Руководитель отдела логистики", "Логист-аналитик"]
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Строительство и архитектура",
        description: "Программы подготовки строительных специалистов и архитекторов",
        subcategories: [
            {
                name: "Гражданское строительство",
                programs: [
                    {
                        code: "08.02.01",
                        name: "Строительство и эксплуатация зданий и сооружений",
                        level: "СПО",
                        qualification: "Техник-строитель",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "08.001 «Строительство зданий и сооружений»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1795/",
                        positions: ["Прораб", "Строитель", "Мастер строительных работ"]
                    },
                    {
                        code: "08.03.01",
                        name: "Строительство",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "08.002 «Проектирование и строительство»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1796/",
                        positions: ["Инженер-строитель", "Проектировщик", "Главный инженер"]
                    }
                ]
            },
            {
                name: "Архитектура",
                programs: [
                    {
                        code: "07.02.01",
                        name: "Архитектура",
                        level: "СПО",
                        qualification: "Архитектор",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "07.001 «Проектирование зданий и сооружений»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1797/",
                        positions: ["Младший архитектор", "Помощник архитектора", "Архитектурный визуализатор"]
                    },
                    {
                        code: "07.03.01",
                        name: "Архитектура",
                        level: "ВО",
                        qualification: "Бакалавр архитектуры",
                        duration9: "6 лет",
                        duration11: "5 лет",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "07.001 «Проектирование зданий и сооружений»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1797/",
                        positions: ["Архитектор", "Главный архитектор", "Градостроитель"]
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Промышленность и материаловедение",
        description: "Программы подготовки специалистов в области промышленности и материаловедения",
        subcategories: [
            {
                name: "Машиностроение",
                programs: [
                    {
                        code: "15.02.08",
                        name: "Технология машиностроения",
                        level: "СПО",
                        qualification: "Техник",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "15.001 «Производство машиностроительной продукции»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1798/",
                        positions: ["Технолог", "Конструктор", "Инженер по качеству"]
                    },
                    {
                        code: "15.03.05",
                        name: "Конструкторско-технологическое обеспечение машиностроительных производств",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "15.002 «Конструирование и производство машин»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1799/",
                        positions: ["Инженер-конструктор", "Технолог машиностроительного производства", "Инженер по ПО"]
                    }
                ]
            },
            {
                name: "Материаловедение",
                programs: [
                    {
                        code: "15.02.07",
                        name: "Материаловедение и технологии материалов",
                        level: "СПО",
                        qualification: "Техник",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "15.003 «Исследование и испытание материалов»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1800/",
                        positions: ["Лаборант по испытанию материалов", "Контролер качества", "Техник по термообработке"]
                    },
                    {
                        code: "15.03.01",
                        name: "Материаловедение и технологии материалов",
                        level: "ВО",
                        qualification: "Бакалавр",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "15.003 «Исследование и испытание материалов»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1800/",
                        positions: ["Инженер-материаловед", "Научный сотрудник", "Специалист по НИОКР"]
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Сельское хозяйство",
        description: "Программы подготовки специалистов в области сельского хозяйства",
        subcategories: [
            {
                name: "Растениеводство",
                programs: [
                    {
                        code: "35.02.01",
                        name: "Агрономия",
                        level: "СПО",
                        qualification: "Агроном",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "35.001 «Выращивание сельскохозяйственных культур»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1801/",
                        positions: ["Агроном", "Специалист по защите растений", "Агротехник"]
                    },
                    {
                        code: "35.03.04",
                        name: "Агрономия",
                        level: "ВО",
                        qualification: "Бакалавр агрономии",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "35.001 «Выращивание сельскохозяйственных культур»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1801/",
                        positions: ["Ведущий агроном", "Научный сотрудник", "Консультант по агрохимии"]
                    }
                ]
            },
            {
                name: "Животноводство",
                programs: [
                    {
                        code: "35.02.06",
                        name: "Садоводство, цветоводство и защита растений",
                        level: "СПО",
                        qualification: "Техник-агроном",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "35.002 «Содержание и разведение сельскохозяйственных животных»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1802/",
                        positions: ["Зоотехник", "Фермер", "Специалист по кормлению"]
                    },
                    {
                        code: "36.03.02",
                        name: "Зоотехния",
                        level: "ВО",
                        qualification: "Бакалавр зоотехнии",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "36.001 «Содержание и разведение сельскохозяйственных животных»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1803/",
                        positions: ["Зоотехник", "Ветеринарный врач", "Специалист по селекции"]
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Экономика и управление",
        description: "Программы подготовки экономистов и управленцев",
        subcategories: [
            {
                name: "Финансы и кредит",
                programs: [
                    {
                        code: "38.02.01",
                        name: "Экономика и бухгалтерский учет",
                        level: "СПО",
                        qualification: "Бухгалтер, экономист",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "38.001 «Ведение бухгалтерского и налогового учета»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1804/",
                        positions: ["Бухгалтер", "Экономист", "Финансовый аналитик"]
                    },
                    {
                        code: "38.03.01",
                        name: "Экономика",
                        level: "ВО",
                        qualification: "Бакалавр экономики",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "38.002 «Анализ экономической деятельности»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1805/",
                        positions: ["Экономист", "Финансовый аналитик", "Инвестиционный консультант"]
                    }
                ]
            },
            {
                name: "Менеджмент",
                programs: [
                    {
                        code: "38.02.05",
                        name: "Товароведение",
                        level: "СПО",
                        qualification: "Товаровед",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "38.003 «Управление закупками и продажами»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1806/",
                        positions: ["Менеджер", "Товаровед", "Маркетолог"]
                    },
                    {
                        code: "38.03.02",
                        name: "Менеджмент",
                        level: "ВО",
                        qualification: "Бакалавр менеджмента",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "38.004 «Управление организацией»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1807/",
                        positions: ["Менеджер", "Руководитель подразделения", "HR-менеджер"]
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Право и юриспруденция",
        description: "Программы подготовки юридических специалистов",
        subcategories: [
            {
                name: "Право",
                programs: [
                    {
                        code: "40.02.02",
                        name: "Правоохранительная деятельность",
                        level: "СПО",
                        qualification: "Правовед",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "40.001 «Правовое обслуживание организаций»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1808/",
                        positions: ["Юрист", "Специалист по кадрам", "Консультант по правовым вопросам"]
                    },
                    {
                        code: "40.03.01",
                        name: "Юриспруденция",
                        level: "ВО",
                        qualification: "Бакалавр юриспруденции",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "40.002 «Правовое обеспечение деятельности организаций»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1809/",
                        positions: ["Юрист", "Адвокат", "Следователь"]
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Образование и педагогика",
        description: "Программы подготовки педагогов и образовательных специалистов",
        subcategories: [
            {
                name: "Дошкольное образование",
                programs: [
                    {
                        code: "44.02.02",
                        name: "Дошкольное образование",
                        level: "СПО",
                        qualification: "Воспитатель",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "44.001 «Организация образовательной деятельности в дошкольных учреждениях»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1810/",
                        positions: ["Воспитатель детского сада", "Педагог дополнительного образования", "Музыкальный руководитель"]
                    },
                    {
                        code: "44.03.02",
                        name: "Педагогическое образование (дошкольное образование)",
                        level: "ВО",
                        qualification: "Бакалавр дошкольного образования",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "44.001 «Организация образовательной деятельности в дошкольных учреждениях»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1810/",
                        positions: ["Воспитатель", "Руководитель образовательной программы", "Методист"]
                    }
                ]
            },
            {
                name: "Школьное образование",
                programs: [
                    {
                        code: "44.02.01",
                        name: "Дошкольное образование",
                        level: "СПО",
                        qualification: "Воспитатель детей дошкольного возраста",
                        duration9: "3 года 10 месяцев",
                        duration11: "2 года 10 месяцев",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "44.002 «Организация образовательной деятельности в общеобразовательных учреждениях»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1811/",
                        positions: ["Учитель начальных классов", "Педагог", "Воспитатель"]
                    },
                    {
                        code: "44.03.05",
                        name: "Педагогическое образование",
                        level: "ВО",
                        qualification: "Бакалавр педагогического образования",
                        duration9: "5 лет",
                        duration11: "4 года",
                        form: "очная, заочная",
                        regions: ["Москва", "Санкт-Петербург", "Регионы"],
                        standard: "44.002 «Организация образовательной деятельности в общеобразовательных учреждениях»",
                        standardLink: "https://profstandart.rosmintrud.ru/obshie-svedeniya/o-classifikatsii-professionalnykh-standartov/1811/",
                        positions: ["Учитель", "Методист", "Руководитель образовательного учреждения"]
                    }
                ]
            }
        ]
    }
];

// Функция для отображения каталога
function renderCatalog() {
    const accordion = document.getElementById('catalog-accordion');
    accordion.innerHTML = '';

    catalogData.forEach(category => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        
        const accordionHeader = document.createElement('div');
        accordionHeader.className = 'accordion-header';
        accordionHeader.innerHTML = `
            <span>${category.name}</span>
            <span class="description">${category.description}</span>
        `;
        
        const accordionContent = document.createElement('div');
        accordionContent.className = 'accordion-content';
        
        let subcategoriesHTML = '<div class="subcategories">';
        category.subcategories.forEach(subcategory => {
            subcategoriesHTML += `
                <div class="subcategory">
                    <h4>${subcategory.name}</h4>
                    <div class="programs-list">
            `;
            
            subcategory.programs.forEach(program => {
                subcategoriesHTML += `
                    <div class="program-card" data-level="${program.level}" data-form="${program.form}" data-regions="${program.regions.join(',')}">
                        <div class="program-code">${program.code} ${program.name}</div>
                        <div class="program-details">
                            <strong>Уровень:</strong> ${program.level} |
                            <strong>Квалификация:</strong> ${program.qualification} |
                            <strong>Срок обучения (9 кл.):</strong> ${program.duration9} |
                            <strong>Срок обучения (11 кл.):</strong> ${program.duration11}
                        </div>
                        <div class="program-positions">
                            <strong>Возможные должности:</strong> ${program.positions.join(', ')}
                        </div>
                        <div class="program-standards">
                            <a href="${program.standardLink}" target="_blank">${program.standard}</a>
                        </div>
                    </div>
                `;
            });
            
            subcategoriesHTML += `
                    </div>
                </div>
            `;
        });
        
        subcategoriesHTML += '</div>';
        accordionContent.innerHTML = subcategoriesHTML;
        
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);
        accordion.appendChild(accordionItem);
        
        // Добавляем обработчик события для аккордеона
        accordionHeader.addEventListener('click', () => {
            accordionHeader.classList.toggle('active');
            accordionContent.classList.toggle('active');
        });
    });
}

// Функция для работы с аккордеоном нормативной базы
function setupLegalAccordion() {
    const legalItems = document.querySelectorAll('.legal-item h3');
    legalItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            item.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
}

// Функция для поиска по каталогу
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Функция для фильтрации
function setupFilters() {
    const educationLevel = document.getElementById('education-level');
    const educationType = document.getElementById('education-type');
    const formType = document.getElementById('form-type');
    const region = document.getElementById('region');
    
    // Добавляем обработчики для всех фильтров
    [educationLevel, educationType, formType, region].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
}

function applyFilters() {
    const educationLevel = document.getElementById('education-level').value;
    const educationType = document.getElementById('education-type').value;
    const formType = document.getElementById('form-type').value;
    const region = document.getElementById('region').value;
    
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        // Получаем информацию о программе из атрибутов карточки
        const cardLevel = card.getAttribute('data-level');
        const cardForm = card.getAttribute('data-form');
        const cardRegions = card.getAttribute('data-regions');
        
        // Проверяем соответствие фильтрам
        let showCard = true;
        
        // Фильтр по уровню исходного образования
        if (educationLevel !== 'all') {
            if (educationLevel === '9' && !card.innerHTML.includes('9 кл.')) {
                showCard = false;
            } else if (educationLevel === '11' && !card.innerHTML.includes('11 кл.')) {
                showCard = false;
            }
        }
        
        // Фильтр по типу образования (СПО/ВО)
        if (educationType !== 'all' && showCard) {
            if (educationType !== cardLevel) {
                showCard = false;
            }
        }
        
        // Фильтр по форме обучения
        if (formType !== 'all' && showCard) {
            if (formType === 'fulltime' && !cardForm.includes('очная')) {
                showCard = false;
            } else if (formType === 'parttime' && !cardForm.includes('заочная')) {
                showCard = false;
            }
        }
        
        // Фильтр по региону
        if (region !== 'all' && showCard) {
            if (region === 'moscow' && !cardRegions.includes('Москва')) {
                showCard = false;
            } else if (region === 'spb' && !cardRegions.includes('Санкт-Петербург')) {
                showCard = false;
            } else if (region === 'region' && !cardRegions.includes('Регионы')) {
                showCard = false;
            }
        }
        
        // Применяем фильтр
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    setupLegalAccordion();
    setupSearch();
    setupFilters();
});

// Добавляем плавную прокрутку к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});