export const getClassWithVariant = (variant, baseClass) => {
  if (variant) {
    return `${baseClass} ${baseClass}--${variant}`
  }
  return baseClass
}

export const extend = (block, element) => `${block}__${element}`

export function extendParentClass(childClass) {
  return extend(this.props.parentClass, childClass)
}

export function extendBaseClass(childClass) {
  return extend(this.baseClass, childClass)
}
