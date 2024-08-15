# Conceptos básicos de React

Usa la extensión JSX, combinación de HTML y JavaScript.
Usar

## Comentarios dentro de etiquetas HTML

```JSX
return <div>
  {/*Comentario*/}
</div>
```

## Elemento Root

```JSX
root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //Espera elementos hijo
)
```

## Componentes

- Reutilizables.
- Parte pequeña de una interfaz más grande.
- Siempre debe tener un elemento que contenga a los demas elementos.
- Una función es una componente que retorna una interfaz.
- Siempre inicia con mayúsculas.

Ejecucion de funciones dentro de contenido HTML
Etiqueta de tipo self closing tags.

```JSX
<div>
  <NombreFuncion/>
  <NombreFuncion/>
</div>
```

## Alternativa a `<div></div>`

Etiqueta Fragment para cumplir con la regla de React.
Es un contenedor vacio.

```JSX
<>
  <NombreFuncion/>
  <NombreFuncion/>
</>
```

## Interpretación de codigo en HTML

Puede interpretar booleanos mediante condicionales, caracteres y numeros.

- Se tiene que convertir en String con JSON.stringfy a objetos completos.
- Convertir un booleano a String con .toString.
- Permite el anidamiento de funciones.

```JSX
function Greeting(){
  const nombreVariable = "Hola Mundo";

  return <div>
    <h1>{nombreVariable}</h1>
  </div>
}

// Uso de operadores ternarios

function NombreFuncion(){
  const nombreVariable = true;

  /*
  if(nombreVariable){
    return <h1>lorem ipsum</h1>
  } else{
    return <h1>lorem</h1>
  }*/

  return <h1>{nombreVariable ? 'lorem ipsum' : 'lorem'}</h1>
}
```

## Exportacion de componentes

### Exportación global

- No se necesita nombrar segun pascal case.
- `import nombre from 'rutaArchivo'`
- Exporta todo el archivo o modulo.

### Exportación individual o nombrado

- Se necesita nombrar segun pascal case.
- `import { NombreFuncion2 } from 'rutaArchivo'`
- Exporta funciones de manera individual.

```JSX

// Exportación global
function NombreFuncion(){
  return <>
    <h1>lorem</h1>
  </>
}

export default NombreFuncion;

// Exportación individual o nombrado

export function NombreFuncion2(){
  return <>
    <h1>lorem ipsum</h1>
  </>
}

```

## Paso de parametros HTML o props

Se coloca parametros en el componente para que sea utilizado. En la funcion de puede nombrar de otra manera o usar el mismo nombre que se pasa como parametro (se identifica).
Envia:

- Numeros
- Texto
- Arreglos
- Objetos
- Funciones

```JSX

// Component
function NombreFuncion(props, a = "User"){
  return <>
    <h1>{props.title} de {a}</h1>
    <h2>{props}</h2>
  </>
}

// Otra forma

function NombreFuncion({title, a}){
  return <>
    <h1>{title} de {a}</h1>
    <h2>{a}</h2>
  </>
}

// Funciones dentro de los componentes

function NombreFuncion({title, a, greet}){
  console.log(title, a, greet)
  return <>
    <h1>{title} de {a}</h1>
    <h2>{a}</h2>
  </>
}

export default NombreFuncion;

// index

root.render(
  <>
    <NombreFuncion title="lorem" a={[1,2]}/>
    <NombreFuncion name= "Joe"/>
    <NombreFuncion a={[1,2]}/>
  </>
)

```

## Instalar paquetes externos

En la documentación de npm

```bash
npm install nombre-paquete
```

## default props y prop-types

- Define que tipo de datos se envia en el componente.
- Ayuda si se usa componentes externos creados por otros usuarios.
- Define si el prop es requerido

```JSX

// Componente
import PropTypes from 'prop-types'

export function NombreFuncion({title = "Some Use", a, greet}){
  console.log(title, a, greet)
  return <>
    <h1>{title} de {a}</h1>
    <h2>{a}</h2>
  </>
}

NombreFuncion.propTypes = {
  title: PropTypes.string.isRequired
}

export function NombreFuncion({title, a, greet}){
  console.log(title, a, greet)
  return <>
    <h1>{title} de {a}</h1>
    <h2>{a}</h2>
  </>
}

NombreFuncion.defaultProps = {
  title: "Some User"
}

// Index

root.render(
  <>
    <NombreFuncion title="lorem" a={[1,2]}/>
    <NombreFuncion name= "Joe"/>
    <NombreFuncion a={[1,2]}/>
  </>
)
```

## Estilos

- Estilos en linea
- Importar archivos CSS

```JSX

// Componente

export function NombreFuncion(){
  return <div style={{background: '#fff', color:'#000', top: '0'}}>
    <h1>lorem ipsum</h1>
  </div>
}

// Index

root.render(
  <>
    <NombreFuncion/>
  </>
)
```

## Manejadores de eventos

Se usa igual que en javascript con HTML.

## React Icons

Se importan los iconos como componentes, también se puede hacer para componentes estilizados por terceros, ya sea botones, inputs, etc.

Enlaces:

- [React Icons](https://react-icons.github.io/react-icons/)
- [Material UI React](https://mui.com/)

```JSX
import { VscBug } from "react-icons/vsc"

...
  <VscBug />
...
```

## Recorrido de Arreglos

Se usa funciones o metodos que ya recorren los arreglos:

- `.map()`: Lee los elementos del arreglo y genera un nuevo arreglo. Te retorna el valor del elemento y su respectivo indice.
- `.filter()`: Quitar elementos de un arreglo, filtra. Genera un nuevo arreglo.
- `.find()`: Buscar un elemento en un arreglo.
- `.sort()`: Ordenar el arreglo.
- `.reduce()`
- `.forEach()`

## React Hooks

[Hooks Reference](https://legacy.reactjs.org/docs/hooks-reference.html#usestate)

### Basic Hooks

#### useState

Permite inicializar y actualizar valores de variables. Retorna un variable y una función para actualizar el valor de la variable. Es un estado.

`const [name, setName] = useState(0)`

#### useEffect

- `useEffect(() => { console.log("render"})`: Se ejecuta cada vez que hay un cambio en un componente que lo contiene.
- `useEffect(() => { console.log("render"}, [ ])`: Se ejecuta una sola vez, es decir, cuando el componente es creado.

**Dependencia del useEffect**
Se ejecuta si el valor o contenido de algo cambia, siguiendo la 2da sintaxis.

- `useEffect(() => { console.log("render"}, [ counter ])`: Se ejecuta cuando el componente es creado y luego, se vuelve a ejecutar cada vez que cambia el valor de la variable (es un useSate).
  | 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffvvvvv
