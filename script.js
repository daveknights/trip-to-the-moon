let choreographer = new Choreographer({
  animations: [
    {
        range: [-1, 1500],
        selector: '#moon',
        type: 'change',
        style: 'opacity',
        from: 0,
        to: 1,
    },
    {
      range: [-1, 1500],
      selector: '#moon',
      type: 'scale',
      style: 'transform:scale',
      from: 0,
      to: 1
    },
    {
      range: [-1, 1500],
      selector: '#bullet',
      type: 'scale',
      style: 'left',
      from: 0,
      to: 61,
      unit: '%'
    },
    {
      range: [-1, 1500],
      selector: '#bullet',
      type: 'scale',
      style: 'top',
      from: 0,
      to: 430,
      unit: 'px'
    },
    {
      range: [1501, 2500],
      selector: '#bullet',
      type: 'change',
      style: 'opacity',
      from: 1,
      to: 0
    },
    {
      range: [1501, 2500],
      selector: '#bullet-moon',
      type: 'change',
      style: 'opacity',
      from: 0,
      to: 1
    }
  ]
});

window.addEventListener('scroll', () => {
  choreographer.runAnimationsAt(window.pageYOffset)
});
