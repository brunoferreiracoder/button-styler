function stylizeButton() {
  const STYLE = {
    'btn': {
      'font-family': 'Arial',
      'margin': '0',
      'padding': '0',
      'outline': 'none',
      'border': 'none',
      'width': '120px',
      'height': '42px',
      'border-radius': '3px',
      'cursor': 'pointer',
      'font-size': '0.92em',
      'text-transform': 'uppercase',
      'color': 'white',
      'transition': 'all 0.1s cubic-bezier(0.4, 0, 1, 1)',
      'transition': 'box-shadow 0.07s cubic-bezier(0.4, 0, 1, 1)',
      'position': 'relative',
      'box-shadow': '0 6px 10px rgba(0, 0, 0, 0.3)'
    },
    'btn-green': {
      'background-color': '#05C793',
    },
    'btn-red': {
      'background-color': '#EF476F'
    },
    'btn-orange': {
      'background-color': '#fa8231'
    },
    'btn-blue': {
      'background-color': '#139FCD'
    },
    'btn-border-green': {
      'border': '2px solid #05C793'
    },
    'btn-border-red': {
      'border': '2px solid #EF476F'
    },
    'btn-border-orange': {
      'border': '2px solid #fa8231'
    },
    'btn-border-blue': {
      'border': '2px solid #139FCD'
    },
    'btn-border-simple-green': {
      'border': '2px solid #05C793'
    },
    'btn-border-simple-red': {
      'border': '2px solid #EF476F'
    },
    'btn-border-simple-orange': {
      'border': '2px solid #fa8231'
    },
    'btn-border-simple-blue': {
      'border': '2px solid #139FCD'
    },
    'btn-rounded': {
      'border-radius': '110px 110px'
    },
    'btn-no-bg': {
      'background-color': 'transparent',
      'color': '#052B38'
    },
    'btn-small': {
      'width': '100px',
      'height': '35px'
    }
  };

  document.querySelectorAll('.btn').forEach((btn) => {
    let btnClassList = btn.classList['value'].split(' ');

    function has(classList, search) {
      doesIt = false;

      classList.forEach((className) => {
        if (className.indexOf(search) >= 0) {
          doesIt = true;
        }
      });

      return doesIt;
    }

    btnClassList.forEach((className) => {
      if (className in STYLE) {
        Object.keys(STYLE[className]).forEach((classProperty) => {

          let classPropertyValue = STYLE[className][classProperty];
          btn.style.setProperty(classProperty, classPropertyValue);

        });

        if (className.indexOf('btn-border-') >= 0) {
          Object.keys(STYLE['btn-no-bg']).forEach((classProperty) => {
            let classPropertyValue = STYLE['btn-no-bg'][classProperty]
            btn.style.setProperty(classProperty, classPropertyValue);
          });
        }
      }
    });

    if (has(btnClassList, 'btn-border') && !has(btnClassList, 'btn-border-simple')) {
      btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = btn.style.borderColor
        btn.style.border = 'none';
        btn.style.color = 'white'
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.border = '2px solid ' + btn.style.backgroundColor;
        btn.style.backgroundColor = 'transparent';
        btn.style.color = '#052B38';
      });

    }

    if (has(btnClassList, 'btn-border-')) {
      btn.addEventListener('mouseover', () => {
        btn.style.filter = 'contrast(120%)';

      });

      btn.addEventListener('mouseleave', () => {
        btn.style.filter = 'contrast(100%)';

      });
    }

    btn.addEventListener('mousedown', () => {
      btn.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.3)';
    });

    btn.addEventListener('mouseup', () => {
      btn.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';
    });
  });
}

stylizeButton()
