document.addEventListener('DOMContentLoaded', function () {
    const elquisBox = document.querySelector('.quistion_box');
    const elok = document.querySelector('.btn_ok');
    const elClose = document.querySelector('.btn_close');
    const elbigBox = document.querySelector('.content_box');

    function toggleQuestionBox() {
        elquisBox.classList.toggle('quistion_box_on');
        document.querySelector('.quistions').classList.toggle('quistion_on');
    }

    elok.addEventListener('click', function (event) {
        event.preventDefault();
        createNewElement(); // Вызываем функцию создания нового элемента
        toggleQuestionBox(); // Показываем окно
    });

    elClose.addEventListener('click', function (event) {
        event.preventDefault();
        toggleQuestionBox(); // Закрываем окно
    });

    const createButton = document.querySelector('.create_el');
    createButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleQuestionBox(); // Показываем окно
    });

    // Функция для создания нового элемента и отображения его на странице
    function createNewElement() {
        // Создаем новый элемент
        const elbox = document.createElement('li');
        const elboxLink = document.createElement('a');
        const elsmallbox = document.createElement('div');
        const elboxName = document.createElement('h3');
        const elboxdes = document.createElement('span');
        const elboxImg = document.createElement('img');
        const elboxbut = document.createElement('button');
        const elboxclose = document.createElement('div');

        // Заполняем элемент данными
        const elImg = document.querySelector('.inp_img');
        const ellink = document.querySelector('.inp_link');
        const elname = document.querySelector('.inp_name');
        const eldescript = document.querySelector('.inp_des');

        elbox.classList.add('content');
        elsmallbox.classList.add('small_content');
        elboxName.classList.add('content_text');
        elboxImg.classList.add('content_img');
        elboxdes.classList.add('content_des');
        elboxbut.classList.add('delete_el');
        elboxclose.classList.add('close');

        elboxbut.appendChild(elboxclose);
        elbox.appendChild(elboxbut);
        elboxName.appendChild(elboxLink);
        elsmallbox.appendChild(elboxName);
        elsmallbox.appendChild(elboxImg);
        elbox.appendChild(elsmallbox);
        elbox.appendChild(elboxdes);
        elbigBox.appendChild(elbox);

        elboxLink.setAttribute('target', '_blank');
        elboxImg.src = elImg.value;
        elboxLink.href = ellink.value;
        elboxLink.textContent = elname.value;
        elboxdes.textContent = eldescript.value;

        elboxbut.addEventListener('click', () => {
            elbigBox.removeChild(elbox);
            removeFromLocalStorage(elbox); // Удаляем элемент из локального хранилища
        });

        saveToLocalStorage(elbox); // Сохраняем элемент в локальное хранилище
    }

    // Функция сохранения элемента в локальное хранилище
    function saveToLocalStorage(elbox) {
        let elements = JSON.parse(localStorage.getItem('elements')) || [];
        elements.push({
            imgSrc: elbox.querySelector('img').src,
            linkHref: elbox.querySelector('a').href,
            linkText: elbox.querySelector('a').textContent,
            description: elbox.querySelector('span').textContent
        });
        localStorage.setItem('elements', JSON.stringify(elements));
    }

    // Функция удаления элемента из локального хранилища
    function removeFromLocalStorage(elbox) {
        let elements = JSON.parse(localStorage.getItem('elements')) || [];
        let imgSrc = elbox.querySelector('img').src;
        let linkHref = elbox.querySelector('a').href;
        let linkText = elbox.querySelector('a').textContent;
        let description = elbox.querySelector('span').textContent;
        elements = elements.filter(el => el.imgSrc !== imgSrc || el.linkHref !== linkHref || el.linkText !== linkText || el.description !== description);
        localStorage.setItem('elements', JSON.stringify(elements));
    }

    // Восстанавливаем элементы из локального хранилища при загрузке страницы
    function restoreFromLocalStorage() {
        let elements = JSON.parse(localStorage.getItem('elements')) || [];
        elements.forEach(element => {
            const elbox = document.createElement('li');
            const elboxLink = document.createElement('a');
            const elsmallbox = document.createElement('div');
            const elboxName = document.createElement('h3');
            const elboxdes = document.createElement('span');
            const elboxImg = document.createElement('img');
            const elboxbut = document.createElement('button');
            const elboxclose = document.createElement('div');

            elbox.classList.add('content');
            elsmallbox.classList.add('small_content');
            elboxName.classList.add('content_text');
            elboxImg.classList.add('content_img');
            elboxdes.classList.add('content_des');
            elboxbut.classList.add('delete_el');
            elboxclose.classList.add('close');

            elboxbut.appendChild(elboxclose);
            elbox.appendChild(elboxbut);
            elboxName.appendChild(elboxLink);
            elsmallbox.appendChild(elboxName);
            elsmallbox.appendChild(elboxImg);
            elbox.appendChild(elsmallbox);
            elbox.appendChild(elboxdes);
            elbigBox.appendChild(elbox);

            elboxLink.setAttribute('target', '_blank');
            elboxImg.src = element.imgSrc;
            elboxLink.href = element.linkHref;
            elboxLink.textContent = element.linkText;
            elboxdes.textContent = element.description;

            elboxbut.addEventListener('click', () => {
                elbigBox.removeChild(elbox);
                removeFromLocalStorage(elbox);
            });
        });
    }

    restoreFromLocalStorage(); // Восстанавливаем элементы при загрузке страницы
});
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search_input');
    const contentTexts = document.querySelectorAll('.content_text');
    const contents = document.querySelectorAll('.content');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        contentTexts.forEach(function (contentText, index) {
            const text = contentText.textContent.toLowerCase();
            const content = contents[index];

            if (text.includes(searchTerm)) {
                content.style.display = 'inline-flex';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
