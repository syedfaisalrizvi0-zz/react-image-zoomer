# react-img-zoomer
## _The Last Markdown Editor, Ever_

react-img-zoomer is a simple and lightwaight component to create a zoom your images, 


- simple
- Lightwaight




> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.



[![Open in Github](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://github.com/syedfaisalrizvi0/react-image-zoomer)]

## Installation

Install the dependencies and devDependencies and start the server.

```jsx
import logo from './foo.jpg';
import './App.css';
import {ImageZoom} from 'react-img-zoomer';

function App() {
  return (
    <ImageZoom src={logo}  className={'img'} /> 
  );
}

export default App;

```
## props
 - `src`
 - `zoomWidth` to control height of the zoom component
 - `zoomHeight` to control the width of the zoom component 
 - `className` pass any class you want 

