import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5) => {
    p5.fill(234, 31, 0);
    p5.noStroke();
    p5.rect(50, 50, 350, 250);
    p5.fill(25);
    p5.textStyle(p5.BOLD);
    p5.textSize(150);
    p5.text("Alen", 60, 250);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
