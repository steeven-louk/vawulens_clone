import React from 'react'
import Header from '../../components/header/Header'

import './style/style.scss';

const About = () => {
  return (
    
    <> 

      <Header title="About Us" image="./images/header_bg_1.jpg" >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem vero, tenetur nulla, eum molestias animi quos ratione officia voluptas ex et optio sapiente, architecto esse. Repudiandae tenetur odit at.</p>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src="./images/about1.jpg" alt="Our Story Images" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum pariatur molestias praesentium eos in atque ipsum a. Libero atque deleniti corrupti laborum placeat architecto facilis ipsum repellendus quam sequi sapiente distinctio, veniam culpa animi! Ipsa eaque cum obcaecati dicta modi eligendi asperiores similique, accusamus temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat mollitia corporis laborum aliquam natus praesentium, ea, officiis incidunt quidem soluta perferendis rem libero maiores adipisci sed?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita velit esse assumenda, dolore corporis qui temporibus reiciendis facilis rem dolorum blanditiis dicta quam sequi.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-image">
            <img src="./images/about2.jpg" alt="Our vision Images" />
          </div>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum pariatur molestias praesentium eos in atque ipsum a. Libero atque deleniti corrupti laborum placeat architecto facilis ipsum repellendus quam sequi sapiente distinctio, veniam culpa animi! Ipsa eaque cum obcaecati dicta modi eligendi asperiores similique, accusamus temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat mollitia corporis laborum aliquam natus praesentium, ea, officiis incidunt quidem soluta perferendis rem libero maiores adipisci sed?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita velit esse assumenda, dolore corporis qui temporibus reiciendis facilis rem dolorum blanditiis dicta quam sequi.</p>
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src="./images/about3.jpg" alt="Our mission Images" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum pariatur molestias praesentium eos in atque ipsum a. Libero atque deleniti corrupti laborum placeat architecto facilis ipsum repellendus quam sequi sapiente distinctio, veniam culpa animi! Ipsa eaque cum obcaecati dicta modi eligendi asperiores similique, accusamus temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat mollitia corporis laborum aliquam natus praesentium, ea, officiis incidunt quidem soluta perferendis rem libero maiores adipisci sed?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita velit esse assumenda, dolore corporis qui temporibus reiciendis facilis rem dolorum blanditiis dicta quam sequi.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About