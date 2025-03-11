// Component, its building blocks
// react functional components are functions that return jsx

export function hello(name) {
    return "Hello World" + name
}


export function add() {
    let addition = 2 + 2
    console.log(addition)
}

export function callHello() {
    hello("john")
}

export default function Hello({name, age}) {
    return (
        <div>
            <h1> {name} </h1>
        </div>
    )
}
export function Component2(prop) {
    return (
        <div>
            <h1> {prop}  +2 </h1>
        </div>
    )
}



// _______________________________________
// import Hello from './Hello.jsx'
// import { callHelo, add, hello, Component2 } from './Hello.jsx'

// callHello()
// add()
// hello()

{/* <Hello />
<Component2/> */}


