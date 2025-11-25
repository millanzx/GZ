// JavaScript для каталога образовательных программ для участников СВО

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики для фильтров
    initializeFilters();
    
    // Добавляем обработчики для аккордеонов
    initializeAccordions();
    
    // Добавляем обработчики для юридической базы
    initializeLegalBase();
    
    // Добавляем функциональность поиска
    initializeSearch();
});

// Инициализация фильтров
function initializeFilters() {
    const filterForm = document.getElementById('program-filters');
    if (filterForm) {
        filterForm.addEventListener('change', applyFilters);
    }
}

// Применение фильтров
function applyFilters() {
    const educationLevel = document.getElementById('education-level').value;
    const trainingLevel = document.getElementById('training-level').value;
    const formOfStudy = document.getElementById('form-of-study').value;
    const region = document.getElementById('region').value;
    
    // Получаем все строки таблиц с образовательными программами
    const programRows = document.querySelectorAll('#professions-accordion tbody tr');
    
    programRows.forEach(row => {
        const showRow = true; // Пока что показываем все строки, в реальном приложении логика будет сложнее
        
        // Простая демонстрация логики фильтрации
        if (educationLevel && !row.textContent.includes(educationLevel)) {
            // В реальном приложении здесь будет логика фильтрации по уровню образования
        }
        
        if (trainingLevel) {
            const isSPO = row.textContent.toLowerCase().includes('спо');
            const isVO = row.textContent.toLowerCase().includes('во') || row.textContent.toLowerCase().includes('высшее');
            
            if (trainingLevel === 'spo' && !isSPO) {
                row.style.display = 'none';
            } else if (trainingLevel === 'vo' && !isVO) {
                row.style.display = 'none';
            } else {
                row.style.display = '';
            }
        } else {
            row.style.display = '';
        }
    });
}

// Инициализация аккордеонов
function initializeAccordions() {
    // Добавляем обработчики событий для аккордеонов, если нужно дополнительное поведение
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Можно добавить дополнительную логику при открытии/закрытии аккордеона
            console.log('Аккордеон переключен');
        });
    });
}

// Инициализация юридической базы
function initializeLegalBase() {
    // Добавляем обработчики для аккордеонов юридической базы
    const legalAccordionButtons = document.querySelectorAll('#legal-accordion .accordion-button');
    legalAccordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Можно добавить аналитику или другую логику
        });
    });
}

// Инициализация поиска
function initializeSearch() {
    // Создаем поле поиска и добавляем его в начало страницы
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container mb-4';
    searchContainer.innerHTML = `
        <div class="input-group">
            <input type="text" id="search-input" class="form-control" placeholder="Поиск по профессиям и специальностям...">
            <button class="btn btn-outline-secondary" type="button" id="search-button">Поиск</button>
        </div>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(searchContainer, container.firstChild);
        
        // Добавляем обработчики для поиска
        document.getElementById('search-button').addEventListener('click', performSearch);
        document.getElementById('search-input').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Выполнение поиска
function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const allPrograms = document.querySelectorAll('#professions-accordion tbody tr');
    
    allPrograms.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchTerm)) {
            row.style.display = '';
            // Подсвечиваем найденные элементы
            highlightSearchTerms(row, searchTerm);
        } else {
            row.style.display = 'none';
        }
    });
    
    // Открываем аккордеоны, содержащие совпадения
    if (searchTerm) {
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                const collapseElement = item.querySelector('.accordion-collapse');
                if (collapseElement && !collapseElement.classList.contains('show')) {
                    // Открываем аккордеон
                    const collapseInstance = new bootstrap.Collapse(collapseElement, {
                        toggle: true
                    });
                }
            } else {
                // Скрываем аккордеон, если в нем нет совпадений и идет поиск
                // (в реальном приложении можно реализовать более сложную логику)
            }
        });
    }
}

// Подсветка найденных терминов
function highlightSearchTerms(element, searchTerm) {
    // В текущей реализации просто оставляем как есть, в реальном приложении
    // можно добавить подсветку найденных терминов
}

// Функция для отображения деталей программы (если будет реализовано)
function showProgramDetails(programId) {
    // В реальном приложении здесь будет логика отображения деталей программы
    console.log('Показать детали программы с ID:', programId);
}

// Функция для сохранения предпочтений пользователя (если будет реализовано)
function saveUserPreferences() {
    // В реальном приложении можно сохранять настройки фильтров пользователя
    console.log('Предпочтения пользователя сохранены');
}

// Функция для восстановления предпочтений пользователя (если будет реализовано)
function loadUserPreferences() {
    // В реальном приложении можно загружать сохраненные настройки фильтров
    console.log('Предпочтения пользователя загружены');
}