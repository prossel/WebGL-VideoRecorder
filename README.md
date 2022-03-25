# WEBGL VideoRecorder for p5.js

This repository hosts a JavaScript class to record a video from a [p5.js](https://p5js.org/) sketch / canvas using WEBGL.

Note: The canvas must be created with the WEBGL parameter as in the [Getting Started](#getting-started) section below: `createCanvas(400, 400, WEBGL);`

## Live demo

See the live [demo](https://prossel.github.io/WebGL-VideoRecorder/demo/) page to test it.

Click the button to start, then stop recording and view or download the recorded video.

## WebM video file format

The script will produce a [WebM](https://en.wikipedia.org/wiki/WebM) video file (*.webm).

It can be converted to more popular MP4 file format with some video tools or online services such as <https://cloudconvert.com/webm-to-mp4>

## Basic use

* Add the library in the `<head>` section of index.html

    ```html
    <script src="https://prossel.github.io/WebGL-VideoRecorder/js/VideoRecorder.js"></script>
    ```

* Add a call to `VideoRecorder.addButton();` in your `setup()` function.

 See Getting started section below for more details.

## Getting started

1. Create a new sketch on <https://editor.p5js.org/>
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

        <script src="https://prossel.github.io/WebGL-VideoRecorder/js/VideoRecorder.js"></script>
    </head>
    ```

1. Select sketch.js and add `VideoRecorder.addButton();` in setup:

    ```js
    function setup() {
        createCanvas(400, 400, WEBGL);
        VideoRecorder.addButton();
    }
    ```

1. Click the play button. See the `Record video` button ?
1. Click it, wait a few seconds and click again to stop.
1. The recorded video is added at the bottom of the page with a download link.

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

Test the demo at <https://editor.p5js.org/prossel/sketches/imTyCpxQT>

### Double size video

When using a high resolution display, such as Retina, the video may have more pixels than the canvas size.

When you want the video to have exactly the same size as the canvas, whatever the display resolution, the pixel density may be forced on the canvas using `pixelDensity(1)`. The video will have the same size.

```js
function setup() { 

  createCanvas(1920, 1080, WEBGL);
  pixelDensity(1);

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
