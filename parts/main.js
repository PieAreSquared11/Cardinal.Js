function attr(attr, val) {
    return `${attr}=${val}`;
}

function className(className) {
    return `class=${className}`;
}

function id(id) {
    return `id=${id}`;
}

function Container(children, attrs = null) {
    let returnString = '<section'

    if (attrs) {
        returnString += ` ${attrs.join(' ')}>${children.join('')}</section>`;
    } else {
        returnString += `>${children.join('')}</section>`;
    }

    return returnString;
}

function Heading(text, type = null, attrs = null) {
    let returnString = '';

    if (type) {
        returnString += `<h${type} `;

        if (attrs) {
            returnString += attrs.join(' ');
        }

        returnString += `>${text}</h${type}>`;
    } else {
        returnString += `<h1 `;

        if (attrs) {
            returnString += attrs.join(' ');
        }

        returnString += `>${text}</h1>`;
    }

    return returnString;
}

function Img(src, alt, attrs = null) {
    let returnString = `<img src=${src} alt=${alt}`;

    if (attrs) {
        returnString += attrs.join(' ');
    }

    returnString += '>';

    return returnString;
}

function Link(src, text, attrs = null) {
    let returnString = `<a href=${src} `;

    if (attrs) {
        returnString += `${attrs.join(' ')}>${text}</a>`;
    } else {
        returnString += `>${text}</a>`;
    }

    return returnString;
}

function List(elements, attrs) {
    return Container([
            elements.join('<hr>')
        ],
        [
            className('list') + ' ',
            attrs ? attrs.join(' '): null 
        ]
    );
}

function PText(text, attrs = null) {
    let returnString = '<p ';

    if (attrs) {
        returnString += attrs.join(' ');
    }

    returnString += `>${text}</p>`;

    return returnString;
}

function Video(src, type, width, height, attrs = null) {
    let returnString = '<video ';

    if (attrs) {
        returnString += attrs.join(' ');
    }

    returnString += `width=${width}` + ' ' + `height=${height} controls`;
    returnString += `><source src=${src}` + ' ' + `type=${type}>`;

    returnString += '</video>';

    return returnString;
} 

function XStack(children, attrs = null) {
    let returnString = '<section ';

    returnString += className('xstack');

    if (attrs) {
        returnString += attrs.join(' ');
    }

    returnString += `>${children.join('')}</section>${css({
        '.xstack': {
            display: 'flex'
        },

        '.xstack *:first-child': {
            'margin-right': '20px',
            'margin-left': '0px'
        },

        '.xstack *': {
            margin: '0px 20px 0px 20px'
        },

        '.xstack *:last-child': {
            'margin-right': '0px'
        }
    })}`;

    return returnString;
}

function autoStyles(items = null) {
    let cssEl = '';

    if (items) {
        for (const item of items) {
            if (item == 'list') {
                cssEl += css({
                    '.list *:not(hr)': {
                        'margin-left': '15px'
                    },
                    '.list': {
                        'background-color': '#ededed',
                        'border-radius': '20px',
                        'font-family': 'Arial',
                        'padding': '15px 0px'
                    },
                    'hr': {
                        'width': '99%',
                        'height': '0.5px',
                        'margin': '15px auto',
                        'border-top': '1px solid #060606'
                    }
                });
            } else if (item == 'alltext') {
                cssEl += css({
                    '*': {
                        'font-family': 'Arial'
                    }
                })
            }
        }
    } else {
        cssEl += css({
            '.list *:not(hr)': {
                'margin-left': '15px'
            },
            '.list': {
                'background-color': '#EDEDED',
                'border-radius': '20px',
                'font-family': 'Arial',
                'padding': '15px 0px'
            },
            'hr': {
                'width': '99%',
                'height': '.5px',
                'margin': '15px 0px',
                'background-color': '#EFEFEF'
            }
        });
    }

    return cssEl;
}

function SetBoldText(selector, fontWeight) {
    return css({
        [`${selector}`]: {
            'font-weight': fontWeight
        }
    });
}

function css(def) {
    let returnString = '<style>';

    for (const [selector, details] of Object.entries(def)) {
        returnString += selector + ' {';

        for (let [prop, value] of Object.entries(details)) {
            returnString += `${prop}: ${value};`;
        }
        
        returnString += '}';
    }

    returnString += '</style>';

    return returnString;
}

function SetItalicText(selector) {
    return css({
        [`${selector}`]: {
            'font-style': 'italic'
        }
    });
}

function SetFont(selector, fonts) {
    return css({
        [`${selector}`]: {
            'font-family': fonts
        }
    });
}

function Style(def) {
    let returnString = 'style="';

    for (let [prop, value] of Object.entries(def)) {
        returnString += `${prop}: ${value};`;
    }

    returnString += '"';

    return returnString;
}

function ChangePage(newModel) {
    app.setup.page = new newModel;
}

function Reload() {
    const container = document.querySelector('#app');

    container.innerHTML = app.setup.run().join('');
}


window.addEventListener('load', () => {
    let container = document.getElementById(app.id);

    container.innerHTML += app.setup.main().join('');
});