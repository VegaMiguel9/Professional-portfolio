import React from 'react'
import weatherApi from '../imgs/weather-api-screenshot.png'
import projectOne from '../imgs/Project-one.png'
import mernBook from '../imgs/mern-book.png'
import todoList from '../imgs/Todo-List.png'
import github from '../imgs/GitHub.png'

function Projects() {
  return (
    <div className='projects' id='Projects'>
        <h1 className='outline'>Projects</h1>
        <div className='proj1'>
            <a href='https://vegamiguel9.github.io/weather-API/'>
                <img className='imgSizeRight' src={weatherApi} alt='weather api website screenshot' />
            </a>
            <div>
                <p> In this website you are able to search for the weather, have the weather show for the following week, and use local storage to save the cities you have searched. To make this website I used HTML, CSS, and JavaScript. I am able to get weather data by using a weather API from the open weather map website. </p>
                <a href='https://github.com/VegaMiguel9/weather-API'>
                    <img className='githubProject' src={github} alt='github logo' />    
                </a>
            </div>
        </div>
        <div className='proj2'>
        <a href='https://cmizelle10.github.io/Project_1/'>
                <img className='imgSizeLeft' src={projectOne} alt='project 1' />
            </a>
            <div>
                <p> In this website you are able to type in a quote from a movie and a picture of the movie with it's title, actors, runtime, and release date will show. This was a group project that myself, and four others made. My main job in this was the CSS, although I also worked on the HTML.  </p>
                <a href='https://github.com/cmizelle10/Project_1'>
                    <img className='githubProject' src={github} alt='github logo' />    
                </a>
            </div>
        </div>
        <div className='proj3'>
            <a href='https://vegamiguel9.github.io/WorkDaySchedule-API-/'>
                <img className='imgSizeRight' src={todoList} alt='todo list' />
            </a> 
            <div>
                <p>This website is a todo list that tracks the time of day and the boxes change colors, green meaning the future, red present, and gray pass. This is done with javascript and moment.js</p>
                <a href='https://github.com/VegaMiguel9/WorkDaySchedule-API-'>
                    <img className='githubProject' src={github} alt='github logo' />
                </a>
            </div>
        </div>
        <div className='proj4'>
            <a href='https://vegamiguel9.github.io/Mern-BookSearch/'>
                <img className='imgSizeLeft' src={mernBook} alt='Mern stack book search website' />
            </a>
            <div>
                <p>This webiste is a mern stack application that uses a book api to search for books related to the title you specify. You can create an account and log into the website, and save books.</p>
                <a href='https://github.com/VegaMiguel9/Mern-BookSearch'>
                    <img className='githubProject' src={github} alt='github logo' />
                </a>    
            </div>
        </div>
    </div>
  )
}

export default Projects;