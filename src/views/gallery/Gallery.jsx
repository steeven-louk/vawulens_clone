import React from 'react'
import Header from '../../components/header/Header';

import './style/style.scss';

const Gallery = () => {

  const galleryLength = 15;
  const images = [];

  for(let i = 1; i<= galleryLength; i++){
    images.push(`./images/gallery${i}.jpg`)
  }



  return (
    <div className='gallery'>
      <Header title="Our Gallery" image='./images/header_bg_3.jpg' >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima
        rem adipisci vero est facere, laudantium, temporibus, veniam asperiores
        molestiae ullam quaerat dolorem libero dolor!
      </Header>

      <section className="gallery">
        <div className=" gallery__container">
          {
            images?.map((images, index) =>{
              return (
                <article key={index}>
                <img src={images} alt={`Gallery Images ${index + 1} `} />
              </article>
              )
            })
          }
        </div>
      </section>
     
    </div>
  )
}

export default Gallery