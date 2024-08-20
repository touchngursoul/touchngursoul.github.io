let aTag = document.getElementById('ul-list').getElementsByTagName('a');

const mainFunction = (targetedClass, action) => {
    let alpha = document.querySelectorAll(targetedClass);
    for (i = 0; i < alpha.length; i++) {
        alpha[i].style.display = action;
    }
}

const makeActive = (element) => {
    for (i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove('active');
    }

    aTag[element].classList.add('active');

    if (element === 1) {
        mainFunction('.single-project', 'block');
        mainFunction('.single-project.mern', 'none');
    } else if (element === 2) {
        mainFunction('.single-project', 'block');
        mainFunction('.single-project.front', 'none');
    } else if (element === 0) {
        mainFunction('.single-project', 'block');
    }
};