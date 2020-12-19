// .btn .btn-*color .btn-sm .btn-lg .btn-rounded

const STYLE = {
  'btn': {
    'margin': '0',
    'padding': '0',
    'width': '120px',
    'height': '42px',
    'outline': 'none',
    'color': 'white',
    'border': 'none',
    'cursor': 'pointer',
    'font-weight': '600',
    'border-radius': '3px',
    'font-family': 'Raleway',
    'text-transform': 'uppercase',
    'box-shadow': '0 .5rem 1rem rgba(0, 0, 0, 0.25)',
    'transition': 'all 0.1s cubic-bezier(0.4, 0, 1, 1)'
  },
  // Size
  'btn-sm': {
    'width': '100px',
    'height': '30px'
  },
  'btn-lg': {
    'width': '140px',
    'height': '52px'
  },
  'btn-block': {
    'width': '100%'
  },
  'btn-rounded': {
    'border-radius': '30px'
  },
  // Colors
  'btn-green': {
    'background-color': '#05C793'
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
  'btn-link': {
    'background-color': 'transparent',
    'box-shadow': 'none',
    'color': '#0097e6',
  },

  // Colors outline
  'btn-outline-green': {
    'border-color': '#05C793'
  },
  'btn-outline-red': {
    'border-color': '#EF476F'
  },
  'btn-outline-orange': {
    'border-color': '#fa8231'
  },
  'btn-outline-blue': {
    'border-color': '#139FCD'
  },
  'btn-outline-link': {
    'border-color': '#0097e6'
  },

  // Do not use in tags
  'btn-outline': {
    'background-color': 'transparent',
    'color': '#052B38',
    'border-width': '1px',
    'border-style': 'solid'
  }
};

document.querySelectorAll('.btn').forEach((btn) => {
  function hasClass(classList, search) {
    doesIt = false;
    classList.forEach((className) => {
      if (className.indexOf(search) >= 0) {
        doesIt = true;
      }
    });

    return doesIt;
  }

  let classList = btn.classList['value'].split(' ');

  classList.forEach((className) => {
    if (className in STYLE) {
      Object.keys(STYLE[className]).forEach((classProperty) => {
        btn.style.setProperty(classProperty, STYLE[className][classProperty]);
      });
    }
  });

  if (hasClass(classList, 'btn-outline')) {
    btn.style.color = STYLE['btn-outline']['color'];
    btn.style.borderWidth = STYLE['btn-outline']['border-width'];
    btn.style.borderStyle = STYLE['btn-outline']['border-style'];
    btn.style.backgroundColor = STYLE['btn-outline']['background-color'];

    btn.addEventListener('mouseover', () => {
      btn.style.backgroundColor = btn.style.borderColor;
      btn.style.color = '#ecf0f1';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = STYLE['btn-outline']['background-color'];
      btn.style.color = STYLE['btn-outline']['color'];
    });
  }

  if (!hasClass(classList, 'btn-link')) {
    btn.addEventListener('mouseup', () => {
      btn.style.boxShadow = STYLE['btn']['box-shadow'];
    });

    btn.addEventListener('mousedown', () => {
      btn.style.boxShadow = '0 .2rem 1rem rgba(0, 0, 0, 0.15)';
    });
  } else {
    btn.addEventListener('mouseover', () => {
      btn.style.boxShadow = '0 .1rem 0.5rem rgba(0, 0, 0, 0.25)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = 'none';
    });
  }
});
