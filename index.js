const http = require("http")
const fs = require("fs")

const PORT = 9000

const server = http.createServer((req, res) => {
    let data = `Visited At : [${new Date().toLocaleString()}] & Requested Page : ${req.url}\n`

    if (req.url == '/') {
        res.write("<h1>Welcome to My Home Page!</h1>")
        res.end(`<p style="font-size:18px">This page showcases my journey as a developer.</p>
            <nav style="margin-bottom: 20px;">
                <a href="/about" style="margin-right: 15px;">About</a>
                <a href="/skills" style="margin-right: 15px;">Skills</a>
                <a href="/projects">Projects</a>
            </nav>`)
    } else if (req.url == '/about') {
        res.write("<h1>This is my About Page. </h1>\n\n")
        res.end('<p style="font-size:18px">I am Shreya Anjan, currently pursuing a Full Stack Development course at Red And White Skill Education. I have completed my Bachelor of Engineering in Electronics and Communication Engineering from Sarvajanik College of Engineering and Technology College. With a growing passion for software development, I am focused on building my skills to become a proficient and reliable full-stack developer. I am continuously working on real-world projects, improving my problem-solving abilities, and enhancing my knowledge of modern technologies to shape a successful career in the development field.</p>')
    } else if (req.url == '/skills') {
        res.write("<h1>These are my Skills : </h1>\n\n")
        res.end(`
        <h2>Languages :</h2>
        <ul style="list-style-type: circle;">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
        <h2>Frameworks & Library :</h2>
        <ul style="list-style-type: circle;">
            <li>React-Js</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
        </ul>
        <h2>Core Concepts :</h2>
        <ul style="list-style-type: circle;">
            <li>Data Structure & Algorithm(DSA - Basic)</li>
            <li>C++</li>
        </ul>
    `)
    } else if (req.url == '/projects') {
        res.write("<h1>These are my Projects : </h1>")
        res.end(`
        1) <a href="https://lab-management-react.vercel.app/" target="_blank">
            Lab Management System
        </a><br><br>
        2) <a href="https://trip-management-react.vercel.app/" target="_blank">
            Trip Management System
        </a><br><br>
        3) <a href="https://employee-management-react-jet.vercel.app/" target="_blank">
            Employee Management System
        </a><br><br>
        4) <a href="https://firebase-todo-chi.vercel.app/" target="_blank">
            Todo Application
        </a><br><br>
        5) <a href="https://shreyaanjan.github.io/javascript/pr-3-tic-tac-toe/" target="_blank">
            Tic Tac Toe
        </a><br><br>
    `)
    }
    else {
        res.write("<h1>The End</h1>")
        res.end(`<p style="font-size:18px">Oops! The page you are looking for does not exist.</p>`)
    }

    fs.appendFile("logs.txt", data, (err) => {
        console.log(err)
    })
})

server.listen(PORT, () => {
    console.log(`Server is now Running at PORT : ${PORT}`)
})