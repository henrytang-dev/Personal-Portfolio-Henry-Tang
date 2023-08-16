import React from 'react'
import { Link } from 'react-router-dom'

export function About() {

    return (
        <>
            <header className='fixed top-0 left-0 w-screen h-[8rem] z-[100]'>
                <div className='flex flex-row justify-between items-center w-[85%] mt-[10px] ml-auto mr-auto' >
                <h1 className="text-[1.2rem] text-[#90E0EF]">.about()</h1>
                <div className="flex flex-row gap-5 text-[#90E0EF]">
                    <h4><Link to='/'>.am()</Link></h4>
                    <h4><Link to='/about'>.about()</Link></h4>
                    <h4><Link to='/projects'>.projects()</Link></h4>
                    <h4><a href="mailto:htang318@gatech.edu">.email()</a></h4>
                    <a target="_blank" href="https://github.com/henrytang-dev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#90E0EF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/tang-henry">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#90E0EF" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    <a target="_blank" href="https://www.kaggle.com/henrytang05">
                        <svg fill="#90E0EF" viewBox="0 0 24 24" widt="22" height="22" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Kaggle icon</title><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"></path></g></svg>
                    </a>
                </div>
                </div>
            </header>
            <section className="text-white w-screen font-700 flex justify-center items-center pb-[20rem]">
                <div className="mt-[35vh] ml-[20vw] mr-[5vw]">
                    <div className="flex flex-col justify-center w-[60%]">
                        <div className="flex flex-col gap-[1rem] justify-center">
                            <h1 className="text-[64px]"><span className="font-[700]">.about(</span><span className="text-[#0000FF]">Henry</span><span className="font-[700]">)</span></h1>
                            <div className="flex gap-3">
                                <a target="_blank" href="https://github.com/henrytang-dev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#90E0EF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://linkedin.com/in/tang-henry">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#90E0EF" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://www.kaggle.com/henrytang05">
                                    <svg fill="#90E0EF" viewBox="0 0 24 24" widt="22" height="22" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Kaggle icon</title><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"></path></g></svg>
                                </a>
                                <p className="text-[19.2px]">Download my </p>
                                <button className="bg-[#0000FF] px-7 py-1 rounded-[50px] flex justify-center align-center"><p>CV</p>
                                </button>
                            </div>
                            <p className="text-[19.2px]">A highly-motivated fullstack developer and ML enthusiast with a passion for technology and innovation.</p>
                            <p className="text-[19.2px] text-[#90E0EF]">// First-year @ the Georgia Institute of Technology</p>
                        </div>
                    </div>
                    <div className="h-[4rem]"></div>
                    <div className="text-[19.2px] flex flex-col justify-center items-left">
                        <div>
                            <h2 className="text-[#ffffff] mb-[1rem]">// Primary Skills</h2>
                            <div className="grid grid-cols-4 grid-rows-2 h-[18rem] w-full text-[#90E0EF] text-[16px] gap-x-[6rem] gap-y-[2rem]">
                                <p>Java, Python, Javascript, SQL, ReactJS, Spring Boot, PostgreSQL, Git, CSS, HTML</p>
                                <p>Machine Learning, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Scikit-Learn, CNN, LSTM</p>
                                <p>Backend, Spring Boot, Docker, JWT, Spring Security, YAML, NodeJS, RestAPI, CRUD</p>
                                <p>Frontend, ReactJS, ThreeJS, UI/UX, SVG, GSLS, 3D Design, Blender, Spline, Photoshop</p>
                                <p>Technologies, Postman, DBeaver, Github, Blender, Spline, Photoshop</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#ffffff] mb-[1rem]">// Experience</h2>
                            <div className="grid grid-cols-4 text-[16px] grid-rows-1 h-[9rem] text-[#90E0EF] gap-[6rem]">
                                <p><strong className="text-[#0000FF] font-bold">Intern</strong><br />@ General Financial Group, Inc</p>    
                                <p><span className="text-[#0000FF] font-bold">Founder</span><br />@ HTDesigns</p>    
                                <p><span className="text-[#0000FF] font-bold">Center Referee</span><br />@ Georgia Soccer Association</p>    
                            </div> 
                        </div>
                        <div>
                            <h2 className="text-[#ffffff] mb-[1rem]">// Relevant Coursework</h2>
                            <div className="grid h-[5rem] text-[16px] text-[#90E0EF] grid-cols-2 grid-rows-1 gap-x-[6rem]">
                                <p>Taken, Intro to Object Oriented Programming, Linear Algebra, Multivariable Calculus</p>    
                                <p>Current, Data Structures & Algorithms, Discrete Math</p>
                            </div> 
                        </div>
                        <div>
                            <h2 className="text-[#ffffff] mb-[1rem]">// Awards</h2>
                            <div className="grid h-[5rem] text-[16px] text-[#90E0EF] grid-cols-4 grid-rows-1 gap-x-[6rem]">
                                <p>Eagle Scout</p>    
                                <p>National FBLA Business Plan</p>
                                <p>National FBLA Banking & Financial Systems</p>
                            </div> 
                        </div>
                        <div>
                            <h2 className="text-[#ffffff] mb-[1rem]">// Languages</h2>
                            <div className="grid h-[5rem] text-[16px] text-[#90E0EF] grid-cols-3 grid-rows-1">
                                <p><strong className="text-[#0000FF]">en-US</strong> English.fluent()</p>    
                                <p><strong className="text-[#0000FF]">es-US</strong>  Spanish.proficient()</p>    
                                <p><strong className="text-[#0000FF]">zh-CN</strong>  Chinese.proficient()</p>    
                            </div> 
                        </div>
                        <div>
                            <h2 className="text-[#ffffff] mb-[1rem] gap-[6rem]">// Hobbies</h2>
                            <div className="grid h-[5rem] text-[16px] text-[#90E0EF] grid-cols-4 grid-rows-1">
                                <p>Metalworking</p>    
                                <p>Soccer</p>    
                                <p>Guitar</p>    
                                <p>Chess</p>    
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}