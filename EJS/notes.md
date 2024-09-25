# EJS (Embedded Javascript Templating)


### Instalation
```
npm i ejs
```


### Configuration

```
//This will be used to se the path for views
const path = require('path');

app.set('view engine',  'ejs')
app.set('views', path.join(__dirname, '/views'))

```

You will need a "Views" file to store ejs files to render them.

### Rendering ejs 

```
app.get('/', (req, res) => {
    // this will be the name of the ejs file. res.render displays a view. So 'home' is actually the home.ejs file in your views folder
    res.render('home')
})
```


## EJS Syntax


### Tags
```

    <% 'Scriptlet' tag, for control-flow, no output
    <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
    <%= Outputs the value into the template (HTML escaped)
    <%- Outputs the unescaped value into the template
    <%# Comment tag, no execution, no output
    <%% Outputs a literal '<%'
    %> Plain ending tag
    -%> Trim-mode ('newline slurp') tag, trims following newline
    _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it


```


