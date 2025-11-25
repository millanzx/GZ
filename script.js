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
        let showRow = true;
        
        // Фильтрация по уровню исходного образования (9/11 кл.)
        if (educationLevel) {
            const rowText = row.textContent.toLowerCase();
            if (educationLevel === '9' && !rowText.includes('на базе 9')) {
                showRow = false;
            } else if (educationLevel === '11' && !rowText.includes('на базе 11')) {
                showRow = false;
            }
        }
        
        // Фильтрация по желаемому уровню обучения (СПО/ВО)
        if (trainingLevel && showRow) {
            const rowText = row.textContent.toLowerCase();
            const isSPO = rowText.includes('спо');
            const isVO = rowText.includes('во');
            
            if (trainingLevel === 'spo' && !isSPO) {
                showRow = false;
            } else if (trainingLevel === 'vo' && !isVO) {
                showRow = false;
            }
        }
        
        // Фильтрация по форме обучения
        if (formOfStudy && showRow) {
            const formCell = row.cells[5]; // Поле "Форма обучения"
            if (formCell) {
                const formText = formCell.textContent.toLowerCase();
                if (formOfStudy === 'fulltime' && !formText.includes('очная')) {
                    showRow = false;
                } else if (formOfStudy === 'parttime' && !formText.includes('заочная')) {
                    showRow = false;
                }
            }
        }
        
        // Фильтрация по региону (в реальной реализации здесь будет более сложная логика)
        // Пока оставляем как есть, так как в текущих данных нет информации о регионах
        
        // Применяем фильтр
        row.style.display = showRow ? '' : 'none';
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
    
    // Сначала очищаем все подсветки
    clearHighlights();
    
    allPrograms.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (searchTerm === '' || rowText.includes(searchTerm)) {
            row.style.display = '';
            // Подсвечиваем найденные элементы
            if (searchTerm) {
                highlightSearchTerms(row, searchTerm);
            }
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
                
                // Показываем весь аккордеон, если в нем есть совпадения
                item.style.display = '';
            } else {
                // Проверяем, есть ли видимые строки в этом аккордеоне
                const visibleRows = item.querySelectorAll('tbody tr:not([style*="display: none"])');
                const totalRows = item.querySelectorAll('tbody tr');
                
                // Если в аккордеоне есть видимые строки, показываем его
                if (visibleRows.length > 0) {
                    item.style.display = '';
                }
            }
        });
    } else {
        // Если поиск пустой, показываем все аккордеоны
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            item.style.display = '';
        });
    }
}

// Подсветка найденных терминов
function highlightSearchTerms(element, searchTerm) {
    // Сначала удаляем предыдущую подсветку
    const highlighted = element.querySelectorAll('.highlight');
    highlighted.forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });
    
    // Ищем и подсвечиваем новые совпадения
    if (searchTerm) {
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    return node.nodeValue.toLowerCase().includes(searchTerm) ? 
                           NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
            }
        );
        
        const nodes = [];
        let node;
        while (node = walker.nextNode()) {
            nodes.push(node);
        }
        
        nodes.forEach(textNode => {
            const text = textNode.nodeValue;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
            
            if (highlightedText !== text) {
                const span = document.createElement('span');
                span.innerHTML = highlightedText;
                
                // Заменяем текстовый узел на новый с подсвеченными терминами
                textNode.parentNode.replaceChild(span, textNode);
            }
        });
    }
}

// Функция для очистки подсветки
function clearHighlights() {
    const highlighted = document.querySelectorAll('.highlight');
    highlighted.forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });
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