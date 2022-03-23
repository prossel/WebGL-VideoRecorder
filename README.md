# WEBGL Record Video

This repository hosts a JavaScript class that allows easy video recording of a p5.js canvas using WEBGL.

Note: The canvas must be created with the WEBGL parameter as in the exammple below: `createCanvas(400, 400, WEBGL);`

## Live demo

See the live [demo](demo) page to test it.

## Getting started

1. Create a new sketch on https://editor.p5js.org/
1. Replace the content of sketch.js with this code

    ```js
    function setup() {
        createCanvas(400, 400, WEBGL);
    }

    function draw() {
        background(220);
        rotate(-frameCount * 0.01, createVector(1, 1, 0));
        box(200);
    }
    ````

1. Note that the createCanvas function is using the WEBGL parameter. 

1. Click the play button to see the cube rotate
1. Now we will add the video record feature
1. Click the > arrow to see all files of the sketch
1. Select index.html and add `VideoRecorder` line in the `<head>` section, after the p5.js scripts.

    ```html
    <head>
        <script src="... /p5.js/ ... "></script>
        <script src="... /p5.js/ ... "></script>

        <script src="https://prossel.github.io/WEBGL_record_video/VideoRecorder.js"></script>
    </head>
    ```

1. Select sketch.ch and add `VideoRecorder.addButton();` in setup:

    ```js
    function setup() {
        createCanvas(400, 400, WEBGL);
        VideoRecorder.addButton();
    }
    ```

1. Click the play button. See the `Record video` button ?
1. Click it, wait a few seconds and click again to stop. 
1. The recorded video is added at the bottom of the page with a download link.

## Basic use

* Add the library in index.html (see Getting started section)
* Add a call to `VideoRecorder.addButton();` in your `setup()` function.

## Advanced use

### Control the timing

You can also start / stop the recording from the code. You only need to call `VideoRecorder.record();`  and `VideoRecorder.stop();` when appropriate.

For example to record the first 60 frames of an animation:

```js
    function setup() {
        // ...

        VideoRecorder.addButton();
        VideoRecorder.record();
    }

    function draw() {

        // ...

        if (frameCount == 60) {
            VideoRecorder.stop();
        }
    }
```

### High resolution video

The video has the size of the canvas or the double if using a high resolution screen, such as Retina display.

If you want a specific size, use is to create the canvas. If the canvas is then too big to fit in the window, you  may want to scale it with this code:

```js
function setup() { 

  createCanvas(1920, 1080, WEBGL);

  // Reduce size of preview
  let scalePreview = 0.25;
  let cnv = document.getElementById('defaultCanvas0');
  cnv.style.width = round(width * scalePreview) + "px";
  cnv.style.height = round(height * scalePreview) + "px";

  VideoRecorder.addButton();
}

```
