import React from 'react'
import myPic from '../imgs/IMG_8420.jpeg'
import linkedin from '../imgs/linkedin.png'
import github from '../imgs/GitHub.png'
import html from '../imgs/HTML5.png'
import css from '../imgs/CSS.png'
import java from '../imgs/JavaScript.png'
import mongo from '../imgs/MongoDB.jpeg'
import sql from '../imgs/SQL.jpeg'
import nosql from '../imgs/NoSQL.jpeg'
import mysql from '../imgs/mysql.png'
import bootstrap from '../imgs/bootstrap.png'
import node from '../imgs/node.png'
import jquery from '../imgs/jquery.png'


function Aboutme() {
  return (
    <div className='aboutme'>
        <div>
            <div className='namePic'>
                <div>
                    <h1 className='outline'>Miguel Rivera Vega</h1>
                    <p>
                        Full Stack Web Developer with a certification from UNC Chapel Hill Coding Bootcamp. Effective at combining creativity and problem solving to develop user-friendly applications. Based in Burlington, NC 📍
                    </p>
                    <div>
                        <a href='https://www.linkedin.com/in/miguel-rivera-vega-27a105266/'>
                            <img className='logo' src={linkedin} alt="linkedin logo" />
                        </a>
                        <a href='https://github.com/VegaMiguel9'>
                            <img className='logo' src={github} alt="github logo" />
                        </a>
                    </div>
                </div>    
                <img className='mypic' src={myPic} alt="Picture of me" />
                
            </div>

            <div className='Tech' id='tech'>
                <h1 className='outline'>Tech Used</h1>
                <div className='techLogos'>
                    <div className='logoMargin'>
                        <img className='html' src={html} alt="html logo" />
                        <img className='css' src={css} alt="css logo" />
                        <img className='java' src={java} alt='javascript logo' />
                        <img className='node' src={node} alt='nodejs logo' />
                        <img className='mongo' src={mongo} alt='mongodb logo' />
                        <img className='sql' src={sql} alt='SQL logo' />
                        <img className='nosql' src={nosql} alt='NoSQL logo' />
                        <img className='mysql' src={mysql} alt='mysql logo' />
                        <img className='bootstrap' src={bootstrap} alt='bootstrap logo' />
                        <img className='jquery' src={jquery} alt='jquery logo' />
                    </div>
                </div>    
            </div>
        </div>

    </div>
  )
}

export default Aboutme;