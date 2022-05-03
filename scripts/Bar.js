class Bar {
  constructor(tag)
  {
    this.tag = tag;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.color = color(0,0,0);
  }
  moveBar(x, y)
  {
    this.x = x;
    this.y = y;
 // height is - because the bar should draw facing upwards
  }

  displayBar()
  {
    fill(this.color);
    rect(this.x, height+this.y, this.width, -this.height);
    fill(color(100));
    text(floor(this.height),this.x, height+ylevel-this.height-10);
  }

  colorBar(color)
  {
    this.color = color;
  }

  createBar(width, height)
  {
    this.width = width;
    this.height = height;
  }
}
