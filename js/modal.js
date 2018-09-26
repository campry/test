let modalIndex = 0;

const modalHeight = 300;
const modalWidth = 300;
const body = document.getElementsByTagName('body')[0];

function openModal() {
    modalIndex++;
    const modalPosition = getRandomPosition();
    const modal = document.createElement('div');

    modal.classList.add('modal');
    modal.id = 'modal_' + modalIndex;
    modal.innerHTML = `<span>Modal ${modalIndex}</span><button data-id="${modalIndex}" class="modal__close" onclick="closeModal(this.attributes['data-id'].value)">Close</button>`;
    modal.style.top = modalPosition.y + 'px';
    modal.style.left = modalPosition.x + 'px';
    modal.style.zIndex = modalIndex;
    body.appendChild(modal);
}

function closeModal(id) {
    console.dir(document.forms['form_1'].elements)
    let modal = document.getElementById('modal_' + id);
    modal.classList.add('closing');
    setTimeout(() => {
        body.removeChild(modal);
    }, 750)
}

function getRandomPosition() {
    return {
        x: Math.floor(Math.random() * Math.floor(window.innerWidth - modalWidth)),
        y: Math.floor(Math.random() * Math.floor(window.innerHeight - modalHeight))
    }
}
