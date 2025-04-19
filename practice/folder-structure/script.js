const FILE_TYPE = 'file';
const FOLDER_TYPE = 'folder';

const FILES_STRUCTURE = Object.freeze({
    name: 'Javascript',
    type: FOLDER_TYPE,
    children: [
        {
            name: 'classes',
            type: FOLDER_TYPE,
            children: [
                {
                    name: 'day-5',
                    type: FOLDER_TYPE,
                    children: [
                        {name:'index.html', type: FILE_TYPE},
                        {name:'index.js', type: FILE_TYPE},
                        {name:'register.css', type: FILE_TYPE},
                    ],
                },
                {
                    name: 'day-6',
                    type: FOLDER_TYPE,
                    children: [
                        {name:'index.js', type: FILE_TYPE},
                    ],
                },
            ],
        },
        {
            name: 'practice',
            type: FOLDER_TYPE,
            children: [
                {
                    name: 'folder-structure',
                    type: FOLDER_TYPE,
                    children: [
                        {name:'index.html', type: FILE_TYPE},
                        {name:'script.js', type: FILE_TYPE},
                        {name:'register.css', type: FILE_TYPE},
                    ],
                },
            ]
        },
        {
            name: 'src',
            type: FOLDER_TYPE,
        },
        {
            name: 'package.json',
            type: FILE_TYPE,
        },
    ]
});

const createFileElement = (file) => {
    const div = document.createElement('div');
    div.style.cursor = 'pointer';
    if (file.type === FOLDER_TYPE) {
        const folderName = document.createElement('div');
        folderName.textContent = '📁' + file.name;
        folderName.addEventListener('click', () => handleFolderClick(div));

        div.appendChild(folderName);
        const folderContent = document.createElement('div');
        folderContent.classList.add('folder-content');
        folderContent.style.display = 'none';

        // if (file.hasOwnProperty('children')) {
        //     file.children.forEach(child => {
        //         const childElement = createFileElement(child);
        //         folderContent.appendChild(childElement);
        //     });
        // }

        file.children?.forEach(child => {
            const childElement = createFileElement(child);
            folderContent.appendChild(childElement);
        });

        div.style.marginLeft = '20px';
        div.appendChild(folderContent);
    } else {
        div.style.marginLeft = '20px';
        div.textContent = '📄' + file.name;
    }
    return div;
}

const handleFolderClick = (parentDiv) => {
    const childFolder = parentDiv.querySelector('.folder-content');
    if (childFolder.style.display === 'block') {
        childFolder.style.display = 'none';
    } else {
        childFolder.style.display = 'block';
    }
}

const renderFileStructure = () => {
    const folderStructure = document.getElementById('folder-structure');
    const rootElement = createFileElement(FILES_STRUCTURE);
    folderStructure.appendChild(rootElement);
};

window.onload = function () {
    renderFileStructure();
}