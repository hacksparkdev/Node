# EJS (Embedded Javascript Templating)


### Instalation
```
npm i ejs
```


## Configuration

```
//This will be used to se the path for views
const path = require('path');

app.set('view engine',  'ejs')
app.set('views', path.join(__dirname, '/views'))

```

You will need a "Views" file to store ejs files to render them.

## Rendering ejs 

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


### Passing through variables

```
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render('random', {rand: num})
})
```

## Conditionals


### IF Statements
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Your Random Number is: <%= rand %></h1>
    
    <% if(rand % 2 == 0) { %>
        <h2>This is an even number!!</h2>
        <%}%>

</html>

```

### Looping
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>All the cats</h1>
    <% for(let cat of cats) { %>
        <li><%= cat %></li>
        <%}%>
</body>
</html>

```

### Route for loop 
```
app.get('/cats', (req, resp) => {
const cats = ['fat whore', 'Simmon', "Dean", 'Sam']
res.render('cats', {cats})
})
```












