const { join } = require('path')
const fs = require('fs')

const imageDataExample = [
  {
    title: 'Product Render',
    images: '3D_product_render_001.jpg',
  },
  {
    title: 'Baby Monitor',
    images: 'Dribbble_export_Baby_Monitor.jpg',
  },
  {
    title: 'Exterior House Render',
    images: 'Exterior House_rend-01.JPG',
  },
  {
    title: 'G1 Planet',
    images: `G1_planet_Dribbble.jpg
    G1_planet_e1.png`,
  },
  {
    title: 'Kitchen Render',
    images: `kitchen_rend_mini.jpg
    kitchen_rend_sqr6.jpg
    kitchen_rend_sqr7.jpg
    kitchen_rend026.jpg`,
  },
  {
    title: 'Laptop Concept',
    images: `Laptop_concept-3.png
    Laptop_concept-1.png`,
  },
  {
    title: 'NC Bars',
    images: `NC Bars 004.png
    NC Naturals Soap.png`,
  },
  {
    title: 'Water Tank',
    images: `Prev_004.JPG
    Prev_005.JPG`,
  },
  {
    title: 'Monitor Render',
    images: 'Product_render_monitor.jpg',
  },
  {
    title: 'Panda Render',
    images: `Product_render_panda.jpg`,
  },
  {
    title: 'Product Render',
    images: 'Product_renders_HDD2.jpg',
  },
  {
    title: 'Office',
    images: 'Rend_preview_00.png',
  },
  {
    title: 'Furniture',
    images: 'Render_prev_001.png',
  },
  {
    title: 'KRK Systems',
    images: `Render_SPKR1.JPG
    Render_SPKR2.JPG
    Render_SPKR3.JPG
    Render_SPKR4.JPG
    Render_SPKR5.JPG
    Render_SPKR6.JPG`,
  },
  {
    title: 'Robot Product Render',
    images: 'Robot_Product_render-Walpaper-1.JPG',
  },
  {
    title: 'Stools Render',
    images: `Stools_renders_001.jpg`,
  },
  {
    title: 'Three Rings',
    images: 'three rings_render1.jpg',
  },
]

const getHeader = (title, thumbnail, images) =>
  `---\ntitle: ${title}\nthumbnail: "${thumbnail}"\nimages: ${JSON.stringify(
    images
  )}\n---`

const getImagePath = (name) => join('../images', name)

const getImagesWithPaths = (images) => images.map(getImagePath)

const getImagesListFromString = (list) => list.split(/\n +/)

const getFileData = (title, images) => {
  const imagesList = getImagesListFromString(images)
  const imagesWithPaths = getImagesWithPaths(imagesList)
  const [thumbnail, ...otherImages] = imagesWithPaths
  return getHeader(title, thumbnail, otherImages)
}

const writeFile = ({ title, images }) => {
  const path = `./src/content/${title}.md`
  const fileData = getFileData(title, images)
  fs.writeFileSync(path, fileData)
}

const writeFiles = () => imageDataExample.forEach(writeFile)

writeFiles()
