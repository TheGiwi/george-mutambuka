import React, { Component } from 'react'
import { extendBaseClass, extend } from '../../utils/classes'
import kitchen from './kitchen.jpg'
import krkSystems from './krk-systems.jpeg'
import ship from './ship.png'

export class Carousel extends Component {
  baseClass = 'home__carousel'

  extend = extendBaseClass.bind(this)

  images = [
    {
      src: kitchen,
      alt: 'Kitchen',
    },
    {
      src: krkSystems,
      alt: 'Stereo Render for Krk Systems',
    },
    {
      src: ship,
      alt: 'Spaceship render',
    },
  ]

  innerClass = this.extend('inner')

  slideClass = extend(this.innerClass, 'slide')

  slideContent = extend(this.slideClass, 'content')

  getSlideClasses = (index) => {
    const baseClass = `${this.slideClass} carousel-item`
    if (index === 0) {
      return `${baseClass} active`
    }
    return baseClass
  }

  renderImage = (imageData, index) => (
    <div className={this.getSlideClasses(index)} key={index}>
      <div className={this.slideContent}>
        <img {...imageData} className={extend(this.slideContent, 'image')} />
      </div>
    </div>
  )

  renderSlides = () => this.images.map(this.renderImage)

  render() {
    return (
      <div className={`${this.baseClass} slide`} data-ride="carousel">
        <div className={this.innerClass}>{this.renderSlides()}</div>
      </div>
    )
  }
}

export default Carousel
