const itemPointers = document.querySelectorAll('.services-item-pointers__pointer');
const itemElements = document.querySelectorAll('.services-item')

const DarkPointColor = 'rgba(255, 255, 255, 0.586)';
const BrightPointColor = 'rgb(255, 255, 255)';

/** Статус показываемых элементов раздела services */
let IsAnyHidden = false;
/** Индекс окна, которое нужно показать */
let DisplayedWindowIndex;

itemPointers[0].style.background = BrightPointColor;



/** функция рендеринга кружочков, отмечающий порядковый номер окна */
function renderItemPointers() {
    itemPointers.forEach(itemPointer => {
        itemPointer.style.background = DarkPointColor;
    });
};

/** функция рендеринга окон в services */
function renderItemElements() {
    itemElements.forEach(itemElement => {
        itemElement.style.display = 'none';
    });
};

/** обработчик событий нажатия кнопки в разделе services */
itemPointers.forEach((itemPointer, index) => {
    itemPointer.addEventListener('click', (event) => {
        renderItemElements();
        renderItemPointers();
        itemElements[index].style.display = 'block';
        event.target.style.background = BrightPointColor;
        IsAnyHidden = true;
        DisplayedWindowIndex = index;
    });
});

/** обработчик события смены размера окна */
window.addEventListener('resize', () => {
    if (document.body.clientWidth >= 767 && IsAnyHidden == true) {
        itemElements.forEach(itemElement => {
            itemElement.style.display = 'block';
        });
    } else if (document.body.clientWidth < 767 && DisplayedWindowIndex) {
        itemElements.forEach((itemElement, index) => {
            itemElement.style.display = (index == DisplayedWindowIndex) ? 'block' : 'none';
        });
    }
});