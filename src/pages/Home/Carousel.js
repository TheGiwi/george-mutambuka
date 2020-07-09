import React, { Component } from 'react'
import { extendBaseClass, extend } from '../../utils/classes'
import kitchen from './kitchen.jpg'
import krkSystems from './krk-systems.jpeg'
import ship from './ship.png'
import $ from 'jquery'

export class Carousel extends Component {
  baseClass = 'home__carousel'

  extend = extendBaseClass.bind(this)

  images = [
    {
      src: ship,
      alt: 'Spaceship render',
    },
    {
      src: kitchen,
      alt: 'Kitchen',
    },
    {
      src: krkSystems,
      alt: 'Stereo Render for Krk Systems',
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

  activateCarousel = () => {
    const carousel = $(`.carousel`)
    carousel.carousel('cycle')
  }

  componentDidMount() {
    this.activateCarousel()
  }

  render() {
    return (
      <div className={`${this.baseClass} carousel slide`}>
        <div className={this.innerClass}>{this.renderSlides()}</div>
      </div>
    )
  }
}

export default Carousel
