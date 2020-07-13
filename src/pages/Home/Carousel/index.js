import React, { Component } from 'react'
import { extendBaseClass, extend } from '../../../utils/classes'
import $ from 'jquery'
import { dataTypes } from '../types'
import Slide from './Slide'

export class Carousel extends Component {
  static propTypes = dataTypes

  baseClass = 'home__carousel'

  extend = extendBaseClass.bind(this)

  innerClass = this.extend('inner')

  renderImage = (imageData, index) => (
    <Slide
      {...imageData}
      parentClass={this.innerClass}
      index={index}
      key={index}
    />
  )

  getImages = () => {
    const { ship, krkSystems, kitchen } = this.props
    return [
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
  }

  renderSlides = () => {
    const images = this.getImages()
    return images.map(this.renderImage)
  }

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
