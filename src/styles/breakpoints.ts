const breakpoints = {
  mobile: '768px',
  tablet: '1024px'
}

export const device = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`
}
