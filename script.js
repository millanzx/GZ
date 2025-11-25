// Данные об образовательных программах РГСУ
const educationalPrograms = [
    {
        id: 1,
        name: "Психология",
        faculty: "психологии",
        level: "бакалавриат",
        description: "Программа направлена на подготовку специалистов в области психологии с фокусом на прикладные аспекты и практику.",
        duration: "4 года",
        form: "очная",
        color: "#FF6B6B"
    },
    {
        id: 2,
        name: "Социология",
        faculty: "социальных наук",
        level: "бакалавриат",
        description: "Подготовка специалистов в области социологических исследований, анализа социальных процессов и явлений.",
        duration: "4 года",
        form: "очная",
        color: "#4ECDC4"
    },
    {
        id: 3,
        name: "Юриспруденция",
        faculty: "юриспруденции",
        level: "бакалавриат",
        description: "Обучение теоретическим и практическим аспектам правовой деятельности в различных сферах права.",
        duration: "5 лет",
        form: "очная",
        color: "#45B7D1"
    },
    {
        id: 4,
        name: "Журналистика",
        faculty: "журналистики",
        level: "бакалавриат",
        description: "Подготовка специалистов в области медиаиндустрии, редактирования, новостного производства.",
        duration: "4 года",
        form: "очная",
        color: "#96CEB4"
    },
    {
        id: 5,
        name: "Управление персоналом",
        faculty: "управления",
        level: "бакалавриат",
        description: "Программа подготовки специалистов по управлению человеческими ресурсами в организациях.",
        duration: "4 года",
        form: "очная",
        color: "#FFEAA7"
    },
    {
        id: 6,
        name: "Экономика",
        faculty: "экономики",
        level: "бакалавриат",
        description: "Подготовка специалистов в области экономического анализа, планирования и управления.",
        duration: "4 года",
        form: "очная",
        color: "#DDA0DD"
    },
    {
        id: 7,
        name: "История",
        faculty: "гуманитарный",
        level: "бакалавриат",
        description: "Изучение исторических процессов, развитие навыков исторического анализа и исследования.",
        duration: "4 года",
        form: "очная",
        color: "#FF8C42"
    },
    {
        id: 8,
        name: "Психология (магистратура)",
        faculty: "психологии",
        level: "магистратура",
        description: "Продолжение подготовки специалистов в области психологии с углубленным изучением специализированных направлений.",
        duration: "2 года",
        form: "очная",
        color: "#FF6B6B"
    },
    {
        id: 9,
        name: "Социальная работа",
        faculty: "социальных наук",
        level: "бакалавриат",
        description: "Подготовка специалистов по оказанию социальной помощи различным категориям населения.",
        duration: "4 года",
        form: "очная",
        color: "#4ECDC4"
    },
    {
        id: 10,
        name: "Международные отношения",
        faculty: "гуманитарный",
        level: "бакалавриат",
        description: "Изучение международных процессов, дипломатии, внешнеэкономических отношений.",
        duration: "4 года",
        form: "очная",
        color: "#FF8C42"
    },
    {
        id: 11,
        name: "Педагогика",
        faculty: "гуманитарный",
        level: "бакалавриат",
        description: "Подготовка специалистов в области теории и практики воспитания и обучения.",
        duration: "4 года",
        form: "очная",
        color: "#FF8C42"
    },
    {
        id: 12,
        name: "Менеджмент",
        faculty: "управления",
        level: "бакалавриат",
        description: "Обучение современным методам управления организациями и проектами.",
        duration: "4 года",
        form: "очная",
        color: "#FFEAA7"
    }
];

// Глобальные переменные для D3
let svg, simulation, nodes, links, nodeElements, linkElements;
let activeTooltip = null;

// Инициализация визуализации
function initVisualization() {
    // Очистка предыдущей визуализации
    d3.select("#program-graph").selectAll("*").remove();
    
    // Создание SVG элемента
    svg = d3.select("#program-graph")
        .attr("viewBox", [0, 0, +d3.select("#program-graph").attr("width"), +d3.select("#program-graph").attr("height")])
        .attr("width", "100%")
        .attr("height", "100%");
    
    // Создание силовой симуляции
    simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(svg.attr("width") / 2, svg.attr("height") / 2))
        .force("collision", d3.forceCollide().radius(40));
    
    updateVisualization(educationalPrograms);
}

