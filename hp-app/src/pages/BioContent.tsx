import React from 'react';
import { Link } from 'react-router-dom';
type SupportedLangs = "en";
export default function BioContent(lang?: SupportedLangs){
    switch(lang)
    {
        case "en":
        default: return {
            whoAmI:
                (<div>
                    <h1>Who am I?</h1>
                    <p>
                        I'm a game designer and programmer, but also a hobbyist artist 
                        and writer.
                        <br></br>
                        I started learning programming formally in 2019, but before that
                        I've also had extensive experience with level design in a flash game
                        called <i>Super Mario 63</i>.
                    </p>
                </div>),
            experience:
                (<div>
                    <h1>Experience</h1>
                    
                    <ul>
                        <li>Teaching assistant for an introductory Game Programming course. (2022)</li>
                        <li>Participated in several Game Jams. (For details, see the <Link to='/works'>Works</Link> page.)</li>
                    </ul>
                </div>),
            skillsetTitle:
                (<h1>Skillset</h1>),
            skillset:
                (<div>
                    <h2>Game Engines</h2>
                    <h3>Unity</h3>
                    <p>
                        The engine I'm most experienced with, and the engine that truly got me into game development.
                    </p>
                    <h2>Programming Languages</h2>
                    <h3>C#</h3>
                    <p>
                        The language I call home. I've only done Unity stuff in it, but I've written everything from high-level gameplay code to low-level mesh generation. 
                        I've even done VR with the Oculus SDK. Most of my C# code is in Game Jam entries, and my ability to use 
                        OOP effectively has allowed me to reuse code across Game Jams.
                    </p>
                    <h3>C</h3>
                    <p>
                        The language that formally introduced me to programming. I know how to wrangle raw pointers, 
                        implement the usual algorithms taught in university, and can do a little bit of embedded programming (Arduino).
                    </p>
                    <h3>C++</h3>
                    <p>
                        The language that introduced me to object-oriented programming. I've also done some OpenGL graphics 
                        programming in it before. My biggest C++ project so far is a Qt GUI project, so that probably is saying 
                        something about my C++ abilities. Looking to change that with an Unreal project someday.
                    </p>
                    <h3>Python</h3>
                    <p>
                        The first scripting language I learned. I don't really have Python projects, but I've written Python scripts 
                        a lot as a more maintainable shell script, boosting my productivity.
                    </p>
                    <h3>JavaScript</h3>
                    <p>
                        I know how to use anonymous functions and async, so I'd say I know a lot about the language itself. 
                        JavaScript frameworks, though... I'm still working on learning React. (this portfolio site is built 
                        using React!)
                    </p>
                    <h3>TypeScript</h3>
                    <p>
                        I've used TypeScript to make games in a rather-obscure 2D game engine called Cocos Creator. That probably 
                        means I at least know the syntax well enough, right?
                    </p>
                    <h3>Java</h3>
                    <p>
                        A language I learned after learning C#. (C# is really just Microsoft Java, eh?) I've written multithreaded Java 
                        for a Database Systems course.
                    </p>
                </div>)
        };
    }
}