// Обновление визуализации на основе фильтров
function updateVisualization(data) {
    // Очистка текущих элементов
    svg.selectAll(".node").remove();
    svg.selectAll(".link").remove();
    
    // Создание узлов и связей
    nodes = data.map(program => ({ ...program }));
    
    // Создание связей между программами одного факультета
    links = [];
    const facultyGroups = {};
    
    data.forEach(program => {
        if (!facultyGroups[program.faculty]) {
            facultyGroups[program.faculty] = [];
        }
        facultyGroups[program.faculty].push(program.id);
    });
    
    // Добавление связей внутри факультетов
    Object.values(facultyGroups).forEach(group => {
        for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
                links.push({ source: group[i], target: group[j] });
            }
        }
    });
    
    // Создание линий связей
    linkElements = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 1);
    
    // Создание узлов
    nodeElements = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node-group");
    
    // Добавление кружков для узлов
    nodeElements.append("circle")
        .attr("class", "node")
        .attr("r", d => d.level === "магистратура" ? 25 : 20)
        .attr("fill", d => d.color)
        .call(drag(simulation))
        .on("click", (event, d) => showProgramDetails(d));
    
    // Добавление текста для узлов
    nodeElements.append("text")
        .attr("class", "node-label")
        .attr("text-anchor", "middle")
        .attr("dy", 5)
        .attr("font-size", "10px")
        .attr("fill", "white")
        .attr("pointer-events", "none")
        .text(d => d.name.split(' ')[0]) // Показываем только первое слово названия
        .on("click", (event, d) => showProgramDetails(d));
    
    // Обновление симуляции
    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.on("tick", ticked);
    
    // Функция для обновления позиций узлов и связей
    function ticked() {
        linkElements
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        
        nodeElements
            .attr("transform", d => `translate(${d.x},${d.y})`);
    }
    
    // Перезапуск симуляции
    simulation.alpha(0.3).restart();
}

// Функция отображения деталей программы
function showProgramDetails(program) {
    // Добавляем анимацию при смене деталей
    const programInfo = document.getElementById('program-info');
    programInfo.style.opacity = '0';
    
    setTimeout(() => {
        programInfo.innerHTML = `
            <h4>${program.name}</h4>
            <p><strong>Факультет:</strong> ${capitalizeFirstLetter(program.faculty)}</p>
            <p><strong>Уровень:</strong> ${capitalizeFirstLetter(program.level)}</p>
            <p><strong>Продолжительность:</strong> ${program.duration}</p>
            <p><strong>Форма обучения:</strong> ${program.form}</p>
            <p><strong>Описание:</strong> ${program.description}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${program.level === 'магистратура' ? '30%' : '100%'}"></div>
            </div>
            <p><strong>Прогресс подготовки:</strong> ${program.level === 'магистратура' ? 'Продвинутый уровень' : 'Базовый уровень'}</p>
        `;
        programInfo.style.opacity = '1';
    }, 300);
    
    // Показываем карточку программы
    document.querySelector('.program-details').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Функция для капитализации первой буквы
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Функция для создания перетаскивания
function drag(simulation) {
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

// Функция фильтрации программ
function filterPrograms() {
    const facultyFilter = document.getElementById('faculty-filter').value;
    const levelFilter = document.getElementById('level-filter').value;
    
    let filtered = educationalPrograms;
    
    if (facultyFilter) {
        filtered = filtered.filter(program => program.faculty.includes(facultyFilter));
    }
    
    if (levelFilter) {
        filtered = filtered.filter(program => program.level === levelFilter);
    }
    
// Обработчики событий для фильтров
document.getElementById('faculty-filter').addEventListener('change', filterPrograms);
document.getElementById('level-filter').addEventListener('change', filterPrograms);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initVisualization();
    
    // Показываем начальную статистику
    showStats(educationalPrograms);
    
    // Добавляем обработчик для изменения размера окна
    window.addEventListener('resize', function() {
        initVisualization();
    });
    
    // Добавляем обработчик для навигации по якорям
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Добавляем обработчик для кнопки "Наверх"
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            if (!document.querySelector('.scroll-to-top')) {
                const scrollTopBtn = document.createElement('button');
                scrollTopBtn.className = 'scroll-to-top btn';
                scrollTopBtn.innerHTML = '↑ Наверх';
                scrollTopBtn.style.position = 'fixed';
                scrollTopBtn.style.bottom = '30px';
                scrollTopBtn.style.right = '30px';
                scrollTopBtn.style.zIndex = '1000';
                scrollTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                document.body.appendChild(scrollTopBtn);
            }
        } else {
            const existingBtn = document.querySelector('.scroll-to-top');
            if (existingBtn) {
                existingBtn.remove();
            }
        }
    });
});

// Добавляем возможность поиска по программам
function addSearchFunctionality() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
        padding: 0 1rem;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Поиск программ...';
    searchInput.style.cssText = `
        padding: 0.9rem 1.2rem;
        border: 2px solid #e1e8f0;
        border-radius: 8px;
        width: 100%;
        max-width: 400px;
        font-size: 1rem;
        color: #333;
        transition: all 0.3s ease;
    `;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        if (searchTerm.length > 0) {
            const filtered = educationalPrograms.filter(program => 
                program.name.toLowerCase().includes(searchTerm) || 
                program.faculty.toLowerCase().includes(searchTerm) ||
                program.level.toLowerCase().includes(searchTerm)
            );
            updateVisualization(filtered);
        } else {
            updateVisualization(educationalPrograms);
        }
    });
    
    searchContainer.appendChild(searchInput);
    
    // Добавляем поле поиска перед фильтрами
    const filtersContainer = document.querySelector('.filters');
    if (filtersContainer) {
        filtersContainer.parentNode.insertBefore(searchContainer, filtersContainer);
    }
}

// Инициализируем функциональность поиска
document.addEventListener('DOMContentLoaded', function() {
    addSearchFunctionality();
});
